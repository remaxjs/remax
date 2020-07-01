import * as path from 'path';
import runTest from '../helpers/runTest';
import { Platform } from '@alipay/remix-types';

// 暂时不需要remix-one这个概念了
// 这个用例先忽略
describe.skip('build web one app', () => {
  runTest('one', Platform.web, path.resolve(__dirname, `../fixtures/one/expected/web`));
});
