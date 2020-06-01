import { testBuildApp } from './helpers/runTest';
import { Platform } from '@remax/types';

describe('build toutiao app', () => {
  testBuildApp('toutiao', Platform.toutiao);
});
