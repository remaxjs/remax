import * as path from 'path';
import { RemaxOptions, Entries } from 'remax-types';
import { isMatch } from 'micromatch';
import { getEntryInfo } from '../getEntries';
import { rename } from '../extensions';

export function validate(route: string, options: RemaxOptions) {
  if (!route) {
    return false;
  }

  return isMatch(getEntryInfo(route, options).route, options.turboPages);
}

export function filter(entries: Entries, options: RemaxOptions) {
  return entries.pages.filter(p =>
    isMatch(
      rename(p.replace(path.join(options.cwd, options.rootDir) + '/', ''), ''),
      options.turboPages
    )
  );
}
