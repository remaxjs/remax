export { default as render } from './render';
export { default as createAppConfig } from './createAppConfig';
export { default as createPageConfig } from './createPageConfig';
export { default as createComponentConfig } from './createComponentConfig';
export { default as createNativeComponent } from './createNativeComponent';
export { default as createHostComponent } from './createHostComponent';
export { createPortal } from './ReactPortal';
export { RuntimeOptions, PluginDriver } from '@remax/framework-shared';
export * from './hooks';

import { ReactReconcilerInst } from './render';
export const unstable_batchedUpdates = ReactReconcilerInst.batchedUpdates;

export default {
  unstable_batchedUpdates,
};
