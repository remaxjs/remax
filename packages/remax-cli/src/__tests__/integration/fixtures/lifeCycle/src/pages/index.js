import * as React from 'react';
import { View } from '@alipay/remix';
import { usePageEvent } from '@alipay/remix/macro';
import './module';

export default () => {
  usePageEvent('onShow', () => {
    console.log('on show');
  });

  return <View>view</View>;
};
