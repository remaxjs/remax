module.exports = {
  publicComponents: {
    greet: 'components/greet/index',
    bye: 'components/bye/index',
  },
  publicPages: {
    'hello-page': 'pages/index/index',
    'native-page': 'pages/hybrid/index',
  },
  pages: ['pages/index/index', 'pages/hybrid/index'],
  main: 'api/data',
};
