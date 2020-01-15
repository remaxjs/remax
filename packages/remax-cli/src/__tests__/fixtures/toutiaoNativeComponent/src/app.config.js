module.exports = {
  pages: ['pages/index', 'pages/index2', 'pages/index3', 'pages/index4'],
  plugins: {
    myPlugin: {
      version: '1.0.0',
      provider: 'wxidxxxxxxxxxxxxxxxx',
    },
  },
  subPackages: [
    {
      root: 'pages',
      pages: ['subpackage'],
      plugins: {
        subPlugin: {
          version: '1.0.0',
          provider: 'wxidxxxxxxxxxxxxxxxx',
        },
      },
    },
  ],
};
