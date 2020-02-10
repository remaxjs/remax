import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { kebabCase, cloneDeep } from 'lodash';
import API from '../../API';
import { RemaxOptions } from '../..';
import { LEAF, ENTRY } from './compiler/static/constants';

export interface Component {
  id: string;
  props: string[];
  importer: string;
  pages?: Set<string>;
}

type Components<T> = Map<string, T>;
export type Importers<T = Component> = Map<string, Components<T>>;

const importers: Importers = new Map();

export function convertComponents<T extends Component>(
  importers: Importers<T>
) {
  const components = [...importers.values()].reduce((prev, components) => {
    for (const component of components.values()) {
      const com = prev.find(com => com.id === component.id);
      if (com) {
        com.props = [...new Set([...com.props, ...component.props])].sort();

        if (com.pages && component.pages) {
          com.pages = new Set([...com.pages, ...component.pages]);
        }
        continue;
      }

      prev.push(cloneDeep(component));
    }
    return prev;
  }, [] as T[]);

  return components.map(c => ({ ...c, props: [...c.props] }));
}

export function addToComponentCollection<T extends Component>(
  component: T,
  importers: Importers
) {
  const components = importers.get(component.importer);

  if (!components) {
    importers.set(component.importer, new Map([[component.id, component]]));
    return;
  }

  const com = components.get(component.id);

  if (!com) {
    components.set(component.id, component);
    return;
  }

  components.set(component.id, {
    ...component,
    props: [...new Set([...component.props, ...com.props])].sort(),
  });
}

function registerProps(componentName: string, node?: t.JSXElement) {
  const hostComponent = API.getHostComponents().get(componentName);

  if (!hostComponent) {
    return;
  }

  const usedProps = API.processProps(
    componentName,
    hostComponent.props.slice(),
    hostComponent.additional,
    node
  );

  if (node) {
    node.openingElement.attributes.forEach(attr => {
      if (t.isJSXSpreadAttribute(attr)) {
        return;
      }

      const prop = attr.name;
      let propName = '';

      if (t.isJSXIdentifier(prop)) {
        propName = prop.name;
      }

      if (t.isJSXNamespacedName(prop)) {
        propName = prop.namespace.name + ':' + prop.name.name;
      }

      usedProps.push(propName);
    });
  }

  return [
    ...new Set(
      usedProps
        // 无需收集 slot 字段
        .filter(p => p !== 'slot')
        // 静态编译辅助字段
        .filter(p => p !== LEAF)
        .filter(p => p !== ENTRY)
        .filter(Boolean)
        .map(prop => hostComponent?.alias?.[prop] || prop)
    ),
  ].sort();
}

function registerComponent(
  {
    componentName,
    node,
    importer = '',
    phase,
    remaxOptions,
  }: {
    remaxOptions: RemaxOptions;
    componentName: string;
    node?: t.JSXElement;
    importer?: string;
    phase: 'import' | 'jsx' | 'extra';
  },
  additional?: boolean
) {
  if (
    !API.shouldHostComponentRegister(
      remaxOptions,
      componentName,
      phase,
      additional
    )
  ) {
    return;
  }

  const props = registerProps(componentName, node);

  if (!props) {
    return;
  }

  const component = {
    id: componentName,
    props,
    importer,
    additional,
  };

  addToComponentCollection(component, importers);
}

export default (options: RemaxOptions) => {
  importers.clear();

  return {
    pre(state: any) {
      importers.delete(state.opts.filename);
    },
    visitor: {
      ImportDeclaration(path: NodePath<t.ImportDeclaration>, state: any) {
        const node = path.node;

        if (!node.source.value.startsWith('remax/')) {
          return;
        }

        node.specifiers.forEach(specifier => {
          if (t.isImportSpecifier(specifier)) {
            const componentName = specifier.imported.name;
            const id = kebabCase(componentName);
            registerComponent({
              remaxOptions: options,
              componentName: id,
              importer: state.file.opts.filename,
              phase: 'import',
            });
          }
        });
      },
      JSXElement(path: NodePath, state: any) {
        const node = path.node as t.JSXElement;
        if (t.isJSXIdentifier(node.openingElement.name)) {
          const tagName = node.openingElement.name.name;
          const binding = path.scope.getBinding(tagName);

          if (!binding) {
            return;
          }

          const componentPath = binding.path as NodePath;

          if (
            !componentPath ||
            !t.isImportSpecifier(componentPath.node) ||
            !t.isImportDeclaration(componentPath.parent)
          ) {
            return;
          }

          const componentName = (componentPath.node as t.ImportSpecifier)
            .imported.name;
          const id = kebabCase(componentName);

          registerComponent({
            remaxOptions: options,
            componentName: id,
            node,
            importer: state.file.opts.filename,
            phase: 'jsx',
          });
        }
      },
    },
  };
};

export function getComponents(options: RemaxOptions) {
  API.getHostComponents().forEach((component, componentName) => {
    registerComponent(
      {
        remaxOptions: options,
        componentName,
        phase: 'extra',
      },
      component.additional
    );
  });

  return convertComponents(importers);
}
