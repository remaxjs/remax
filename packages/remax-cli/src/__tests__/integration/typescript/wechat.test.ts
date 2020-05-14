import * as path from 'path';
import runTest from '../helpers/runTest';
import { Platform } from '@remax/types';

describe('build typescript in wechat app', () => {
  runTest('typescript', Platform.wechat, path.resolve(__dirname, `../fixtures/typescript/expected/wechat`));
});
