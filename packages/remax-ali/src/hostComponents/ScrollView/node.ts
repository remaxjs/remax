import { unique } from '@remax/shared';

export const alias = {
  id: 'id',
  className: 'class',
  style: 'style',
  scrollX: 'scroll-x',
  scrollY: 'scroll-y',
  upperThreshold: 'upper-threshold',
  lowerThreshold: 'lower-threshold',
  scrollTop: 'scroll-top',
  scrollLeft: 'scroll-left',
  scrollIntoView: 'scroll-into-view',
  scrollWithAnimation: 'scroll-with-animation',
  scrollAnimationDuration: 'scroll-animation-duration',
  enableBackToTop: 'enable-back-to-top',
  trapScroll: 'trap-scroll',
  onScrollToUpper: 'onScrollToUpper',
  disableLowerScroll: 'disable-lower-scroll',
  disableUpperScroll: 'disable-upper-scroll',
  onScrollToLower: 'onScrollToLower',
  onScroll: 'onScroll',
  onTouchStart: 'onTouchStart',
  onTouchMove: 'onTouchMove',
  onTouchEnd: 'onTouchEnd',
  onTouchCancel: 'onTouchCancel',
};

export const props = unique(Object.values(alias));
