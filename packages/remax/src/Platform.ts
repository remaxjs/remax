const currentPlatform = process.env.REMAX_PLATFORM;

type Platform = 'alipay' | 'wechat' | 'h5';

const is = (platform: Platform) => currentPlatform === platform;

const Platform = {
  current: currentPlatform,
  isAlipay: is('alipay'),
  isH5: is('h5'),
  isWechat: is('wechat'),
};

export default Platform;
