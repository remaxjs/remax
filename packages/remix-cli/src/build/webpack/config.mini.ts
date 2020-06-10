import fs from 'fs';
import * as path from 'path';
import * as webpack from 'webpack';
import Config from 'webpack-chain';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import VirtualModulesPlugin from 'webpack-virtual-modules';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import WebpackBar from 'webpackbar';
import { Options, Platform } from '@alipay/remix-types';
import { slash } from '@alipay/remix-shared';
import ejs from 'ejs';
import extensions, { moduleMatcher } from '../../extensions';
import getEntries from '../../getEntries';
import * as TurboPages from '../utils/turboPages';
import * as staticCompiler from '../babel/compiler/static';
import appEntry from '../babel/app';
import pageEntry from '../babel/page';
import pageEvent from '../babel/pageEvent';
import appEvent from '../babel/appEvent';
import fixRegeneratorRuntime from '../babel/fixRegeneratorRuntime';
import componentManifest from '../babel/componentManifest';
import * as RemixPlugins from './plugins';
import API from '../../API';
import { cssConfig, addCSSRule, RuleConfig } from './config/css';
import baseConfig from './baseConfig';

function prepare(api: API, options: Options, target: Platform) {
  const meta = api.getMeta();
  const turboPagesEnabled = options.turboPages && options.turboPages.length > 0;

  const stubModules = [Platform.ali]
    .filter(name => target !== name)
    .reduce<string[]>((acc, name) => [...acc, `${name}/esm/api`, `${name}/esm/hostComponents`], []);

  const publicPath = '/';

  return {
    meta,
    turboPagesEnabled,
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
  const config = new Config();

  baseConfig(config, options, target);

  const { meta, turboPagesEnabled, stubModules, publicPath } = prepare(api, options, target);
  const { app, pages } = getEntries(options, api);

  config.entry(app.name).add(app.filename);
  pages.forEach(p => {
    config.entry(p.name).add(p.filename);
  });

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
    cacheGroups: {
      remixVendors: {
        name: 'remix-vendors',
        test: moduleMatcher,
        chunks: 'initial',
        minChunks: 2,
        minSize: 0,
      },
    },
  });
  config.optimization.minimize(false);

  config.module
    .rule('config')
    .pre()
    .test(filename => {
      const { app, pages } = getEntries(options, api);
      if (slash(filename) === app.filename) {
        return true;
      }
      if (pages.find(p => p.filename === slash(filename))) {
        return true;
      }
      return false;
    })
    .use('babel')
    .loader('babel')
    .options({
      babelrc: false,
      configFile: resolveBabelConfig(options),
      usePlugins: [appEntry(app.filename), pageEntry(options, api)],
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
      .test(filename => {
        const { pages } = getEntries(options, api);
        return !!TurboPages.filter(pages, options).find(p => p.filename === slash(filename));
      })
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
      usePlugins: [appEvent(app.filename), pageEvent(options), componentManifest(api, config), fixRegeneratorRuntime()],
      reactPreset: true,
      api,
      compact: process.env.NODE_ENV === 'production',
    });

  config.module.rule('native-component').test(moduleMatcher).use('native-component').loader('nativeComponent').options({
    remixOptions: options,
    api,
  });

  cssConfig(config, options, false);

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

  const pluginTemplate = fs.readFileSync(path.resolve(__dirname, '../../../template/plugin.js.ejs'), 'utf-8');
  const pluginPath = slash('node_modules/@alipay/remix-runtime-plugin.js');
  const virtualModules = new VirtualModulesPlugin({
    [pluginPath]: ejs.render(pluginTemplate, {
      pluginFiles: api.getRuntimePluginFiles(),
    }),
  });
  config.plugin('webpack-virtual-modules').use(virtualModules);

  const publicDirPath = path.join(options.cwd, 'public');
  if (fs.existsSync(publicDirPath)) {
    config
      .plugin('webpack-copy-plugin')
      .use(CopyPlugin, [[{ from: publicDirPath, to: path.join(options.cwd, options.output) }]]);
  }

  config.plugin('webpackbar').use(WebpackBar, [{ name: target }]);
  config.plugin('mini-css-extract-plugin').use(MiniCssExtractPlugin, [{ filename: `[name]${meta.style}` }]);
  config.plugin('remix-optimize-entries-plugin').use(RemixPlugins.OptimizeEntries, [meta]);
  config.plugin('remix-native-files-plugin').use(RemixPlugins.NativeFiles, [options, api]);
  config.plugin('remix-define-plugin').use(RemixPlugins.Define, [options, api]);
  config.plugin('remix-coverage-ignore-plugin').use(RemixPlugins.CoverageIgnore);

  if (options.analyze) {
    config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin);
  }

  const context = {
    config,
    webpack,
    addCSSRule: (ruleConfig: RuleConfig) => {
      addCSSRule(config, options, false, ruleConfig);
    },
  };

  if (typeof options.configWebpack === 'function') {
    options.configWebpack(context);
  }

  api.configWebpack(context);

  return config.toConfig();
}
