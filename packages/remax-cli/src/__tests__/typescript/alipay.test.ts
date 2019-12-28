import * as path from 'path';
import runTest from '../helpers/runTest';

describe('build typescript in alipay app', () => {
  runTest(
    'typescript',
    'alipay',
    path.resolve(__dirname, `../fixtures/typescript/expected/alipay`)
  );
});
