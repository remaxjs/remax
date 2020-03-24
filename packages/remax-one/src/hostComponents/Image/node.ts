const platformAlias: any = {
  alipay: {
    onLoad: 'onLoad',
    onError: 'onError',
    onTap: 'onTap',
  },
  wechat: {
    onLoad: 'bindload',
    onError: 'binderror',
    onTap: 'bindtap',
  },
  toutiao: {
    onLoad: 'bindload',
    onError: 'binderror',
    onTap: 'bindtap',
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
