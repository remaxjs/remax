
import { Configuration } from 'webpack';
// @ts-ignore: @types/webpack-merge incorrect
import merge from 'webpack-merge';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import webpackCommonConfig from './webpack.common';
import webpackDevConfig from './webpack.dev';
import webpackProdConfig from './webpack.prod';
import { CompileOptions, RemaxProjectConfig } from '../compile';

enum ConfigModeEnum {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
};

const webpackConfigMap = {
  [ConfigModeEnum.DEVELOPMENT]: webpackDevConfig,
  [ConfigModeEnum.PRODUCTION]: webpackProdConfig,
};

const config = {
  mode: ConfigModeEnum,

  getWebpackConfig(mode: ConfigModeEnum, projectConifg: RemaxProjectConfig, compileOptions: CompileOptions): Configuration {
    let webpackConfig: Configuration = merge(webpackCommonConfig, <Configuration>webpackConfigMap[mode]);

    // Enable the bundle analyzer plugin if `analyze` is true
    if (compileOptions.analyze) {
      webpackConfig.plugins = [
        ...(webpackConfig.plugins || []),
        new BundleAnalyzerPlugin(),
      ];
    }

    // WARNING: unsafa modify webpack config
    if (projectConifg.__unsafe_webpack_config__) {
      webpackConfig = projectConifg.__unsafe_webpack_config__(webpackConfig);
    }

    return webpackConfig;
  }
};

export default config;
