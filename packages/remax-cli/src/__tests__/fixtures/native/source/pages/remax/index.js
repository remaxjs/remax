import * as React from 'react';
import { View } from 'remax/alipay';
import NativeComponent from '@/components/native-component';
import '../../common';

export default function RemaxPage(props) {
  return (
    <View>
      <NativeComponent />
      alipay view
    </View>
  );
}
