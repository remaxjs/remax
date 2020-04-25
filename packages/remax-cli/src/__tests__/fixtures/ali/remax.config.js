const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  configWebpack: function (config) {
    config.plugin('copy').use(CopyPlugin, [[{ from: 'src/assets', to: 'assets' }]]);
    return config;
  },
};
