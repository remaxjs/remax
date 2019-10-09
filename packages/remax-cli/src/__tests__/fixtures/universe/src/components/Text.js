import * as React from 'react';
import { Platform } from 'remax';
import { Text as AlipayText } from 'remax/alipay';
import { Text as WechatText } from 'remax/wechat';
import { Text as ToutiaoText } from 'remax/toutiao';

export default function Text(props = {}) {
  switch (Platform.current) {
    case 'alipay':
      return <AlipayText {...props} />;
    case 'wechat':
      return <WechatText {...props} />;
    case 'toutiao':
      return <ToutiaoText {...props} />;
  }
}
