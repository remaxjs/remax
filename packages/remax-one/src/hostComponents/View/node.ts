const platformAlias: any = {
  ali: {
    onTap: 'onTap',
    onTouchStart: 'onTouchStart',
    onTouchMove: 'onTouchMove',
    onTouchEnd: 'onTouchEnd',
    onTouchCancel: 'onTouchCancel',
    onLongTap: 'onLongTap',
  },
  wechat: {
    role: 'aria-role',
    onTap: 'bindtap',
    onTouchStart: 'bindtouchstart',
    onTouchMove: 'bindtouchmove',
    onTouchEnd: 'bindtouchend',
    onTouchCancel: 'bindtouchcancel',
    onLongTap: 'bindlongtap',
  },
  toutiao: {
    role: 'aria-role',
    onTap: 'bindtap',
    onTouchStart: 'bindtouchstart',
    onTouchMove: 'bindtouchmove',
    onTouchEnd: 'bindtouchend',
    onTouchCancel: 'bindtouchcancel',
    onLongTap: 'bindlongtap',
  },
};

const defaultAlias = {
  id: 'id',
  role: 'role',
  hoverClass: 'hover-class',
  hoverClassName: 'hover-class',
  hoverStartTime: 'hover-start-time',
  hoverStayTime: 'hover-stay-time',
  className: 'class',
  style: 'style',
  animation: 'animation',
};

export const alias = { ...defaultAlias, ...platformAlias[process.env.REMAX_PLATFORM!] };

export const props = Object.values(alias);
