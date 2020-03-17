import * as path from 'path';
import runTest from '../helpers/runTest';

describe('build app on static compiler mode in alipay', () => {
  runTest(
    'turboPages/alipay',
    'alipay',
    path.resolve(__dirname, `../fixtures/turboPages/alipay/expected/alipay`)
  );
});
