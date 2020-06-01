import * as path from 'path';
import { testBuildApp } from '../helpers/runTest';
import { Platform } from '@remax/types';

describe('create host components in wechat', () => {
  testBuildApp(
    'createHostComponent',
    Platform.wechat,
    path.resolve(__dirname, `../fixtures/createHostComponent/expected/wechat`)
  );
});
