import fs from 'fs';
import path from 'path';
import webpack, { Configuration, Stats } from 'webpack';

import config from './config';

export interface CompileOptions {
  watch?: boolean;
  analyze?: boolean;
}

export interface RemaxProjectConfig {
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

const defaultCompileOptions: CompileOptions = {
  watch: false,
};

/**
 * Build  remax project
 */
export default (options: CompileOptions = defaultCompileOptions) => {
  const { watch } = options;

  return (cmd: any) => {
    const { analyze } = cmd;
    const compileOptions: CompileOptions = {
      ...options,
      analyze,
    };

    const remaxProjectConfig: RemaxProjectConfig = tryRequireRemaxProjectConfig();
    const mode = watch ? config.mode.DEVELOPMENT : config.mode.PRODUCTION;
    const webpackConfig: Configuration = config.getWebpackConfig(mode, remaxProjectConfig, compileOptions);

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
