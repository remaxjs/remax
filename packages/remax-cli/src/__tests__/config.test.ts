import * as path from 'path';
import * as rollupConfig from '../build/rollupConfig';
import getConfig from '../getConfig';

const cli = {
  target: 'wechat',
};

describe('config', () => {
  process.chdir(path.join(__dirname, 'fixtures/cli'));

  it('use cli options', () => {
    // cwd to fixtures/cli
    const result = getConfig(cli);
    expect(result.output).toEqual('dist/wechat');
  });
});
