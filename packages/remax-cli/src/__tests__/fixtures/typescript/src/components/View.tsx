import * as React from 'react';
import { Platform } from 'remax';
import { View as AlipayView } from 'remax/alipay';
import { View as WechatView } from 'remax/wechat';
import { View as ToutiaoView } from 'remax/toutiao';

export default function View(props: any = {}) {
  switch (Platform.current) {
    case 'alipay':
      return <AlipayView {...props} />;
    case 'toutiao':
      return <ToutiaoView {...props} />;
    case 'wechat':
    default:
      return <WechatView {...props} />;
  }
}
