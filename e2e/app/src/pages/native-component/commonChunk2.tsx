import * as React from 'react';
import { View } from 'remax/one';
import G from '@/components/g';
import B from '@/components/b';

// 测试存在 common chunk 的情况

export default () => (
  <View>
    <G />
    <B />
  </View>
);
