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
    compiler.hooks.compilation.tap(PLUGIN_NAME, compilation => {
      compilation.moduleTemplates.javascript.hooks.render.tap(PLUGIN_NAME, moduleSource => {
        const source = new ReplaceSource(moduleSource);

        const startA = this.getReplaceStartIndex(source, /__REMAX_ENTRY_INFO__/);
        const startB = this.getReplaceStartIndex(source, /__REMAX_APP_EVENTS__/);
        const startC = this.getReplaceStartIndex(source, /__REMAX_PAGE_EVENTS__/);
        const startD = this.getReplaceStartIndex(source, /__REMAX_HOST_COMPONENTS__/);

        if (startA) {
          source.replace(startA, startA + 19, this.stringifyEntryInfo(compilation));
        }
        if (startB) {
          source.replace(startB, startB + 19, this.stringifyAppEvents());
        }
        if (startC) {
          source.replace(startC, startC + 20, this.stringifyPageEvents());
        }

        if (startD) {
          source.replace(startD, startD + 24, this.stringifyHostComponents());
        }

        return source;
      });
    });
  }

  getReplaceStartIndex(source: ReplaceSource, regExp: RegExp) {
    return regExp.exec(source.source())?.index;
  }

  stringifyEntryInfo(compilation: compilation.Compilation) {
    let entryWithModules = getPages(this.remaxOptions).map(page => {
      const chunk = compilation.chunks.find(c => {
        return c.name === page.name;
      });

      // TODO: 应该有更好的获取 modules 的方式？
      const modules = getModules(chunk);

      return {
        name: chunk.name,
        modules,
      };
    });

    if (process.env.NODE_ENV === 'test') {
      entryWithModules = [];
    }

    return JSON.stringify(entryWithModules, null, 2);
  }

  stringifyPageEvents() {
    let events: any = {};

    for (const key of pageEvents.keys()) {
      // 这里 get 不可能为空
      events[key] = Array.from(pageEvents.get(key)!).sort();
    }

    if (process.env.NODE_ENV === 'test') {
      events = {};
    }

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
