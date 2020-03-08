import fs from 'fs';
import path from 'path';
import esm from 'esm';
import defaultOptions from './defaultOptions';
import { RemaxOptions, RemaxConfig } from 'remax-types';
import validateOptions from 'schema-utils';
import schema from './RemaxOptionsSchema.json';
import { validate as isHybridEnabled } from './hybridMode';

export interface CliOptions {
  target: string;
}

function readJavascriptConfig(path: string) {
  // eslint-disable-next-line
  require = esm(module, {
    cjs: {
      dedefault: true,
    },
  });
  delete require.cache[require.resolve(path)];
  const config = require(path);

  return config || {};
}

export default function getConfig(validate = true): RemaxOptions {
  const configPath: string = path.join(process.cwd(), './remax.config');
  let options: RemaxConfig = {};

  if (fs.existsSync(configPath + '.js')) {
    options = readJavascriptConfig(configPath + '.js');
  }

  if (validate) {
    validateOptions(schema as any, options, {
      name: 'remax',
    });
  }

  // hybrid 模式，将输出目录默认指定为当前目录
  if (isHybridEnabled(options)) {
    defaultOptions.output = '.';
  }

  return {
    ...defaultOptions,
    ...options,
  };
}
