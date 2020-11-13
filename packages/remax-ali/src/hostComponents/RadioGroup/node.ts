import { unique } from '@remax/shared';

export const alias = {
  id: 'id',
  className: 'class',
  style: 'style',
  onChange: 'onChange',
  name: 'name',
};

export const props = unique(Object.values(alias));
