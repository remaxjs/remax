import * as path from 'path';
import runTest from '../helpers/runTest';
import { Platform } from '../../build/platform';

describe('build ali one app', () => {
  runTest('one', Platform.ali, path.resolve(__dirname, `../fixtures/one/expected/ali`));
});
