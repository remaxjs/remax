import runTest from './helpers/runTest';

describe('build', () => {
  runTest('alipay');
  runTest('wechat', 'wechat');
  runTest('toutiao', 'toutiao');
  runTest('customRootDir');
  runTest('babelrc');
});
