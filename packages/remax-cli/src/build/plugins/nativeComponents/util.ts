import * as fs from 'fs';
import path from 'path';
import resolve from 'resolve';
import extensions from '../../../extensions';
import alias from '../alias';
import winPath from '../../../winPath';
import { RemaxOptions } from 'remax-types';
import { getAppConfig } from '../../../getEntries';

export const pushArray = (arr: string[], path: string) => {
  if (arr.includes(path)) {
    return;
  }

  arr.push(path);
};

export const isPluginComponent = (
  sourcePath: string,
  options: RemaxOptions
) => {
  if (!sourcePath.startsWith('plugin://')) {
    return false;
  }

  const { plugins, subpackages = [], subPackages = [] } = getAppConfig(options);
  const subs = [...subpackages, ...subPackages];

  if (!plugins && !subs.some(sub => sub.plugins)) {
    return false;
  }

  const [, pluginName = ''] = /^plugin:\/\/(\w+)\//.exec(sourcePath) || [];
  if (!pluginName) {
    return false;
  }

  if (
    (plugins && plugins[pluginName]) ||
    subs.find(sub => sub.plugins && sub.plugins[pluginName])
  ) {
    return true;
  }

  return false;
};

export const getSourcePath = (
  options: RemaxOptions,
  source: string,
  importer: string
) => {
  let sourcePath: string = alias(options).resolveId(source, importer) || source;

  // ignore rollup's virtual modules
  if (sourcePath.startsWith('\0')) {
    return sourcePath;
  }

  if (!isPluginComponent(sourcePath, options)) {
    sourcePath = resolve.sync(sourcePath, {
      extensions,
      basedir: path.dirname(importer),
    });
  }

  return sourcePath;
};

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

export const readFile = (filePath: string) => {
  return fs.readFileSync(filePath).toString();
};
