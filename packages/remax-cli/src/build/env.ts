import * as fs from 'fs';
import * as path from 'path';
import { RemaxOptions } from 'remax-types';
import stringifyHostComponents from './stringifyHostComponents';
import { Replacement } from '@rollup/plugin-replace';

type Env = Record<string, string | undefined | Replacement>;

export default function getEnvironment(options: RemaxOptions, target: string) {
  const envFilePath = path.join(options.cwd, '.env');

  process.env.NODE_ENV = process.env.NODE_ENV || 'development';

  const NODE_ENV = process.env.NODE_ENV;

  // https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use
  const dotenvFiles = [
    `${envFilePath}.${NODE_ENV}.local`,
    `${envFilePath}.${NODE_ENV}`,
    // Don't include `.env.local` for `test` environment
    // since normally you expect tests to produce the same
    // results for everyone
    NODE_ENV !== 'test' && `${envFilePath}.local`,
    envFilePath,
  ].filter(Boolean) as string[];

  // Load environment variables from .env* files. Suppress warnings using silent
  // if this file is missing. dotenv will never modify any environment variables
  // that have already been set.  Variable expansion is supported in .env files.
  // https://github.com/motdotla/dotenv
  // https://github.com/motdotla/dotenv-expand
  dotenvFiles.forEach(dotenvFile => {
    if (fs.existsSync(dotenvFile)) {
      require('dotenv-expand')(
        require('dotenv').config({
          path: dotenvFile,
        })
      );
    }
  });

  // 注入所有 REMAX_APP_ 开头的环境变量
  const REMAX_APP = /^REMAX_APP_/i;

  const builtiEnv: Env = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    REMAX_PLATFORM: target,
  };

  const raw = Object.keys(process.env)
    .filter(key => REMAX_APP.test(key))
    .reduce((env: Env, key) => {
      env[key] = process.env[key] as string;
      return env;
    }, builtiEnv);

  const stringified = {
    ...Object.keys(raw).reduce((env: Env, key) => {
      env[`process.env.${key}`] = JSON.stringify(raw[key]);
      return env;
    }, {}),
    __REMAX_DEBUG__: JSON.stringify(process.env.REMAX_DEBUG),
    __REMAX_PX2RPX__: JSON.stringify(options.pxToRpx),
    __REMAX_HOST_COMPONENTS__: () => stringifyHostComponents(),
  };

  return { raw, stringified };
}
