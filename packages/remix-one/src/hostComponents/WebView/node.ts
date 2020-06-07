const platformAlias: any = {
  ali: {
    onMessage: 'onMessage',
  },
};

const defaultAlias = {
  id: 'id',
  src: 'src',
};

export const alias = { ...defaultAlias, ...platformAlias[process.env.REMAX_PLATFORM!] };

export const props = Object.values(alias);
