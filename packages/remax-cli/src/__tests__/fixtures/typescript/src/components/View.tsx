import * as React from 'react';
import { View as AliView } from 'remax/ali';
import { View as WechatView } from 'remax/wechat';
import { View as ToutiaoView } from 'remax/toutiao';

export default function View(props: any = {}) {
  switch (process.env.REMAX_PLATFORM) {
    case 'ali':
      return <AliView {...props} />;
    case 'toutiao':
      return <ToutiaoView {...props} />;
    case 'wechat':
    default:
      return <WechatView {...props} />;
  }
}
