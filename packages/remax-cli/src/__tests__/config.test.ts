import * as path from 'path';
import readManifest from '../readManifest';

describe('manifest', () => {
  it('throw error when file not exists with strict mode enabled', () => {
    expect(readManifest('', 'ali')).toEqual({});
    expect(() => {
      readManifest('', 'ali', true);
    }).toThrow();
  });

  it('return empty object when javascript manifest file contains no config', () => {
    expect(readManifest(path.join(__dirname, './fixtures/exception/manifest.js/app.config'), 'ali')).toMatchObject({});
  });

  it('return empty object when typescript manifest file contains no config', () => {
    expect(readManifest(path.join(__dirname, './fixtures/exception/manifest.ts/app.config'), 'ali')).toMatchObject({});
  });
});
