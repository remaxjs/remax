import { Compiler, compilation } from 'webpack';
import { Options } from '@remax/types';
import { appEvents, pageEvents, hostComponents } from '@remax/macro';
import { slash } from '@remax/shared';
import getModules from '../../utils/modules';
import { getPages } from '../../../getEntries';
import API from '../../../API';
import { OriginalSource } from 'webpack-sources';

const PLUGIN_NAME = 'RemaxRuntimeOptionsPlugin';

type Events = Set<string>;

export const pageClassEvents = new Map<string, Events>();
export const appClassEvents = new Map<string, Events>();

export default class RuntimeOptionsPlugin {
  remaxOptions: Options;
  api: API;

  constructor(options: Options, api: API) {
    this.remaxOptions = options;
    this.api = api;
  }

  apply(compiler: Compiler) {
    compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation: compilation.Compilation) => {
      compilation.hooks.optimizeChunks.tap(PLUGIN_NAME, chunks => {
        compilation.assets['__remax_runtime_options__.js'] = new OriginalSource(
          `module.exports = {
          hostComponents: ${this.stringifyHostComponents()},
          pageEvents: ${this.stringifyPageEvents(chunks)},
          appEvents: ${this.stringifyAppEvents()}
        }`,
          '__remax_runtime_options__.js'
        );
      });
    });
  }

  stringifyPageEvents(chunks: compilation.Chunk[]) {
    const events: any = {};

    getPages(this.remaxOptions, this.api).forEach(page => {
      const chunk = chunks.find(c => {
        return c.name === page.name;
      });

      // TODO: 应该有更好的获取 modules 的方式？
      const modules = getModules(chunk);

      events[page.name] = Array.from(
        new Set(
          modules
            .reduce<string[]>((acc, cur) => {
              return [...acc, ...(pageEvents.get(slash(cur)) || []), ...(pageClassEvents.get(slash(cur)) || [])];
            }, [])
            .sort()
        )
      );
    });

    return JSON.stringify(events, null, 2);
  }

  stringifyAppEvents() {
    let events: string[] = [];
    for (const key of appEvents.keys()) {
      // 这里 get 不可能为空
      events = events.concat(Array.from(appEvents.get(key)!));
    }

    for (const key of appClassEvents.keys()) {
      // 这里 get 不可能为空
      events = events.concat(Array.from(appClassEvents.get(key)!));
    }

    return JSON.stringify(Array.from(new Set(events.sort())), null, 2);
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
