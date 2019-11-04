type Platform = 'alipay' | 'wechat' | 'toutiao';

const is = (platform: Platform) => process.env.REMAX_PLATFORM === platform;

const Platform = {
  get current() {
    return process.env.REMAX_PLATFORM;
  },
  get isAlipay() {
    return is('alipay');
  },
  get isWechat() {
    return is('wechat');
  },
  get isToutiao() {
    return is('toutiao');
  },
};

export default Platform;
