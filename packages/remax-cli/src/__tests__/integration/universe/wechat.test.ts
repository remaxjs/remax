import * as path from 'path';
import { testBuildApp } from '../helpers/runTest';
import { Platform } from '@remax/types';

describe('build universe app in ali', () => {
  testBuildApp('universe', Platform.wechat, path.resolve(__dirname, `../fixtures/universe/expected/wechat`));
});
