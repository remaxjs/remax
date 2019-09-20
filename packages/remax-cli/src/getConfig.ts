import fs from 'fs';
import path from 'path';
import defaultOptions from './defaultOptions';
import { PluginImpl } from 'rollup';

export interface RemaxOptions {
  cssModules: boolean | RegExp;
  cwd: string;
  progress: boolean;
  output: string;
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
}

export interface CliOptions {
  target: string;
}

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
