import { testBuildApp } from './helpers/runTest';

describe('customize babel config', () => {
  testBuildApp('babelrc');
  testBuildApp('babel-plugin-import');
});
