import * as path from 'path';
import runTest from '../helpers/runTest';
import { Platform } from '@alipay/remix-types';

describe('build typescript in toutiao app', () => {
  runTest('typescript', Platform.toutiao, path.resolve(__dirname, `../fixtures/typescript/expected/toutiao`));
});
