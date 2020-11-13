import { testBuildApp } from './helpers/runTest';

describe('runtime plugin', () => {
  testBuildApp('runtime-plugin');
  testBuildApp('runtime-plugin-with-jsx');
});
