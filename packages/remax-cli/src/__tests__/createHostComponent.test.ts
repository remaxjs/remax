import * as path from 'path';
import runTest from './helpers/runTest';

describe('create host components', () => {
  runTest(
    'createHostComponent',
    'alipay',
    path.resolve(__dirname, `./fixtures/createHostComponent/expected/alipay`)
  );
  runTest(
    'createHostComponent',
    'wechat',
    path.resolve(__dirname, `./fixtures/createHostComponent/expected/wechat`)
  );
  runTest(
    'createHostComponent',
    'toutiao',
    path.resolve(__dirname, `./fixtures/createHostComponent/expected/toutiao`)
  );
});
