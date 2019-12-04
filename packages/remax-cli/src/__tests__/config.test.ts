import * as path from 'path';
import getConfig from '../getConfig';
import readManifest from '../readManifest';

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

  it('throw error when javascript manifest file contains no config', () => {
    expect(() => {
      readManifest(
        path.join(__dirname, './fixtures/exception/manifest.js/app.config'),
        'alipay'
      );
    }).toThrow();
  });

  it('throw error when typescript manifest file contains no config', () => {
    expect(() => {
      readManifest(
        path.join(__dirname, './fixtures/exception/manifest.ts/app.config'),
        'alipay'
      );
    }).toThrow();
  });
});
