import Yoga, { YogaWasm } from 'yoga-layout-wasm/asm';

export const yoga: YogaWasm = {} as any;

export const promise = Yoga.init().then(y => {
  Object.assign(yoga, y);
});
