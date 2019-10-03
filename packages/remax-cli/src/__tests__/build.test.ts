import * as path from 'path';
import runTest from './helpers/runTest';

describe('build', () => {
  runTest('alipay');
  runTest('wechat', 'wechat');
  runTest('toutiao', 'toutiao');

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

  runTest('customRootDir');
  runTest('babelrc');
  runTest('cssUrl');
  runTest('nativeComponent');
});
