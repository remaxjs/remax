const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  configWebpack({ config }) {
    config.plugin('copy').use(CopyPlugin, [[{ from: 'src/assets', to: 'assets' }]]);
  },
};
