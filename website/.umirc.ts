import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Remax',
  mode: 'site',
  logo:
    'https://gw.alipayobjects.com/mdn/rms_a6d2d8/afts/img/A*uJJISqWJcMQAAAAAAAAAAABkARQnAQ',
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
      title: 'GitHub',
      path: 'https://github.com/remaxjs/remax',
    },
  ],
  resolve: {
    includes: ['../docs'],
    previewLangs: [],
  },
  favicon:
    'https://gw.alipayobjects.com/mdn/rms_a6d2d8/afts/img/A*uJJISqWJcMQAAAAAAAAAAABkARQnAQ',
});
