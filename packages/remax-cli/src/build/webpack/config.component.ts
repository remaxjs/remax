import * as path from 'path';
import * as webpack from 'webpack';
import Config from 'webpack-chain';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import WebpackBar from 'webpackbar';
import { Options } from '@remax/types';
import { Platform } from '@remax/types';
import VirtualModulesPlugin from 'webpack-virtual-modules';
import { slash } from '@remax/shared';
import ejs from 'ejs';
import extensions, { moduleMatcher } from '../../extensions';
import pageEvent from '../babel/pageEvent';
import fixRegeneratorRuntime from '../babel/fixRegeneratorRuntime';
import componentManifest from '../babel/componentManifest';
import * as RemaxPlugins from './plugins';
import API from '../../API';
import { cssConfig, addCSSRule, RuleConfig } from './config/css';
import baseConfig from './baseConfig';
import fs from 'fs';
import componentEntry from '../babel/component';
import { searchJSFile } from '../utils/paths';

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

  const { meta, stubModules, publicPath } = prepare(api, options, target);

  const entry = searchJSFile(path.join(options.cwd, options.rootDir, 'index'));

  config.entry('index').add(entry);

  config.devtool(false);

  config.resolve.extensions.merge(
    extensions
      .map(ext => `.${target}${ext}`)
      .concat(extensions.map(ext => `.mini${ext}`))
      .concat(extensions)
  );
  const componentRuntime = `@remax/${options.target}-component-runtime`;
  config.externals([
    {
      react: `require("${componentRuntime}/modules/react")`,
      '@remax/runtime': `require("${componentRuntime}")`,
      remax: `require("${componentRuntime}")`,
      '/__remax_runtime_options__': `require('./__remax_runtime_options__')`,
    },
    (_, request, callback) => {
      if (/^remax\//i.test(request)) {
        return callback(null, `commonjs ${componentRuntime}/modules/` + request.replace(/^remax\//, ''));
      }
      callback(null, undefined);
    },
  ]);
  config.output.filename('[name].js');
  config.output.globalObject(meta.global);
  config.output.publicPath(publicPath);
  config.optimization.minimize(false);

  config.module
    .rule('config')
    .pre()
    .test(entry)
    .use('babel')
    .loader('babel')
    .options({
      babelrc: false,
      configFile: resolveBabelConfig(options),
      usePlugins: [componentEntry(options)],
      reactPreset: false,
    });

  config.module
    .rule('js')
    .test(moduleMatcher)
    .use('babel')
    .loader('babel')
    .options({
      babelrc: false,
      configFile: resolveBabelConfig(options),
      usePlugins: [pageEvent(options), componentManifest(api, config), fixRegeneratorRuntime()],
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

  const runtimeOptionsTemplate = fs.readFileSync(
    path.resolve(__dirname, '../../../template/component-runtime-options.js.ejs'),
    'utf-8'
  );
  const runtimeOptionsPath = slash('node_modules/@remax/apply-runtime-options.js');
  config.entry('index').prepend('@remax/apply-runtime-options');

  const runtimeOptions = {
    pxToRpx: options.pxToRpx,
    debug: !!process.env.REMAX_DEBUG,
    platform: options.target,
    pluginFiles: api.getRuntimePluginFiles(),
    hostComponents: '[]',
    pageEvents: '{}',
    appEvents: '[]',
  };

  const virtualModules = new VirtualModulesPlugin({
    [runtimeOptionsPath]: ejs.render(runtimeOptionsTemplate, runtimeOptions),
  });
  config.plugin('webpack-virtual-modules').use(virtualModules);

  config.plugin('webpackbar').use(WebpackBar, [{ name: target }]);

  config.plugin('mini-css-extract-plugin').use(MiniCssExtractPlugin, [{ filename: `[name]${meta.style}` }]);
  config.plugin('remax-optimize-entries-plugin').use(RemaxPlugins.OptimizeEntries, [meta]);
  config.plugin('remax-component-asset-plugin').use(RemaxPlugins.ComponentAsset, [options, api]);
  config.plugin('remax-runtime-options-plugin').use(RemaxPlugins.RuntimeOptions, [options, api, true]);
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
