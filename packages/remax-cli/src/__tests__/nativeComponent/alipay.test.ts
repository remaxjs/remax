import * as path from 'path';
import runTest from '../helpers/runTest';
import { Platform } from '../../build/platform';

describe('use native components in alipay app', () => {
  const cwd = path.resolve(__dirname, '../fixtures/nativeComponent/expected/alipay');
  runTest('nativeComponent', Platform.alipay, cwd);
});
