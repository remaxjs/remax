import * as path from 'path';
import { testBuildApp } from '../helpers/runTest';
import { Platform } from '@remax/types';

describe('build ali one app', () => {
  testBuildApp('one', Platform.ali, path.resolve(__dirname, `../fixtures/one/expected/ali`));
});
