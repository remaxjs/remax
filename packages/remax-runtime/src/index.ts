export { default as render } from './render';
export { default as PluginDriver } from './PluginDriver';
export { default as createAppConfig } from './createAppConfig';
export { default as createPageConfig } from './createPageConfig';
export { default as createNativeComponent } from './createNativeComponent';
export { createPortal } from './ReactPortal';
import * as RuntimeOptions from './RuntimeOptions';
export { createHostComponent } from '@remax/shared';
export { default as usePageContext } from './hooks/usePageContext';
export * from './hooks';

import { ReactReconcilerInst } from './render';
// eslint-disable-next-line @typescript-eslint/camelcase
export const unstable_batchedUpdates = ReactReconcilerInst.batchedUpdates;

export { RuntimeOptions };
