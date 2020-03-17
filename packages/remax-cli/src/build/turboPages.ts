import { RemaxOptions } from 'remax-types';
import { isMatch } from 'micromatch';

export function validate(path: string, options: RemaxOptions) {
  return path && isMatch(path, options.turboPages);
}
