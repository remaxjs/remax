import * as path from 'path';
import { Compiler, compilation } from 'webpack';
import { ConcatSource } from 'webpack-sources';
import { Meta } from 'remax-types';

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
        this.mergeStyleAssets(chunks, compilation);
        callback();
      });
    });
  }

  requireChunks(compilation: compilation.Compilation) {
    compilation.chunkGroups.forEach(group => {
      group.chunks.reverse().forEach((chunk: any) => {
        // require 相关的 chunk
        if (chunk.name !== group.name) {
          const relativePath = path.relative(path.dirname(group.name), chunk.name);
          const chunkPath = group.name + '.js';
          compilation.assets[chunkPath] = new ConcatSource(
            `require('./${relativePath}');`,
            '\n',
            compilation.assets[chunkPath] ?? ''
          );
        }
      });
    });
  }

  mergeStyleAssets(chunks: compilation.Chunk[], compilation: compilation.Compilation) {
    chunks.forEach(chunk => {
      const extension = this.meta.style;
      chunk.files
        .filter(f => f.endsWith(extension))
        .forEach(f => {
          let relatedEntries = f.replace(new RegExp(`${extension}$`), '').split('~');

          // 说明是 split chunk，把 split 出来的样式拼接回 entry
          if (relatedEntries.length > 1) {
            // app 相关的样式，全部放入 app 中
            if (relatedEntries.includes('app')) {
              relatedEntries = ['app'];
            }

            relatedEntries.forEach(e => {
              const entryStyleId = e + extension;
              compilation.assets[entryStyleId] = new ConcatSource(
                compilation.assets[f],
                '/* ' + f + ' */\n',
                compilation.assets[entryStyleId] ?? ''
              );
            });

            delete compilation.assets[f];
          }
        });
    });
  }
}
