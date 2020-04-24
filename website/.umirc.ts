import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Remax',
  mode: 'site',
  logo:
    'https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ',
  locales: [['zh-CN', '中文']],
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '开发博客',
      path: 'https://zhuanlan.zhihu.com/remaxjs',
    },
    {
      title: '更新日志',
      path: 'https://github.com/remaxjs/remax/releases',
    },
    {
      title: 'v1 文档',
      path: 'https://v1.remaxjs.org',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/remaxjs/remax',
    },
  ],
  resolve: {
    includes: ['../docs'],
    previewLangs: [],
  },
  favicon:
    'https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ',
  exportStatic: {},
  styles: [
    `.markdown.markdown blockquote {
      background-color: rgba(255, 229, 100, 0.3);
      color: #454d64;
      border-left-color: #ffe564;
      border-left-width: 9px;
      border-left-style: solid;
      padding: 20px 45px 20px 26px;
      margin-bottom: 30px;
      margin-top: 20px;
      margin-left: -30px;
      margin-right: -30px;
    }

    .markdown.markdown blockquote p:first-of-type {
      font-weight: 700;
      margin-top: 0;
      margin-bottom: 0;
    }`,
  ],
});
