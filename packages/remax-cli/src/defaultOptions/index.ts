import { RemaxOptions } from '../getConfig';
import UNSAFE_wechatTemplateDepth from './UNSAFE_wechatTemplateDepth';

const defaultOptions: RemaxOptions = {
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
};

export default defaultOptions;
