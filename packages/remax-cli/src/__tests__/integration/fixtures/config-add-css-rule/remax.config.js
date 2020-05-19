module.exports = {
  configWebpack(ctx) {
    debugger;
    ctx.addCSSRule({
      name: 'acss',
      test: /\.acss(\?.*)?$/,
    });
  },
};
