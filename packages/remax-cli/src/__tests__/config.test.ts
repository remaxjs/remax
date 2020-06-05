import * as path from 'path';
import readManifest from '../readManifest';
import { Platform } from '@remax/types';

import configWeb from '../build/webpack/config.web';
import configMini from '../build/webpack/config.mini';
import API from '../API';
import { getDefaultOptions } from '../defaultOptions';

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

describe('web webpack config', () => {
  it('is work', async () => {
    const options = getDefaultOptions();
    options.cwd = path.join(__dirname, './integration/fixtures/wechat');
    options.analyze = true;
    options.configWebpack = ({ config }) => {
      expect(config.entryPoints.has('index')).toBe(true);
      expect(config.plugins.has('webpack-bundle-analyzer')).toBe(true);
    };

    configWeb(new API(), options);
  });
});

describe('mini webpack config', () => {
  it('is work', async () => {
    const options = getDefaultOptions();
    const projectRoot = path.join(__dirname, './integration/fixtures/wechat');
    options.cwd = projectRoot;
    options.analyze = true;
    options.configWebpack = ({ config }) => {
      expect(config.entryPoints.has('pages/index')).toBe(true);
      expect(config.plugins.has('webpack-bundle-analyzer')).toBe(true);
    };

    configMini(new API(), options, Platform.wechat);
  });
});
