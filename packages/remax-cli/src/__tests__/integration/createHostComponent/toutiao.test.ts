import * as path from 'path';
import { testBuildApp } from '../helpers/runTest';
import { Platform } from '@remax/types';

describe('create host components in toutiao', () => {
  testBuildApp(
    'createHostComponent',
    Platform.toutiao,
    path.resolve(__dirname, `../fixtures/createHostComponent/expected/toutiao`)
  );
});
