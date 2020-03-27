import * as path from 'path';
import { matcher } from '../../../../extensions';
import API from '../../../../API';
import readManifest from '../../../../readManifest';
import { compilation } from 'webpack';
import { RemaxOptions } from 'remax-types';

export default function createPageManifest(
  options: RemaxOptions,
  pagePath: string,
  compilation: compilation.Compilation
) {
  const rootPath = path.join(options.cwd, options.rootDir) + '/';
  const configPath = pagePath.replace(matcher, '.config').replace(rootPath, '');
  const manifestPath = pagePath.replace(matcher, '.json').replace(rootPath, '');
  const usingComponents = {};
  const config = readManifest(configPath, API.adapter.target);

  config.usingComponents = {
    ...(config.usingComponents || {}),
    ...usingComponents,
  };

  const source = JSON.stringify(config, null, 2);

  compilation.assets[manifestPath] = {
    source: () => source,
    size: () => Buffer.byteLength(source),
  };
}
