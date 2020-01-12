import * as path from 'path';
import runTest from '../helpers/runTest';

describe('use native components in alipay app', () => {
  runTest(
    'nativeComponent',
    'alipay',
    path.resolve(__dirname, `../fixtures/nativeComponent/expected/alipay`)
  );
});
