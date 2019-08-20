import fs from 'fs';
import path from 'path';
import defaultOptions from './defaultOptions';

export interface RemaxOptions {
  cssModules: boolean | RegExp;
  cwd: string;
  progress: boolean;
  output: string;
  UNSAFE_wechatTemplateDepth: number;
  alias?: any;
}

interface CliOptions {
  target: string;
}

export default function getConfig(cli: CliOptions): RemaxOptions {
  const configPath: string = path.join(process.cwd(), './remax.config.js');
  if (fs.existsSync(configPath)) {
    const options = require(configPath);

    // options 为 fucntion
    if (typeof options == 'function') {
      return {
        ...defaultOptions,
        ...options(cli),
      };
    }

    return {
      ...defaultOptions,
      ...options,
    };
  }
  return defaultOptions;
}
