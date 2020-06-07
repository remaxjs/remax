import * as React from 'react';
import { Platform } from 'remix';
import { View as AliView } from '@alipay/remix/ali';
import { View as WechatView } from 'remix/wechat';
import { View as ToutiaoView } from 'remix/toutiao';

export default function View(props = {}) {
  switch (Platform.current) {
    case 'ali':
      return <AliView {...props} />;
    case 'wechat':
      return <WechatView {...props} />;
    case 'toutiao':
      return <ToutiaoView {...props} />;
  }
}
