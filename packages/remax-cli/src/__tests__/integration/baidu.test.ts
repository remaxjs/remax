import runTest from './helpers/runTest';
import { Platform } from '@remax/types';

describe('build baidu app', () => {
  runTest('baidu', Platform.baidu);
});
