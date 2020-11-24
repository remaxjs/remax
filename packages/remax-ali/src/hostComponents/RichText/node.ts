import { unique } from '@remax/shared';

export const alias = {
  id: 'id',
  className: 'class',
  style: 'style',
  nodes: 'nodes',
  onTap: 'onTap',
  onClick: 'onTap',
  onTouchStart: 'onTouchStart',
  onTouchMove: 'onTouchMove',
  onTouchEnd: 'onTouchEnd',
  onTouchCancel: 'onTouchCancel',
  onLongTap: 'onLongTap',
  onLongClick: 'onLongTap',
};

export const props = unique(Object.values(alias));
