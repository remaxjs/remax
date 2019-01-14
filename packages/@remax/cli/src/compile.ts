import fs from 'fs';
import path from 'path';
import webpack, { Configuration, Stats } from 'webpack';

import config from './config';

interface CompileOptions {
  watch?: boolean;
}

interface RemaxProjectConfig {
  __unsafe_webpack_config__?: (config: Configuration) => Configuration;
}

const defaultCompileOptions: CompileOptions = {
  watch: false,
};

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
 * Build  remax project
 */
export default (options: CompileOptions = defaultCompileOptions) => {
  const { watch } = options;

  return () => {
    const remaxProjectConfig: RemaxProjectConfig = tryRequireRemaxProjectConfig();
    const mode = watch ? config.mode.DEVELOPMENT : config.mode.PRODUCTION;
    let webpackConfig: Configuration = config.getWebpackConfig(mode, remaxProjectConfig);

    // WARNING: unsafa modify webpack config
    if (remaxProjectConfig.__unsafe_webpack_config__) {
      webpackConfig = remaxProjectConfig.__unsafe_webpack_config__(webpackConfig);
    }

    webpack(
      {
        ...webpackConfig,
        watch,
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
};
