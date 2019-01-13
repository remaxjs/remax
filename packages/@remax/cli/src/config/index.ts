import merge from 'webpack-merge';

import webpackCommonConfig from './webpack.common';
import webpackDevConfig from './webpack.dev';
import webpackProdConfig from './webpack.prod';
import { Configuration } from 'webpack';

enum ConfigModeEnum {
  DEVELOPMENT,
  PRODUCTION,
};

const webpackConfigMap = {
  [ConfigModeEnum.DEVELOPMENT]: webpackDevConfig,
  [ConfigModeEnum.PRODUCTION]: webpackProdConfig,
};

const config = {
  mode: ConfigModeEnum,

  getWebpackConfig(mode: ConfigModeEnum, projectConifg = {}): Configuration {
    const internalConfig: Configuration = merge(webpackCommonConfig, <Configuration>webpackConfigMap[mode]);
    // TODO: do something, modify webpack config by project config remax.config.js
    return internalConfig;
  }
};

export default config;
