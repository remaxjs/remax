const platformAlias: any = {
  ali: {
    onTap: 'onTap',
  },
};

const defaultAlias = {
  id: 'id',
  className: 'class',
  style: 'style',
  selectable: 'selectable',
};

export const alias = { ...defaultAlias, ...platformAlias[process.env.REMAX_PLATFORM!] };

export const props = Object.values(alias);
