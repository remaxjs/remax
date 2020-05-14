import * as path from 'path';
import readManifest from '../readManifest';
import { Platform } from '@remax/types';

describe('manifest', () => {
  it('throw error when file not exists with strict mode enabled', () => {
    expect(readManifest('', Platform.ali)).toEqual({});
    expect(() => {
      readManifest('', Platform.ali, true);
    }).toThrow();
  });

  it('return empty object when javascript manifest file contains no config', () => {
    expect(
      readManifest(path.join(__dirname, './fixtures/exception/manifest.js/app.config'), Platform.ali)
    ).toMatchObject({});
  });

  it('return empty object when typescript manifest file contains no config', () => {
    expect(
      readManifest(path.join(__dirname, './fixtures/exception/manifest.ts/app.config'), Platform.ali)
    ).toMatchObject({});
  });
});
