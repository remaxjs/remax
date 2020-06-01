import { Compiler } from 'webpack';
import { Options } from '@remax/types';
import API from '../../../../API';
import SourceCache from '../../../../SourceCache';
import createManifest from './createManifest';
import createTemplate from './createTemplate';

const PLUGIN_NAME = 'RemaxPageAssetPlugin';

export default class PageAssetPlugin {
  api: API;
  remaxOptions: Options;
  cache: SourceCache = new SourceCache();

  constructor(options: Options, api: API) {
    this.remaxOptions = options;
    this.api = api;
  }

  apply(compiler: Compiler) {
    compiler.hooks.emit.tapAsync(PLUGIN_NAME, async (compilation, callback) => {
      const options = this.remaxOptions;
      const meta = this.api.getMeta();

      await Promise.all([
        await createTemplate(this.api, options, meta, compilation, this.cache),
        await createManifest(options, compilation, this.cache),
      ]);

      callback();
    });
  }
}
