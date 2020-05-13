import * as path from 'path';
import * as fs from 'fs';
import * as webpack from 'webpack';
import Config from 'webpack-chain';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebapckBar from 'webpackbar';
import { Options } from '@remax/types';
import VirtualModulesPlugin from 'webpack-virtual-modules';
import * as RemaxPlugins from './plugins';
import ejs from 'ejs';
import { Platform } from '@remax/types';
import extensions, { moduleMatcher } from '../../extensions';
import getEntries from '../../getEntries';
import getAppConfig from '../utils/getAppConfig';
import { cssConfig, addCSSRule, RuleConfig } from './config/css';
import baseConfig from './baseConfig';
import API from '../../API';
import { generatePageRoutesInfo, entryName } from '../utils/web';

function prepare(options: Options) {
  const entries = getEntries(options);
  const appConfig = getAppConfig(options);
  const publicPath = '/';

  return {
    entries,
    appConfig,
    publicPath,
  };
}

export default function webpackConfig(api: API, options: Options): webpack.Configuration {
  const config = new Config();

  baseConfig(config, options, Platform.web);

  const { entries, appConfig, publicPath } = prepare(options);

  config.entry('index').add(entryName(options));

  config.devtool(process.env.NODE_ENV === 'development' ? 'cheap-module-source-map' : false);
  config.output.publicPath(publicPath);
  config.resolve.extensions.merge(extensions.map(ex => `.web${ex}`).concat(extensions));
  config.output.filename(process.env.NODE_ENV === 'production' ? '[name].[chunkhash:8].js' : '[name].js');
  config.optimization.runtimeChunk({
    name: 'runtime',
  });

  config.module
    .rule('js')
    .test(moduleMatcher)
    .exclude.add(/\.ejs/)
    .end()
    .use('babel')
    .loader('babel')
    .options({
      reactPreset: true,
      api,
      compact: process.env.NODE_ENV === 'production',
    });

  cssConfig(config, options, true);

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

  const entryTemplate = fs.readFileSync(path.resolve(__dirname, '../../../template/entry.js.ejs'), 'utf-8');
  const virtualModules = new VirtualModulesPlugin({
    [entryName(options)]: ejs.render(entryTemplate, {
      pages: generatePageRoutesInfo(options, entries.pages),
      appConfig,
    }),
  });

  config.plugin('webpack-virtual-modules').use(virtualModules);

  config.plugin('html-webpack-plugin').use(HtmlWebpackPlugin, [
    {
      template: path.resolve(__dirname, '../../../template/index.html.ejs'),
    },
  ]);

  config.plugin('define-plugin').use(webpack.DefinePlugin, [
    {
      __REMAX_HOST_COMPONENTS__: JSON.stringify({}),
    },
  ]);

  config.plugin('webpackbar').use(WebapckBar, [{ name: 'web' }]);

  config
    .plugin('remax-web-entry-watcher-plugin')
    .use(RemaxPlugins.WebEntryWatcher, [virtualModules, entryTemplate, options]);
  config.plugin('mini-css-extract-plugin').use(MiniCssExtractPlugin, [
    {
      filename: process.env.NODE_ENV === 'production' ? '[name].[chunkhash:8].css' : '[name].css',
    },
  ]);

  if (typeof options.configWebpack === 'function') {
    options.configWebpack({ config, webpack });
  }

  api.configWebpack({
    config,
    webpack,
    addCSSRule: (ruleConfig: RuleConfig) => {
      addCSSRule(config, options, true, ruleConfig);
    },
  });

  return config.toConfig();
}
