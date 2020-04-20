import * as path from 'path';
import { ReplaceSource } from 'webpack-sources';
import { Compiler, compilation } from 'webpack';
import { RemaxOptions, Entries } from '@remax/types';
import { appEvents, pageEvents, hostComponents } from 'remax/macro';
import winPath from './../../../winPath';
import { matcher } from '../../../extensions';

const PLUGIN_NAME = 'RemaxDefinePlugin';

export default class DefinePlugin {
  remaxOptions: RemaxOptions;
  entries: Entries;

  constructor(options: RemaxOptions, entries: Entries) {
    this.remaxOptions = options;
    this.entries = entries;
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
    const options = this.remaxOptions;
    const entries = this.entries;

    let entryWithModules = entries.pages.map(pagePath => {
      const chunk = compilation.chunks.find(c => {
        let name = winPath(pagePath).replace(winPath(path.join(options.cwd, options.rootDir)) + '/', '');
        const ext = path.extname(name);
        name = name.replace(new RegExp(`\\${ext}$`), '');
        return c.name === name;
      });

      // TODO: 应该有更好的获取 modules 的方式？
      const modules = [
        ...Array.from(chunk._modules)
          .map((m: any) => m.resource)
          .filter(m => matcher.test(m))
          .filter(Boolean),
        pagePath,
      ].sort();

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
