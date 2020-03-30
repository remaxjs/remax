import * as path from 'path';
import runTest from '../helpers/runTest';

describe('build toutiao one app', () => {
  runTest('one', 'toutiao', path.resolve(__dirname, `../fixtures/one/expected/toutiao`));
});
