import * as React from 'react';
import { NodePath } from '@babel/traverse';
import { createMacro } from 'babel-plugin-macros';
import { slash } from '@remax/shared';
import createHostComponentMacro, { hostComponents } from './createHostComponent';
import requirePluginComponentMacro, {
  nativeComponents,
  register as registerNativeComponent,
} from './requirePluginComponent';
import requirePluginMacro from './requirePlugin';
import usePageEventMacro, { pageEvents } from './usePageEvent';
import useAppEventMacro, { appEvents } from './useAppEvent';

function remax({ references, state }: { references: { [name: string]: NodePath[] }; state: any }) {
  references.createHostComponent?.forEach(path => createHostComponentMacro(path, state));

  references.requirePluginComponent?.forEach(path => requirePluginComponentMacro(path, state));

  references.requirePlugin?.forEach(path => requirePluginMacro(path));

  const importer = slash(state.file.opts.filename);

  appEvents.delete(importer);
  pageEvents.delete(importer);

  references.useAppEvent?.forEach(path => useAppEventMacro(path, state));

  references.usePageEvent?.forEach(path => usePageEventMacro(path, state));
}

export declare function createHostComponent<P = any>(
  name: string,
  props: Array<string | [string, string]>
): React.ComponentType<P>;

export declare function requirePluginComponent<P = any>(pluginName: string): React.ComponentType<P>;

export declare function requirePlugin<P = any>(pluginName: string): P;

type PageEventName =
  | 'onLoad'
  | 'onShow'
  | 'onHide'
  | 'onReady'
  | 'onPullDownRefresh'
  | 'onReachBottom'
  | 'onPageScroll'
  | 'onShareAppMessage'
  | 'onTitleClick'
  | 'onOptionMenuClick'
  | 'onPopMenuClick'
  | 'onPullIntercept'
  | 'onBack'
  | 'onKeyboardHeight'
  | 'onTabItemTap'
  | 'beforeTabItemTap'
  | 'onResize'
  | 'onUnload';

type AppEventName =
  | 'onLaunch'
  | 'onShow'
  | 'onHide'
  | 'onError'
  | 'onShareAppMessage'
  | 'onPageNotFound'
  | 'onUnhandledRejection'
  | 'onThemeChange';

export declare function usePageEvent(eventName: PageEventName, callback: (...params: any[]) => any): void;

export declare function useAppEvent(eventName: AppEventName, callback: (...params: any[]) => any): void;

export { hostComponents, nativeComponents, registerNativeComponent, pageEvents, appEvents };

export default createMacro(remax);
