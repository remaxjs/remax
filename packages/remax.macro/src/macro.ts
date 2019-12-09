import * as React from 'react';
import { NodePath } from '@babel/traverse';
import { createMacro } from 'babel-plugin-macros';
import createHostComponentMacro, {
  hostComponents,
} from './createHostComponent';

function remax({
  references,
  state,
}: {
  references: { [name: string]: NodePath[] };
  state: any;
}) {
  if (references.createHostComponent) {
    references.createHostComponent.forEach(path =>
      createHostComponentMacro(path, state)
    );
  }
}

export declare function createHostComponent<P = any>(
  name: string,
  props: Array<string | [string, string]>
): React.ComponentType<P>;

export { hostComponents };

export default createMacro(remax);
