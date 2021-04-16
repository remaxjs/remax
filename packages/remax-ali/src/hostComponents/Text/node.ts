import { unique } from '@remax/shared';

export const alias = {
  id: 'id',
  className: 'class',
  style: 'style',
  selectable: 'selectable',
  space: 'space',
  decode: 'decode',
  numberOfLines: 'number-of-lines',
  onClick: 'onTap',
  onTap: 'onTap',
};

export const props = unique(Object.values(alias));
