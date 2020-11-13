import * as path from 'path';
import getConfig from '../../getConfig';
import { testBuildApp } from './helpers/runTest';

describe('remix config', () => {
  it('override output', () => {
    process.chdir(path.join(__dirname, 'fixtures/config'));
    const result = getConfig();
    expect(result.output).toEqual('build');
  });

  testBuildApp('config-add-css-rule');
});
