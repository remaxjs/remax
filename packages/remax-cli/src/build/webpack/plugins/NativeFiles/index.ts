import { Compiler } from 'webpack';
import { RemaxOptions } from 'remax-types';
import API from '../../../../API';
import getEntries from '../../../../getEntries';
import createAppManifest from './createAppManifest';
import createPageTemplate, { createBaseTemplate } from './createPageTemplate';
import createPageManifest from './createPageManifest';
import createPageHelperFile from './createPageHelperFile';

export default class NativeFilesPlugin {
  remaxOptions: RemaxOptions;

  constructor(options: RemaxOptions) {
    this.remaxOptions = options;
  }

  apply(compiler: Compiler) {
    compiler.hooks.emit.tapAsync('RemaxNativeFilePlugin', async (compilation, callback) => {
      const options = this.remaxOptions;
      const entries = getEntries(options);
      const meta = API.getMeta();

      // app.json
      await createAppManifest(options, compilation);
      // base template
      await createBaseTemplate(options, meta, compilation);

      // page template
      Promise.all(
        entries.pages.map(async pagePath => {
          await createPageTemplate(options, pagePath, meta, compilation);
          await createPageManifest(options, pagePath, compilation);
          await createPageHelperFile(options, pagePath, meta, compilation);
        })
      ).then(() => {
        callback();
      });
    });
  }
}
