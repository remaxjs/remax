import fs from 'fs';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import BaseWxmlWebpackPlugin from './plugins/BaseWxmlWebpackPlugin';
import PageWxmlWebpackPlugin from './plugins/PageWxmlWebpackPlugin';
import webpack = require('webpack');

interface AppConfig {
  pages: string[];
}

/**
 * get pages entry from {project}/src/app.json
 */
function getDefaultEntry(): webpack.Entry {
  const cwd = process.cwd();
  const appConfigPath: string = path.join(cwd, 'src', 'app.json');
  if (!fs.existsSync(appConfigPath)) {
    throw new Error(`${appConfigPath} is not found`);
  }
  const appConfig: AppConfig = JSON.parse(fs.readFileSync(appConfigPath, 'utf-8'));
  const { pages } = appConfig;
  if (!pages || pages.length === 0) {
    throw new Error('app.json `pages` field should not be undefined or empty object');
  }

  const defaultEntry = {
    'app': path.join(cwd, 'src', 'app.js'),
  };
  const entry = pages.reduce((ret, page) => {
    return {
      ...ret,
      [page]: path.join(cwd, 'src', page, 'index.js'),
    };
  }, defaultEntry)

  return entry;
}

/**
 * Get CopyWebpackPlugin config
 * copy remax project app.js if is exists
 */
function getCopyWebpackPluginConfig() {
  const config = [{ from: 'src/app.json', to: 'app.json' }];

  // TODO: copy page's **.json

  return config;
}

/**
 * Common webpack configration
 */
export default {
  entry: getDefaultEntry(),
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].js',
    globalObject: 'global',
  },
  resolve: {
    alias: {
      // Maybe we should remove the react dependency in the remax project
      react: path.resolve(process.cwd(), 'node_modules', 'react'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            plugins: [
              require.resolve('@remax/babel-plugin-remax-static-info'),
              require.resolve('@babel/plugin-proposal-class-properties'),
            ],
            presets: [
              require.resolve('@babel/preset-env'),
              require.resolve('@babel/preset-react'),
            ],
          },
        },
      },
      {
        test: /.(le|c)ss$/,
        include: [/\.module\./],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: true,
              localIdentName: '[local]-[hash:base64:5]',
            },
          },
          require.resolve('less-loader'),
        ],
      },
      {
        test: /.(le|c)ss$/,
        exclude: [/\.module\./],
        use: [
          MiniCssExtractPlugin.loader,
          require.resolve('css-loader'),
          require.resolve('less-loader'),
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].wxss',
    }),
    new CopyWebpackPlugin(getCopyWebpackPluginConfig()),

    new PageWxmlWebpackPlugin(),
    new BaseWxmlWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'app',
          test: /\.(less|css|js)$/,
          chunks: 'all',
          enforce: true,
          reuseExistingChunk: true,
        },
      }
    }
  }
};
