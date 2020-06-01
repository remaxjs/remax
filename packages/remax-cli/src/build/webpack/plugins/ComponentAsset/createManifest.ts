import * as path from 'path';
import * as fs from 'fs';
import { nativeComponents } from '@remax/macro';
import readManifest from '../../../../readManifest';
import { isPluginPath } from '../../../utils/nativeComponent';
import { compilation } from 'webpack';
import { Options } from '@remax/types';
import { componentConfigFile } from '../../../utils/paths';
import SourceCache from '../../../../SourceCache';
import { slash } from '@remax/shared';

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

function getUsingComponents(options: Options, compilation: compilation.Compilation) {
  const components = Array.from(nativeComponents.values());

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

export default function createManifest(options: Options, compilation: compilation.Compilation, cache: SourceCache) {
  const manifestPath = 'index.json';
  const config = readManifest(componentConfigFile(options), options.target!);
  const usingComponents = getUsingComponents(options, compilation);

  config.component = true;
  config.usingComponents = {
    ...(config.usingComponents || {}),
    ...usingComponents,
  };

  const source = JSON.stringify(config, null, 2);

  cache.invalid(manifestPath, source, () => {
    compilation.assets[manifestPath] = {
      source: () => source,
      size: () => Buffer.byteLength(source),
    };
  });
}
