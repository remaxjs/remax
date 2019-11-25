import * as path from 'path';
import runTest from './helpers/runTest';

describe('build universe app', () => {
  runTest(
    'universe',
    'alipay',
    path.resolve(__dirname, `./fixtures/universe/expected/alipay`)
  );
  runTest(
    'universe',
    'wechat',
    path.resolve(__dirname, `./fixtures/universe/expected/wechat`)
  );
  runTest(
    'universe',
    'toutiao',
    path.resolve(__dirname, `./fixtures/universe/expected/toutiao`)
  );
});
