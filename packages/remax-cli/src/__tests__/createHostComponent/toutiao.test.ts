import * as path from 'path';
import runTest from '../helpers/runTest';
import { Platform } from '../../build/utils/platform';

describe('create host components in toutiao', () => {
  runTest(
    'createHostComponent',
    Platform.toutiao,
    path.resolve(__dirname, `../fixtures/createHostComponent/expected/toutiao`)
  );
});
