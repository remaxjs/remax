module.exports = {
  dynamicPages: true,
  configWebpack(ctx) {
    ctx.addCSSRule({
      name: 'scss',
      test: /\.scss(\?.*)?$/,
    });
  },
};
