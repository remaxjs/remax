import * as React from 'react';
import { NodePath } from '@babel/traverse';
import { createMacro } from 'babel-plugin-macros';
import createHostComponentMacro, { hostComponents } from './createHostComponent';
import requirePluginComponentMacro, {
  nativeComponents,
  register as registerNativeComponent,
} from './requirePluginComponent';
import requirePluginMacro from './requirePlugin';
import usePageEventMacro, { pageEvents } from './usePageEvent';
import useAppEventMacro, { appEvents } from './useAppEvent';
import winPath from './utils/winPath';

function remax({ references, state }: { references: { [name: string]: NodePath[] }; state: any }) {
  references.createHostComponent?.forEach(path => createHostComponentMacro(path, state));

  references.requirePluginComponent?.forEach(path => requirePluginComponentMacro(path, state));

  references.requirePlugin?.forEach(path => requirePluginMacro(path));

  const importer = winPath(state.file.opts.filename);

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

export declare function usePageEvent(eventName: string, callback: (...params: any[]) => any): void;

export declare function useAppEvent(eventName: string, callback: (...params: any[]) => any): void;

export { hostComponents, nativeComponents, registerNativeComponent, pageEvents, appEvents };

export default createMacro(remax);
