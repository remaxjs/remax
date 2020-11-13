import { Options } from '@remax/types';

export function getDefaultOptions(): Options {
  return {
    turboRenders: false,
    pxToRpx: true,
    cwd: process.cwd(),
    progress: true,
    output: 'dist',
    rootDir: 'src',
    compressTemplate: process.env.NODE_ENV === 'production',
    plugins: [],
    notify: false,
    web: {
      mpa: false,
      excludeNodeModulesTransform: false,
    },
    errorScreen: false,
    spm: false,
  };
}
