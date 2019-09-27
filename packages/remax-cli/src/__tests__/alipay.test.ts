import * as path from 'path';
import build, { JEST_BUILD_TIMEOUT } from './build';

describe('alipay', () => {
  process.chdir(process.cwd());
  it(
    'build simple app',
    async () => {
      const result = await build('simple', 'alipay');
      expect(result).toMatchSnapshot();
    },
    JEST_BUILD_TIMEOUT
  );
});
