import * as path from 'path';
import Config from 'webpack-chain';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { RemaxOptions } from '../..';
import alias from '../utils/alias';
import { Platform } from '../utils/platform';

export default function baseConfig(config: Config, options: RemaxOptions, target: Platform) {
  config.resolveLoader.modules
    .merge(['node_modules', path.join(__dirname, './loaders')])
    .end()
    .extensions.merge(['.js', '.ts']);

  config.mode((process.env.NODE_ENV as any) || 'development');

  config.context(options.cwd);

  config.resolve.alias.merge(alias(options, target));

  config.output.path(path.join(options.cwd, options.output));

  if (process.env.NODE_ENV === 'production') {
    config.plugin('clean-webpack-plugin').use(CleanWebpackPlugin);
  }

  return config;
}
