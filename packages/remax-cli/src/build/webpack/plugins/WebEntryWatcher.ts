import ejs from 'ejs';
import { Compiler } from 'webpack';
import { Options } from '@remax/types';
import getAppConfig from '../../utils/getAppConfig';
import getEntries from '../../../getEntries';
import { generatePageRoutesInfo, entryName } from '../../utils/web';
import API from '../../../API';

const PLUGIN_NAME = 'RemaxWebEntryWatcherPlugin';

export default class WebEntryWatcherPlugin {
  virtualModules: any;
  entryTemplate: string;
  remaxOptions: Options;
  api: API;

  constructor(virtualModules: any, entryTemplate: string, options: Options, api: API) {
    this.virtualModules = virtualModules;
    this.entryTemplate = entryTemplate;
    this.remaxOptions = options;
    this.api = api;
  }

  apply(compiler: Compiler) {
    compiler.hooks.watchRun.tap(PLUGIN_NAME, () => {
      this.invalidEntry();
    });
  }

  invalidEntry() {
    const entries = getEntries(this.remaxOptions, this.api);
    const appConfig = getAppConfig(this.remaxOptions, this.api);

    this.virtualModules.writeModule(
      entryName(this.remaxOptions),
      ejs.render(this.entryTemplate, {
        pages: generatePageRoutesInfo(this.remaxOptions, entries.pages, this.api),
        appConfig,
      })
    );
  }
}
