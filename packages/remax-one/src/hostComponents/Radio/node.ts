const platformAlias: any = {
  alipay: {},
  wechat: {},
};

const defaultAlias = {
  id: 'id',
  className: 'class',
  style: 'style',
  value: 'value',
  checked: 'checked',
  disabled: 'disabled',
  color: 'color',
};

export const alias = { ...defaultAlias, ...platformAlias[process.env.REMAX_PLATFORM!] };

export const props = Object.values(alias);
