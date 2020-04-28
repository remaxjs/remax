import * as path from 'path';
import { Configuration } from 'webpack';
import Config from 'webpack-chain';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import WebpackBar from 'webpackbar';
import { RemaxOptions } from '@remax/types';
import { Platform } from '../utils/platform';
import extensions, { moduleMatcher } from '../../extensions';
import getEntries from '../../getEntries';
import * as TurboPages from '../utils/turboPages';
import * as staticCompiler from '../babel/compiler/static';
import app from '../babel/app';
import page from '../babel/page';
import pageEvent from '../babel/pageEvent';
import appEvent from '../babel/appEvent';
import fixRegeneratorRuntime from '../babel/fixRegeneratorRuntime';
import componentManifest from '../babel/componentManifest';
import * as RemaxPlugins from './plugins';
import API from '../../API';
import * as platform from '../utils/platform';
import winPath from '../../winPath';
import cssConfig from './config/css';
import baseConfig from './baseConfig';

export const config = new Config();

function prepare(options: RemaxOptions, target: Platform) {
  const meta = API.getMeta();
  const turboPagesEnabled = options.turboPages && options.turboPages.length > 0;
  const entries = getEntries(options, target);
  const entryMap = [entries.app, ...entries.pages].reduce<any>((m, entry) => {
    const ext = path.extname(entry);
    const name = winPath(entry)
      .replace(winPath(path.join(options.cwd, options.rootDir)) + '/', '')
      .replace(new RegExp(`\\${ext}$`), '');
    m[name] = entry;
    return m;
  }, {});
  const pageEntries = entries.pages.reduce<any[]>((m, entry) => {
    const ext = path.extname(entry);
    const name = winPath(entry)
      .replace(winPath(path.join(options.cwd, options.rootDir)) + '/', '')
      .replace(new RegExp(`\\${ext}$`), '');
    return m.concat([{ key: name, path: entry }]);
  }, []);
  const stubModules = platform.mini
    .filter(name => API.adapter.target !== name)
    .reduce<string[]>((acc, name) => [...acc, `${name}/esm/api`, `${name}/esm/hostComponents`], []);

  const publicPath = '/';

  return {
    meta,
    turboPagesEnabled,
    entries,
    entryMap,
    pageEntries,
    stubModules,
    publicPath,
  };
}

export default function webpackConfig(options: RemaxOptions, target: Platform): Configuration {
  baseConfig(config, options, target);

  const { meta, turboPagesEnabled, entries, entryMap, pageEntries, stubModules, publicPath } = prepare(options, target);

  for (const entry in entryMap) {
    config.entry(entry).add(entryMap[entry]);
  }

  config.devtool(false);

  config.resolve.extensions.merge(
    extensions
      .map(ext => `.${target}${ext}`)
      .concat(extensions.map(ext => `.mini${ext}`))
      .concat(extensions)
  );
  config.output.filename('[name].js');
  config.output.globalObject(meta.global);
  config.output.publicPath(publicPath);
  config.optimization.runtimeChunk({ name: 'runtime' });
  config.optimization.splitChunks({
    chunks: 'initial',
  });
  config.optimization.minimize(false);

  config.module
    .rule('config')
    .pre()
    .test(moduleMatcher)
    .include.add(entries.app)
    .merge(entries.pages)
    .end()
    .use('babel')
    .loader('babel')
    .options({
      usePlugins: [app(entries.app), page(pageEntries)],
      reactPreset: false,
    });

  // turbo pages
  if (turboPagesEnabled) {
    // webpack chain 的配置顺序是反过来的
    config.module
      .rule('turbo-page')
      .pre()
      .use('tuboPagesPostProcess')
      .loader('babel')
      .options({
        usePlugins: [staticCompiler.postProcess],
        reactPreset: false,
      })
      .end()
      .test(moduleMatcher)
      .use('tuboPagesRender')
      .loader('babel')
      .options({
        usePlugins: [staticCompiler.render],
        reactPreset: false,
      })
      .end()
      .test(moduleMatcher)
      .include.merge(TurboPages.filter(entries, options))
      .end()
      .use('tuboPagesPreprocess')
      .loader('babel')
      .options({
        usePlugins: [staticCompiler.preprocess],
        reactPreset: false,
      });
  }

  config.module
    .rule('js')
    .test(moduleMatcher)
    .use('babel')
    .loader('babel')
    .options({
      usePlugins: [appEvent(entries.app), pageEvent(pageEntries), componentManifest(options), fixRegeneratorRuntime()],
      reactPreset: true,
      compact: process.env.NODE_ENV === 'production',
    });

  config.module.rule('native-component').test(moduleMatcher).use('nativeComponent').loader('nativeComponent').options({
    remaxOptions: options,
  });

  cssConfig(config, options, false);

  config.module
    .rule('watch-manifest')
    .test(moduleMatcher)
    .include.add(entries.app)
    .merge(entries.pages)
    .end()
    .use('manifest')
    .loader('manifest');

  config.module.rule('stub').test(moduleMatcher).use('stub').loader('stub').options({
    modules: stubModules,
  });

  config.module
    .rule('image')
    .test(/\.(png|jpe?g|gif|svg)$/i)
    .use('file')
    .loader(require.resolve('file-loader'));

  config.plugin('webpackbar').use(WebpackBar, [{ name: target }]);

  config.plugin('mini-css-extract-plugin').use(MiniCssExtractPlugin, [{ filename: `[name]${meta.style}` }]);
  config.plugin('remax-optimize-entries-plugin').use(RemaxPlugins.OptimizeEntries, [meta]);
  config.plugin('remax-native-files-plugin').use(RemaxPlugins.NativeFiles, [options, entries]);
  config.plugin('remax-define-plugin').use(RemaxPlugins.Define, [options, entries]);
  config.plugin('remax-coverage-ignore-plugin').use(RemaxPlugins.CoverageIgnore);

  if (typeof options.configWebpack === 'function') {
    options.configWebpack({ config });
  }

  return config.toConfig();
}
