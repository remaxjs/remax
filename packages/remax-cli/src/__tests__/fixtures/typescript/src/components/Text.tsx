import * as React from 'react';
import { Text as AlipayText } from 'remax/alipay';
import { Text as WechatText } from 'remax/wechat';
import { Text as ToutiaoText } from 'remax/toutiao';

export default function Text(props = {}) {
  switch (process.env.REMAX_PLATFORM) {
    case 'alipay':
      return <AlipayText {...props} />;
    case 'toutiao':
      return <ToutiaoText {...props} />;
    case 'wechat':
    default:
      return <WechatText {...props} />;
  }
}
