import { testBuildApp } from './helpers/runTest';

describe('plugin hooks', () => {
  testBuildApp('hook-config-webpack');
  testBuildApp('hook-config-babel');
  testBuildApp('hook-on-app-config');
  testBuildApp('hook-on-page-config');
  testBuildApp('hook-on-page-template');
});
