import * as React from 'react';
import { View } from 'remax/alipay';
import NativeComponent from '@/components/native-component';
import './index.css';

export default function Index() {
  const props = {};
  return (
    <>
      <View ns:prop="ns:value" />
      <NativeComponent ns:prop="ns:value" {...props} />
    </>
  );
}
