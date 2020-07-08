module.exports = {
  pages: [
    'pages/index/index',
    'pages/insert-before/index',
    'pages/native-component/index',
    'pages/native-component/module',
    'pages/native-component/commonChunk1',
    'pages/native-component/commonChunk2',
    'pages/turbo-page/index',
    'pages/modal/index',
  ],
  window: {
    defaultTitle: 'Alipay App',
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
        icon: './assets/images/cat.jpg',
        activeIcon: './assets/images/dog.jpg',
      },
      {
        pagePath: 'packageA/pages/index',
        name: '其他',
        icon: './assets/images/cat.jpg',
        activeIcon: './assets/images/dog.jpg',
      },
    ],
  },
};
