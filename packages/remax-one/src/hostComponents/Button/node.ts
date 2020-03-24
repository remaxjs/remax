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
  disabled: 'disabled',
  hoverClass: 'hover-class',
  hoverStartTime: 'hover-start-time',
  hoverStayTime: 'hover-stay-time',
  hoverStopPropagation: 'hover-stop-propagation',
  formType: 'form-type',
};

export const alias = { ...defaultAlias, ...platformAlias[process.env.REMAX_PLATFORM!] };

export const props = Object.values(alias);
