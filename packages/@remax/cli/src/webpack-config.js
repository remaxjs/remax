const path = require('path');
const CreateFileWebpack = require('create-file-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

const fs = require('fs');
const babelPluginComponentStaticInfo = require('@remax/babel-plugin-remax-static-info');
const ejs = require('ejs');

const thisNodeMoudles = name => require.resolve(name);

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
      // const {
      //   chunks,
      // } = compilation;
      // chunks.forEach((item) => {
      //   // compilation.assets[`${item.id}.wxml`] = {
      //   //   source: () => content,
      //   //   size: () => content.length,
      //   // };
      // });


      const {
        components,
      } = babelPluginComponentStaticInfo.getStaticInfo();

      const tplPath = path.resolve('./node_modules/@remax/core/src/tpl/base.wxml.ejs');

      ejs.renderFile(tplPath, {
        componentData: components,
      }, {
      }, (err, str) => {
        if (err) {
          console.error(err);
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


module.exports = function getWebpackConfig() {
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
          use: {
            loader: babelLoader,
            options: {
              plugins: [
                babelPluginComponentStaticInfoPath,
              ],
              presets: [
                babelPresetEnv,
                babelPresetReact,
              ],
            },
          },
        },

        {
          test: /\.less$/,
          use: [
            ExtractCssChunks.loader,
            {
              loader: cssLoader,
              options: {
                modules: true,
              },
            },
            lessLoader,
          ],
        },
      ],
    },
    devtool: 'source-map',

    plugins: [
      new ExtractCssChunks(
        {
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: '[name].wxss',
          chunkFilename: '[id].wxss',
          hot: false, // if you want HMR - we try to automatically inject hot reloading but if it's not working, add it to the config
          orderWarning: true, // Disable to remove warnings about conflicting order between imports
          reloadAll: false, // when desperation kicks in - this is a brute force HMR flag
          cssModules: true, // if you use cssModules, this can help.
        },
      ),
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
