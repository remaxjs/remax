import _ from 'lodash';
import * as path from 'path';
import { IArgv } from './types';
import WebpackConfig from 'webpack-chain';
import { RuleConfig } from '@remax/cli/lib/build/webpack/config/css';

export type IBuildType = 'esm' | 'ali' | 'wechat';

export interface IOptions {
  type: IBuildType;
  sourceDir: string;
  output: string;
  watch?: boolean;
  onTargetDir?: (originTargetDir: string, type: string) => string;
  babelrc?: {
    plugins?: any;
    presets?: any;
  };
  mini?: {
    input: string | { [key: string]: string };
    configWebpack?: (params: {
      config: WebpackConfig;
      webpack: any;
      addCSSRule: (ruleConfig: RuleConfig) => void;
    }) => void;
  };
  esm?: {
    disableTypeCheck: boolean;
  };
}

const defaultConfig = {
  type: 'esm',
  sourceDir: './src',
  output: './dist',
  babelrc: {
    plugins: [],
    presets: [],
  },
};

// 获取组件构建配置
export function getConfig(argv: IArgv, { cwd = process.cwd() }): IOptions {
  let configFile;
  const { watch, type, output } = argv;

  try {
    const configFilename = argv.config || 'remax-component.config.js';
    const filepath = path.resolve(cwd, configFilename);
    configFile = require(filepath);
  } catch (e) {
    configFile = {};
  }

  return _.merge(defaultConfig, configFile, { watch, type, output });
}
