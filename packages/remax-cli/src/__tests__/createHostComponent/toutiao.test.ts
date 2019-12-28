import * as path from 'path';
import runTest from '../helpers/runTest';

describe('create host components in toutiao', () => {
  runTest(
    'createHostComponent',
    'toutiao',
    path.resolve(__dirname, `../fixtures/createHostComponent/expected/toutiao`)
  );
});
