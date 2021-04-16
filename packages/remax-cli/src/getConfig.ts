import fs from 'fs';
import path from 'path';
import { getDefaultOptions } from './defaultOptions';
import type { Options } from '@remax/types';
import validateOptions from 'schema-utils';

const schema = require('../OptionsSchema.json');

export interface CliOptions {
  target: string;
}

function readJavascriptConfig(path: string) {
  delete require.cache[path];
  const config = require(path);
  return config || {};
}

function normalizeConfigPath(options: Options): Options {
  const pathKeys: Array<keyof Options> = ['cwd', 'rootDir', 'output'];
  pathKeys.forEach(key => {
    const value = options[key];
    // @ts-ignore string-type
    options[key] = path.normalize(value).replace(/(\\|\/)$/, '');
  });
  return options;
}

export default function getConfig(validate = true): Options {
  const configPath: string = path.join(process.cwd(), './remax.config');

  let options = {} as Options;

  if (fs.existsSync(configPath + '.js')) {
    options = readJavascriptConfig(configPath + '.js');
  }

  if (validate) {
    validateOptions(schema as any, options, {
      name: 'remax',
    });
  }

  const remaxConfig = {
    ...getDefaultOptions(),
    ...options,
  };

  return normalizeConfigPath(remaxConfig);
}
