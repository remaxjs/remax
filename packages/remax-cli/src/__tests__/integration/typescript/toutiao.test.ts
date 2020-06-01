import * as path from 'path';
import { testBuildApp } from '../helpers/runTest';
import { Platform } from '@remax/types';

describe('build typescript in toutiao app', () => {
  testBuildApp('typescript', Platform.toutiao, path.resolve(__dirname, `../fixtures/typescript/expected/toutiao`));
});
