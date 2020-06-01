import { Compiler } from 'webpack';
import { Options } from '@remax/types';
import API from '../../../../API';
import createPageTemplate, { createBaseTemplate } from './createTemplate';
import createTurboTemplate from './createTurboTemplate';
import createManifest from './createManifest';
import * as turboPages from '../../../utils/turboPages';
import getModules from '../../../utils/modules';
import { getPages } from '../../../../getEntries';
import SourceCache from '../../../../SourceCache';

const PLUGIN_NAME = 'RemaxPageAssetPlugin';

export default class PageAssetPlugin {
  api: API;
  remaxOptions: Options;
  cache: SourceCache = new SourceCache();

  constructor(options: Options, api: API) {
    this.remaxOptions = options;
    this.api = api;
  }

  apply(compiler: Compiler) {
    compiler.hooks.emit.tapAsync(PLUGIN_NAME, async (compilation, callback) => {
      const options = this.remaxOptions;
      const meta = this.api.getMeta();

      // base template
      await createBaseTemplate(this.api, options, meta, compilation, this.cache);

      Promise.all(
        getPages(options, this.api).map(async page => {
          const chunk = compilation.chunks.find(c => {
            return c.name === page.name;
          });

          // TODO: 应该有更好的获取 modules 的方式？
          const modules = [...getModules(chunk), page.filename];

          if (turboPages.validate(page.filename, options)) {
            // turbo page
            await createTurboTemplate(this.api, options, page.filename, modules, meta, compilation);
          } else {
            // page template
            await createPageTemplate(this.api, options, page.filename, modules, meta, compilation, this.cache);
          }

          await createManifest(options, page, modules, compilation, this.api, this.cache);
        })
      ).then(() => {
        callback();
      });
    });
  }
}
