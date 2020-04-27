module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/esm/', '/cjs/'],
  testRegex: '.*\\.test\\.tsx?$',
  coveragePathIgnorePatterns: ['/src/__tests__/'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
    __REMAX_HOST_COMPONENTS__: {},
    __REMAX_ENTRY_INFO__: [
      {
        name: 'pages/test/index',
        modules: ['/path/to/test/index', '/path/to/test/index2'],
      },
      {
        name: 'pages/test/only/onshow',
        modules: ['/path/to/test/index'],
      },
    ],
    __REMAX_APP_ENTRY_INFO__: {},
    __REMAX_APP_EVENTS__: ['onLaunch', 'onShow', 'onHide', 'onShareAppMessage', 'onPageNotFound', 'onError'],
    __REMAX_PAGE_EVENTS__: {
      '/path/to/test/index': ['onShow'],
      '/path/to/test/index2': [
        'onHide',
        'onPullDownRefresh',
        'onPullIntercept',
        'onReachBottom',
        'onPageScroll',
        'onShareAppMessage',
        'onTitleClick',
        'onOptionMenuClick',
        'onPopMenuClick',
        'onReady',
        'onResize',
        'onTabItemTap',
      ],
    },
    __REMAX_PX2RPX__: true,
    __REMAX_DEBUG__: false,
  },
};
