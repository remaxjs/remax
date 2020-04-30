import * as path from 'path';
import runTest from '../helpers/runTest';
import { Platform } from '@remax/types';

describe('use native components in ali app', () => {
  const cwd = path.resolve(__dirname, '../fixtures/nativeComponent/expected/ali');
  runTest('nativeComponent', Platform.ali, cwd);
});
