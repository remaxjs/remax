import * as React from 'react';
import { View, Image } from '@alipay/remix';
import cat from '../assets/images/inline.jpg';
import './index.css';

export default function Index() {
  return (
    <View>
      <Image src={cat} />
    </View>
  );
}
