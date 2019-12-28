import { RemaxOptions } from './getConfig';

const defaultOptions: RemaxOptions = {
  cssModules: /\.module\.(less|scss|css)$/,
  pxToRpx: true,
  cwd: process.cwd(),
  progress: true,
  output: 'dist',
  rootDir: 'src',
  compressTemplate: process.env.NODE_ENV === 'production',
  UNSAFE_wechatTemplateDepth: 20,
  postcss: {
    options: {},
    plugins: [],
  },
  plugins: [],
};

export default defaultOptions;
