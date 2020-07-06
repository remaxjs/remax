import runTest from './helpers/runTest';
import { Platform } from '@remax/types';

describe('build web app', () => {
  runTest('web', Platform.web);
});
