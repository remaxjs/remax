import * as path from 'path';
import * as fs from 'fs';
import { Configuration, DefinePlugin } from 'webpack';
import Config from 'webpack-chain';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ProgressBarWebpackPlugin from 'progress-bar-webpack-plugin';
import { RemaxOptions } from '@remax/types';
import VirtualModulesPlugin from 'webpack-virtual-modules';
import * as RemaxPlugins from './plugins';
import ejs from 'ejs';
import { Platform } from '../utils/platform';
import extensions, { moduleMatcher } from '../../extensions';
import getEntries from '../../getEntries';
import getEnvironment from '../utils/env';
import getAppConfig from '../utils/getAppConfig';
import readManifest from '../../readManifest';
import winPath from '../../winPath';
import cssConfig from './config/css';
import baseConfig from './baseConfig';

export const config = new Config();

function prepare(options: RemaxOptions, target: Platform) {
  const entries = getEntries(options, target);
  const entryMap = [entries.app, ...entries.pages].reduce<any>((m, entry) => {
    const ext = path.extname(entry);
    const name = entry.replace(path.join(options.cwd, options.rootDir) + '/', '').replace(new RegExp(`\\${ext}$`), '');
    m[name] = entry;
    return m;
  }, {});
  const env = getEnvironment(options, target);
  const appConfig = getAppConfig(options);
  const publicPath = '/';

  return {
    entries,
    entryMap,
    env,
    appConfig,
    publicPath,
  };
}

export default function webpackConfig(options: RemaxOptions, target: Platform): Configuration {
  baseConfig(config, options, target);

  const { entries, env, appConfig, publicPath } = prepare(options, target);

  config.entry('index').add('./src/remax-entry.js');

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
      compact: process.env.NODE_ENV === 'production' ? true : false,
    });

  cssConfig(config, options, true);

  config.module
    .rule('watch-manifest')
    .test(moduleMatcher)
    .include.add(entries.app)
    .merge(entries.pages)
    .end()
    .use('manifest')
    .loader('manifest');

  config.module
    .rule('image')
    .test(/\.(png|jpe?g|gif|svg)$/i)
    .use('file')
    .loader(require.resolve('file-loader'));

  const entryTemplate = fs.readFileSync(path.resolve(__dirname, '../../../template/entry.js.ejs'), 'utf-8');
  const pages = entries.pages.map(p => {
    const ext = path.extname(p);
    const ROOT = winPath(path.join(options.cwd, options.rootDir)) + '/';
    p = winPath(p);
    return {
      route: p.replace(ROOT, '').replace(new RegExp(`\\${ext}$`), ''),
      path: p.replace(ROOT, './'),
      config: readManifest(p.replace(new RegExp(`\\${ext}$`), '.config'), 'web'),
    };
  });
  const virtualModules = new VirtualModulesPlugin({
    './src/remax-entry.js': ejs.render(entryTemplate, {
      pages,
      appConfig,
    }),
  });

  config.plugin('webpack-virtual-modules').use(virtualModules);

  config.plugin('html-webpack-plugin').use(HtmlWebpackPlugin, [
    {
      template: path.resolve(__dirname, '../../../template/index.html.ejs'),
    },
  ]);

  if (options.progress) {
    config.plugin('progress-bar-webpack-plugin').use(ProgressBarWebpackPlugin);
  }

  config
    .plugin('remax-web-entry-watcher-plugin')
    .use(RemaxPlugins.WebEntryWatcher, [virtualModules, entryTemplate, entries, options]);
  config.plugin('webpack-define-plugin').use(new DefinePlugin(env.stringified));
  config.plugin('mini-css-extract-plugin').use(MiniCssExtractPlugin, [
    {
      filename: process.env.NODE_ENV === 'production' ? '[name].[chunkhash:8].css' : '[name].css',
    },
  ]);
  config.plugin('remax-define-plugin').use(RemaxPlugins.Define, [options, entries]);

  if (typeof options.configWebpack === 'function') {
    options.configWebpack(config);
  }

  return config.toConfig();
}
