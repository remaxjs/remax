import * as path from 'path';
import { Options, Entries } from '@remax/types';
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

export function filter(entries: Entries, options: Options) {
  return entries.pages.filter(p => validate(p, options));
}
