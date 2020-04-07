import * as path from 'path';
import runTest from '../helpers/runTest';
import { Platform } from '../../build/platform';

describe('build app on static compiler mode in alipay', () => {
  runTest(
    'turboPages/alipay',
    Platform.alipay,
    path.resolve(__dirname, `../fixtures/turboPages/alipay/expected/alipay`)
  );
});
