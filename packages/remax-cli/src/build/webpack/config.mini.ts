import * as path from 'path';
import * as webpack from 'webpack';
import Config from 'webpack-chain';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import VirtualModulesPlugin from 'webpack-virtual-modules';
import WebpackBar from 'webpackbar';
import { Options } from '@remax/types';
import { Platform } from '@remax/types';
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
import * as RemaxPlugins from './plugins';
import API from '../../API';
import { cssConfig, addCSSRule, RuleConfig } from './config/css';
import baseConfig from './baseConfig';
import fs from 'fs';
import winPath from '../../winPath';

function prepare(api: API, options: Options, target: Platform) {
  const meta = api.getMeta();
  const turboPagesEnabled = options.turboPages && options.turboPages.length > 0;

  const stubModules = [Platform.ali, Platform.toutiao, Platform.wechat]
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
  const { app, pages } = getEntries(options);

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
      remaxVendors: {
        name: 'remax-vendors',
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
      const { app, pages } = getEntries(options);
      if (winPath(filename) === app.filename) {
        return true;
      }
      if (pages.find(p => p.filename === winPath(filename))) {
        return true;
      }
      return false;
    })
    .use('babel')
    .loader('babel')
    .options({
      babelrc: false,
      configFile: resolveBabelConfig(options),
      usePlugins: [appEntry(app.filename), pageEntry(options)],
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
        const { pages } = getEntries(options);
        return !!TurboPages.filter(pages, options).find(p => p.filename === winPath(filename));
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
    remaxOptions: options,
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
  const pluginPath = winPath('node_modules/@remax/runtime-plugin.js');
  const virtualModules = new VirtualModulesPlugin({
    [pluginPath]: ejs.render(pluginTemplate, {
      pluginFiles: api.getRuntimePluginFiles(),
    }),
  });
  config.plugin('webpack-virtual-modules').use(virtualModules);

  config.plugin('webpackbar').use(WebpackBar, [{ name: target }]);

  config.plugin('mini-css-extract-plugin').use(MiniCssExtractPlugin, [{ filename: `[name]${meta.style}` }]);
  config.plugin('remax-optimize-entries-plugin').use(RemaxPlugins.OptimizeEntries, [meta]);
  config.plugin('remax-native-files-plugin').use(RemaxPlugins.NativeFiles, [api, options]);
  config.plugin('remax-define-plugin').use(RemaxPlugins.Define, [options]);
  config.plugin('remax-coverage-ignore-plugin').use(RemaxPlugins.CoverageIgnore);

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
