import * as path from 'path';
import getConfig from '../getConfig';
import readManifest from '../readManifest';
import build from './helpers/build';

describe('remax config', () => {
  beforeAll(() => {
    process.chdir(path.join(__dirname, 'fixtures/config'));
  });

  it('override output', () => {
    const result = getConfig();
    expect(result.output).toEqual('build');
  });
});

describe('manifest', () => {
  it('throw error when file not exists with strict mode enabled', () => {
    expect(readManifest('', 'alipay')).toEqual({});
    expect(() => {
      readManifest('', 'alipay', true);
    }).toThrow();
  });

  it('return empty object when javascript manifest file contains no config', () => {
    expect(
      readManifest(
        path.join(__dirname, './fixtures/exception/manifest.js/app.config'),
        'alipay'
      )
    ).toMatchObject({});
  });

  it('return empty object when typescript manifest file contains no config', () => {
    expect(
      readManifest(
        path.join(__dirname, './fixtures/exception/manifest.ts/app.config'),
        'alipay'
      )
    ).toMatchObject({});
  });

  it('throw error when missing pages config in app.config', async () => {
    await expect(build('exception', 'alipay')).rejects.toThrow();
  });
});
