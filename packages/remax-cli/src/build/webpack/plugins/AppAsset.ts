import { Compiler } from 'webpack';
import { Options } from '@remax/types';
import API from '../../../API';
import { compilation } from 'webpack';
import SourceCache from '../../../SourceCache';
import getAppConfig from '../../utils/getAppConfig';

const PLUGIN_NAME = 'RemaxAppAssetPlugin';

export default class AppAssetPlugin {
  api: API;
  remaxOptions: Options;
  cache: SourceCache = new SourceCache();

  constructor(options: Options, api: API) {
    this.remaxOptions = options;
    this.api = api;
  }

  apply(compiler: Compiler) {
    compiler.hooks.emit.tapAsync(PLUGIN_NAME, async (compilation, callback) => {
      // app.json
      await this.createManifest(compilation);
      callback();
    });
  }

  createManifest(compilation: compilation.Compilation) {
    const config = getAppConfig(this.remaxOptions, this.api);
    const source = Buffer.from(JSON.stringify(config, null, 2));

    const fileName = 'app.json';

    this.cache.invalid(fileName, source.toString(), () => {
      compilation.assets[fileName] = {
        source: () => source,
        size: () => Buffer.byteLength(source),
      };
    });
  }
}
