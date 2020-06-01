import * as path from 'path';
import { testBuildApp } from '../helpers/runTest';
import { Platform } from '@remax/types';

describe('build wechat one app', () => {
  testBuildApp('one', Platform.wechat, path.resolve(__dirname, `../fixtures/one/expected/wechat`));
});
