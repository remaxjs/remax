import fs from 'fs';
import path from 'path';
import esm from 'esm';
import defaultOptions from './defaultOptions';
import { PluginImpl, RollupOptions } from 'rollup';

export interface RemaxOptions {
  cssModules: boolean | RegExp;
  pxToRpx: boolean;
  cwd: string;
  progress: boolean;
  output: string;
  rootDir: string;
  compressTemplate?: boolean;
  UNSAFE_wechatTemplateDepth: number;
  alias?: {
    [key: string]: string;
  };
  postcss?: {
    options?: {
      [key: string]: any;
    };
    plugins?: PluginImpl[];
  };
  rollupOptions?: RollupOptions | ((options: RollupOptions) => RollupOptions);
}

export interface CliOptions {
  target: string;
}

// eslint-disable-next-line
require = esm(module, {
  cjs: {
    dedefault: true,
  },
});

export default function getConfig(): RemaxOptions {
  const configPath: string = path.join(process.cwd(), './remax.config.js');
  if (fs.existsSync(configPath)) {
    delete require.cache[require.resolve(configPath)];
    // eslint-disable-next-line
    const options = require(configPath);

    return {
      ...defaultOptions,
      ...options,
    };
  }
  return defaultOptions;
}
