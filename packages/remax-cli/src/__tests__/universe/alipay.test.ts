import * as path from 'path';
import runTest from '../helpers/runTest';

describe('build universe app in alipay', () => {
  runTest(
    'universe',
    'alipay',
    path.resolve(__dirname, `../fixtures/universe/expected/alipay`)
  );
});
