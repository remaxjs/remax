import * as path from 'path';
import runTest from '../helpers/runTest';

describe('build universe app in alipay', () => {
  runTest(
    'universe',
    'wechat',
    path.resolve(__dirname, `../fixtures/universe/expected/wechat`)
  );
});
