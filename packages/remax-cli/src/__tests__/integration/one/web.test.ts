import * as path from 'path';
import { testBuildApp } from '../helpers/runTest';
import { Platform } from '@remax/types';

describe('build web one app', () => {
  testBuildApp('one', Platform.web, path.resolve(__dirname, `../fixtures/one/expected/web`));
});
