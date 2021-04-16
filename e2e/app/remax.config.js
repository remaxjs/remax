const path = require('path');
const less = require('@remax/plugin-less');

module.exports = {
  output: process.env.REMAX_PLATFORM === 'web' ? 'dist/webng' : 'build/src',
  plugins: [less()],
  configWebpack({ config }) {
    if (process.env.REMAX_PLATFORM === 'web') {
      config.output.publicPath('/');
    }
  },
  turboRenders: !!process.env.TURBO_RENDERS,
  web: {
    mpa: !!process.env.MPA,
  },
};
