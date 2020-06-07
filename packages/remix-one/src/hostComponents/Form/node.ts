const platformAlias: any = {
  ali: {
    onSubmit: 'onSubmit',
    onReset: 'onReset',
  },
};

const defaultAlias = {
  id: 'id',
  className: 'class',
  style: 'style',
};

export const alias = { ...defaultAlias, ...platformAlias[process.env.REMAX_PLATFORM!] };

export const props = Object.values(alias);
