import { Options } from '@remax/types';
import output from './utils/output';
import { Platform } from '@remax/types';
import * as webpack from 'webpack';
import API from '../API';

const version = require('remax/package.json').version;

export function run(options: Options, api: API): webpack.Compiler {
  api.onBuildStart(options);

  if (options.target === Platform.web) {
    // 兼容 herbox 所以用 require
    const WebBuilder = require('./WebBuilder').default;
    return new WebBuilder(api, options).run();
  } else {
    const MiniBuilder = require('./MiniBuilder').default;
    return new MiniBuilder(api, options).run();
  }
}

export function buildApp(options: Options) {
  const api = new API();
  api.registerPlugins(options.plugins);
  return internalBuildApp(options, api);
}

export function internalBuildApp(options: Options, api: API) {
  const { target } = options;

  process.env.REMAX_PLATFORM = target;

  output.message(`\n⌨️  remax v${version}\n`, 'green');

  const result = run(options, api);

  return result;
}

export function buildMiniPlugin(options: Options) {
  const { target } = options;

  process.env.REMAX_PLATFORM = target;

  output.message(`\n⌨️  remax v${version}\n`, 'green');
  output.message(`🔨 构建插件`, 'blue');

  const api = new API();
  api.registerPlugins([]);

  const MiniPluginBuilder = require('./MiniPluginBuilder').default;
  return new MiniPluginBuilder(api, options).run();
}
