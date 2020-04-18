import * as path from 'path';
import { cosmiconfigSync } from 'cosmiconfig';
import { RemaxOptions } from '@remax/types';

export const styleMatcher = /\.(css|less|sass|stylus)$/i;

let cssModuleMatcher = /\.module\.(css|less|sass|stylus)/i;

export function resolvePostcssConfig(options: RemaxOptions) {
  if (!cosmiconfigSync('postcss').search(options.cwd)?.isEmpty) {
    return options.cwd;
  }

  return path.join(__dirname, '../');
}

export function getCssModuleConfig(cssModule: boolean | RegExp) {
  let enabled = true;

  if (typeof cssModule === 'boolean') {
    if (!cssModule) {
      enabled = false;
    }
  } else {
    cssModuleMatcher = cssModule;
  }

  return {
    enabled,
    cssModuleMatcher,
  };
}

export function enabled(module: string) {
  try {
    require.resolve(module);
    return true;
  } catch {
    return false;
  }
}
