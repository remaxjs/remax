import * as path from 'path';
import build, { JEST_BUILD_TIMEOUT } from './build';

describe('wechat', () => {
  process.chdir(process.cwd());
  it(
    'build simple app',
    async () => {
      const result = await build('simple', 'wechat');
      expect(result).toMatchSnapshot();
    },
    JEST_BUILD_TIMEOUT
  );
});
