import * as fs from 'fs';
import path from 'path';
import type { Platform } from '@remax/types';

function readTypescriptManifest(path: string, target: Platform) {
  require('@babel/register')({
    presets: [
      [require.resolve('@babel/preset-env'), { modules: 'commonjs' }],
      require.resolve('@babel/preset-typescript'),
    ],
    extensions: ['.ts'],
    cache: false,
  });
  delete require.cache[require.resolve(path)];
  const config = require(path)[target] || require(path).default || require(path);

  return config;
}

function readJavascriptManifest(path: string, target: Platform) {
  delete require.cache[require.resolve(path)];
  const config = require(path)[target] || require(path).default || require(path);

  return config;
}

export default function readManifest(filename: string, target: Platform, strict = false) {
  if (!fs.existsSync(filename)) {
    if (strict) {
      throw new Error(`${path}.ts|js 文件不存在，请先创建配置文件，参考 https://remaxjs.org/guide/config/remax`);
    }
    return {};
  }
  if (path.extname(filename) === '.ts') {
    return readTypescriptManifest(filename, target);
  } else {
    return readJavascriptManifest(filename, target);
  }
}
