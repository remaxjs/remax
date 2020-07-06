module.exports = {
  configWebpack({ config }) {
    // 不需要source-map
    config.devtool(false);
  },
};
