module.exports = {
  pages: ['pages/index', 'pages/index2'],
  title: 'Web App',
  subpackages: [
    {
      root: 'packageA',
      pages: ['pages/index', 'pages/index2'],
    },
  ],
};
