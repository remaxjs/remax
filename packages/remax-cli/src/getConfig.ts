import fs from 'fs';
import path from 'path';
import esm from 'esm';
import defaultOptions from './defaultOptions';
import { RemaxOptions, RemaxConfig } from '@remax/types';
import validateOptions from 'schema-utils';
import schema from './RemaxOptionsSchema.json';
import API from './API';

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

function validateTurboPages(config: RemaxConfig) {
  // adapter name 还不存在，说明 adapter plugin 还没有初始化
  if (!API.adapter.target || API.adapter.target === 'ali') {
    return;
  }

  if (config.turboPages && config.turboPages.length > 0) {
    throw new Error('turboPages 目前仅支持 ali 平台开启');
  }
}

export default function getConfig(validate = true): RemaxOptions {
  const configPath: string = path.join(process.cwd(), './remax.config');
  let options = {};

  if (fs.existsSync(configPath + '.js')) {
    options = readJavascriptConfig(configPath + '.js');
  }

  if (validate) {
    validateOptions(schema as any, options, {
      name: 'remax',
    });

    validateTurboPages(options);
  }

  return {
    ...defaultOptions,
    ...options,
  };
}
