import * as React from 'react';
import { View } from 'remax/ali';
import { usePageEvent } from 'remax/macro';
import './module';

export default () => {
  usePageEvent('onShow', () => {
    console.log('on show');
  });

  return <View>view</View>;
};
