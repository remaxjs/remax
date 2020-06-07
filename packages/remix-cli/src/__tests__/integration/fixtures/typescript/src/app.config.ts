import { AppConfig as AliAppConfig } from '@alipay/remix/ali';

const pages = ['pages/index', 'pages/page2/index', 'pages/page3/index'];

export const ali: AliAppConfig = {
  pages,
  window: {
    defaultTitle: 'Ali App',
    titleBarColor: '#323239',
  },
};
