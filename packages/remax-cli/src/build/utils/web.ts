import * as path from 'path';
import winPath from '../../winPath';
import { Options, Platform, EntryInfo } from '@remax/types';
import readManifest from '../../readManifest';
import { pageConfigFile } from './paths';

export function generatePageRoutesInfo(options: Options, pages: EntryInfo[]) {
  return pages.map(p => {
    const ROOT = winPath(path.join(options.cwd, options.rootDir)) + '/';
    const configFile = pageConfigFile(p.filename);
    return {
      originalPath: p.filename,
      route: p.name,
      path: p.filename.replace(ROOT, './'),
      config: configFile ? readManifest(configFile, Platform.web) : {},
    };
  });
}

export function entryName(options: Options) {
  return `./${options.rootDir}/remax-entry.js`;
}
