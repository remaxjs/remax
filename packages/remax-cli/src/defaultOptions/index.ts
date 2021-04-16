import type { Options } from '@remax/types';
import UNSAFE_wechatTemplateDepth from './UNSAFE_wechatTemplateDepth';

export function getDefaultOptions(): Options {
  return {
    turboRenders: false,
    pxToRpx: true,
    cwd: process.cwd(),
    progress: true,
    output: 'dist',
    rootDir: 'src',
    compressTemplate: process.env.NODE_ENV === 'production',
    UNSAFE_wechatTemplateDepth,
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
