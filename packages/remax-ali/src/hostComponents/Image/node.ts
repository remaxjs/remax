import { unique } from '@remax/shared';

export const alias = {
  id: 'id',
  src: 'src',
  mode: 'mode',
  className: 'class',
  style: 'style',
  lazyLoad: 'lazy-load',
  onLoad: 'onLoad',
  onError: 'onError',
  onTap: 'onTap',
  onTouchStart: 'onTouchStart',
  onTouchMove: 'onTouchMove',
  onTouchEnd: 'onTouchEnd',
  onTouchCancel: 'onTouchCancel',
  onClick: 'onTap',
};

export const props = unique(Object.values(alias));
