import * as fs from 'fs';
import path from 'path';
import winPath from '../../../winPath';

export const pushArray = (arr: string[], path: string) => {
  if (arr.includes(path)) {
    return;
  }

  arr.push(path);
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
