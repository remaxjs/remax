import { testBuildApp } from './helpers/runTest';
import { Platform } from '@remax/types';

describe('build wechat app', () => {
  testBuildApp('wechat', Platform.wechat);
});
