import { get } from 'dot-prop';
import { kebabCase, sortBy } from 'lodash';
import { NodePath } from '@babel/traverse';
import * as t from '@babel/types';
import * as path from 'path';
import { Adapter } from '../../adapters';
import { isNativeComponent, isPluginComponent, getSourcePath } from './util';
import { RemaxOptions } from '../../../getConfig';
import {
  Importers,
  addToComponentCollection,
  convertComponents,
  Component,
} from '../components';

const importers: Importers<
  Component & { hashId: string; pages: Set<string> }
> = new Map();

export const getKebabCaseName = (sourcePath: string) =>
  kebabCase(path.basename(path.dirname(sourcePath)));

const nativeIds: Map<string, number> = new Map();

const getHashId = (id: string) => {
  const nativeId = nativeIds.get(id);

  if (nativeId === undefined) {
    nativeIds.set(id, 0);
    return `${id}-0`;
  }

  nativeIds.set(id, nativeId + 1);

  return `${id}-${nativeId + 1}`;
};

export default (options: RemaxOptions, adapter: Adapter) => {
  importers.clear();

  return () => ({
    pre(state: any) {
      importers.delete(state.opts.filename);
    },
    visitor: {
      JSXElement(nodePath: NodePath, state: any) {
        const importer: string = state.file.opts.filename;
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
            .filter(Boolean)
            .map(prop => adapter.getNativePropName(prop, true));

          const component = {
            id: sourcePath,
            props: new Set(props),
            importer,
            hashId: getHashId(id),
            pages: new Set([]),
          };

          addToComponentCollection(component, importers);
        }
      },
    },
  });
};

export const getNativeComponents = () =>
  sortBy(
    convertComponents(importers).map(component => {
      return {
        ...component,
        type: 'native',
        id: component.hashId,
        sourcePath: component.id,
      };
    }),
    'id'
  );

export const getImporters = () => importers;
