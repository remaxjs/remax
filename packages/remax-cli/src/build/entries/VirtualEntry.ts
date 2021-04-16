import * as fs from 'fs';
import * as path from 'path';
import { compilation } from 'webpack';
import SingleEntryDependency from 'webpack/lib/dependencies/SingleEntryDependency';
import VirtualModulesPlugin from 'webpack-virtual-modules';
import Builder from '../Builder';
import NormalEntry from './NormalEntry';
import { replaceExtension } from '../utils/paths';
import webpack from 'webpack';

export default class VirtualEntry extends NormalEntry {
  originalSource: string;
  virtualPath: string;
  virtualModule: any;

  constructor(builder: Builder, name: string, filename: string) {
    super(builder, name, filename);
    this.originalSource = fs.existsSync(this.filename) ? fs.readFileSync(this.filename).toString() : '';
    this.virtualPath = path.resolve(
      replaceExtension(this.filename, this.filename.endsWith('.ts') ? '.entry.ts' : '.entry.js')
    );
    this.virtualModule = new VirtualModulesPlugin({
      [this.virtualPath]: this.outputSource(),
    });
  }

  outputSource() {
    return this.originalSource;
  }

  updateSource(force = false) {
    const source = fs.readFileSync(this.filename).toString();
    if (!force && source === this.originalSource) {
      return;
    }
    this.originalSource = source;
    this.virtualModule.writeModule(this.virtualPath, this.outputSource());
  }

  addToWebpack(compiler: webpack.Compiler, compilation: compilation.Compilation) {
    return new Promise(resolve => {
      if (!this.virtualModule._compiler) {
        this.virtualModule.apply(compiler);
        this.virtualModule.writeModule(this.virtualPath, this.outputSource());
      }
      const dep = new SingleEntryDependency(this.virtualPath);
      dep.loc = { name: this.name };
      compilation.addEntry(null, dep, this.name, resolve);
    });
  }
}
