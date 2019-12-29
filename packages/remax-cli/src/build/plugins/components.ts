import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { kebabCase, cloneDeep } from 'lodash';
import { Adapter } from '../adapters';

export interface Component {
  id: string;
  props: Set<string>;
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
        com.props = new Set([...com.props, ...component.props]);

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
    props: new Set([...component.props, ...com.props]),
  });
}

function shouldRegisterAllProps(node?: t.JSXElement, force?: boolean) {
  if (force) {
    return true;
  }

  if (!node) {
    return false;
  }

  if (
    node.openingElement.attributes.find(a => a.type === 'JSXSpreadAttribute')
  ) {
    return true;
  }

  return false;
}

function registerProps(
  componentName: string,
  adapter: Adapter,
  node?: t.JSXElement
) {
  const hostComponent = adapter.hostComponents.get(componentName);

  if (!hostComponent) {
    return;
  }

  let usedProps = hostComponent.props.slice();

  if (
    adapter.name !== 'alipay' &&
    !shouldRegisterAllProps(node, hostComponent.additional)
  ) {
    usedProps = [];
  }

  if (adapter.name === 'wechat') {
    if (componentName === 'scroll-view') {
      usedProps.push('onScroll');
    }

    if (componentName === 'swiper') {
      usedProps.push('onChange');
    }
  }

  if (node) {
    node.openingElement.attributes.forEach(attr => {
      if (t.isJSXSpreadAttribute(attr)) {
        return;
      }

      const propName = attr.name.name as string;

      if (!usedProps.includes(propName)) {
        usedProps.push(propName);
      }
    });
  }

  usedProps.push('data-rid');

  return new Set(
    usedProps
      .filter(Boolean)
      .map(prop => adapter.getNativePropName(prop, false, componentName))
      .sort()
  );
}

function registerComponent({
  componentName,
  adapter,
  node,
  importer = '',
}: {
  componentName: string;
  adapter: Adapter;
  node?: t.JSXElement;
  importer?: string;
}) {
  if (componentName === 'swiper-item') {
    return;
  }

  if (adapter.name === 'alipay' && componentName === 'picker-view-column') {
    return;
  }

  const props = registerProps(componentName, adapter, node);

  if (!props) {
    return;
  }

  const component = {
    id: componentName,
    props,
    importer,
  };

  addToComponentCollection(component, importers);
}

export default (adapter: Adapter) => {
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
              componentName: id,
              adapter,
              importer: state.file.opts.filename,
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
            componentName: id,
            adapter,
            node,
            importer: state.file.opts.filename,
          });
        }
      },
    },
  };
};

function getAlipayComponents(adapter: Adapter) {
  for (const name of adapter.hostComponents.keys()) {
    registerComponent({
      componentName: name,
      adapter,
    });
  }

  return convertComponents(importers);
}

export function getComponents(adapter: Adapter) {
  if (adapter.name === 'alipay') {
    return getAlipayComponents(adapter);
  }

  adapter.hostComponents.forEach((component, componentName) => {
    if (component.additional) {
      registerComponent({
        componentName,
        adapter,
      });
    }
  });

  return convertComponents(importers);
}
