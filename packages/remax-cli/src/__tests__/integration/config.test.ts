import * as path from 'path';
import getConfig from '../../getConfig';
import { testBuildApp } from './helpers/runTest';

describe('remax config', () => {
  it('override output and normalize path', () => {
    const cwd = path.join(__dirname, 'fixtures/config');
    process.chdir(cwd);
    const result = getConfig();
    expect(result.output).toEqual('build');
    expect(result.cwd).toEqual(cwd);
    expect(result.rootDir).toEqual('src');
  });

  testBuildApp('config-add-css-rule');
});
