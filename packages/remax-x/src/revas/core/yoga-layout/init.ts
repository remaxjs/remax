import Yoga, { YogaWasm } from 'yoga-layout-wasm/asm';

export const yoga: YogaWasm = {} as any;

export const promise = Yoga.init().then(y => {
  console.log('yoga init success');
  Object.assign(yoga, y);
  console.log('yoga init assign');
});
