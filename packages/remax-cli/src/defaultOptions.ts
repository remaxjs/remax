import { RemaxOptions } from './getConfig';

const defaultOptions: RemaxOptions = {
  cssModules: false,
  cwd: process.cwd(),
  progress: true,
  output: 'dist',
};

export default defaultOptions;
