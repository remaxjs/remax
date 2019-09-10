import fs from 'fs';
import path from 'path';
import esm from 'esm';
import defaultOptions from './defaultOptions';

export interface RemaxOptions {
  cssModules: boolean | RegExp;
  cwd: string;
  progress: boolean;
  output: string;
  UNSAFE_wechatTemplateDepth: number;
  alias?: {
    [key: string]: string;
  };
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
    // eslint-disable-next-line
    const options = require(configPath);

    return {
      ...defaultOptions,
      ...options,
    };
  }
  return defaultOptions;
}
