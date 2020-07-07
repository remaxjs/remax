const appConfig = require('./src/app.config');
const dynamicPages = [...appConfig.pages];

if (Array.isArray(appConfig.subPackages)) {
  appConfig.subPackages.forEach(it => {
    dynamicPages.push(`${it.root}/**`);
  });
}

module.exports = {
  dynamicPages,
  plugins: [
    {
      onPageConfig({ page, config }) {
        if (page === 'pages/index') {
          return {
            ...config,
            defaultTitle: 'index page',
          };
        }
        return config;
      },
    },
    {
      onPageConfig({ page, config }) {
        if (page === 'pages/about') {
          return {
            ...config,
            defaultTitle: 'abount page',
          };
        }
        return config;
      },
    },
  ],
};
