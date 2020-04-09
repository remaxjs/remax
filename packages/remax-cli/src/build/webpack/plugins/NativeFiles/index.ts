import * as path from 'path';
import { Compiler } from 'webpack';
import { RemaxOptions, Entries } from 'remax-types';
import API from '../../../../API';
import createAppManifest from './createAppManifest';
import createPageTemplate, { createBaseTemplate } from './createPageTemplate';
import createTurboPageTemplate from './createTurboPageTemplate';
import createPageManifest from './createPageManifest';
import createPageHelperFile from './createPageHelperFile';
import * as turboPages from '../../../turboPages';

const PLUGIN_NAME = 'RemaxNativeFilesPlugin';

export default class NativeFilesPlugin {
  remaxOptions: RemaxOptions;
  entries: Entries;

  constructor(options: RemaxOptions, entries: Entries) {
    this.remaxOptions = options;
    this.entries = entries;
  }

  apply(compiler: Compiler) {
    compiler.hooks.emit.tapAsync(PLUGIN_NAME, async (compilation, callback) => {
      const options = this.remaxOptions;
      const entries = this.entries;
      const meta = API.getMeta();

      // app.json
      await createAppManifest(options, compilation);

      // base template
      await createBaseTemplate(options, meta, compilation);

      Promise.all(
        entries.pages.map(async pagePath => {
          const chunk = compilation.chunks.find(c => {
            let name = pagePath.replace(path.join(options.cwd, options.rootDir) + '/', '');
            const ext = path.extname(name);
            name = name.replace(new RegExp(`${ext}$`), '');
            return c.name === name;
          });

          // TODO: 应该有更好的获取 modules 的方式？
          const modules = [
            ...Array.from(chunk._modules)
              .map((m: any) => m.resource)
              .filter(Boolean),
            pagePath,
          ];

          if (turboPages.validate(pagePath, options)) {
            // turbo page
            await createTurboPageTemplate(options, pagePath, modules, meta, compilation);
          } else {
            // page template
            await createPageTemplate(options, pagePath, meta, compilation);
            // page helper
            await createPageHelperFile(options, pagePath, meta, compilation);
          }

          await createPageManifest(options, pagePath, modules, compilation);
        })
      ).then(() => {
        callback();
      });
    });
  }
}
