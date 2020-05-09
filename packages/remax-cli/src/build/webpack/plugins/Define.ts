import { ReplaceSource } from 'webpack-sources';
import { Compiler, compilation } from 'webpack';
import { Options } from '@remax/types';
import { appEvents, pageEvents, hostComponents } from '@remax/macro';
import getModules from '../../utils/modules';
import { getPages } from '../../../getEntries';

const PLUGIN_NAME = 'RemaxDefinePlugin';

export default class DefinePlugin {
  remaxOptions: Options;

  constructor(options: Options) {
    this.remaxOptions = options;
  }

  apply(compiler: Compiler) {
    compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation: compilation.Compilation) => {
      compilation.hooks.optimizeChunkAssets.tapAsync(PLUGIN_NAME, (chunks, callback) => {
        compilation.chunkGroups.forEach(group => {
          group.chunks.forEach((chunk: any) => {
            const chunkPath = chunk.name + '.js';
            const source = new ReplaceSource(compilation.assets[chunkPath]);

            const startB = this.getReplaceStartIndex(source, /__REMAX_APP_EVENTS__/);
            const startC = this.getReplaceStartIndex(source, /__REMAX_PAGE_EVENTS__/);
            const startD = this.getReplaceStartIndex(source, /__REMAX_HOST_COMPONENTS__/);

            if (startB) {
              source.replace(startB, startB + 19, this.stringifyAppEvents());
            }
            if (startC) {
              source.replace(startC, startC + 20, this.stringifyPageEvents(compilation));
            }

            if (startD) {
              source.replace(startD, startD + 24, this.stringifyHostComponents());
            }
            compilation.assets[chunkPath] = source;
          });
        });

        appEvents.clear();
        pageEvents.clear();

        callback();
      });
    });
  }

  getReplaceStartIndex(source: ReplaceSource, regExp: RegExp) {
    return regExp.exec(source.source())?.index;
  }

  stringifyPageEvents(compilation: compilation.Compilation) {
    const events: any = {};

    getPages(this.remaxOptions).map(page => {
      const chunk = compilation.chunks.find(c => {
        return c.name === page.name;
      });

      // TODO: 应该有更好的获取 modules 的方式？
      const modules = getModules(chunk);

      events[page.name] = modules.reduce<string[]>((acc, cur) => {
        return [...acc, ...(pageEvents.get(cur) || [])];
      }, []);
    });

    return JSON.stringify(events, null, 2);
  }

  stringifyAppEvents() {
    let events: string[] = [];
    for (const key of appEvents.keys()) {
      // 这里 get 不可能为空
      events = events.concat(Array.from(appEvents.get(key)!).sort());
    }

    if (process.env.NODE_ENV === 'test') {
      events = [];
    }

    return JSON.stringify(events, null, 2);
  }

  stringifyHostComponents() {
    return JSON.stringify(
      [...hostComponents.keys()].reduce((obj, key) => {
        obj[key] = {
          alias: hostComponents.get(key)?.alias || {},
        };

        return obj;
      }, {} as any),
      null,
      2
    );
  }
}
