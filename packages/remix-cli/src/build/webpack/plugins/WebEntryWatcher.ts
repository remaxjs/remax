import ejs from 'ejs';
import { Compiler } from 'webpack';
import { Options } from '@alipay/remix-types';
import getAppConfig from '../../utils/getAppConfig';
import getEntries from '../../../getEntries';
import { generatePageRoutesInfo, entryName } from '../../utils/web';
import API from '../../../API';

const PLUGIN_NAME = 'RemixWebEntryWatcherPlugin';

export default class WebEntryWatcherPlugin {
  virtualModules: any;
  entryTemplate: string;
  remixOptions: Options;
  api: API;

  constructor(virtualModules: any, entryTemplate: string, options: Options, api: API) {
    this.virtualModules = virtualModules;
    this.entryTemplate = entryTemplate;
    this.remixOptions = options;
    this.api = api;
  }

  apply(compiler: Compiler) {
    compiler.hooks.watchRun.tap(PLUGIN_NAME, () => {
      this.invalidEntry();
    });
  }

  invalidEntry() {
    const entries = getEntries(this.remixOptions, this.api);
    const appConfig = getAppConfig(this.remixOptions, this.api);

    this.virtualModules.writeModule(
      entryName(this.remixOptions),
      ejs.render(this.entryTemplate, {
        pages: generatePageRoutesInfo(this.remixOptions, entries.pages, this.api),
        appConfig,
      })
    );
  }
}
