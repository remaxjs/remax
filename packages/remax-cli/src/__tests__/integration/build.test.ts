import { testBuildApp } from './helpers/runTest';

describe('build ali app', () => {
  testBuildApp('ali');
  testBuildApp('resolve-platform-ext');
  testBuildApp('component-recursion');
  testBuildApp('wechat-include', 'wechat');
});
