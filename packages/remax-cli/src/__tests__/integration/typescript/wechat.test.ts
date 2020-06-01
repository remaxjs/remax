import * as path from 'path';
import { testBuildApp } from '../helpers/runTest';
import { Platform } from '@remax/types';

describe('build typescript in wechat app', () => {
  testBuildApp('typescript', Platform.wechat, path.resolve(__dirname, `../fixtures/typescript/expected/wechat`));
});
