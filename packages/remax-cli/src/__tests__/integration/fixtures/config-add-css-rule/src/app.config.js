module.exports = {
  pages: ['pages/index', 'pages/dont-exist/index', 'pages/classPage'],
  window: {
    defaultTitle: 'Ali App',
    titleBarColor: '#323239',
  },
  subPackages: [
    {
      root: 'packageA',
      pages: ['pages/index'],
    },
  ],
  tabBar: {
    textColor: '#ffffff',
    selectedColor: '#000000',
    backgroundColor: '#212121',
    items: [
      {
        pagePath: 'pages/index/index',
        name: '首页',
        icon: '/assets/images/cat.png',
        activeIcon: '/assets/images/dog.png',
      },
      {
        pagePath: 'packageA/pages/index',
        name: '其他',
        icon: 'https://img.com/assets/images/cat.png',
        activeIcon: '/assets/images/dog.png',
      },
    ],
  },
};
