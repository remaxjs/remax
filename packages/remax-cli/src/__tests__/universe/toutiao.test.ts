import * as path from 'path';
import runTest from '../helpers/runTest';

describe('build universe app in toutiao', () => {
  runTest(
    'universe',
    'toutiao',
    path.resolve(__dirname, `../fixtures/universe/expected/toutiao`)
  );
});
