import * as path from 'path';
import runTest from '../helpers/runTest';

describe('create host components in wechat', () => {
  runTest(
    'createHostComponent',
    'wechat',
    path.resolve(__dirname, `../fixtures/createHostComponent/expected/wechat`)
  );
});
