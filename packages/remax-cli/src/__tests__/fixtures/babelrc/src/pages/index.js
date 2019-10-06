import * as React from 'react';
import { View } from 'remax/alipay';

function timesTwo(arr) {
  return arr.map(n => n * 2);
}

export default () => <View>{timesTwo([1, 2, 3])}</View>;
