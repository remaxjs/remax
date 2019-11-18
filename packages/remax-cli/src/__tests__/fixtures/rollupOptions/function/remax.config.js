module.exports = {
  rollupOptions(opions) {
    opions.plugins.push({
      name: 'mock-plugins',
      transform(code, id) {
        return code;
      },
    });
    return opions;
  },
};
