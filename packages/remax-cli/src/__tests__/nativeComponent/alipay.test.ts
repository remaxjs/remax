import * as path from 'path';
import runTest from '../helpers/runTest';

describe('use native components in alipay app', () => {
  const cwd = path.resolve(
    __dirname,
    '../fixtures/nativeComponent/expected/alipay'
  );
  runTest('nativeComponent', 'alipay', cwd, { include: ['npm/cjs'] });
});
