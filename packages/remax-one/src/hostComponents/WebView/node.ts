const platformAlias: any = {
  alipay: {
    onMessage: 'onMessage',
  },
  wechat: {
    onMessage: 'bindmessage',
  },
  toutiao: {
    onMessage: 'bindmessage',
  },
};

const defaultAlias = {
  id: 'id',
  src: 'src',
};

export const alias = { ...defaultAlias, ...platformAlias[process.env.REMAX_PLATFORM!] };

export const props = Object.values(alias);
