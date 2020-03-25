import * as path from 'path';
import runTest from '../helpers/runTest';

describe('build wechat one app', () => {
  runTest('one', 'wechat', path.resolve(__dirname, `../fixtures/one/expected/wechat`));
});
