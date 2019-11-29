import { AppConfig as WechatAppConfig } from 'remax/wechat';
import { AppConfig as AlipayAppConfig } from 'remax/alipay';
import { AppConfig as ToutiaoAppConfig } from 'remax/toutiao';

export const alipay: AlipayAppConfig = {
  pages: ['pages/index'],
  window: {
    defaultTitle: 'Alipay App',
    titleBarColor: '#323239',
  },
};

export const wechat: WechatAppConfig = {
  pages: ['pages/index'],
  window: {
    navigationBarBackgroundColor: '#323239',
    navigationBarTitleText: 'Wechat App',
  },
};

export const toutiao: ToutiaoAppConfig = {
  pages: ['pages/index'],
  window: {
    navigationBarBackgroundColor: '#323239',
    navigationBarTitleText: 'Toutiao App',
  },
};
