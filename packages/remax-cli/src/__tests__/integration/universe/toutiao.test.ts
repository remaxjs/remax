import * as path from 'path';
import { testBuildApp } from '../helpers/runTest';
import { Platform } from '@remax/types';

describe('build universe app in toutiao', () => {
  testBuildApp('universe', Platform.toutiao, path.resolve(__dirname, `../fixtures/universe/expected/toutiao`));
});
