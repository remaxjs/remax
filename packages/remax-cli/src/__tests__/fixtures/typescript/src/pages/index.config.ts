import { PageConfig as WechatPageConfig } from 'remax/wechat';
import { PageConfig as AlipayPageConfig } from 'remax/alipay';
import { PageConfig as ToutiaoPageConfig } from 'remax/toutiao';

export const alipay: AlipayPageConfig = {
  defaultTitle: 'Alipay Page',
  titleBarColor: '#323239',
};

export const wechat: WechatPageConfig = {
  navigationBarBackgroundColor: '#323239',
  navigationBarTitleText: 'Wechat Page',
};

const toutiao: ToutiaoPageConfig = {
  navigationBarBackgroundColor: '#323239',
  navigationBarTitleText: 'Toutiao Page',
};

exports.toutiao = toutiao;
