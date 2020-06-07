import * as React from 'react';
import { View } from '@alipay/remix/ali';
import { usePageEvent } from 'remix/macro';
import './module';

export default () => {
  usePageEvent('onShow', () => {
    console.log('on show');
  });

  return <View>view</View>;
};
