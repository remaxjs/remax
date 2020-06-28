import * as path from 'path';
import runTest from './helpers/runTest';
import { Platform } from '@remax/types';

describe('use lifeCycle in ali app', () => {
  const cwd = path.resolve(__dirname, 'fixtures/lifeCycle/expected');
  runTest('lifeCycle', Platform.ali, cwd);
});
