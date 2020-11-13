import { Options } from '@remax/types';
import output from './utils/output';
import remixVersion, { reactReconcilerPeerReactVersion, reactVersion } from '../remixVersion';
import { Platform } from '@remax/types';
import * as webpack from 'webpack';
import semver from 'semver';
import API from '../API';

function reactVersionCheck() {
  const rv = reactVersion();
  const rrv = reactReconcilerPeerReactVersion();
  const f = semver.satisfies(rv, rrv);
  if (!f) {
    output.warn(`\
项目的react版本与remix不匹配，可能会出现未知异常！！！
react版本: ${rv}, remix需要: ${rrv}
    `);
  }
}

export function run(options: Options, api: API): webpack.Compiler {
  reactVersionCheck();
  if (options.target === Platform.web) {
    // 兼容 herbox 所以用 require
    const WebBuilder = require('./WebBuilder').default;
    return new WebBuilder(api, options).run();
  } else {
    const MiniBuilder = require('./MiniBuilder').default;
    return new MiniBuilder(api, options).run();
  }
}

export function buildApp(options: Options, api: API) {
  const { target } = options;

  process.env.REMAX_PLATFORM = target;

  output.message(`\n⌨️  remax v${remixVersion()}\n`, 'green');

  const result = run(options, api);

  return result;
}

export function buildMiniPlugin(options: Options) {
  const { target } = options;

  process.env.REMAX_PLATFORM = target;

  output.message(`\n⌨️  remax v${remixVersion()}\n`, 'green');
  output.message(`🔨 构建插件`, 'blue');

  const api = new API();
  api.registerPlugins([]);

  const MiniPluginBuilder = require('./MiniPluginBuilder').default;
  return new MiniPluginBuilder(api, options).run();
}
