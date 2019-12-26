import * as React from 'react';
import A from '@/components/a';
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

function readonly(target: any, name: any, descriptor: any) {
  descriptor.writable = false;
  return descriptor;
}

class C {
  // eslint-disable-next-line
  // @ts-ignore
  @readonly
  // eslint-disable-next-line
  // @ts-ignore
  p = 'p';
}

const c = new C();

c.p = 'a';

export default () => (
  <View>
    {timesTwo([1, 2, 3])}
    {N.V}
    {N.W}
    {c.p}
    <A />
  </View>
);
