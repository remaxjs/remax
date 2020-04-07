import * as path from 'path';
import runTest from '../helpers/runTest';
import { Platform } from '../../build/platform';

describe('build typescript in alipay app', () => {
  runTest('typescript', Platform.alipay, path.resolve(__dirname, `../fixtures/typescript/expected/alipay`));
});
