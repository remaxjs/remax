import * as path from 'path';
import runTest from './helpers/runTest';

describe('lerna app', () => {
  const cwd = path.resolve(__dirname, 'fixtures/lerna/packages/app1/expected');
  runTest('lerna/packages/app1', 'alipay', cwd, {
    include: ['npm/cjs', 'npm/module-a'],
  });
});
