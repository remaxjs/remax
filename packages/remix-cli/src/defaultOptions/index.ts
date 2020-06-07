import { Options } from '@alipay/remix-types';

export function getDefaultOptions(): Options {
  return {
    turboPages: [],
    pxToRpx: true,
    cwd: process.cwd(),
    progress: true,
    output: 'dist',
    rootDir: 'src',
    compressTemplate: process.env.NODE_ENV === 'production',
    plugins: [],
    notify: false,
  };
}
