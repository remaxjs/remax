import esm from 'esm';
import fs from 'fs';

function readTypescriptManifest(path: string, target: string) {
  require('@babel/register')({
    presets: [
      ['@babel/preset-env', { modules: 'commonjs' }],
      '@babel/preset-typescript',
    ],
    extensions: ['.ts'],
    cache: false,
  });
  // eslint-disable-next-line no-global-assign
  require = esm(module, {
    cjs: {
      dedefault: true,
    },
  });
  delete require.cache[require.resolve(path)];
  const config =
    require(path)[target] || require(path).default || require(path);

  return config;
}

function readJavascriptManifest(path: string, target: string) {
  // eslint-disable-next-line no-global-assign
  require = esm(module, {
    cjs: {
      dedefault: true,
    },
  });

  delete require.cache[require.resolve(path)];
  const config =
    require(path)[target] || require(path).default || require(path);

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
