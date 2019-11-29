import * as path from 'path';
import runTest from './helpers/runTest';

describe('build typescript universe app', () => {
  runTest(
    'typescript',
    'alipay',
    path.resolve(__dirname, `./fixtures/typescript/expected/alipay`)
  );
  runTest(
    'typescript',
    'wechat',
    path.resolve(__dirname, `./fixtures/typescript/expected/wechat`)
  );
  runTest(
    'typescript',
    'toutiao',
    path.resolve(__dirname, `./fixtures/typescript/expected/toutiao`)
  );
});
