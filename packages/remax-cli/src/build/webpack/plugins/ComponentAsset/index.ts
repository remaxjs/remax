import { Compiler } from 'webpack';
import SourceCache from '../../../../SourceCache';
import createManifest from './createManifest';
import createTemplate from './createTemplate';
import getModules from '../../../utils/modules';
import createTurboTemplate from '../PageAsset/createTurboTemplate';
import Builder from '../../../Builder';
import ComponentEntry from '../../../entries/ComponentEntry';

const PLUGIN_NAME = 'RemaxComponentAssetPlugin';

export default class ComponentAssetPlugin {
  builder: Builder;
  cache: SourceCache = new SourceCache();

  constructor(builder: Builder) {
    this.builder = builder;
  }

  apply(compiler: Compiler) {
    compiler.hooks.emit.tapAsync(PLUGIN_NAME, async (compilation, callback) => {
      const { options, api } = this.builder;
      const meta = api.getMeta();

      const { entries } = this.builder.entryCollection;
      await Promise.all(
        Array.from(entries.values()).map(async component => {
          if (!(component instanceof ComponentEntry)) {
            return Promise.resolve();
          }
          const chunk = compilation.chunks.find(c => {
            return c.name === component.name;
          });
          const modules = [...getModules(chunk), component.filename];

          let templatePromise;
          if (options.turboRenders) {
            // turbo page
            templatePromise = createTurboTemplate(this.builder.api, options, component, modules, meta, compilation);
          } else {
            templatePromise = createTemplate(component, options, meta, compilation, this.cache);
          }

          await Promise.all([
            await templatePromise,
            await createManifest(this.builder, component, compilation, this.cache),
          ]);
        })
      );

      callback();
    });
  }
}
