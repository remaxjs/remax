import { defineConfig } from 'dumi';

export default defineConfig({
  ssr: {},
  title: 'Remax',
  mode: 'site',
  logo:
    'https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ',
  locales: [['zh-CN', '中文']],
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'awesome-remax',
      path: 'https://github.com/remaxjs/awesome-remax',
    },
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
  scripts: [
    'https://www.googletagmanager.com/gtag/js?id=UA-145491804-1',
    `
    window.GATSBY_GTAG_PLUGIN_GA_TRACKING_ID = (
      'UA-145491804-1'
    );
    window.GATSBY_GTAG_PLUGIN_ANONYMIZE = false;

    var options = {
      send_page_view: false
    };
    if (false) {
      options.anonymize_ip = true;
    }

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'UA-145491804-1', options);
    `,
  ],
});
