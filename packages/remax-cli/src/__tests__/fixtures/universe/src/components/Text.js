import * as React from 'react';
import { Platform } from 'remax';
import { Text as AliText } from 'remax/ali';
import { Text as WechatText } from 'remax/wechat';
import { Text as ToutiaoText } from 'remax/toutiao';

export default function Text(props = {}) {
  switch (Platform.current) {
    case 'ali':
      return <AliText {...props} />;
    case 'wechat':
      return <WechatText {...props} />;
    case 'toutiao':
      return <ToutiaoText {...props} />;
  }
}
