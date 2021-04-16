import * as path from 'path';
import { Compiler, compilation } from 'webpack';
import { ConcatSource } from 'webpack-sources';
import type { Meta } from '@remax/types';
import { slash } from '@remax/shared';

const PLUGIN_NAME = 'RemaxOptimizeEntriesPlugin';

export default class OptimizeEntriesPlugin {
  meta: Meta;

  constructor(meta: Meta) {
    this.meta = meta;
  }

  apply(compiler: Compiler) {
    compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation: compilation.Compilation) => {
      compilation.hooks.optimizeChunkAssets.tapAsync(PLUGIN_NAME, (chunks, callback) => {
        this.requireChunks(compilation);
        this.requireStyles(compilation);
        callback();
      });
    });
  }

  requireChunks(compilation: compilation.Compilation) {
    compilation.chunkGroups.forEach(group => {
      group.chunks.reverse().forEach((chunk: any) => {
        // require 相关的 chunk
        if (chunk.name !== group.name) {
          const requires: string[] = [];
          chunk.files.forEach((file: string) => {
            if (file.endsWith('.js')) {
              const relativePath = slash(path.relative(path.dirname(group.name), file));
              requires.push(`require('./${relativePath}');\n`);
            }
          });
          const chunkPath = group.name + '.js';
          compilation.assets[chunkPath] = new ConcatSource(...requires, compilation.assets[chunkPath] ?? '');
        }
      });
    });
  }

  requireStyles(compilation: compilation.Compilation) {
    compilation.chunkGroups.forEach(group => {
      const assetPath = group.name + this.meta.style;

      group.chunks.reverse().forEach((chunk: any) => {
        // require 相关的 styles
        const requires = (chunk.files as string[])
          .filter(file => file.endsWith(this.meta.style) && assetPath !== file)
          .map(file => {
            const relativePath = slash(path.relative(path.dirname(group.name), file));
            const requirePath = `@import "./${relativePath}";\n`;
            return requirePath;
          });

        compilation.assets[assetPath] = new ConcatSource(...requires, compilation.assets[assetPath] ?? '');
      });
    });
  }
}
