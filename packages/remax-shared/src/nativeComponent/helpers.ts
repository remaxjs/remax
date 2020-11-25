import * as fs from 'fs';
import path from 'path';
import { slash } from '../path';

export const isNativeComponent = (sourcePath: string | null): boolean => {
  if (!sourcePath) {
    return false;
  }

  if (path.extname(sourcePath) !== '.js') {
    return false;
  }

  const sourceJsonPath = sourcePath.replace(/\.js$/, '.json');

  if (!fs.existsSync(sourceJsonPath)) {
    return false;
  }

  return require(sourceJsonPath).component;
};

export const getPath = (from: string, to: string) => {
  return slash(path.resolve(path.dirname(from), to));
};

const NATIVE_COMPONENT_OUTPUT_DIR = 'remaxVendors';

export function getNativeEntryAssetOutputPath(sourcePath: string, options: { cwd: string; rootDir: string }) {
  return (
    NATIVE_COMPONENT_OUTPUT_DIR +
    '/' +
    slash(sourcePath)
      .replace(slash(options.cwd) + '/', '')
      .replace(slash(options.rootDir) + '/', '')
      .replace(/@/g, '_')
      .replace(/node_modules/g, 'npm')
  );
}
