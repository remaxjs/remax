/**
 * 兼容 https://github.com/remaxjs/remax/blob/4cb412ec28bd4828f2cc7fc9807d3a2995ae44e8/packages/remax-cli/src/index.ts#L7-L9
 *
 * 3.0 可以干掉
 */
import type { Options } from '@remax/types';
import API from './API';
import { internalBuildApp } from './build';

export function buildMini(api: API, options: Options) {
  return internalBuildApp(options, api);
}

export function buildWeb(api: API, options: Options) {
  return internalBuildApp({ ...options, target: 'web' }, api);
}

export { getDefaultOptions } from './defaultOptions';
