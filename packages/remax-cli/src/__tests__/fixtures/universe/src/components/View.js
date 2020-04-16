import * as React from 'react';
import { Platform } from 'remax';
import { View as AliView } from 'remax/ali';
import { View as WechatView } from 'remax/wechat';
import { View as ToutiaoView } from 'remax/toutiao';

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
