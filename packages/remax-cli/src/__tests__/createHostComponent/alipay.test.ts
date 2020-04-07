import * as path from 'path';
import runTest from '../helpers/runTest';
import { Platform } from '../../build/platform';

describe('create host components in alipay', () => {
  runTest(
    'createHostComponent',
    Platform.alipay,
    path.resolve(__dirname, `../fixtures/createHostComponent/expected/alipay`)
  );
});
