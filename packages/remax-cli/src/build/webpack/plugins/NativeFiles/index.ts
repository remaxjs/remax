import { Compiler } from 'webpack';
import { Options } from '@remax/types';
import API from '../../../../API';
import createAppManifest from './createAppManifest';
import createPageTemplate, { createBaseTemplate } from './createPageTemplate';
import createTurboPageTemplate from './createTurboPageTemplate';
import createPageManifest from './createPageManifest';
import * as turboPages from '../../../utils/turboPages';
import getModules from '../../../utils/modules';
import { getPages } from '../../../../getEntries';

const PLUGIN_NAME = 'RemaxNativeFilesPlugin';

export default class NativeFilesPlugin {
  api: API;
  remaxOptions: Options;

  constructor(api: API, options: Options) {
    this.api = api;
    this.remaxOptions = options;
  }

  apply(compiler: Compiler) {
    compiler.hooks.emit.tapAsync(PLUGIN_NAME, async (compilation, callback) => {
      const options = this.remaxOptions;
      const meta = this.api.getMeta();

      // app.json
      await createAppManifest(options, compilation);

      // base template
      await createBaseTemplate(this.api, options, meta, compilation);

      Promise.all(
        getPages(options).map(async page => {
          const chunk = compilation.chunks.find(c => {
            return c.name === page.name;
          });

          // TODO: 应该有更好的获取 modules 的方式？
          const modules = [...getModules(chunk), page.filename];

          if (turboPages.validate(page.filename, options)) {
            // turbo page
            await createTurboPageTemplate(this.api, options, page.filename, modules, meta, compilation);
          } else {
            // page template
            await createPageTemplate(this.api, options, page.filename, meta, compilation);
          }

          await createPageManifest(options, page.filename, modules, compilation);
        })
      ).then(() => {
        callback();
      });
    });
  }
}
