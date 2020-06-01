import * as path from 'path';
import { testBuildApp } from '../helpers/runTest';
import { Platform } from '@remax/types';

describe('create host components in ali', () => {
  testBuildApp(
    'createHostComponent',
    Platform.ali,
    path.resolve(__dirname, `../fixtures/createHostComponent/expected/ali`)
  );
});
