import * as path from 'path';
import runTest from '../helpers/runTest';
import { Platform } from '@remax/types';

describe('build web one app', () => {
  runTest('one', Platform.web, path.resolve(__dirname, `../fixtures/one/expected/web`));
});
