const platformAlias: any = {};

const defaultAlias = {
  id: 'id',
  className: 'class',
  style: 'style',
  url: 'url',
  action: 'open-type',
  hoverClassName: 'hover-class',
  hoverStartTime: 'hover-start-time',
  hoverStayTime: 'hover-stay-time',
};

export const alias = { ...defaultAlias, ...platformAlias[process.env.REMAX_PLATFORM!] };

export const props = Object.values(alias);
