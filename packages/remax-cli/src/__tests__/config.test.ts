import * as path from 'path';
import getConfig from '../getConfig';
import readManifest from '../readManifest';
import build from './helpers/build';
import { Platform } from '@remax/types';

describe('remax config', () => {
  it('override output', () => {
    process.chdir(path.join(__dirname, 'fixtures/config'));
    const result = getConfig();
    expect(result.output).toEqual('build');
  });

  it('schema validation', () => {
    process.chdir(path.join(__dirname, 'fixtures/exception/remax.config'));

    expect(() => {
      getConfig();
    }).toThrowErrorMatchingSnapshot();
  });
});

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

  it('throw error when missing pages config in app.config', async () => {
    await expect(build('exception', Platform.ali)).rejects.toThrow('app.config.js|ts 并未配置页面参数');
  });
});
