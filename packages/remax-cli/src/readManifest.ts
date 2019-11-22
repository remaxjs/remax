import esm from 'esm';
import { isEmpty } from 'lodash';
import fs from 'fs';

// eslint-disable-next-line
require = esm(module, {
  cjs: {
    dedefault: true,
  },
});

function exception(path: string, target: string) {
  throw new Error(
    `${path} 没有导出默认配置或者 ${target} 配置, 请参考 https://remaxjs.org/guide/config 小程序配置`
  );
}

function readTypescriptManifest(path: string, target: string) {
  require('@babel/register')({
    presets: ['@babel/preset-typescript'],
    extensions: ['.ts'],
    cache: false,
  });
  const config = require(path)[target] || require(path);

  if (isEmpty(config)) {
    exception(path, target);
  }

  return config;
}

function readJavascriptManifest(path: string, target: string) {
  delete require.cache[require.resolve(path)];
  const config = require(path)[target] || require(path);

  if (isEmpty(config)) {
    exception(path, target);
  }

  return config;
}

export default function readManifest(
  path: string,
  target: string,
  strict = false
) {
  const tsPath = path + '.ts';
  if (fs.existsSync(tsPath)) {
    return readTypescriptManifest(tsPath, target);
  }

  const jsPath = path + '.js';
  if (fs.existsSync(jsPath)) {
    return readJavascriptManifest(jsPath, target);
  }

  if (strict) {
    throw new Error(
      `${path}.ts|js 文件不存在，请先创建配置文件，参考 https://remaxjs.org/guide/config`
    );
  }

  return {};
}
