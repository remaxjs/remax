import * as React from 'react';
import { usePageEvent } from 'remix/macro';
import { View } from '@alipay/remix/ali';

export default function () {
  usePageEvent('onShareAppMessage', () => {
    console.log('onShareAppMessage');
  });

  return <View>module</View>;
}
