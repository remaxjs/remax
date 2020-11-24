module.exports = {
  plugins: [
    {
      onAppConfig({ config }) {
        return {
          ...config,
          pages: ['pages/index'],
        };
      },
    },
    {
      onAppConfig({ config }) {
        return {
          ...config,
          window: {
            ...config.window,
            defaultTitle: 'hello',
          },
        };
      },
    },
  ],
};
