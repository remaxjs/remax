import fs from 'fs';
import path from 'path';
import esm from 'esm';
import defaultOptions from './defaultOptions';
import { RemaxOptions } from 'remax-types';
import validateOptions from 'schema-utils';
import schema from './RemaxOptionsSchema.json';

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
  let options = {};

  if (fs.existsSync(configPath + '.js')) {
    options = readJavascriptConfig(configPath + '.js');
  }

  if (validate) {
    validateOptions(schema as any, options, {
      name: 'remax',
    });
  }

  return {
    ...defaultOptions,
    ...options,
  };
}
