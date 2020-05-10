import * as path from 'path';
import ejs from 'ejs';
import { Compiler } from 'webpack';
import { Entries, Options } from '@remax/types';
import winPath from '../../../winPath';
import readManifest from '../../../readManifest';
import getAppConfig from '../../utils/getAppConfig';

const PLUGIN_NAME = 'RemaxWebEntryWatcherPlugin';

export default class WebEntryWatcherPlugin {
  virtualModules: any;
  entryTemplate: string;
  entries: Entries;
  pages: Array<{
    route: string;
    path: string;
    config: string;
    originalPath: string;
  }>;
  remaxOptions: Options;

  constructor(virtualModules: any, entryTemplate: string, entries: Entries, options: Options) {
    this.virtualModules = virtualModules;
    this.entryTemplate = entryTemplate;
    this.entries = entries;
    this.remaxOptions = options;
    this.pages = this.readPageConfig();
  }

  apply(compiler: Compiler) {
    compiler.hooks.invalid.tap(PLUGIN_NAME, (fileName: string) => {
      this.invalidEntry(fileName, this.entries.app);

      this.pages.find(p => {
        this.invalidEntry(fileName, p.originalPath);
      });
    });
  }

  readPageConfig = () => {
    return this.entries.pages.map(p => {
      const ext = path.extname(p);
      const ROOT = winPath(path.join(this.remaxOptions.cwd, this.remaxOptions.rootDir)) + '/';
      p = winPath(p);
      return {
        originalPath: p,
        route: p.replace(ROOT, '').replace(new RegExp(`\\${ext}$`), ''),
        path: p.replace(ROOT, './'),
        config: readManifest(p.replace(new RegExp(`\\${ext}$`), '.config'), 'web'),
      };
    });
  };

  invalidEntry = (invalidFileName: string, entryFilePath: string) => {
    const ext = path.extname(entryFilePath);
    const configPath = entryFilePath.replace(new RegExp(`\\${ext}$`), '.config.');

    if (invalidFileName.indexOf(configPath) !== -1) {
      const appConfig = getAppConfig(this.remaxOptions);

      this.virtualModules.writeModule(
        './src/remax-entry.js',
        ejs.render(this.entryTemplate, {
          pages: this.readPageConfig(),
          appConfig,
        })
      );
    }
  };
}
