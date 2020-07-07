const appConfig = require('./src/app.config').ali;
const dynamicPages = [...appConfig.pages];

if (Array.isArray(appConfig.subPackages)) {
  appConfig.subPackages.forEach(it => {
    dynamicPages.push(`${it.root}/**`);
  });
}

module.exports = {
  dynamicPages,
};
