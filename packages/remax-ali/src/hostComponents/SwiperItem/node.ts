import { unique } from '@remax/shared';

export const alias = {
  id: 'id',
  className: 'class',
  style: 'style',
  key: 'key',
};
export const props = unique(Object.values(alias));
