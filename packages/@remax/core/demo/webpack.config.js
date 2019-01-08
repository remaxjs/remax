const path = require('path');
const CreateFileWebpack = require('create-file-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const fs = require('fs');

const readJSON = file => JSON.parse(fs.readFileSync(file, 'utf-8'));

function GeneraeWxmlWebpackPlugin() {
  const content = `<import src="../base.wxml"/>
  <view>
      <template is="REMAX_TPL" data="{{$$REMAX_ROOT}}"/>
  </view>`;
  const contentBuffer = Buffer.from(content);

  const apply = (compiler) => {
    const emit = (compilation, cb) => {
      const {
        chunks,
      } = compilation;
      chunks.forEach((item) => {
        compilation.assets[`${item.id}.wxml`] = {
          source: () => content,
          size: () => content.length,
        };
      });

      cb();
    };

    if (compiler.hooks) {
      const plugin = { name: 'GeneraeWxmlWebpackPlugin' };
      compiler.hooks.emit.tapAsync(plugin, emit);
    } else {
      compiler.plugin('emit', emit);
    }
  };

  return {
    apply,
  };
}


module.exports = {
  entry() {
    const {
      pages,
    } = readJSON('./src/app.json');
    const result = {};

    for (const page of pages) {
      result[page] = path.join(process.cwd(), './src/', page, '/index.js');
    }
    return result;
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
    },
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
    new CopyWebpackPlugin([{
      from: '../lib/base.wxml',
      to: './base.wxml',
    }]),
    new CopyWebpackPlugin([{
      from: './src/app.json',
      to: './app.json',
    }]),


    new CreateFileWebpack({
      path: './dist',
      fileName: 'app.js',
      content: '',
    }),


    new GeneraeWxmlWebpackPlugin(),


  ],

  mode: 'development',
};
