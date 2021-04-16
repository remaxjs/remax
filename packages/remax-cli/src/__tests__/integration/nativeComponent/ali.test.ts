import * as path from 'path';
import { testBuildApp } from '../helpers/runTest';

describe.skip('use native components in ali app', () => {
  const cwd = path.resolve(__dirname, '../fixtures/nativeComponent/expected/ali');
  testBuildApp('nativeComponent', 'ali', cwd);
});
