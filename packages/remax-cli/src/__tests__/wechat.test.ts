import runTest from './helpers/runTest';
import { Platform } from '@remax/types';

describe('build wechat app', () => {
  runTest('wechat', Platform.wechat);
});
