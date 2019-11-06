const currentPlatform = process.env.REMAX_PLATFORM;

type Platform = 'alipay' | 'wechat';

const is = (platform: Platform) => currentPlatform === platform;

const Platform = {
  current: currentPlatform,
  isAlipay: is('alipay'),
  isWechat: is('wechat'),
};

export default Platform;
