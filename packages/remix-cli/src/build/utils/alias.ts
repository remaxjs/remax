import * as path from 'path';
import { Options, Platform } from '@alipay/remix-types';

interface Alias {
  [key: string]: string;
}

export default (options: Options, target: Platform) => {
  const config: Alias = {
    '@': path.resolve(options.cwd, options.rootDir),
    // 防止 link 开发时加载多个 React
    react: path.resolve(options.cwd, 'node_modules', 'react'),
    // 配合 webpack-virtual-modules
    '@alipay/remix-runtime-plugin': path.join(options.cwd, 'node_modules/@alipay/remix-runtime-plugin.js'),
  };

  if (target !== Platform.web) {
    config['react-dom'] = '@alipay/remix-runtime';
  }

  return config;
};
