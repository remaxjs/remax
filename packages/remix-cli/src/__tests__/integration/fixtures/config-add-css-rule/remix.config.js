const appConfig = require('./src/app.config');
const dynamicPages = [...appConfig.pages];

if (Array.isArray(appConfig.subPackages)) {
  appConfig.subPackages.forEach(it => {
    dynamicPages.push(`${it.root}/**`);
  });
}

module.exports = {
  dynamicPages,
  configWebpack(ctx) {
    debugger;
    ctx.addCSSRule({
      name: 'acss',
      test: /\.acss(\?.*)?$/,
    });
  },
};
