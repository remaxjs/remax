import * as path from 'path';
import * as fs from 'fs';
import * as webpack from 'webpack';
import Config from 'webpack-chain';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import baseConfig from './baseConfig';
import webBaseConfig from './webBaseConfig';
import Builder from '../Builder';
import FallbackEntry from '../entries/FallbackEntry';
import VirtualEntry from '../entries/VirtualEntry';

export default function webpackConfig(builder: Builder): webpack.Configuration {
  const config = new Config();

  baseConfig(config, builder);

  const addEntry = (entry: VirtualEntry) => {
    config.entry(entry.name).add(entry.virtualPath);
    config.plugin('webpack-virtual-modules' + entry.name).use(entry.virtualModule);
    config.plugin('html-webpack-plugin' + entry.name).use(HtmlWebpackPlugin, [
      {
        filename: entry.name + '.html',
        chunks: [entry.name],
        template: fs.existsSync(path.join(builder.projectPath.publicDir(), '/index.html'))
          ? path.join(builder.projectPath.publicDir(), '/index.html')
          : path.resolve(__dirname, '../../../template/index.html.ejs'),
        env: process.env.NODE_ENV,
      },
    ]);
  };

  builder.entryCollection.entries.forEach(addEntry);

  // 开发时，增加一个 fallback 路由
  if (builder.options.watch) {
    config.devServer.historyApiFallback({
      rewrites: [{ from: /.*/, to: '/fallback.html' }],
    });
    const fallbackEntry = new FallbackEntry(builder, 'fallback', './_fallback.js');
    addEntry(fallbackEntry);
  }

  config.optimization.splitChunks({
    cacheGroups: {
      vendor: {
        test: /node_modules/,
        name: 'vendor',
        minChunks: 2,
        chunks: 'all',
      },
      common: {
        name: 'common',
        minChunks: 2,
        chunks: 'all',
      },
    },
  });
  webBaseConfig(config, builder);

  return config.toConfig();
}
