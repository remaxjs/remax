import * as React from 'react';
import { NodePath } from '@babel/traverse';
import { createMacro } from 'babel-plugin-macros';
import createHostComponentMacro, { hostComponents } from './createHostComponent';
import requirePluginComponentMacro, { nativeComponents, register } from './requirePluginComponent';
import requirePluginMacro from './requirePlugin';

function remax({ references, state }: { references: { [name: string]: NodePath[] }; state: any }) {
  if (references.createHostComponent) {
    references.createHostComponent.forEach(path => createHostComponentMacro(path, state));
  }

  if (references.requirePluginComponent) {
    references.requirePluginComponent.forEach(path => requirePluginComponentMacro(path, state));
  }

  if (references.requirePlugin) {
    references.requirePlugin.forEach(path => requirePluginMacro(path));
  }
}

export declare function createHostComponent<P = any>(
  name: string,
  props: Array<string | [string, string]>
): React.ComponentType<P>;

export declare function requirePluginComponent<P = any>(pluginName: string): React.ComponentType<P>;

export declare function requirePlugin<P = any>(pluginName: string): P;

export const registerNativeComponent = register;
export { hostComponents, nativeComponents };

export default createMacro(remax);
