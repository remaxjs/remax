/* eslint-disable @typescript-eslint/camelcase */

const platformAlias: any = {
  alipay: {},
};

const defaultAlias = {
  className: 'class',
  style: 'style',
  id: 'id',
  value: 'value',
  checked: 'checked',
  disabled: 'disabled',
  color: 'color',
};

export const alias = { ...defaultAlias, ...platformAlias[process.env.REMAX_PLATFORM!] };

export const props = Object.values(alias);
