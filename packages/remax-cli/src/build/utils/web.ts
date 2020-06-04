import * as path from 'path';
import { slash } from '@remax/shared';
import { Options, Platform, EntryInfo } from '@remax/types';
import readManifest from '../../readManifest';
import { pageConfigFile } from './paths';
import API from '../../API';

export function generatePageRoutesInfo(options: Options, pages: EntryInfo[], api: API) {
  return pages.map(p => {
    const ROOT = slash(path.join(options.cwd, options.rootDir)) + '/';
    const configFile = pageConfigFile(p.filename);
    const config = api.onPageConfig({
      page: p.name,
      config: configFile ? readManifest(configFile, Platform.web) : {},
    });
    return {
      originalPath: p.filename,
      route: p.name,
      path: p.filename.replace(ROOT, './'),
      config,
    };
  });
}

export function entryName(options: Options) {
  return `./${options.rootDir}/remax-entry.js`;
}
