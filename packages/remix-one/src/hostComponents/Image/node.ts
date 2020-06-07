const platformAlias: any = {
  ali: {
    onLoad: 'onLoad',
    onError: 'onError',
    onTap: 'onTap',
    onTouchStart: 'onTouchStart',
    onTouchEnd: 'onTouchEnd',
    onTouchMove: 'onTouchMove',
    onTouchCancel: 'onTouchCancel',
  },
};

export const defaultAlias = {
  id: 'id',
  src: 'src',
  mode: 'mode',
  className: 'class',
  style: 'style',
};

export const alias = { ...defaultAlias, ...platformAlias[process.env.REMAX_PLATFORM!] };

export const props = Object.values(alias);
