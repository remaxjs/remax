import * as fs from 'fs';
import * as path from 'path';
import { Options } from '@remax/types';
import getEntries from '../../getEntries';
import API from '../../API';

export function searchJSFile(file: string) {
  const exts = ['ts', 'tsx', 'js', 'jsx'];

  for (const e of exts) {
    const extFile = file + '.' + e;
    if (fs.existsSync(extFile)) {
      return extFile;
    }
  }

  return '';
}

export function appConfigFile(options: Options) {
  return searchJSFile(path.join(options.cwd, options.rootDir, 'app.config'));
}

export function pageConfigFile(pageFile: string) {
  const ext = path.extname(pageFile);
  return searchJSFile(pageFile.replace(new RegExp(`\\${ext}$`), '.config'));
}

export function pageConfigFiles(options: Options, api: API) {
  const entries = getEntries(options, api);
  return entries.pages.map(p => pageConfigFile(p.filename));
}
