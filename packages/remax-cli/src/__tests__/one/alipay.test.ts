import * as path from 'path';
import runTest from '../helpers/runTest';

describe('build alipay one app', () => {
  runTest('one', 'alipay', path.resolve(__dirname, `../fixtures/one/expected/alipay`));
});
