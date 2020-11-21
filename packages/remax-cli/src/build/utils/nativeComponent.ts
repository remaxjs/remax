import * as fs from 'fs';
import path from 'path';
import resolve from 'enhanced-resolve';
import { slash } from '@remax/shared';
import { Options } from '@remax/types';
import Config from 'webpack-chain';

export const getSourcePath = (source: string, importer: string, config: Config) => {
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

// 是否为用户原生自定义组件
export const isUserNativeComponent = (sourcePath: string | null, options: Options): boolean => {
  const pages = options.pages || [];
  if (!sourcePath) {
    return false;
  }

  return pages.some(page => page.originFilename === sourcePath);
};

export const isUserNativeRedirectPage = (sourcePath: string | null, options: Options): boolean => {
  const pages = options.pages || [];
  if (!sourcePath) {
    return false;
  }

  return pages.some(page => page.filename === sourcePath && page.isComponent);
};

export const getPath = (from: string, to: string) => {
  return slash(path.resolve(path.dirname(from), to));
};
