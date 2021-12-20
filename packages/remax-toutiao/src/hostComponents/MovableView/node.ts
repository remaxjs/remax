import { unique } from '@remax/shared';

export const alias = {
  id: 'id',
  className: 'class',
  style: 'style',
  direction: 'direction',
  width: 'width',
  height: 'height',
  x: 'x',
  y: 'y',
  disabled: 'disabled',
  outOfBounds: 'out-of-bounds',
  damping: 'damping',
  friction: 'friction',
  scale: 'scale',
  scaleMin: 'scale-min',
  scaleMax: 'scale-max',
  scaleValue: 'scale-value',
  onTouchStart: 'touchstart',
  onTouchMove: 'touchmove',
  onTouchEnd: 'touchend',
  onTouchCancel: 'touchcancel',
  onChange: 'bindchange',
  onChangeEnd: 'bindchangeend',
  onScale: 'bindscale',
};

export const props = unique(Object.values(alias));
