import * as fs from 'fs';
import * as path from 'path';
import { compilation } from 'webpack';
import { Options } from '@remax/types';
import { nativeComponents } from '@remax/macro';
import { slash } from '@remax/shared';
import { isPluginPath } from '../../../utils/nativeComponent';

const NATIVE_COMPONENT_OUTPUT_DIR = 'remaxVendors';

function getNativeComponentAssetOutputPath(sourcePath: string, options: Options) {
  return (
    NATIVE_COMPONENT_OUTPUT_DIR +
    '/' +
    slash(sourcePath)
      .replace(slash(options.cwd) + '/', '')
      .replace(slash(options.rootDir) + '/', '')
      .replace(/@/g, '_')
      .replace(/node_modules/g, 'npm')
  );
}

export default function getUsingComponents(modules: string[], options: Options, compilation: compilation.Compilation) {
  const components = Array.from(nativeComponents.values()).filter(component =>
    component.importers.some(importer => modules.includes(importer))
  );

  return components.reduce<any>((config, component) => {
    component.assets.forEach(asset => {
      const assetPath = getNativeComponentAssetOutputPath(asset, options);
      const source = fs.readFileSync(asset);

      compilation.assets[assetPath] = {
        source: () => source,
        size: () => Buffer.byteLength(source),
      };
    });

    if (isPluginPath(component.sourcePath)) {
      config[component.id] = component.sourcePath;
    } else {
      const usingPath = '/' + getNativeComponentAssetOutputPath(component.sourcePath, options);
      const ext = path.extname(usingPath);
      config[component.id] = usingPath.replace(new RegExp(`\\${ext}$`), '');
    }

    return config;
  }, {});
}
