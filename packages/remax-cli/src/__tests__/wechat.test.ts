import runTest from './helpers/runTest';
import { Platform } from '../build/utils/platform';

describe('build wechat app', () => {
  runTest('wechat', Platform.wechat);
});
