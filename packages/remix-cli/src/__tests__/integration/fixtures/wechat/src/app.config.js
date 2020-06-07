module.exports = {
  pages: ['pages/index', 'pages/index2'],
  window: {
    navigationBarBackgroundColor: '#323239',
    navigationBarTitleText: 'Wechat App',
  },
  subpackages: [
    {
      root: 'packageA',
      pages: ['pages/index', 'pages/index2'],
    },
  ],
  tabBar: {
    selectedColor: '#ffffff',
    backgroundColor: '#212121',
    color: '#ffffff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: '/assets/images/cat.png',
        selectedIconPath: '/assets/images/dog.png',
      },
      {
        pagePath: 'packageA/pages/index',
        text: '其他',
        iconPath: 'https://img.com/assets/images/cat.png',
        selectedIconPath: '/assets/images/dog.png',
      },
    ],
  },
};
