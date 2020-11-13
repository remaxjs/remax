const loop = () => ({
  configBabel({ config }) {
    config.plugins.push('loop-optimizer');
  },
});

module.exports = {
  plugins: [loop()],
};
