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
  onTouchStart: 'onTouchStart',
  onTouchMove: 'onTouchMove',
  onTouchEnd: 'onTouchEnd',
  onTouchCancel: 'onTouchCancel',
  onChange: 'onChange',
  onChangeEnd: 'onChangeEnd',
  onScale: 'onScale',
};

export const props = unique(Object.values(alias));
