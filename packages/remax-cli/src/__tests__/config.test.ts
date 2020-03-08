import * as path from 'path';
import getConfig from '../getConfig';
import readManifest from '../readManifest';
import build from './helpers/build';

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
 - configuration has an unknown property 'xxx'. These properties are valid:
   object { cssModules?, notify?, pxToRpx?, cwd?, progress?, compressTemplate?, output?, rootDir?, UNSAFE_wechatTemplateDepth?, alias?, postcss?, rollupOptions? }
 - configuration.cssModules should be one of these:
   RegExp | boolean
   Details:
    * configuration.cssModules should be an instance of RegExp.
    * configuration.cssModules should be a boolean.
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
 - configuration.alias should be an object:
   object { … }
 - configuration.postcss.options should be an object:
   object { … }
 - configuration.postcss.plugins should be an array:
   [any, ...]
 - configuration.postcss.url.inline should be a boolean.
 - configuration.postcss.url.maxSize should be a number.
 - configuration.rollupOptions should be one of these:
   object { … } | function
   Details:
    * configuration.rollupOptions should be an object:
      object { … }
    * configuration.rollupOptions should be an instance of function."
`);
  });
});

describe('manifest', () => {
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
