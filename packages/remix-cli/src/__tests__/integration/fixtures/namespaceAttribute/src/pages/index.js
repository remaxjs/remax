import * as React from 'react';
import { View } from '@alipay/remix/ali';
import NativeComponent from '@/components/native-component';
import './index.css';

export default function Index() {
  const props = {};
  return (
    <>
      <View />
      <NativeComponent ns:prop="ns:value" {...props} />
    </>
  );
}
