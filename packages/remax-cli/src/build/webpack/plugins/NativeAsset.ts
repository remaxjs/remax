import { Compiler, compilation } from 'webpack';
import Builder from '../../Builder';
import NativeEntry from '../../entries/NativeEntry';

const PLUGIN_NAME = 'NativeAssetPlugin';

export default class NativeAssetPlugin {
  builder: Builder;

  constructor(builder: Builder) {
    this.builder = builder;
  }

  apply(compiler: Compiler) {
    compiler.hooks.make.tapAsync(PLUGIN_NAME, async (compilation, callback) => {
      await Promise.all(
        Array.from(this.builder.entryCollection.nativeComponentEntries.values()).map(entry => {
          entry.updateSource();
          return entry.addToWebpack(compiler, compilation);
        })
      );
      callback();
    });

    compiler.hooks.watchRun.tap(PLUGIN_NAME, () => {
      this.builder.entryCollection.entries.forEach(entry => {
        if (entry instanceof NativeEntry) {
          entry.updateSource();
        }
      });
    });

    compiler.hooks.emit.tapAsync(PLUGIN_NAME, async (compilation, callback) => {
      this.builder.entryCollection.entries.forEach(entry => {
        if (entry instanceof NativeEntry) {
          this.createAssets(compilation, entry);
        }
      });
      this.builder.entryCollection.nativeComponentEntries.forEach(entry => {
        this.createAssets(compilation, entry);
      });
      const { appEntry } = this.builder.entryCollection;
      if (appEntry instanceof NativeEntry) {
        appEntry.getAssets().forEach(asset => {
          compilation.assets[asset.output] = {
            source: () => asset.content,
            size: () => Buffer.byteLength(asset.content),
          };
        });
      }
      callback();
    });
  }

  createAssets(compilation: compilation.Compilation, entry: NativeEntry) {
    const assets = entry.getAssets();
    assets.forEach(asset => {
      compilation.assets[asset.output] = {
        source: () => asset.content,
        size: () => Buffer.byteLength(asset.content),
      };
    });
    const manifestContent = Buffer.from(JSON.stringify(entry.getManifest(), null, 2));
    compilation.assets[entry.name + '.json'] = {
      source: () => manifestContent,
      size: () => Buffer.byteLength(manifestContent),
    };
  }
}
