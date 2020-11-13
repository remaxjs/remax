import { Compiler } from 'webpack';
import { compilation } from 'webpack';
import SourceCache from '../../../SourceCache';
import Builder from '../../Builder';

const PLUGIN_NAME = 'RemaxPluginAssetPlugin';

export default class PluginAssetPlugin {
  builder: Builder;
  cache: SourceCache = new SourceCache();

  constructor(builder: Builder) {
    this.builder = builder;
  }

  apply(compiler: Compiler) {
    compiler.hooks.emit.tapAsync(PLUGIN_NAME, async (compilation, callback) => {
      // plugin.json
      await this.createManifest(compilation);
      callback();
    });
  }

  createManifest(compilation: compilation.Compilation) {
    const source = Buffer.from(JSON.stringify(this.builder.projectConfig, null, 2));

    const fileName = 'plugin.json';

    this.cache.invalid(fileName, source.toString(), () => {
      compilation.assets[fileName] = {
        source: () => source,
        size: () => Buffer.byteLength(source),
      };
    });
  }
}
