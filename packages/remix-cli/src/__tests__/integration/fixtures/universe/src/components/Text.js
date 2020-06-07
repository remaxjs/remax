import * as React from 'react';
import { Platform } from 'remix';
import { Text as AliText } from '@alipay/remix/ali';
import { Text as WechatText } from 'remix/wechat';
import { Text as ToutiaoText } from 'remix/toutiao';

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
