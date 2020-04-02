import * as path from 'path';
import * as fs from 'fs';
import { matcher } from '../../../../extensions';
import API from '../../../../API';
import readManifest from '../../../../readManifest';
import { compilation } from 'webpack';
import { RemaxOptions } from 'remax-types';
import * as cacheable from './cacheable';
import { nativeComponents } from '../../../nativeComponents';

const NATIVE_COMPONENT_OUTPUT_DIR = 'remaxVendors';

function getNativeComponentAssetOutputPath(sourcePath: string, options: RemaxOptions) {
  return (
    NATIVE_COMPONENT_OUTPUT_DIR +
    '/' +
    sourcePath
      .replace(options.cwd + '/', '')
      .replace(options.rootDir + '/', '')
      .replace(/@/g, '_')
      .replace(/node_modules/g, 'npm')
  );
}

function getUsingComponents(modules: string[], options: RemaxOptions, compilation: compilation.Compilation) {
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

    const usingPath = '/' + getNativeComponentAssetOutputPath(component.sourcePath, options);
    const ext = path.extname(usingPath);
    config[component.id] = usingPath.replace(new RegExp(`${ext}$`), '');

    return config;
  }, {});
}

export default function createPageManifest(
  options: RemaxOptions,
  pagePath: string,
  modules: string[],
  compilation: compilation.Compilation
) {
  const rootPath = path.join(options.cwd, options.rootDir) + '/';
  const configPath = pagePath.replace(matcher, '.config');
  const manifestPath = pagePath.replace(matcher, '.json').replace(rootPath, '');
  const config = readManifest(configPath, API.adapter.target);
  const usingComponents = getUsingComponents(modules, options, compilation);

  config.usingComponents = {
    ...(config.usingComponents || {}),
    ...usingComponents,
  };

  const source = JSON.stringify(config, null, 2);

  if (!cacheable.invalid(manifestPath, source)) {
    return;
  }

  compilation.assets[manifestPath] = {
    source: () => source,
    size: () => Buffer.byteLength(source),
  };
}
