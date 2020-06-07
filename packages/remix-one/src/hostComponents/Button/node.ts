const platformAlias: any = {
  ali: {
    onTap: 'onTap',
  },
};

const defaultAlias = {
  id: 'id',
  className: 'class',
  style: 'style',
  disabled: 'disabled',
  hoverClassName: 'hover-class',
  hoverStartTime: 'hover-start-time',
  hoverStayTime: 'hover-stay-time',
  hoverStopPropagation: 'hover-stop-propagation',
  type: 'form-type',
};

export const alias = { ...defaultAlias, ...platformAlias[process.env.REMAX_PLATFORM!] };

export const props = Object.values(alias);
