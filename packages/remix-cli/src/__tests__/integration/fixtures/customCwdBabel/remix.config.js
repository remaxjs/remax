const path = require('path');
const appConfig = require('./source/src/app.config');
const dynamicPages = [...appConfig.pages];

if (Array.isArray(appConfig.subPackages)) {
  appConfig.subPackages.forEach(it => {
    dynamicPages.push(`${it.root}/**`);
  });
}

module.exports = {
  dynamicPages,
  cwd: path.join(__dirname, 'source'),
  rootDir: 'src',
};
