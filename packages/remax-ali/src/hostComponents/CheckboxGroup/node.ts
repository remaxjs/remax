import { unique } from '@remax/shared';

export const alias = {
  id: 'id',
  className: 'class',
  style: 'style',
  name: 'name',
  onChange: 'onChange',
};

export const props = unique(Object.values(alias));
