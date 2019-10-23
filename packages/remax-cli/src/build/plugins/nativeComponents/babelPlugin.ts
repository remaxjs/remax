import { get } from 'dot-prop';
import { kebabCase, union } from 'lodash';
import { NodePath } from '@babel/traverse';
import * as t from '@babel/types';
import * as path from 'path';
import { Adapter } from '../../adapters';
import {
  isNativeComponent,
  isPluginComponent,
  getSourcePath,
  getDeleteComponentPaths,
} from './util';
import { RemaxOptions } from '../../../getConfig';

export interface Component {
  type: string;
  id: string;
  props: string[];
  importer: string[];
}

interface NativeComponents {
  [id: string]: Component;
}

let nativeId = 0;

let nativeComponents: NativeComponents = {};

const getKebabCaseName = (sourcePath: string) =>
  kebabCase(path.basename(path.dirname(sourcePath)));

export const clear = (id?: string) => {
  if (id === undefined) {
    nativeId = 0;
    nativeComponents = {};
    return;
  }

  const componentPaths = getDeleteComponentPaths(id, nativeComponents);

  if (!componentPaths.length) {
    return;
  }

  for (const path of componentPaths) {
    delete nativeComponents[path];
  }
};

export default (options: RemaxOptions, adapter: Adapter) => {
  clear();

  return () => ({
    visitor: {
      JSXElement(nodePath: NodePath, state: any) {
        const importer = state.file.opts.filename;
        const node = nodePath.node as t.JSXElement;

        if (t.isJSXIdentifier(node.openingElement.name)) {
          const tagName = node.openingElement.name.name;
          const binding = nodePath.scope.getBinding(tagName);
          if (!binding) {
            return;
          }
          const componentPath = binding.path;

          if (
            !componentPath ||
            !t.isImportDefaultSpecifier(componentPath.node) ||
            !t.isImportDeclaration(componentPath.parent)
          ) {
            return;
          }

          const source = componentPath.parent.source.value;
          const sourcePath = getSourcePath(options, adapter, source, importer);

          if (
            !isNativeComponent(sourcePath) &&
            !isPluginComponent(sourcePath, options, adapter)
          ) {
            return;
          }

          const id = getKebabCaseName(sourcePath);

          const usedProps = node.openingElement.attributes.map(e => {
            const propName = get(e, 'name.name') as string;
            return propName;
          });

          const props = usedProps
            .filter(prop => !!prop)
            .map(prop => adapter.getNativePropName(prop, true, true));

          if (!nativeComponents[sourcePath]) {
            nativeComponents[sourcePath] = {
              type: 'native',
              id: `${id}-${nativeId++}`,
              props,
              importer: [importer],
            };
            return;
          }

          nativeComponents[sourcePath].props = union(
            nativeComponents[sourcePath].props,
            props
          );
          nativeComponents[sourcePath].importer = union(
            nativeComponents[sourcePath].importer,
            [importer]
          );
        }
      },
    },
  });
};

export function getNativeComponents() {
  return nativeComponents;
}
