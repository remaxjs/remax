import { kebabCase, sortBy } from 'lodash';
import { NodePath } from '@babel/traverse';
import * as t from '@babel/types';
import * as path from 'path';
import { isNativeComponent, isPluginComponent, getSourcePath } from './util';
import { RemaxOptions } from 'remax-types';
import {
  Importers,
  addToComponentCollection,
  convertComponents,
  Component,
} from '../components';

const importers: Importers<Component & {
  hashId: string;
  pages: Set<string>;
}> = new Map();

export const getKebabCaseName = (sourcePath: string) =>
  kebabCase(path.basename(path.dirname(sourcePath)));

const nativeIds: Map<string, string[]> = new Map();

const getHashId = (sourcePath: string, id: string) => {
  const sourcePaths = nativeIds.get(id);

  if (sourcePaths) {
    const index = sourcePaths.findIndex(source => source === sourcePath);

    if (index >= 0) {
      return `${id}-${index}`;
    }

    sourcePaths.push(sourcePath);
    return `${id}-${sourcePaths.length - 1}`;
  }

  nativeIds.set(id, [sourcePath]);
  return `${id}-0`;
};

export default (options: RemaxOptions) => {
  importers.clear();

  return () => ({
    pre(state: any) {
      const filename = state.opts.filename;
      importers.delete(filename);
    },
    visitor: {
      ImportDeclaration(path: NodePath<t.ImportDeclaration>, state: any) {
        const importer = state.file.opts.filename;
        const node = path.node;

        const sourcePath = getSourcePath(options, node.source.value, importer);
        if (!isNativeComponent(sourcePath)) {
          return;
        }

        const id = getKebabCaseName(sourcePath);
        const component = {
          id: sourcePath,
          props: [],
          importer,
          hashId: getHashId(sourcePath, id),
          pages: new Set([]),
        };

        addToComponentCollection(component, importers);
      },
      JSXElement(nodePath: NodePath<t.JSXElement>, state: any) {
        const importer = state.file.opts.filename;
        const node = nodePath.node;

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
          const sourcePath = getSourcePath(options, source, importer);

          if (
            !isNativeComponent(sourcePath) &&
            !isPluginComponent(sourcePath, options)
          ) {
            return;
          }

          const id = getKebabCaseName(sourcePath);

          const usedProps = node.openingElement.attributes.map(attr => {
            if (t.isJSXSpreadAttribute(attr)) {
              return '';
            }

            const prop = attr.name;
            let propName = '';

            if (t.isJSXIdentifier(prop)) {
              propName = prop.name;
            }

            if (t.isJSXNamespacedName(prop)) {
              propName = prop.namespace.name + ':' + prop.name.name;
            }

            return propName;
          });

          const props = usedProps
            .filter(Boolean)
            // 剔除 ref，在 axml 特殊处理
            .filter(k => k !== 'ref')
            .map(prop => prop.replace('className', 'class'));

          const component = {
            id: sourcePath,
            props: [...new Set(props)].sort(),
            importer,
            hashId: getHashId(sourcePath, id),
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
