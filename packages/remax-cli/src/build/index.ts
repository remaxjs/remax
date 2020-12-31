import type { Options } from '@remax/types';
import output from './utils/output';
import * as webpack from 'webpack';
import API from '../API';

const version = require('remax/package.json').version;

export function run(options: Options, api: API): webpack.Compiler {
  process.env.NODE_ENV = process.env.NODE_ENV || 'development';

  api.loadBuiltinPlugins(options);
  api.onBuildStart(options);

  if (options.target === 'web') {
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
  const { target, loglevel = 'verbose' } = options;
  output.level = loglevel;

  process.env.REMAX_PLATFORM = target;

  output.message('🚀 构建应用', 'blue');
  output.message(`\n⌨️  remax v${version}\n`, 'green');

  const result = run(options, api);

  return result;
}

export function buildMiniPlugin(options: Options) {
  process.env.NODE_ENV = process.env.NODE_ENV || 'development';

  const { target, loglevel = 'verbose' } = options;
  output.level = loglevel;

  process.env.REMAX_PLATFORM = target;

  output.message(`🔨 构建插件`, 'blue');
  output.message(`\n⌨️  remax v${version}\n`, 'green');

  const api = new API();
  api.registerPlugins([]);

  const MiniPluginBuilder = require('./MiniPluginBuilder').default;
  return new MiniPluginBuilder(api, options).run();
}
