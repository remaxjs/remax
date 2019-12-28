import * as path from 'path';
import runTest from '../helpers/runTest';

describe('create host components in alipay', () => {
  runTest(
    'createHostComponent',
    'alipay',
    path.resolve(__dirname, `../fixtures/createHostComponent/expected/alipay`)
  );
});
