import * as React from 'react';
import { View } from 'remax/ali';
import { usePageEvent } from 'remax/macro';
import './module';

export default () => {
  usePageEvent('onPageScroll', () => {
    console.log('on page scroll');
  });

  return <View>view</View>;
};
