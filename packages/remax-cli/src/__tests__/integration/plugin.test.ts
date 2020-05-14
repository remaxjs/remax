import runTest from './helpers/runTest';

describe('plugin hooks', () => {
  runTest('hook-config-webpack');

  runTest('hook-config-babel');
});
