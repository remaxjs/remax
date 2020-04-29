export { default as render } from './render';
export { default as createAppConfig } from './createAppConfig';
export { default as createPageConfig } from './createPageConfig';
export { default as createHostComponent } from './createHostComponent';
export { default as createNativeComponent } from './createNativeComponent';
export * from './hooks';

import { ReactReconcilerInst } from './render';
// eslint-disable-next-line @typescript-eslint/camelcase
export const unstable_batchedUpdates = ReactReconcilerInst.batchedUpdates;
