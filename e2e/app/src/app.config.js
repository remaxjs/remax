const pages = [
  'pages/index/index',
  'pages/error/index',
  'pages/lifecycle/index',
  'pages/image/index',
  'pages/query/index',
  'pages/navigate/one/index',
  'pages/navigate/two/index',
];

if (process.env.REMAX_PLATFORM === 'ali') {
  pages.push(
    ...[
      'pages/native-component/index',
      'pages/native-component/module',
      'pages/native-component/commonChunk1',
      'pages/native-component/commonChunk2',
      'pages/turbo-page/index',
      'pages/insert-before/index',
      'pages/hybrid/index',
    ]
  );
}

module.exports = {
  pages,
  spm: {
    spmAPos: 'a103',
    bizType: 'BAOXIAN',
    debug: true,
  },
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
