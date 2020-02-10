import { RemaxOptions } from 'remax-types';
import UNSAFE_wechatTemplateDepth from './UNSAFE_wechatTemplateDepth';

const defaultOptions: RemaxOptions = {
  compiler: 'default',
  cssModules: /\.module\.(less|scss|css)$/,
  pxToRpx: true,
  cwd: process.cwd(),
  progress: true,
  output: 'dist',
  rootDir: 'src',
  compressTemplate: process.env.NODE_ENV === 'production',
  UNSAFE_wechatTemplateDepth,
  postcss: {
    options: {},
    plugins: [],
  },
  plugins: [],
  notify: false,
};

export default defaultOptions;
