import * as path from 'path';
import * as fs from 'fs';
import { Configuration, ProgressPlugin, DefinePlugin } from 'webpack';
import Config from 'webpack-chain';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import pxToUnits from '@remax/postcss-px2units';
import { RemaxOptions } from '@remax/types';
import VirtualModulesPlugin from 'webpack-virtual-modules';
import ejs from 'ejs';
import { Platform } from '../build/platform';
import extensions, { matcher } from '../extensions';
import getEntries from '../getEntries';
import * as styleConfig from '../build/styleConfig';
import alias from '../build/alias';
import getEnvironment from '../build/env';
import pageClass from './pageClass';
import getAppConfig from './getAppConfig';
import readManifest from '../readManifest';

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
  config.output.filename('[name].js');

  config.module
    .rule('compilation')
    .test(matcher)
    .exclude.add(/\.ejs/)
    .end()
    .use('babel')
    .loader('babel')
    .options({
      reactPreset: true,
    });

  const preprocessCssRules = [
    {
      name: 'postcss',
      loader: require.resolve('postcss-loader'),
      options: {
        config: {
          path: styleConfig.resolvePostcssConfig(options),
        },
        plugins: [pxToUnits({ targetUnits: 'rem', divisor: 100 }), pageClass()].filter(Boolean),
      },
    },
    styleConfig.enabled('less') && { name: 'less', loader: require.resolve('less-loader') },
    styleConfig.enabled('node-sass') && { name: 'sass', loader: require.resolve('sass-loader') },
    styleConfig.enabled('stylus') && { name: 'stylus', loader: require.resolve('stylus-loader') },
  ].filter(Boolean) as any[];

  let modulStylesRule = config.module
    .rule('module-styles')
    .test(/\.module\.(css|less|sass|stylus)$/i)
    .use('cssExtract')
    .loader(MiniCssExtractPlugin.loader)
    .end()
    .use('css')
    .loader(require.resolve('css-loader'))
    .options({
      modules: true,
      importLoaders: preprocessCssRules.length,
    })
    .end();

  preprocessCssRules.forEach(rule => {
    modulStylesRule = modulStylesRule
      .use(rule.name)
      .loader(rule.loader)
      .options(rule.options || {})
      .end();
  });

  let styleRule = config.module
    .rule('styles')
    .test(/\.(css|less|sass|stylus)$/i)
    .exclude.add(/\.module\.(css|less|sass|stylus)$/i)
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
    styleRule = styleRule
      .use(rule.name)
      .loader(rule.loader)
      .options(rule.options || {})
      .end();
  });

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
    return {
      route: p.replace(path.join(options.cwd, options.rootDir) + '/', '').replace(new RegExp(`\\${ext}$`), ''),
      path: p.replace(path.join(options.cwd, options.rootDir) + '/', './'),
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
    config.plugin('progress').use(new ProgressPlugin());
  }

  config.plugin('define').use(new DefinePlugin(env.stringified));
  config.plugin('css-extract-plugin').use(MiniCssExtractPlugin, [
    {
      filename: 'index.css',
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
