import { AppConfig as WechatAppConfig } from 'remax/wechat';
import { AppConfig as AlipayAppConfig } from 'remax/alipay';
import { AppConfig as ToutiaoAppConfig } from 'remax/toutiao';

const pages = ['pages/index', 'pages/page2/index', 'pages/page3/index'];

export const alipay: AlipayAppConfig = {
  pages,
  window: {
    defaultTitle: 'Alipay App',
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
