const path = require('path');
const CreateFileWebpack = require('create-file-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    'pages/index': './src/pages/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'less-loader',
        ],
      },
    ],
  },
  devtool: 'source-map',

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].wxss',
      chunkFilename: '[id].wxss',
    }),
    new CreateFileWebpack({
      path: './dist',
      fileName: 'app.json',
      content: `{
        "pages": [
          "pages/index"
        ],
        "window": {
          "backgroundColor": "#F6F6F6",
          "backgroundTextStyle": "light",
          "navigationBarBackgroundColor": "#F6F6F6",
          "navigationBarTitleText": "Remax DEMO",
          "navigationBarTextStyle": "black"
        }
      }
      `,
    }),

    new CopyWebpackPlugin([{
      from: '../lib/base.wxml',
      to: './base.wxml',
    }]),
    // TODO：暂时先写死
    new CreateFileWebpack({
      path: './dist',
      fileName: 'pages/index.wxml',
      content: `
      <import src="../base.wxml"/>
<view>
    <template is="REACT_MINI_APP_TPL" data="{{$$REACT_MINI_APP_ROOT}}"/>
</view>
        `,
    }),

    new CreateFileWebpack({
      path: './dist',
      fileName: 'app.js',
      content: `
          `,
    }),

    new CreateFileWebpack({
      path: './dist',
      fileName: 'pages/index.json',
      content: `{
        "navigationBarTitleText": "首页"
      }
          `,
    }),

  ],

  mode: 'development',
};
