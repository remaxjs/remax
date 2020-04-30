import * as path from 'path';
import runTest from '../helpers/runTest';
import { Platform } from '@remax/types';

describe('build app on static compiler mode in ali', () => {
  runTest('turboPages/ali', Platform.ali, path.resolve(__dirname, `../fixtures/turboPages/ali/expected/ali`));
});
