import * as React from 'react';
import { Text as AliText } from 'remax/ali';
import { Text as WechatText } from 'remax/wechat';
import { Text as ToutiaoText } from 'remax/toutiao';

export default function Text(props = {}) {
  switch (process.env.REMAX_PLATFORM) {
    case 'ali':
      return <AliText {...props} />;
    case 'toutiao':
      return <ToutiaoText {...props} />;
    case 'wechat':
    default:
      return <WechatText {...props} />;
  }
}
