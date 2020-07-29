import * as fs from 'fs';
import * as path from 'path';
import { Options, Platform } from '@remax/types';
import getEntries from '../../getEntries';
import API from '../../API';
import { targetExtensions } from '../../extensions';

export function searchJSFile(file: string, target: Platform) {
  for (const e of targetExtensions(target)) {
    const extFile = file + e;
    if (fs.existsSync(extFile)) {
      return extFile;
    }
  }

  return '';
}

export function appConfigFile(options: Options) {
  return searchJSFile(path.join(options.cwd, options.rootDir, 'app.config'), options.target!);
}

export function pageConfigFile(pageFile: string, options: Options) {
  const ext = path.extname(pageFile);
  return searchJSFile(pageFile.replace(new RegExp(`\\${ext}$`), '.config'), options.target!);
}

export function pageConfigFiles(options: Options, api: API) {
  const entries = getEntries(options, api);
  return entries.pages.map(p => pageConfigFile(p.filename, options));
}
