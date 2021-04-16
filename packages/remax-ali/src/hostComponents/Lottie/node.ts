import { unique } from '@remax/shared';

export const alias = {
  id: 'id',
  className: 'class',
  autoplay: 'autoplay',
  path: 'path',
  djangoId: 'djangoId',
  md5: 'md5',
  speed: 'speed',
  repeatCount: 'repeatCount',
  autoReverse: 'autoReverse',
  assetsPath: 'assetsPath',
  placeholder: 'placeholder',
  optimize: 'optimize',
  onDataReady: 'onDataReady',
  onDataFailed: 'onDataFailed',
  onDataLoadReady: 'onDataLoadReady',
  onAnimationStart: 'onAnimationStart',
  onAnimationEnd: 'onAnimationEnd',
  onAnimationRepeat: 'onAnimationRepeat',
  onAnimationCancel: 'onAnimationCancel',
};

export const props = unique(Object.values(alias));
