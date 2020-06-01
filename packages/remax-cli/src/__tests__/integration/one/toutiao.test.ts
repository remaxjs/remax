import * as path from 'path';
import { testBuildApp } from '../helpers/runTest';
import { Platform } from '@remax/types';

describe('build toutiao one app', () => {
  testBuildApp('one', Platform.toutiao, path.resolve(__dirname, `../fixtures/one/expected/toutiao`));
});
