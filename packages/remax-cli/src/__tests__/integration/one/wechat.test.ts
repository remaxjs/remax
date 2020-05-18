import * as path from 'path';
import runTest from '../helpers/runTest';
import { Platform } from '@remax/types';

describe('build wechat one app', () => {
  runTest('one', Platform.wechat, path.resolve(__dirname, `../fixtures/one/expected/wechat`));
});
