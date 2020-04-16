import * as path from 'path';
import { ReplaceSource } from 'webpack-sources';
import { Compiler, compilation } from 'webpack';
import { RemaxOptions, Entries } from '@remax/types';
import { appEvents, pageEvents } from 'remax/macro';
import winPath from './../../../winPath';
import { matcher } from '../../../extensions';

const PLUGIN_NAME = 'RemaxDefineEventPlugin';

export default class DefineEventPlugin {
  remaxOptions: RemaxOptions;
  entries: Entries;

  constructor(options: RemaxOptions, entries: Entries) {
    this.remaxOptions = options;
    this.entries = entries;
  }

  apply(compiler: Compiler) {
    compiler.hooks.compilation.tap(PLUGIN_NAME, compilation => {
      compilation.moduleTemplates.javascript.hooks.render.tap(PLUGIN_NAME, (moduleSource, module) => {
        if (/lifecycle/.test(module.resource)) {
          const source = new ReplaceSource(moduleSource);

          const startA = this.getReplaceStartIndex(source, /__REMAX_ENTRY_INFO__/);
          const startB = this.getReplaceStartIndex(source, /__REMAX_APP_EVENTS__/);
          const startC = this.getReplaceStartIndex(source, /__REMAX_PAGE_EVENTS__/);

          if (startA) {
            source.replace(startA, startA + 20, this.stringifyEntryInfo(compilation));
          }
          if (startB) {
            source.replace(startB, startB + 20, this.stringifyAppEvents());
          }
          if (startC) {
            source.replace(startC, startC + 21, this.stringifyPageEvents());
          }

          return source;
        }
        return moduleSource;
      });
    });
  }

  getReplaceStartIndex(source: ReplaceSource, regExp: RegExp) {
    return regExp.exec(source.source())?.index;
  }

  stringifyEntryInfo(compilation: compilation.Compilation) {
    const options = this.remaxOptions;
    const entries = this.entries;

    const entryWithModules = entries.pages.map(pagePath => {
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
      ];

      return {
        name: chunk.name,
        modules,
      };
    });

    return JSON.stringify(entryWithModules, null, 2);
  }

  stringifyPageEvents() {
    const events: any = {};

    for (const key of pageEvents.keys()) {
      // 这里 get 不可能为空
      events[key] = Array.from(pageEvents.get(key)!);
    }

    return JSON.stringify(events, null, 2);
  }

  stringifyAppEvents() {
    let events: string[] = [];
    for (const key of appEvents.keys()) {
      // 这里 get 不可能为空
      events = events.concat(Array.from(appEvents.get(key)!));
    }

    return JSON.stringify(events, null, 2);
  }
}
