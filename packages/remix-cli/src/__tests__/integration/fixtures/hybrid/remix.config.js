const CopyPlugin = require('copy-webpack-plugin');
const appConfig = require('./src/app.config');
const dynamicPages = [...appConfig.pages];

if (Array.isArray(appConfig.subPackages)) {
  appConfig.subPackages.forEach(it => {
    dynamicPages.push(`${it.root}/**`);
  });
}

module.exports = {
  dynamicPages,
  configWebpack({ config }) {
    config.plugin('copy').use(CopyPlugin, [
      [
        { from: 'src/assets', to: 'assets' },
        { from: 'src/native', to: './' },
      ],
    ]);
  },
};
