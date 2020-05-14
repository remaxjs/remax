import runTest from './helpers/runTest';
import { Platform } from '@remax/types';

describe('build toutiao app', () => {
  runTest('toutiao', Platform.toutiao);
});
