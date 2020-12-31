import * as path from 'path';
import { testBuildApp } from '../helpers/runTest';

describe('use native components in ali app', () => {
  const cwd = path.resolve(__dirname, '../fixtures/with-dsl-component/expected');
  testBuildApp('with-dsl-component', 'ali', cwd);
});
