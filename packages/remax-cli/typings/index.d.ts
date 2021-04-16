declare module 'webpack/lib/*';
declare module 'babel-loader';
declare module 'memory-fs/lib/join';
declare module '@remax/postcss-px2units';
declare module 'postcss-url';
declare module 'postcss-preset-env';
declare module '@babel/helper-module-imports';
declare module 'scheduler';
declare module 'sander';
declare module 'webpack-virtual-modules';
declare module 'copy-webpack-plugin';
declare module 'webpack-node-externals';
declare module 'babel-plugin-module-resolver';

declare namespace jest {
  interface Matchers<R, T> {
    toMatchOutput: (output: string) => R;
  }
}
