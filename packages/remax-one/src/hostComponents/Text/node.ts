const platformAlias: any = {
  alipay: {
    onTap: 'onTap',
  },
  wechat: {
    onTap: 'bindtap',
  },
  toutiao: {
    onTap: 'bindtap',
  },
};

const defaultAlias = {
  id: 'id',
  className: 'class',
  style: 'style',
  selectable: 'selectable',
  decode: 'decode',
};

export const alias = { ...defaultAlias, ...platformAlias[process.env.REMAX_PLATFORM!] };

export const props = Object.values(alias);
