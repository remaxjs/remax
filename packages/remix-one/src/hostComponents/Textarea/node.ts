const platformAlias: any = {
  ali: {
    onInput: 'onInput',
    onFocus: 'onFocus',
    onBlur: 'onBlur',
    onConfirm: 'onConfirm',
    maxlength: 'maxlength',
  },
  web: {
    maxLength: 'maxlength',
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
  focus: 'focus',
  autoHeight: 'auto-height',
  onInput: 'onInput',
  onFocus: 'onFocus',
  onBlur: 'onBlur',
  onConfirm: 'onConfirm',
};

export const alias = { ...defaultAlias, ...platformAlias[process.env.REMAX_PLATFORM!] };

export const props = Object.values(alias);
