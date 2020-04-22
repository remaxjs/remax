import * as path from 'path';
import runTest from '../helpers/runTest';
import { Platform } from '../../build/utils/platform';

describe('build toutiao one app', () => {
  runTest('one', Platform.toutiao, path.resolve(__dirname, `../fixtures/one/expected/toutiao`));
});
