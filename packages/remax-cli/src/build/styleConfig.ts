import * as path from 'path';
import { cosmiconfigSync } from 'cosmiconfig';
import { RemaxOptions, Meta } from 'remax-types';

export const cssModuleMatcher = /\.module\.(css|less|sass|stylus)/;

export function resolvePostcssConfig(options: RemaxOptions) {
  if (!cosmiconfigSync('postcss').search(options.cwd)?.isEmpty) {
    return options.cwd;
  }

  return path.join(__dirname, '../');
}

export function getCssModuleConfig(cssModule: boolean | RegExp) {
  let regExp = cssModuleMatcher;
  let enabled = true;

  if (typeof cssModule === 'boolean') {
    if (!cssModule) {
      enabled = false;
    }
  } else {
    regExp = cssModule;
  }

  return {
    enabled,
    regExp,
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

export function entryGroup(entryKeys: string[], meta: Meta) {
  return entryKeys.reduce<any>((acc, key) => {
    const name = key + meta.style;
    acc[name] = {
      name,
      test: (module: any, chunks: any[]) => {
        if (module.constructor.name === 'CssModule') {
          const isApp = !!chunks.find(c => c.name === 'app');

          if (isApp && key !== 'app') {
            return false;
          }

          return chunks.find(c => c.name === key);
        }

        return false;
      },
      enforce: true,
    };

    return acc;
  }, {});
}
