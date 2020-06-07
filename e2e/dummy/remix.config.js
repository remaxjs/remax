const path = require('path');

console.log(path.resolve(__dirname, '../../node_modules'));

module.exports = {
  one: true,
  output: 'dist/' + process.env.REMAX_PLATFORM,
  configWebpack({ config }) {
    config.resolve.modules.prepend(path.resolve(__dirname, '../../node_modules'));
  },
};
