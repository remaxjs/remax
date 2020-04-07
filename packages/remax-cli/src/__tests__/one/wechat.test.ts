import * as path from 'path';
import runTest from '../helpers/runTest';
import { Platform } from '../../build/platform';

describe('build wechat one app', () => {
  runTest('one', Platform.wechat, path.resolve(__dirname, `../fixtures/one/expected/wechat`));
});
