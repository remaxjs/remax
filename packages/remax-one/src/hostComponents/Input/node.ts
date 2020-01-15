const platformAlias: any = {
  alipay: {
    onInput: 'onInput',
    onConfirm: 'onConfirm',
    onFocus: 'onFocus',
    onBlur: 'onBlur',
    controlled: 'controlled',
  },
  wechat: {
    onInput: 'bindinput',
    onConfirm: 'bindconfirm',
    onFocus: 'bindfocus',
    onBlur: 'bindblur',
  },
  toutiao: {
    onInput: 'bindinput',
    onConfirm: 'bindconfirm',
    onFocus: 'bindfocus',
    onBlur: 'bindblur',
  },
};

const defaultAlias = {
  id: 'id',
  className: 'class',
  style: 'style',
  value: 'value',
  defaultValue: 'value',
  name: 'name',
  type: 'type',
  password: 'password',
  placeholder: 'placeholder',
  disabled: 'disabled',
  maxlength: 'maxlength',
  focus: 'focus',
  confirmType: 'confirm-type',
  confirmHold: 'confirm-hold',
  placeholderStyle: 'placeholder-style',
};

export const alias = { ...defaultAlias, ...platformAlias[process.env.REMAX_PLATFORM!] };

export const props = Object.values(alias);
