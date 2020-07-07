import { Options } from '@alipay/remix-types';
import output from './utils/output';
import remixVersion, { reactReconcilerPeerReactVersion, reactVersion } from '../remixVersion';
import { Platform } from '@alipay/remix-types';
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
    const buildWeb = require('./web').default;
    return buildWeb(api, options);
  } else {
    const buildMini = require('./mini').default;
    return buildMini(api, options);
  }
}

export function build(options: Options, api: API) {
  const { target } = options;

  process.env.REMAX_PLATFORM = target;

  output.message(`\n⌨️  Remix v${remixVersion()}\n`, 'green');
  output.message(`🎯 平台 ${target}`, 'blue');

  const result = run(options, api);

  return result;
}
