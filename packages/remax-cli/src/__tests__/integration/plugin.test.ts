import { testBuildApp } from './helpers/runTest';

describe('plugin hooks', () => {
  testBuildApp('hook-config-webpack');
  testBuildApp('hook-config-babel');
  testBuildApp('hook-onAppConfig');
  testBuildApp('hook-onPageConfig');
});
