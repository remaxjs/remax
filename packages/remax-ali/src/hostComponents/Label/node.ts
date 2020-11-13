import { unique } from '@remax/shared';

export const alias = {
  id: 'id',
  className: 'class',
  style: 'style',
  for: 'for',
};

export const props = unique(Object.values(alias));
