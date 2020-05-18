import * as path from 'path';
import { DefinePlugin } from 'webpack';
import Config from 'webpack-chain';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { Options } from '@remax/types';
import alias from '../utils/alias';
import { Platform } from '@remax/types';
import getEnvironment from '../utils/env';

export default function baseConfig(config: Config, options: Options, target: Platform) {
  config.resolveLoader.modules
    .merge(['node_modules', path.join(__dirname, './loaders')])
    .end()
    .extensions.merge(['.js', '.ts']);

  config.mode((process.env.NODE_ENV as any) === 'production' ? 'production' : 'development');

  config.context(options.cwd);

  config.resolve.alias.merge(alias(options, target));

  config.output.path(path.join(options.cwd, options.output));

  const env = getEnvironment(options, target);
  config.plugin('webpack-define-plugin').use(DefinePlugin, [env.stringified]);

  if (process.env.NODE_ENV === 'production') {
    config.plugin('clean-webpack-plugin').use(CleanWebpackPlugin);
  }

  return config;
}
