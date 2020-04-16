import { RemaxOptions } from '@remax/types';
import UNSAFE_wechatTemplateDepth from './UNSAFE_wechatTemplateDepth';

const defaultOptions: RemaxOptions = {
  turboPages: [],
  cssModules: /\.module\.(stylus|less|scss|css)$/,
  pxToRpx: true,
  cwd: process.cwd(),
  progress: true,
  output: 'dist',
  rootDir: 'src',
  compressTemplate: process.env.NODE_ENV === 'production',
  UNSAFE_wechatTemplateDepth,
  plugins: [],
  notify: false,
};

export default defaultOptions;
