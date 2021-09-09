import { unique } from '@remax/shared';

export const alias = {
  id: 'id',
  disableScroll: 'disable-scroll',
  hoverClass: 'hover-class',
  hoverClassName: 'hover-class',
  hoverStartTime: 'hover-start-time',
  hoverStayTime: 'hover-stay-time',
  hidden: 'hidden',
  className: 'class',
  style: 'style',
  animation: 'animation',
  hoverStopPropagation: 'hover-stop-propagation',
  onClick: 'onTap',
  onTap: 'onTap',
  onTouchStart: 'onTouchStart',
  onTouchMove: 'onTouchMove',
  onTouchEnd: 'onTouchEnd',
  onTouchCancel: 'onTouchCancel',
  onLongTap: 'onLongTap',
  onLongClick: 'onLongTap',
  onTransitionEnd: 'onTransitionEnd',
  onAnimationIteration: 'onAnimationIteration',
  onAnimationStart: 'onAnimationStart',
  onAnimationEnd: 'onAnimationEnd',
  onAppear: 'onAppear',
  onDisappear: 'onDisappear',
  onFirstAppear: 'onFirstAppear',
};

export const props = unique(Object.values(alias));
