import { ConcatSource } from 'webpack-sources';
import appFiles from './appFiles/';
import pageFiles from './pageFiles/';

import { Compiler } from 'webpack';

const PLUGIN_NAME = 'MpRuntimeWebpackPlugin';

/**
 * 根据 entry 生成 remax 运行所需
 */

export default class MpRuntimeWebpackPlugin {
  entryChunks: any[];
  options: any;

  constructor(options: any) {
    this.options = options;
    this.entryChunks = [];
  }

  apply(compiler: Compiler) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    // TODO 收集页面中使用到的组件
    // compiler.hooks.normalModuleFactory.tap(PLUGIN_NAME, (nmf) => {
    //   nmf.hooks.beforeResolve.tap(PLUGIN_NAME, (result) => {
    //     // console.log(result.request);
    //   });
    //   nmf.hooks.afterResolve.tap(PLUGIN_NAME, (result) => {
    //     // console.log('\n', result.request);
    //   });
    // });
    compiler.hooks.thisCompilation.tap(PLUGIN_NAME, compilation => {
      compilation.hooks.optimizeChunkAssets.tapAsync(PLUGIN_NAME, (chunks, callback) => {
        const entryChunks = Array.from(compilation.entrypoints.keys());
        const allChunks = chunks.map(n => n.name);

        const bootstrapChunk = allChunks.filter(n => {
          return entryChunks.includes(n) == false;
        });

        if (entryChunks.includes('app')) {
          const APP = 'app.js';
          const bootstrapChunkCode = bootstrapChunk.map(n => `require("./${n}");`).join('\n');

          compilation.assets[APP] = new ConcatSource('\n', bootstrapChunkCode, '\n', compilation.assets[APP]);
        }
        callback();
      });
    });
    compiler.hooks.emit.tapAsync(PLUGIN_NAME, async (compilation, callback) => {
      self.entryChunks = Array.from(compilation.entrypoints.keys());
      const pageEntryNames = self.entryChunks.filter(e => e !== 'app');

      return Promise.all([
        await appFiles({ ...self.options, pages: pageEntryNames }),
        await pageFiles({ ...self.options, pages: pageEntryNames }),
      ])
        .then(([appFilesResult, pageFilesResult]) => {
          const files = Object.assign(appFilesResult, pageFilesResult);
          for (const file in files) {
            compilation.assets[file] = files[file];
          }
        })
        .then(() => {
          callback();
        });
    });
  }
}
