const path = require('path');
const CreateFileWebpack = require('create-file-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const fs = require('fs');
const babelPluginComponentStaticInfo = require('@remax/babel-plugin-remax-static-info');
const ejs = require('ejs');

const thisNodeMoudles = name => require.resolve(name);

const getLocalIdent = require('css-loader/dist/utils.js').getLocalIdent;

const cssLoader = thisNodeMoudles('css-loader');
const babelLoader = thisNodeMoudles('babel-loader');
const lessLoader = thisNodeMoudles('less-loader');

const babelPresetEnv = thisNodeMoudles('@babel/preset-env');
const babelPresetReact = thisNodeMoudles('@babel/preset-react');
const babelPluginComponentStaticInfoPath = thisNodeMoudles('@remax/babel-plugin-remax-static-info');

const readJSON = file => JSON.parse(fs.readFileSync(file, 'utf-8'));

function GeneraeBaseWxmlWebpackPlugin() {
  const apply = (compiler) => {
    const emit = (compilation, cb) => {
      const {
        components,
      } = babelPluginComponentStaticInfo.getStaticInfo();

      const tplPath = path.resolve('./node_modules/@remax/core/src/tpl/base.wxml.ejs');

      ejs.renderFile(tplPath, {
        componentData: components,
      }, {
      }, (err, str) => {
        if (err) {
          console.error(err); // eslint-disable-line
        } else {
          compilation.assets['base.wxml'] = {
            source: () => str,
            size: () => str.length,
          };

          cb();
        }
      });
    };

    if (compiler.hooks) {
      const plugin = { name: 'GeneraeBaseWxmlWebpackPlugin' };
      compiler.hooks.emit.tapAsync(plugin, emit);
    } else {
      compiler.plugin('emit', emit);
    }
  };

  return {
    apply,
  };
}


function GeneraeWxmlWebpackPlugin() {
  const content = `<import src="../base.wxml"/>
  <view>
      <template is="REMAX_TPL" data="{{$$REMAX_ROOT}}"/>
  </view>`;
  const contentBuffer = Buffer.from(content); // eslint-disable-line

  const apply = (compiler) => {
    const emit = (compilation, cb) => {
      const {
        chunks,
      } = compilation;
      chunks.forEach((item) => {
        compilation.assets[`${item.name}.wxml`] = {
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


module.exports = function getWebpackConfig(_config) {
  const config = {
    cssModules: true,
    ..._config,
  };
  return {
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
      path: path.join(process.cwd(), 'dist'),
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
          use: {
            loader: babelLoader,
            options: {
              plugins: [
                babelPluginComponentStaticInfoPath,
                thisNodeMoudles('@babel/plugin-proposal-class-properties')
              ],
              presets: [
                babelPresetEnv,
                babelPresetReact,
              ],
            },
          },
        },

        
        {
          test: /.less$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: cssLoader,
              options: {
                modules: true,
                // css modules 和无 modules 混用
                // https://github.com/css-modules/css-modules/pull/65
                getLocalIdent: (loaderContext, localIdentName, localName, options) => {
                  if (/\.module\.less/.test(loaderContext.resourcePath)) {
                    return getLocalIdent(loaderContext, localIdentName, localName, options);
                  } else {
                    return localName;
                  }
                }
              },
            },
            lessLoader,
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
        chunkFilename: '[id].wxss'
      }),

      
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
      new GeneraeBaseWxmlWebpackPlugin(),

    ],

    mode: 'development',
  };

};
