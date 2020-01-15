const platformAlias: any = {
  alipay: {
    onChange: 'onChange',
  },
  wechat: {
    onChange: 'bindchange',
  },
  toutiao: {
    onChange: 'bindchange',
  },
};

const defaultAlias = {
  id: 'id',
  className: 'class',
  style: 'style',
  name: 'name',
};

export const alias = { ...defaultAlias, ...platformAlias[process.env.REMAX_PLATFORM!] };

export const props = Object.values(alias);
