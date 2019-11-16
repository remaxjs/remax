import * as path from 'path';
import getConfig from '../getConfig';

describe('config', () => {
  beforeAll(() => {
    process.chdir(path.join(__dirname, 'fixtures/config'));
  });

  it('override output', () => {
    const result = getConfig();
    expect(result.output).toEqual('build');
  });
});
