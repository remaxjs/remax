module.exports = {
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
