import runTest from './helpers/runTest';
import { Platform } from '@remax/types';

describe('build custom html template app', () => {
  runTest('customHtmlTemplate', Platform.web);
});
