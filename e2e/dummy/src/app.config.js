const pages = ['pages/one/index', 'pages/two/index', 'pages/query/index', 'pages/modal/index'];

module.exports.ali = {
  pages,
  window: {
    defaultTitle: 'Remax Ali Template',
    titleBarColor: '#282c34',
  },
};

module.exports.wechat = {
  pages,
  window: {
    navigationBarTitleText: 'Remax Wechat Template',
    navigationBarBackgroundColor: '#282c34',
  },
};

module.exports.toutiao = {
  pages,
  window: {
    navigationBarTitleText: 'Remax Toutiao Template',
    navigationBarBackgroundColor: '#282c34',
  },
};

module.exports.web = {
  pages,
  title: 'Remax Web Template',
  tabBar: {
    // 背景色
    backgroundColor: '#fff',
    // 选中状态的 tab 标题颜色
    activeTitleColor: 'red',
    // tab 标题颜色
    titleColor: 'blue',
    // tab 对象列表
    items: [
      {
        // tab 标题
        title: '标题',
        // tab 对应页面路由
        url: 'pages/one/index',
        // tab 显示的图片地址
        image: '图片地址',
        // tab 选中后的显示的图片地址
        activeImage: '选中图片地址',
      },
    ],
  },
};
