const platformAlias: any = {
  alipay: {
    onLoad: 'onLoad',
    onError: 'onError',
    onTap: 'onTap',
    onTouchStart: 'onTouchStart',
    onTouchEnd: 'onTouchEnd',
    onTouchMove: 'onTouchMove',
    onTouchCancel: 'onTouchCancel',
  },
  wechat: {
    onLoad: 'bindload',
    onError: 'binderror',
    onTap: 'bindtap',
    onTouchStart: 'bindtouchstart',
    onTouchEnd: 'bindtouchend',
    onTouchMove: 'bindtouchmove',
    onTouchCancel: 'bindtouchcancel',
  },
  toutiao: {
    onLoad: 'bindload',
    onError: 'binderror',
    onTap: 'bindtap',
    onTouchStart: 'bindtouchstart',
    onTouchEnd: 'bindtouchend',
    onTouchMove: 'bindtouchmove',
    onTouchCancel: 'bindtouchcancel',
  },
};

export const defaultAlias = {
  id: 'id',
  src: 'src',
  mode: 'mode',
  className: 'class',
  style: 'style',
  lazyLoad: 'lazy-load',
};

export const alias = { ...defaultAlias, ...platformAlias[process.env.REMAX_PLATFORM!] };

export const props = Object.values(alias);
