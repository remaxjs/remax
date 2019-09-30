import build, { JEST_BUILD_TIMEOUT } from './build';

describe('toutiao', () => {
  process.chdir(process.cwd());
  it(
    'build simple app',
    async () => {
      const result = await build('simple', 'toutiao');
      expect(result).toMatchSnapshot();
    },
    JEST_BUILD_TIMEOUT
  );
});
