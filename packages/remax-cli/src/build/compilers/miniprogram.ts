import autoprefixer from 'autoprefixer';
import CaseSensitivePathsWebpackPlugin from 'case-sensitive-paths-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import px2Units from 'postcss-px2units';
import ProgressBarWebpackPlugin from 'progress-bar-webpack-plugin';
import webpack, { Compiler, Stats } from 'webpack';
import FunctionModulePlugin from 'webpack/lib/FunctionModulePlugin';
import LoaderTargetPlugin from 'webpack/lib/LoaderTargetPlugin';
import NodeSourcePlugin from 'webpack/lib/node/NodeSourcePlugin';
import JsonpTemplatePlugin from 'webpack/lib/web/JsonpTemplatePlugin';
import log from 'npmlog';

import { processEntry } from '../webpack/loaders/mp-render-loader';
import MpRuntimeWebpackPlugin from '../webpack/plugins/mp-bootstrap-webpack-plugin';
import getExtensions from '../utils/getExtensions';
import { CompileOptions, PlatformGlobal } from '../../types';

export default async function compilerMini(options: CompileOptions): Promise<void> {
  const {
    cwd = process.cwd(),
    sourceDir = 'src',
    mode = 'development',
    watch = false,
    target = 'wechat',
    entry,
    homepage,
  } = options || {};

  process.env.NODE_ENV = mode;
  process.env.PLATFORM = target;
  process.env.REMAX_PLATFORM = target; // remax-one 依赖此环境变量

  log.warn('[remax-one]', require.resolve('remax-one'));
  log.warn('[remax-one]', require('remax-one/package.json').version);
  const hostComponents = require('remax-one/cjs/hostComponents/node').default;
  const hostComponentsJson: { [key: string]: object } = {};
  hostComponents.forEach((value: object, key: string) => {
    hostComponentsJson[key] = value;
  });
  const webpackPlugins = [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      __REMAX_DEBUG__: JSON.stringify(true),
      __REMAX_PX2RPX__: JSON.stringify(true),
      __REMAX_HOST_COMPONENTS__: JSON.stringify(hostComponentsJson),
    }),
    // TODO 根据平台修改后缀
    new MiniCssExtractPlugin({ filename: '[name].wxss' }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new ProgressBarWebpackPlugin(),
    new CaseSensitivePathsWebpackPlugin(),
    watch && new webpack.NoEmitOnErrorsPlugin(),
    new MpRuntimeWebpackPlugin({
      cwd,
      sourceDir,
      mode,
      watch,
      target,
      entry,
      homepage,
    }),
  ];
  const webpackConfig = {
    mode,
    devtool: (mode === 'development' ? 'inline-source-map' : false) as any,
    context: cwd,
    watch,
    entry: processEntry(entry),
    output: {
      path: path.join(cwd, 'dist', target),
      publicPath: '/',
      filename: '[name].js',
      chunkFilename: '[name].js',
      globalObject: PlatformGlobal[target] as string,
    },
    resolve: {
      extensions: getExtensions(target),
      alias: {
        '@': path.resolve(cwd, sourceDir),
      },
    },

    target: function(compiler: Compiler) {
      const { options } = compiler;
      new JsonpTemplatePlugin().apply(compiler);
      new FunctionModulePlugin(options.output).apply(compiler);
      new NodeSourcePlugin(options.node).apply(compiler);
      new LoaderTargetPlugin('node').apply(compiler);
    },

    optimization: {
      usedExports: true,
      minimize: mode === 'production',
      runtimeChunk: { name: 'runtime' },
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          // 项目内公用的
          common: { name: 'common', minChunks: 2, priority: 1 },
          // 依赖中公用的
          vendors: {
            name: 'vendors',
            minChunks: 2,
            test: (module: { resource: string }) => {
              return /[\\/]node_modules[\\/]/.test(module.resource);
            },
            priority: 10,
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.(less|css)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: require.resolve('css-loader'),
              options: {
                sourceMap: mode === 'development',
                importLoaders: 1,
                modules: {
                  localIdentName: '[name]_[local]__[hash:base64:4]',
                },
              },
            },
            {
              loader: require.resolve('postcss-loader'),
              options: {
                ident: 'postcss',
                plugins: [
                  autoprefixer({ overrideBrowserslist: '>0.25%, not dead' }),
                  px2Units({
                    divisor: 1,
                    multiple: 1,
                    decimalPlaces: 2,
                    targetUnits: 'rpx',
                    comment: 'no',
                  }),
                ],
              },
            },
            {
              loader: require.resolve('less-loader'),
              options: {
                sourceMap: mode === 'development',
              },
            },
          ],
        },
        {
          test: /\.(ts|js)x?$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: require.resolve('babel-loader'),
              options: {
                presets: [require.resolve('babel-preset-face')],
              },
            },
            {
              loader: require.resolve('./loaders/mp-render-loader'),
            },
          ],
        },
      ],
    },
    plugins: webpackPlugins.filter(Boolean),
  };

  const compiler = webpack(webpackConfig as webpack.Configuration);

  if (watch) {
    return new Promise(() => {
      log.info('[compiler]', target, 'watching...');
      compiler.watch({ aggregateTimeout: 300 }, (err: any, stats: Stats) => {
        console.log(stats.toString({ colors: true, modules: false }));
      });
    });
  } else {
    return new Promise((resolve, reject) => {
      compiler.run((error: any, stats: Stats) => {
        if (error) {
          reject(error);
        } else {
          console.log(stats.toString({ colors: true, modules: false }));
          resolve();
        }
      });
    });
  }
}
