import * as path from 'path';
import { Options, EntryInfo } from '@remax/types';
import { isMatch } from 'micromatch';
import { rename } from '../../extensions';
import winPath from '../../winPath';

export function validate(route: string, options: Options) {
  if (!route) {
    return false;
  }
  const page = rename(winPath(route).replace(winPath(path.join(options.cwd, options.rootDir)) + '/', ''), '');

  return isMatch(page, options.turboPages ?? []);
}

export function filter(pages: EntryInfo[], options: Options) {
  return pages.filter(p => validate(p.filename, options));
}
