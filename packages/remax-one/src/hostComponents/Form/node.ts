const platformAlias: any = {
  alipay: {
    onSubmit: 'onSubmit',
    onReset: 'onReset',
  },
  wechat: {
    onSubmit: 'bindsubmit',
    onReset: 'bindreset',
  },
  toutiao: {
    onSubmit: 'bindsubmit',
    onReset: 'bindreset',
  },
};

const defaultAlias = {
  id: 'id',
  className: 'class',
  style: 'style',
};

export const alias = { ...defaultAlias, ...platformAlias[process.env.REMAX_PLATFORM!] };

export const props = Object.values(alias);
