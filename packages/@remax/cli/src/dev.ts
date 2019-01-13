import fs from 'fs';
import path from 'path';
import webpack, { Configuration, Stats } from 'webpack';

import config from './config';

interface RemaxProjectConfig {
  __unsafe_webpack_config__?: (config: Configuration) => Configuration;
}

/**
 * Read remax project configuration
 * {project}/remax.config.js
 */
function tryRequireRemaxProjectConfig(): RemaxProjectConfig {
  const configPath: string = path.join(process.cwd(), './remax.config.js');
  if (fs.existsSync(configPath)) {
    return require(configPath);
  }
  return {};
}

/**
 * Build and watch remax project
 */
export default () => {
  const remaxProjectConfig: RemaxProjectConfig = tryRequireRemaxProjectConfig();
  let webpackConfig: Configuration = config.getWebpackConfig(config.mode.DEVELOPMENT, remaxProjectConfig);

  // WARNING: unsafa modify webpack config
  if (remaxProjectConfig.__unsafe_webpack_config__) {
    webpackConfig = remaxProjectConfig.__unsafe_webpack_config__(webpackConfig);
  }

  webpack(
    {
      ...webpackConfig,
      watch: true,
    },
    (err: Error, stats: Stats) => {
      if (err || stats.hasErrors()) {
        console.log(err || stats.toString());
      }
      console.log(
        stats.toString({
          chunks: false,
          colors: true,
          children: false,
          builtAt: true,
          modules: false,
        }),
      );
    },
  );
};
