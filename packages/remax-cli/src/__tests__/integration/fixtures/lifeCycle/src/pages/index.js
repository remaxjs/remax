import * as React from 'react';
import { View } from 'remax';
import { usePageEvent } from '@remax/macro';
import './module';

export default () => {
  usePageEvent('onShow', () => {
    console.log('on show');
  });

  usePageEvent('onShareTimeline', () => {
    console.log('onShareTimeline');
  });

  return <View>view</View>;
};
