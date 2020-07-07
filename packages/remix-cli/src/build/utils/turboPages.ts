import * as path from 'path';
import { Options, EntryInfo } from '@alipay/remix-types';
import { slash } from '@alipay/remix-shared';
import { isMatch } from 'micromatch';
import { rename } from '../../extensions';

export function validate(route: string, options: Options) {
  if (!route) {
    return false;
  }
  const page = rename(slash(route).replace(slash(path.join(options.cwd, options.rootDir)) + '/', ''), '');

  return !isMatch(page, options.dynamicPages ?? []);
}

export function filter(pages: EntryInfo[], options: Options) {
  return pages.filter(p => validate(p.filename, options));
}
