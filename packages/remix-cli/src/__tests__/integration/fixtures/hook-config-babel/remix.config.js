const appConfig = require('./src/app.config');
const dynamicPages = [...appConfig.pages];

if (Array.isArray(appConfig.subPackages)) {
  appConfig.subPackages.forEach(it => {
    dynamicPages.push(`${it.root}/**`);
  });
}

const loop = () => ({
  configBabel({ config }) {
    config.plugins.push('loop-optimizer');
  },
});

module.exports = {
  dynamicPages,
  plugins: [loop()],
};
