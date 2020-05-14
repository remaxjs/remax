import * as path from 'path';
import runTest from '../helpers/runTest';
import { Platform } from '@remax/types';

describe('create host components in ali', () => {
  runTest('createHostComponent', Platform.ali, path.resolve(__dirname, `../fixtures/createHostComponent/expected/ali`));
});
