import runTest from './helpers/runTest';
import { Platform } from '../build/utils/platform';

describe('build toutiao app', () => {
  runTest('toutiao', Platform.toutiao);
});
