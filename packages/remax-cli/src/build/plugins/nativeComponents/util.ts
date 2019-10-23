import * as fs from 'fs';
import path from 'path';
import resolve from 'resolve';
import extensions from '../../../extensions';
import alias from '../alias';
import winPath from '../../../winPath';
import { RemaxOptions } from '../../../getConfig';
import { getAppConfig } from '../../../getEntries';
import { Adapter } from '../../adapters';

export const pushArray = (arr: string[], path: string) => {
  if (arr.includes(path)) {
    return;
  }

  arr.push(path);
};

export const isPluginComponent = (
  sourcePath: string,
  options: RemaxOptions,
  adapter: Adapter
) => {
  if (!sourcePath.startsWith('plugin://')) {
    return false;
  }

  const appConfig = getAppConfig(options, adapter);
  if (!appConfig.plugins) {
    return false;
  }

  const [, pluginName] = /^plugin:\/\/(\w+)\//.exec(sourcePath) || [];
  if (!pluginName) {
    return false;
  }

  if (appConfig.plugins[pluginName]) {
    return true;
  }

  return false;
};

export const getSourcePath = (
  options: RemaxOptions,
  adapter: Adapter,
  source: string,
  importer: string
) => {
  let sourcePath: string = alias(options).resolveId(source, importer) || source;

  if (!isPluginComponent(sourcePath, options, adapter)) {
    sourcePath = resolve.sync(sourcePath, {
      extensions,
      basedir: path.dirname(importer),
    });
  }

  return sourcePath;
};

export const isNativeComponent = (sourcePath: string): boolean => {
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
