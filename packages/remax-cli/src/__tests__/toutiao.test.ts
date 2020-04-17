import runTest from './helpers/runTest';
import { Platform } from '../build/platform';

describe('build toutiao app', () => {
  runTest('toutiao', Platform.toutiao);
});
