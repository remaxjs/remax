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
  component: boolean;

  constructor(options: Options, api: API, component: boolean) {
    this.remaxOptions = options;
    this.api = api;
    this.component = component;
  }

  apply(compiler: Compiler) {
    compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation: compilation.Compilation) => {
      compilation.hooks.optimizeChunks.tap(PLUGIN_NAME, chunks => {
        const hostComponents = this.getHostComponents();
        const pageEvents = this.component ? {} : this.getPageEvents(chunks);
        const appEvents = this.component ? [] : this.getAppEvents();
        compilation.assets['__remax_runtime_options__.js'] = new OriginalSource(
          `module.exports = {
          hostComponents: ${JSON.stringify(hostComponents, null, 2)},
          pageEvents: ${JSON.stringify(pageEvents, null, 2)},
          appEvents: ${JSON.stringify(appEvents, null, 2)}
        }`,
          '__remax_runtime_options__.js'
        );
      });
    });
  }

  getPageEvents(chunks: compilation.Chunk[]) {
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

    return events;
  }

  getAppEvents() {
    let events: string[] = [];
    for (const key of appEvents.keys()) {
      // 这里 get 不可能为空
      events = events.concat(Array.from(appEvents.get(key)!));
    }

    for (const key of appClassEvents.keys()) {
      // 这里 get 不可能为空
      events = events.concat(Array.from(appClassEvents.get(key)!));
    }

    return Array.from(new Set(events.sort()));
  }

  getHostComponents() {
    return [...hostComponents.keys()].reduce((obj, key) => {
      obj[key] = {
        alias: hostComponents.get(key)?.alias || {},
      };

      return obj;
    }, {} as any);
  }
}
