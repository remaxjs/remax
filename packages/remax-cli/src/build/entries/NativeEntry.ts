import * as fs from 'fs';
import { loader } from 'webpack';
import { getNativeAssetOutputPath, replaceExtension } from '../utils/paths';
import VirtualEntry from './VirtualEntry';
import Builder from '../Builder';
import NativeAssets from '../NativeAssets';

interface Manifest {
  usingComponents?: Record<string, string>;
}

function normalizeName(name: string) {
  return name.replace(/@/g, '_');
}

export default class NativeEntry extends VirtualEntry {
  dependentEntries: NativeEntry[] = [];
  assets: NativeAssets;

  constructor(builder: Builder, name: string, filename: string) {
    super(builder, normalizeName(name), filename);
    this.assets = new NativeAssets(builder, filename);
  }

  getManifest() {
    const dependentEntries = this.getDependentEntries();
    const rawManifest = this.readRawManifest();
    const usingComponents: Manifest['usingComponents'] = rawManifest.usingComponents ?? {};
    dependentEntries.forEach((entry, name) => {
      usingComponents[name] = '/' + entry.name;
    });
    return {
      ...rawManifest,
      usingComponents,
    };
  }

  getDependentEntries() {
    const { usingComponents = {} } = this.readRawManifest();
    return Object.keys(usingComponents).reduce((acc: Map<string, NativeEntry>, name: string) => {
      const request: string = usingComponents[name];
      const filename = this.builder.projectPath.resolveAsset(request + '.js', this.filename);
      if (filename && fs.existsSync(filename)) {
        let entry = this.builder.entryCollection.nativeComponentEntries.get(filename);
        if (entry) {
          entry.updateSource();
        } else {
          const output = getNativeAssetOutputPath(replaceExtension(filename, ''), this.builder.options);
          entry = new NativeEntry(this.builder, output, filename);
        }
        acc.set(name, entry);
      }
      return acc;
    }, new Map());
  }

  getAssets() {
    return this.assets.getAll();
  }

  watchAssets(loaderContext: loader.LoaderContext) {
    this.assets.getAll().forEach(asset => {
      loaderContext.addDependency(asset.filename);
    });
    loaderContext.addDependency(this.rawManifestFile);
    loaderContext.addDependency(this.filename);
  }

  get rawManifestFile() {
    return replaceExtension(this.filename, '.json');
  }

  private readRawManifest(): Manifest {
    const manifestFile = this.rawManifestFile;
    if (fs.existsSync(manifestFile)) {
      try {
        return JSON.parse(fs.readFileSync(manifestFile).toString());
      } catch (e) {
        return {};
      }
    }
    return {};
  }
}
