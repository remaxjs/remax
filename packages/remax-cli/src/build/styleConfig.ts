import * as path from 'path';
import { cosmiconfigSync } from 'cosmiconfig';
import { RemaxOptions } from '@remax/types';

export const styleMatcher = /\.(css|less|s[ac]ss|styl(us)?)$/i;

export function resolvePostcssConfig(options: RemaxOptions) {
  if (!cosmiconfigSync('postcss').search(options.cwd)?.isEmpty) {
    return options.cwd;
  }

  return path.join(__dirname, '../');
}

export function enabled(module: string) {
  try {
    require.resolve(module);
    return true;
  } catch {
    return false;
  }
}
