import * as path from 'path';
import runTest from '../helpers/runTest';

describe('build typescript in wechat app', () => {
  runTest(
    'typescript',
    'wechat',
    path.resolve(__dirname, `../fixtures/typescript/expected/wechat`)
  );
});
