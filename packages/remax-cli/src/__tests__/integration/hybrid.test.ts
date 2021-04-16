import { testBuildApp, testBuildMiniPlugin } from './helpers/runTest';

describe('hybrid', () => {
  testBuildApp('hybrid-app');
  testBuildMiniPlugin('hybrid-mini-plugin');
});
