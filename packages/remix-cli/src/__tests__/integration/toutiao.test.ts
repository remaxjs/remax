import runTest from './helpers/runTest';
import { Platform } from '@alipay/remix-types';

describe('build toutiao app', () => {
  runTest('toutiao', Platform.toutiao);
});
