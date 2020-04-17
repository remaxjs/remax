import * as path from 'path';
import remaxVersion from '../remaxVersion';

describe('remax version', () => {
  it('works', () => {
    jest.mock(
      path.resolve(__dirname, `../../node_modules/remax/package.json`),
      () => ({
        version: 'version',
      }),
      { virtual: true }
    );
    expect(remaxVersion()).toBe('version');
  });
});
