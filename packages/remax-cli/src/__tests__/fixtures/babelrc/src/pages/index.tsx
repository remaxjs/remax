import * as React from 'react';
import { View } from 'remax/alipay';

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace N {
  export const V = 1;
}
// eslint-disable-next-line @typescript-eslint/no-namespace
namespace N {
  export const W = V;
}

function timesTwo(arr: number[]) {
  return arr.map(n => n * 2);
}

export default () => (
  <View>
    {timesTwo([1, 2, 3])}
    {N.V}
    {N.W}
  </View>
);
