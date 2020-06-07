import * as path from 'path';
import { compilation } from 'webpack';
import { Options, EntryInfo } from '@remax/types';
import { slash } from '@remax/shared';
import { matcher } from '../../../../extensions';
import readManifest from '../../../../readManifest';
import * as cacheable from './cacheable';
import { pageConfigFile } from '../../../utils/paths';
import API from '../../../../API';
import getUsingComponents from './getUsingComponents';

export default function createPageManifest(
  options: Options,
  page: EntryInfo,
  modules: string[],
  compilation: compilation.Compilation,
  api: API
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

  if (!cacheable.invalid(manifestPath, source)) {
    return;
  }

  compilation.assets[manifestPath] = {
    source: () => source,
    size: () => Buffer.byteLength(source),
  };
}
