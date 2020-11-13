module.exports = {
  configWebpack(ctx) {
    ctx.addCSSRule({
      name: 'scss',
      test: /\.scss(\?.*)?$/,
    });
  },
};
