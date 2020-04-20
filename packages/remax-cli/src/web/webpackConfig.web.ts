import * as path from 'path';
import * as fs from 'fs';
import { Configuration, DefinePlugin } from 'webpack';
import Config from 'webpack-chain';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ProgressBarWebpackPlugin from 'progress-bar-webpack-plugin';
import { RemaxOptions } from '@remax/types';
import VirtualModulesPlugin from 'webpack-virtual-modules';
import ejs from 'ejs';
import { Platform } from '../build/platform';
import extensions, { matcher } from '../extensions';
import getEntries from '../getEntries';
import alias from '../build/alias';
import getEnvironment from '../build/env';
import getAppConfig from './getAppConfig';
import readManifest from '../readManifest';
import winPath from '../winPath';
import cssConfig from '../build/webpack/config/css';

const config = new Config();

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
  const { entries, env, appConfig, publicPath } = prepare(options, target);

  config.entry('index').add('./src/remax-entry.js');

  config.resolveLoader.modules
    .merge(['node_modules', path.join(__dirname, '../build/webpack/loaders')])
    .end()
    .extensions.merge(['.js', '.ts']);
  config.devtool(process.env.NODE_ENV === 'development' ? 'cheap-module-source-map' : false);
  config.mode(process.env.NODE_ENV as 'development');
  config.context(options.cwd);
  config.output.publicPath(publicPath);
  config.resolve.extensions.merge(extensions.map(ex => `.web${ex}`).concat(extensions));
  config.resolve.alias.merge(alias(options, target));
  config.output.path(path.join(options.cwd, options.output));
  config.output.filename(process.env.NODE_ENV === 'production' ? '[name].[chunkhash:8].js' : '[name].js');
  const runtimeHash = new Date().getTime();
  config.optimization.runtimeChunk({
    name: () => (process.env.NODE_ENV === 'test' ? 'runtime' : `runtime-${runtimeHash}`),
  });

  config.module
    .rule('compilation')
    .test(matcher)
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
    .rule('json')
    .test(/\.json$/)
    .use('json')
    .loader(require.resolve('json-loader'));

  config.module
    .rule('remaxDefineVariables')
    .test(/remax\/esm\/createHostComponent.js/i)
    .use('remax-define')
    .loader('remaxDefine');

  config.module
    .rule('images')
    .test(/\.(png|jpe?g|gif|svg)$/i)
    .use('file')
    .loader(require.resolve('file-loader'));

  const entryTemplate = fs.readFileSync(path.resolve(__dirname, '../../template/entry.js.ejs'), 'utf-8');
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

  config.plugin('virtualModule').use(VirtualModulesPlugin, [
    {
      './src/remax-entry.js': ejs.render(entryTemplate, {
        pages,
        appConfig,
      }),
    },
  ]);

  config.plugin('html').use(HtmlWebpackPlugin, [
    {
      template: path.resolve(__dirname, '../../template/index.html.ejs'),
    },
  ]);

  if (options.progress) {
    config.plugin('progress').use(ProgressBarWebpackPlugin);
  }

  config.plugin('define').use(new DefinePlugin(env.stringified));
  config.plugin('css-extract-plugin').use(MiniCssExtractPlugin, [
    {
      filename: process.env.NODE_ENV === 'production' ? '[name].[chunkhash:8].css' : '[name].css',
    },
  ]);

  if (process.env.NODE_ENV === 'production') {
    config.plugin('clean').use(new CleanWebpackPlugin() as any);
  }

  if (typeof options.configWebpack === 'function') {
    options.configWebpack(config);
  }

  return config.toConfig();
}
