import * as fs from 'fs';
import path from 'path';
import resolve from 'enhanced-resolve';
import winPath from '../../winPath';
import { config } from '../webpack/config.mini';

export const getSourcePath = (source: string, importer: string) => {
  const resolveConfig = config.toConfig().resolve;
  const webpackResolver = resolve.create.sync(resolveConfig);
  const sourcePath = webpackResolver(path.dirname(importer), source);

  return sourcePath;
};

export function isPluginPath(sourcePath: string) {
  return sourcePath.startsWith('plugin://');
}

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
  return winPath(path.resolve(path.dirname(from), to));
};
