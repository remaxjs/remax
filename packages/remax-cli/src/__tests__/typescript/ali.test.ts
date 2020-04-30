import * as path from 'path';
import runTest from '../helpers/runTest';
import { Platform } from '@remax/types';

describe('build typescript in ali app', () => {
  runTest('typescript', Platform.ali, path.resolve(__dirname, `../fixtures/typescript/expected/ali`));
});
