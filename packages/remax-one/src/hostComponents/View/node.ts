/* eslint-disable @typescript-eslint/camelcase */

const platformAlias: any = {
  alipay: {
    onTap: 'onTap',
    onTouchStart: 'onTouchStart',
    onTouchMove: 'onTouchMove',
    onTouchEnd: 'onTouchEnd',
    onTouchCancel: 'onTouchCancel',
    onLongTap: 'onLongTap',
    onTransitionEnd: 'onTransitionEnd',
    onAnimationIteration: 'onAnimationIteration',
    onAnimationStart: 'onAnimationStart',
    onAnimationEnd: 'onAnimationEnd',
    ['alipay-onAppear']: 'onAppear',
    ['alipay-onDisappear']: 'onDisappear',
    ['alipay-onFirstAppear']: 'onFirstAppear',
    ['alipay-disable-scroll']: 'disable-scroll',
    ['alipay-hover-stop-propagation']: 'hover-stop-propagation',
    ['alipay-onTransitionEnd']: 'onTransitionEnd',
    ['alipay-onAnimationIteration']: 'onAnimationIteration',
    ['alipay-onAnimationStart']: 'onAnimationStart',
    ['alipay-onAnimationEnd']: 'onAnimationEnd',
  },
  wechat: {
    role: 'aria-role',
    onTap: 'bindtap',
    onTouchStart: 'bindtouchstart',
    onTouchMove: 'bindtouchmove',
    onTouchEnd: 'bindtouchend',
    onTouchCancel: 'bindtouchcancel',
    onLongTap: 'bindlongtap',
    onTransitionEnd: 'bindtransitionend',
    onAnimationIteration: 'bindanimationiteration',
    onAnimationStart: 'bindanimationstart',
    onAnimationEnd: 'bindanimationend',
    ['wechat-disable-scroll']: 'disable-scroll',
    ['wechat-hover-stop-propagation']: 'hover-stop-propagation',
    ['wechat-bindtransitionend']: 'bindtransitionend',
    ['wechat-bindanimationiteration']: 'bindanimationiteration',
    ['wechat-bindanimationstart']: 'bindanimationstart',
    ['wechat-bindanimationend']: 'bindanimationend',
  },
  toutiao: {
    ['toutiao-disable-scroll']: 'disable-scroll',
    ['toutiao-hover-stop-propagation']: 'hover-stop-propagation',
    ['toutiao-bindtransitionend']: 'bindtransitionend',
    ['toutiao-bindanimationiteration']: 'bindanimationiteration',
    ['toutiao-bindanimationstart']: 'bindanimationstart',
    ['toutiao-bindanimationend']: 'bindanimationend',
  },
};

const defaultAlias = {
  id: 'id',
  role: 'role',
  hoverClass: 'hover-class',
  hoverStartTime: 'hover-start-time',
  hoverStayTime: 'hover-stay-time',
  hidden: 'hidden',
  className: 'class',
  style: 'style',
  animation: 'animation',
  hoverStopPropagation: 'hover-stop-propagation',
};

export const alias = { ...defaultAlias, ...platformAlias[process.env.REMAX_PLATFORM!] };

export const props = Object.values(alias);
