import * as path from 'path';
import getConfig from '../getConfig';
import readManifest from '../readManifest';
import build from './helpers/build';
import { Platform } from '../build/platform';

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
    }).toThrowErrorMatchingInlineSnapshot(`
"Invalid configuration object. remax has been initialized using a configuration object that does not match the API schema.
 - configuration has an unknown property 'plugins'. These properties are valid:
   object { turboPages?, notify?, pxToRpx?, cwd?, progress?, compressTemplate?, output?, rootDir?, UNSAFE_wechatTemplateDepth?, one?, configWebpack? }
 - configuration.turboPages should be an array:
   [any, ...]
 - configuration.notify should be a boolean.
 - configuration.pxToRpx should be a boolean.
 - configuration.cwd should be a string.
 - configuration.progress should be a boolean.
 - configuration.compressTemplate should be a boolean.
 - configuration.output should be a string.
 - configuration.rootDir should be a string.
 - configuration.UNSAFE_wechatTemplateDepth should be one of these:
   object { … } | number
   Details:
    * configuration.UNSAFE_wechatTemplateDepth should be an object:
      object { … }
    * configuration.UNSAFE_wechatTemplateDepth should be a number.
 - configuration.configWebpack should be an instance of function."
`);
  });
});

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

  it('throw error when missing pages config in app.config', async () => {
    await expect(build('exception', Platform.ali)).rejects.toThrow();
  });
});
