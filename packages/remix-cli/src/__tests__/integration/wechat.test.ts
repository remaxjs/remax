import runTest from './helpers/runTest';
import { Platform } from '@alipay/remix-types';

describe('build wechat app', () => {
  runTest('wechat', Platform.wechat);
});
