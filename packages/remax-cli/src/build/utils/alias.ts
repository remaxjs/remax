import * as path from 'path';
import { RemaxOptions } from '@remax/types';
import { Platform } from './platform';

interface Alias {
  [key: string]: string;
}

export default (options: RemaxOptions, target: Platform) => {
  const config: Alias = {
    '@': path.resolve(options.cwd, options.rootDir),
    react: path.resolve(options.cwd, 'node_modules', 'react'),
  };

  if (target !== Platform.web) {
    config['react-dom'] = path.resolve(options.cwd, 'node_modules', '@remax/runtime');
  }

  return config;
};
