import * as React from 'react';
import A from '@/components/a';
import { View } from 'remax';

function timesTwo(arr) {
  return arr.map(n => n * 2);
}

function readonly(target, name, descriptor) {
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

const props = {};

export default () => (
  <View>
    {timesTwo([1, 2, 3])}
    {c.p}
    <A>
      <View slot="slot" {...props} />
    </A>
  </View>
);
