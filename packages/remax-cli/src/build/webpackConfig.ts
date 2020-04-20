import * as path from 'path';
import { Configuration, DefinePlugin } from 'webpack';
import Config from 'webpack-chain';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import ProgressBarWebpackPlugin from 'progress-bar-webpack-plugin';
import { RemaxOptions } from '@remax/types';
import { Platform } from './platform';
import extensions, { moduleMatcher } from '../extensions';
import getEntries from '../getEntries';
import * as TurboPages from './turboPages';
import * as staticCompiler from './babel/compiler/static';
import app from './babel/app';
import page from './babel/page';
import fixRegeneratorRuntime from './babel/fixRegeneratorRuntime';
import componentManifest from './babel/componentManifest';
import * as RemaxPlugins from './webpack/plugins';
import alias from './alias';
import API from '../API';
import getEnvironment from './env';
import * as platform from './platform';
import winPath from '../winPath';
import cssConfig from './webpack/config/css';

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

  const env = getEnvironment(options, target);
  const publicPath = '/';

  return {
    meta,
    turboPagesEnabled,
    entries,
    entryMap,
    pageEntries,
    stubModules,
    env,
    publicPath,
  };
}

export default function webpackConfig(options: RemaxOptions, target: Platform): Configuration {
  const { meta, turboPagesEnabled, entries, entryMap, pageEntries, stubModules, env, publicPath } = prepare(
    options,
    target
  );

  for (const entry in entryMap) {
    config.entry(entry).add(entryMap[entry]);
  }

  config.devtool(false);
  config.mode((process.env.NODE_ENV as any) || 'development');
  config.context(options.cwd);
  config.resolveLoader.modules
    .merge(['node_modules', path.join(__dirname, './webpack/loaders')])
    .end()
    .extensions.merge(['.js', '.ts']);
  config.resolve.extensions.merge(
    extensions
      .map(ext => `.${target}${ext}`)
      .concat(extensions.map(ext => `.mini${ext}`))
      .concat(extensions)
  );
  config.resolve.extensions.merge(extensions);
  config.resolve.alias.merge(alias(options, target));
  config.output.path(path.join(options.cwd, options.output));
  config.output.filename('[name].js');
  config.output.globalObject(meta.global);
  config.output.publicPath(publicPath);
  config.optimization.runtimeChunk({ name: 'runtime' });
  config.optimization.splitChunks({
    chunks: 'initial',
  });
  config.optimization.minimize(false);

  config.module
    .rule('createAppOrPageConfig')
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
      .rule('staticCompilation')
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
    .rule('compilation')
    .test(moduleMatcher)
    .use('babel')
    .loader('babel')
    .options({
      usePlugins: [componentManifest(options), fixRegeneratorRuntime()],
      reactPreset: true,
      compact: process.env.NODE_ENV === 'production' ? true : false,
    });

  config.module
    .rule('nativeComponent')
    .test(moduleMatcher)
    .use('nativeComponent')
    .loader('nativeComponent')
    .options({
      remaxOptions: options,
    });

  cssConfig(config, options, false);

  config.module
    .rule('watchManifest')
    .test(moduleMatcher)
    .include.add(entries.app)
    .merge(entries.pages)
    .end()
    .use('manifest')
    .loader('manifest');

  config.module
    .rule('stub')
    .test(moduleMatcher)
    .use('stub')
    .loader('stub')
    .options({
      modules: stubModules,
    });

  config.module
    .rule('images')
    .test(/\.(png|jpe?g|gif|svg)$/i)
    .use('file')
    .loader(require.resolve('file-loader'));

  if (options.progress) {
    config.plugin('progress').use(ProgressBarWebpackPlugin);
  }

  config.plugin('define').use(DefinePlugin, [env.stringified]);
  config.plugin('cssExtract').use(MiniCssExtractPlugin, [{ filename: `[name]${meta.style}` }]);
  config.plugin('optimizeEntries').use(RemaxPlugins.OptimizeEntries, [meta]);
  config.plugin('nativeFiles').use(RemaxPlugins.NativeFiles, [options, entries]);
  config.plugin('remaxDefine').use(RemaxPlugins.Define, [options, entries]);
  config.plugin('coverage-ignore').use(RemaxPlugins.CoverageIgnore);

  if (process.env.NODE_ENV === 'production') {
    config.plugin('clean').use(CleanWebpackPlugin);
  }

  if (typeof options.configWebpack === 'function') {
    options.configWebpack(config);
  }

  return config.toConfig();
}
