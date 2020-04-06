import * as path from 'path';
import runTest from '../helpers/runTest';
import { Platform } from '../../build/platform';

describe('build alipay one app', () => {
  runTest('one', Platform.alipay, path.resolve(__dirname, `../fixtures/one/expected/alipay`));
});
