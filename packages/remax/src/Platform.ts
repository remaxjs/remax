const currentPlatform = process.env.REMAX_PLATFORM;

type Platform = 'alipay' | 'weapp' | 'h5';

const is = (platform: Platform) => currentPlatform === platform;

const Platform = {
  current: currentPlatform,
  isAlipay: is('alipay'),
  isH5: is('h5'),
  isWeapp: is('weapp')
};

export default Platform;
