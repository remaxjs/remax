import Config from 'webpack-chain';
import * as webpack from 'webpack';
import { moduleMatcher, targetExtensions } from '../../extensions';
import { addCSSRule, cssConfig, RuleConfig } from './config/css';
import fs from 'fs';
import CopyPlugin from 'copy-webpack-plugin';
import WebapckBar from 'webpackbar';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import Builder from '../Builder';

export default function webBaseConfig(config: Config, builder: Builder) {
  config.devtool(process.env.NODE_ENV === 'development' ? 'cheap-module-source-map' : false);
  config.resolve.extensions.merge(targetExtensions(builder.target));
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
      api: builder.api,
      compact: process.env.NODE_ENV === 'production',
    });

  if (builder.options?.web?.excludeNodeModulesTransform) {
    config.module.rule('js').exclude.add(/(node_modules)/);
  }

  cssConfig(config, builder, true);

  config.module
    .rule('image')
    .test(/\.(png|jpe?g|gif|svg)$/i)
    .use('file')
    .loader(require.resolve('file-loader'));

  config.module
    .rule('font')
    .test(/\.(ttf|eot|woff|woff2)$/i)
    .use('file')
    .loader(require.resolve('file-loader'));

  if (fs.existsSync(builder.projectPath.publicDir())) {
    config
      .plugin('webpack-copy-plugin')
      .use(CopyPlugin, [[{ from: builder.projectPath.publicDir(), to: builder.projectPath.outputDir() }]]);
  }

  config.plugin('webpackbar').use(WebapckBar, [{ name: 'web' }]);

  if (builder.options.analyze) {
    config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin);
  }

  if (!builder.options.watch) {
    config.plugin('mini-css-extract-plugin').use(MiniCssExtractPlugin, [
      {
        filename: process.env.NODE_ENV === 'production' ? '[name].[chunkhash:8].css' : '[name].css',
      },
    ]);
  }

  const context = {
    config,
    webpack,
    addCSSRule: (ruleConfig: RuleConfig) => {
      addCSSRule(config, builder, true, ruleConfig);
    },
  };

  if (typeof builder.options.configWebpack === 'function') {
    builder.options.configWebpack(context);
  }

  builder.api.configWebpack(context);

  return config;
}
