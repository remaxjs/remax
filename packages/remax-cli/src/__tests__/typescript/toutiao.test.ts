import * as path from 'path';
import runTest from '../helpers/runTest';

describe('build typescript in toutiao app', () => {
  runTest(
    'typescript',
    'toutiao',
    path.resolve(__dirname, `../fixtures/typescript/expected/toutiao`)
  );
});
