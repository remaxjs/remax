import * as path from 'path';
import { Compiler } from 'webpack';
import { RemaxOptions } from 'remax-types';
import API from '../../../../API';
import getEntries from '../../../../getEntries';
import createAppManifest from './createAppManifest';
import createPageTemplate, { createBaseTemplate } from './createPageTemplate';
import createPageManifest from './createPageManifest';
import createPageHelperFile from './createPageHelperFile';

const PLUGIN_NAME = 'RemaxNativeFilesPlugin';

export default class NativeFilesPlugin {
  remaxOptions: RemaxOptions;

  constructor(options: RemaxOptions) {
    this.remaxOptions = options;
  }

  apply(compiler: Compiler) {
    compiler.hooks.emit.tapAsync(PLUGIN_NAME, async (compilation, callback) => {
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
          const chunk = compilation.chunks.find(c => {
            let name = pagePath.replace(path.join(options.cwd, options.rootDir) + '/', '');
            const ext = path.extname(name);
            name = name.replace(new RegExp(`${ext}$`), '');
            return c.name === name;
          });

          // compilation.chunks.forEach(c => {
          //   console.log(Array.from(c._modules).map((m: any) => m.resource));
          // });
          const modules = Array.from(chunk._modules)
            .map((m: any) => m.resource)
            .filter(Boolean);

          await createPageTemplate(options, pagePath, meta, compilation);
          await createPageManifest(options, pagePath, modules, compilation);
          await createPageHelperFile(options, pagePath, meta, compilation);
        })
      ).then(() => {
        callback();
      });
    });
  }
}
