import * as path from 'path';
import * as fs from 'fs';
import { camelCase } from 'lodash';
import { Configuration, ProgressPlugin, DefinePlugin } from 'webpack';
import Config from 'webpack-chain';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import pxToUnits from '@remax/postcss-px2units';
import { RemaxOptions } from 'remax-types';
import VirtualModulesPlugin from 'webpack-virtual-modules';
import ejs from 'ejs';
import { Platform } from '../build/platform';
import extensions, { matcher } from '../extensions';
import getEntries from '../getEntries';
import * as styleConfig from '../build/styleConfig';
import alias from '../build/alias';
import getEnvironment from '../build/env';
import pageClass from './pageClass';

const config = new Config();

function useLoader(id: string) {
  try {
    const loaderPath = path.join(__dirname, '../build/webpack/loaders', camelCase(id) + '.js');
    if (fs.existsSync(loaderPath)) {
      return loaderPath;
    }
  } catch {
    // ignore
  }

  return require.resolve(id + '-loader');
}

function prepare(options: RemaxOptions, target: Platform) {
  const entries = getEntries(options, target);
  const entryMap = [entries.app, ...entries.pages].reduce<any>((m, entry) => {
    const ext = path.extname(entry);
    const name = entry.replace(path.join(options.cwd, options.rootDir) + '/', '').replace(new RegExp(`${ext}$`), '');
    m[name] = entry;
    return m;
  }, {});
  const env = getEnvironment(options, target);

  return {
    entries,
    entryMap,
    env,
  };
}

export default function webpackConfig(options: RemaxOptions, target: Platform): Configuration {
  const { entries, env } = prepare(options, target);

  config.entry('index').add('./src/remax-entry.js');

  config.devtool(process.env.NODE_ENV === 'development' ? 'cheap-module-source-map' : false);
  config.mode(process.env.NODE_ENV as 'development');
  config.context(options.cwd);
  config.resolve.extensions.merge(extensions.map(ex => `.web${ex}`).concat(extensions));
  config.resolve.alias.merge(alias(options));
  config.output.path(path.join(options.cwd, options.output));
  config.output.filename('[name].js');

  config.module
    .rule('compilation')
    .test(matcher)
    .exclude.add(/\.ejs/)
    .end()
    .use('babel')
    .loader(useLoader('babel'))
    .options({
      reactPreset: true,
    });

  const preprocessCssRules = [
    {
      name: 'postcss',
      loader: useLoader('postcss'),
      options: {
        config: {
          path: styleConfig.resolvePostcssConfig(options),
        },
        plugins: [pxToUnits({ targetUnits: 'rem', divisor: 100 }), pageClass()].filter(Boolean),
      },
    },
    styleConfig.enabled('less') && { name: 'less', loader: useLoader('less') },
    styleConfig.enabled('node-sass') && { name: 'sass', loader: useLoader('sass') },
    styleConfig.enabled('stylus') && { name: 'stylus', loader: useLoader('stylus') },
  ].filter(Boolean) as any[];

  let modulStylesRule = config.module
    .rule('module-styles')
    .test(/\.module\.(css|less|sass|stylus)$/i)
    .use('cssExtract')
    .loader(MiniCssExtractPlugin.loader)
    .end()
    .use('css')
    .loader(useLoader('css'))
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
    .loader(useLoader('css'))
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
    .loader(useLoader('json'));

  config.module
    .rule('remaxDefineVariables')
    .test(/remax\/esm\/createHostComponent.js/i)
    .use('remax-define')
    .loader(useLoader('remax-define'));

  config.module
    .rule('images')
    .test(/\.(png|jpe?g|gif|svg)$/i)
    .use('file')
    .loader(useLoader('file'));

  const entryTemplate = fs.readFileSync(path.resolve(__dirname, '../../template/entry.js.ejs'), 'utf-8');
  config.plugin('virtualModule').use(VirtualModulesPlugin, [
    {
      './src/remax-entry.js': ejs.render(entryTemplate, {
        pages: entries.pages,
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
