import * as fs from 'fs';
import * as path from 'path';
import { compilation } from 'webpack';
import { nativeComponents } from '@remax/macro';
import { Options, EntryInfo } from '@remax/types';
import { isPluginPath } from '../../../utils/nativeComponent';
import { pageConfigFile } from '../../../utils/paths';
import API from '../../../../API';
import SourceCache from '../../../../SourceCache';
import { slash } from '@remax/shared';
import readManifest from '../../../../readManifest';
import { matcher } from '../../../../extensions';

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

function getUsingComponents(modules: string[], options: Options, compilation: compilation.Compilation) {
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

export default function createManifest(
  options: Options,
  page: EntryInfo,
  modules: string[],
  compilation: compilation.Compilation,
  api: API,
  cache: SourceCache
) {
  const rootPath = slash(path.join(options.cwd, options.rootDir) + '/');
  const manifestPath = page.filename.replace(matcher, '.json').replace(rootPath, '');
  const config = readManifest(pageConfigFile(page.filename), options.target!);
  const usingComponents = getUsingComponents(modules, options, compilation);

  config.usingComponents = {
    ...(config.usingComponents || {}),
    ...usingComponents,
  };

  const source = JSON.stringify(
    api.onPageConfig({
      page: page.name,
      config,
    }),
    null,
    2
  );

  cache.invalid(manifestPath, source, () => {
    compilation.assets[manifestPath] = {
      source: () => source,
      size: () => Buffer.byteLength(source),
    };
  });
}
