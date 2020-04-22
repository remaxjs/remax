export { default as render } from '@remax/runtime/render';
export { default as createAppConfig } from '@remax/runtime/createAppConfig';
export { default as createPageConfig } from '@remax/runtime/createPageConfig';
export { default as createHostComponent } from '@remax/runtime/createHostComponent';
export { default as createNativeComponent } from '@remax/runtime/createNativeComponent';
export { PageProps } from '@remax/runtime/createPageWrapper';
export * from '@remax/runtime/hooks';

import { ReactReconcilerInst } from '@remax/runtime/render';
// eslint-disable-next-line @typescript-eslint/camelcase
export const unstable_batchedUpdates = ReactReconcilerInst.batchedUpdates;
