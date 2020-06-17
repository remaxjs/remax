import { Options } from '@alipay/remix-types';
import output from './utils/output';
import remixVersion from '../remixVersion';
import { Platform } from '@alipay/remix-types';
import * as webpack from 'webpack';
import API from '../API';

export function run(options: Options, api: API): webpack.Compiler {
  if (options.turboPages && options.turboPages.length > 0 && options.target !== Platform.ali) {
    throw new Error('turboPages 目前仅支持 ali 平台开启');
  }

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
