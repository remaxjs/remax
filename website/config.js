const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://remaxjs.org',
    gaTrackingId: 'UA-145491804-1',
  },
  header: {
    logo:
      'https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ',
    logoLink: 'https://remaxjs.org',
    title: 'Remax',
    githubUrl: 'https://github.com/remaxjs/remax',
    helpUrl: '',
    tweetText: '',
    links: [
      {
        text: '开发博客',
        link: 'https://zhuanlan.zhihu.com/remaxjs',
      },
    ],
  },
  sidebar: {
    forcedNavOrder: [''],
    links: [],
    frontline: false,
    ignoreIndex: false,
  },
  siteMetadata: {
    title: 'Remax - 全新的小程序开发体验',
    description: '使用真正的 React 构建小程序',
    ogImage: null,
    docsLocation: 'https://github.com/remaxjs/remax/tree/master/docs',
    favicon:
      'https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ',
  },
};

module.exports = config;
