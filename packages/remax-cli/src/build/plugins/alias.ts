import * as path from 'path';
import aliasPlugin from '@rollup/plugin-alias';
import { RemaxOptions } from 'remax-types';

export default function(options: RemaxOptions) {
  const aliasConfig = Object.entries(options.alias || {}).reduce(
    (config, [key, value]) => {
      config.push({
        find: key,
        replacement: value.match(/^(\.|[^/])/)
          ? path.resolve(options.cwd, value)
          : value,
      });
      return config;
    },
    [] as any[]
  );

  return aliasPlugin({
    resolve: [
      '',
      '.ts',
      '.js',
      '.tsx',
      '.jsx',
      '/index.js',
      '/index.jsx',
      '/index.ts',
      '/index.tsx',
    ],
    entries: [
      {
        find: 'react-dom',
        replacement: path.resolve(options.cwd, 'node_modules', 'remax/esm'),
      },
      {
        find: '@',
        replacement: path.resolve(options.cwd, options.rootDir),
      },
      ...aliasConfig,
    ],
  });
}
