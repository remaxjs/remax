const platformAlias: any = {
  alipay: {
    onInput: 'onInput',
    onFocus: 'onFocus',
    onBlur: 'onBlur',
    onConfirm: 'onConfirm',
  },
  wechat: {
    onInput: 'bindinput',
    onFocus: 'bindfocus',
    onBlur: 'bindblur',
    onConfirm: 'bindconfirm',
  },
  toutiao: {
    onInput: 'bindinput',
    onFocus: 'bindfocus',
    onBlur: 'bindblur',
    onConfirm: 'bindconfirm',
  },
};

const defaultAlias = {
  id: 'id',
  className: 'class',
  style: 'style',
  name: 'name',
  value: 'value',
  placeholder: 'placeholder',
  placeholderStyle: 'placeholder-style',
  disabled: 'disabled',
  maxlength: 'maxlength',
  focus: 'focus',
  autoHeight: 'auto-height',
  onInput: 'onInput',
  onFocus: 'onFocus',
  onBlur: 'onBlur',
  onConfirm: 'onConfirm',
};

export const alias = { ...defaultAlias, ...platformAlias[process.env.REMAX_PLATFORM!] };

export const props = Object.values(alias);
