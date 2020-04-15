import * as path from 'path';
import { Configuration, ProgressPlugin, DefinePlugin } from 'webpack';
import Config from 'webpack-chain';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import pxToUnits from '@remax/postcss-px2units';
import { RemaxOptions } from 'remax-types';
import { Platform } from './platform';
import extensions, { matcher } from '../extensions';
import getEntries from '../getEntries';
import * as styleConfig from './styleConfig';
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
  const stubModules = platform.mini
    .filter(name => API.adapter.target !== name)
    .reduce<string[]>(
      (acc, name) => [...acc, `${name}/esm/api`, `${name}/esm/hostComponents`],
      [],
    );

  const env = getEnvironment(options, target);
  const publicPath = '/';

  return {
    meta,
    turboPagesEnabled,
    entries,
    entryMap,
    stubModules,
    env,
    publicPath,
  };
}

export default function webpackConfig(
  options: RemaxOptions,
  target: Platform,
): Configuration {
  const {
    meta,
    turboPagesEnabled,
    entries,
    entryMap,
    stubModules,
    env,
    publicPath,
  } = prepare(options, target);

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
      .concat(extensions),
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

  config.module
    .rule('createAppOrPageConfig')
    .pre()
    .test(matcher)
    .include.add(entries.app)
    .merge(entries.pages)
    .end()
    .use('babel')
    .loader('babel')
    .options({
      usePlugins: [app(entries.app), page(entries.pages)],
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
      .test(matcher)
      .use('tuboPagesRender')
      .loader('babel')
      .options({
        usePlugins: [staticCompiler.render],
        reactPreset: false,
      })
      .end()
      .test(matcher)
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
    .test(matcher)
    .use('babel')
    .loader('babel')
    .options({
      usePlugins: [componentManifest(options), fixRegeneratorRuntime()],
      reactPreset: true,
    });

  config.module
    .rule('nativeComponent')
    .test(matcher)
    .use('nativeComponent')
    .loader('nativeComponent')
    .options({
      remaxOptions: options,
    });

  const cssModuleConfig = styleConfig.getCssModuleConfig(options.cssModules);
  const preprocessCssRules = [
    {
      name: 'postcss',
      loader: require.resolve('postcss-loader'),
      options: {
        plugins: [options.pxToRpx && pxToUnits()].filter(Boolean),
      },
    },
    styleConfig.enabled('less') && {
      name: 'less',
      loader: require.resolve('less-loader'),
    },
    styleConfig.enabled('node-sass') && {
      name: 'sass',
      loader: require.resolve('sass-loader'),
    },
    styleConfig.enabled('stylus') && {
      name: 'stylus',
      loader: require.resolve('stylus-loader'),
    },
  ].filter(Boolean) as any[];

  let stylesRule = config.module
    .rule('styles')
    .test(styleConfig.styleMatcher)
    .exclude.add(
      cssModuleConfig.enabled ? cssModuleConfig.cssModuleMatcher : '',
    )
    .end()
    .use('cssExtract')
    .loader(MiniCssExtractPlugin.loader)
    .end()
    .use('css')
    .loader(require.resolve('css-loader'))
    .options({
      importLoaders: preprocessCssRules.length,
    })
    .end();

  preprocessCssRules.forEach(rule => {
    stylesRule = stylesRule
      .use(rule.name)
      .loader(rule.loader)
      .options(rule.options || {})
      .end();
  });

  // Css Modules
  if (cssModuleConfig.enabled) {
    stylesRule = config.module
      .rule('cssModulesStyles')
      .test(cssModuleConfig.cssModuleMatcher)
      .include.add(cssModuleConfig.cssModuleMatcher)
      .end()
      .use(MiniCssExtractPlugin.loader)
      .loader(MiniCssExtractPlugin.loader)
      .end()
      .use('css')
      .loader(require.resolve('css-loader'))
      .options({
        importLoaders: preprocessCssRules.length,
        modules: true,
      })
      .end();

    preprocessCssRules.forEach(rule => {
      stylesRule = stylesRule
        .use(rule.name)
        .loader(rule.loader)
        .options(rule.options || {})
        .end();
    });
  }

  config.module
    .rule('watchManifest')
    .test(matcher)
    .include.add(entries.app)
    .merge(entries.pages)
    .end()
    .use('manifest')
    .loader('manifest');

  config.module
    .rule('stub')
    .test(matcher)
    .use('stub')
    .loader('stub')
    .options({
      modules: stubModules,
    });

  config.module
    .rule('json')
    .test(/\.json$/)
    .use('json')
    .loader(require.resolve('json-loader'))
    .options({
      modules: stubModules,
    });

  config.module
    .rule('remaxDefineVariables')
    .test(/createHostComponent.js/i)
    .use('remax-define')
    .loader('remaxDefine');

  config.module
    .rule('images')
    .test(/\.(png|jpe?g|gif|svg)$/i)
    .use('file')
    .loader(require.resolve('file-loader'));

  if (options.progress) {
    config.plugin('progress').use(ProgressPlugin);
  }

  config.plugin('define').use(DefinePlugin, [env.stringified]);
  config
    .plugin('cssExtract')
    .use(MiniCssExtractPlugin, [{ filename: `[name]${meta.style}` }]);
  config.plugin('optimizeEntries').use(RemaxPlugins.OptimizeEntries, [meta]);
  config
    .plugin('nativeFiles')
    .use(RemaxPlugins.NativeFiles, [options, entries]);

  if (process.env.NODE_ENV === 'production') {
    config.plugin('clean').use(CleanWebpackPlugin);
  }

  if (typeof options.configWebpack === 'function') {
    options.configWebpack(config);
  }

  return config.toConfig();
}
