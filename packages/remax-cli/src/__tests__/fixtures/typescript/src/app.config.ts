import { AppConfig as WechatAppConfig } from 'remax/wechat';
import { AppConfig as AliAppConfig } from 'remax/ali';
import { AppConfig as ToutiaoAppConfig } from 'remax/toutiao';

const pages = ['pages/index', 'pages/page2/index', 'pages/page3/index'];

export const ali: AliAppConfig = {
  pages,
  window: {
    defaultTitle: 'Ali App',
    titleBarColor: '#323239',
  },
};

export const wechat: WechatAppConfig = {
  pages,
  window: {
    navigationBarBackgroundColor: '#323239',
    navigationBarTitleText: 'Wechat App',
  },
};

export const toutiao: ToutiaoAppConfig = {
  pages,
  window: {
    navigationBarBackgroundColor: '#323239',
    navigationBarTitleText: 'Toutiao App',
  },
};
