import { RemaxOptions } from './getConfig';

const defaultOptions: RemaxOptions = {
  cssModules: /\.module\.(less|scss|css)$/,
  px2Rpx: true,
  cwd: process.cwd(),
  progress: true,
  output: 'dist',
  rootDir: 'src',
  UNSAFE_wechatTemplateDepth: 20,
};

export default defaultOptions;
