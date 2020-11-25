import fs from 'fs';
import path from 'path';
import { getDefaultOptions } from './defaultOptions';
import { Options } from '@remax/types';
import { slash } from '@remax/shared';
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

  options.cwd = slash(path.normalize(options.cwd)).replace(/\/$/, '');
  options.rootDir = slash(path.normalize(options.rootDir)).replace(/\/$/, '');

  return {
    ...getDefaultOptions(),
    ...options,
  };
}
