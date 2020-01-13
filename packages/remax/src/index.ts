export { default as render } from './render';
export { default as createAppConfig } from './createAppConfig';
export { default as createPageConfig } from './createPageConfig';
export { default as createHostComponent } from './createHostComponent';
export {
  // eslint-disable-next-line @typescript-eslint/camelcase
  default as unstable_createNativeComponent,
} from './createNativeComponent';
export { PageProps } from './createPageWrapper';
export { default as Platform } from './Platform';
export * from './hooks';

import { ReactReconcilerInst } from './render';
// eslint-disable-next-line @typescript-eslint/camelcase
export const unstable_batchedUpdates = ReactReconcilerInst.batchedUpdates;
