import { checkRemaxVersion } from '../checkVersions';
import * as path from 'path';

describe('compare remax & remax-cli version', () => {
  it('skip when not exist', () => {
    const cwd = path.resolve(__dirname, `fixtures/version`);
    process.chdir(cwd);
    expect(checkRemaxVersion()).toBeTruthy();
  });
  it('version matched', () => {
    const cliPackagePath: string = path.resolve(
      __dirname,
      `../../package.json`
    );
    const cliPkgConfig = require(cliPackagePath);
    jest.mock(
      path.resolve(
        __dirname,
        `fixtures/version/match/node_modules/remax/package.json`
      ),
      () => ({
        version: cliPkgConfig.version,
      }),
      { virtual: true }
    );
    const cwd = path.resolve(__dirname, `fixtures/version/match`);
    process.chdir(cwd);
    expect(checkRemaxVersion()).toBeTruthy();
  });
  it('version matched', () => {
    const cwd = path.resolve(__dirname, `fixtures/version/mismatch`);
    process.chdir(cwd);
    expect(checkRemaxVersion()).toBeFalsy();
  });
});
