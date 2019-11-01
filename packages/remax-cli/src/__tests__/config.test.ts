import * as path from 'path';
import getConfig from '../getConfig';

describe('config', () => {
  process.chdir(path.join(__dirname, 'fixtures/cli'));

  it('use cli options', () => {
    const result = getConfig();
    expect(result.output).toEqual('dist');
  });
});
