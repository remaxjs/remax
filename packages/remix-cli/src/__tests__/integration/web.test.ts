import runTest from './helpers/runTest';
import { Platform } from '@alipay/remix-types';

describe('build remix web app', () => {
  runTest('web', Platform.web);
});
