import runTest from './helpers/runTest';
import { Platform } from '../build/platform';

describe('build wechat app', () => {
  runTest('wechat', Platform.wechat);
});
