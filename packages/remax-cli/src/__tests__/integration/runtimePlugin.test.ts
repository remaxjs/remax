import * as path from 'path';
import runTest from './helpers/runTest';
import { Platform } from '@remax/types';

describe('runtime plugin', () => {
  runTest('runtime-plugin', Platform.ali, path.resolve(__dirname, `./fixtures/runtime-plugin/expected`), {
    externalsIgnore: ['@remax/runtime-plugin'],
  });
});
