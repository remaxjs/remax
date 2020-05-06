import * as path from 'path';
import * as webpack from 'webpack';
import Config from 'webpack-chain';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import WebpackBar from 'webpackbar';
import { Options } from '@remax/types';
import { Platform } from '@remax/types';
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
import winPath from '../../winPath';
import { cssConfig, addCSSRule, RuleConfig } from './config/css';
import baseConfig from './baseConfig';
import fs from 'fs';

export const config = new Config();

function prepare(api: API, options: Options, target: Platform) {
  const meta = api.getMeta();
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
  const stubModules = [Platform.ali, Platform.toutiao, Platform.wechat]
    .filter(name => target !== name)
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

function resolveBabelConfig(options: Options) {
  if (fs.existsSync(path.join(options.cwd, 'babel.config.js'))) {
    return path.join(options.cwd, 'babel.config.js');
  }
  return false;
}

export default function webpackConfig(api: API, options: Options, target: Platform): webpack.Configuration {
  baseConfig(config, options, target);

  const { meta, turboPagesEnabled, entries, entryMap, pageEntries, stubModules, publicPath } = prepare(
    api,
    options,
    target
  );

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
      babelrc: false,
      configFile: resolveBabelConfig(options),
      usePlugins: [app(entries.app), page(pageEntries)],
      reactPreset: false,
    });

  // turbo pages
  if (turboPagesEnabled) {
    // webpack chain 的配置顺序是反过来的
    config.module
      .rule('turbo-page')
      .pre()
      .use('turbo-page-postprocess')
      .loader('babel')
      .options({
        usePlugins: [staticCompiler.postProcess],
        reactPreset: false,
      })
      .end()
      .test(moduleMatcher)
      .use('turbo-page-render')
      .loader('babel')
      .options({
        usePlugins: [staticCompiler.render.bind(null, api)],
        reactPreset: false,
      })
      .end()
      .test(moduleMatcher)
      .include.merge(TurboPages.filter(entries, options))
      .end()
      .use('turbo-page-preprocess')
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
      babelrc: false,
      configFile: resolveBabelConfig(options),
      usePlugins: [appEvent(entries.app), pageEvent(pageEntries), componentManifest(api), fixRegeneratorRuntime()],
      reactPreset: true,
      api,
      compact: process.env.NODE_ENV === 'production',
    });

  config.module.rule('native-component').test(moduleMatcher).use('native-component').loader('nativeComponent').options({
    remaxOptions: options,
    api,
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

  config.module
    .rule('font')
    .test(/\.(ttf|eot|woff|woff2)$/i)
    .use('file')
    .loader(require.resolve('file-loader'));

  config.plugin('webpackbar').use(WebpackBar, [{ name: target }]);

  config.plugin('mini-css-extract-plugin').use(MiniCssExtractPlugin, [{ filename: `[name]${meta.style}` }]);
  config.plugin('remax-optimize-entries-plugin').use(RemaxPlugins.OptimizeEntries, [meta]);
  config.plugin('remax-native-files-plugin').use(RemaxPlugins.NativeFiles, [api, options, entries]);
  config.plugin('remax-define-plugin').use(RemaxPlugins.Define, [options, entries]);
  config.plugin('remax-coverage-ignore-plugin').use(RemaxPlugins.CoverageIgnore);

  if (typeof options.configWebpack === 'function') {
    options.configWebpack({ config, webpack });
  }

  api.configWebpack({
    config,
    webpack,
    addCSSRule: (ruleConfig: RuleConfig) => {
      addCSSRule(config, options, false, ruleConfig);
    },
  });

  return config.toConfig();
}
