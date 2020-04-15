import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { kebabCase, cloneDeep } from 'lodash';
import API from '../../API';
import { RemaxOptions } from '../..';
import { LEAF, ENTRY } from './compiler/static/constants';
import { HostComponent } from 'remax-types';

export interface Component {
  id: string;
  props: string[];
  importer: string;
  pages?: Set<string>;
}

export const SlotView: Component = {
  id: 'slot-view',
  props: [],
  importer: '',
};

type Components<T> = Map<string, T>;
export type Importers<T = Component> = Map<string, Components<T>>;

const importers: Importers = new Map();

function aliasProp(propName: string, hostComponent?: HostComponent) {
  const prefix = `${API.adapter.target}-`;

  if (propName.startsWith(prefix)) {
    return propName.replace(new RegExp(`^${prefix}`), '');
  }

  return hostComponent?.alias?.[propName] || propName;
}

export function convertComponents<T extends Component>(importers: Importers<T>) {
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

export function addToComponentCollection<T extends Component>(component: T, importers: Importers) {
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

function registerSlotViewProps(node: t.JSXElement) {
  let props: string[] = [];
  node.openingElement.attributes.forEach(attr => {
    if (t.isJSXSpreadAttribute(attr)) {
      props = [...props, ...(API.getHostComponents().get('view')?.props || [])];
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

    props.push(propName);
  });

  return (
    props
      // 无需收集 slot 字段
      .filter(p => p !== 'slot')
      .map(prop => aliasProp(prop, API.getHostComponents().get('view')))
      .sort()
  );
}

function registerProps(componentName: string, node?: t.JSXElement) {
  const hostComponent = API.getHostComponents().get(componentName);

  if (!hostComponent) {
    return;
  }

  const usedProps = API.processProps(componentName, hostComponent.props.slice(), hostComponent.additional, node);

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

      /**
       * React 运行时读不到 key
       * 所以在这里如果发现组件上设置了 key
       * 就再设置一个别名 __key
       * 然后在模板里写死 key="{{item.props.__key}}"
       */
      if (propName === 'key') {
        node.openingElement.attributes.push(t.jsxAttribute(t.jsxIdentifier('__key'), attr.value));
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
        .map(prop => aliasProp(prop, hostComponent))
    ),
  ].sort();
}

function isSlotView(componentName: string, node?: t.JSXElement) {
  if (!node || componentName !== 'view') {
    return false;
  }

  if (node.openingElement.attributes.find(attr => t.isJSXAttribute(attr) && attr.name.name === 'slot')) {
    return true;
  }

  return false;
}

function registerComponent(
  {
    componentName,
    node,
    importer = '',
    phase,
  }: {
    remaxOptions: RemaxOptions;
    componentName: string;
    node?: t.JSXElement;
    importer?: string;
    phase: 'import' | 'jsx' | 'extra';
  },
  additional?: boolean
) {
  if (!API.shouldHostComponentRegister(componentName, phase, additional)) {
    return;
  }

  let props: string[] | undefined = [];

  if (isSlotView(componentName, node)) {
    // isSlotView 确保了 node 一定存在
    props = registerSlotViewProps(node!);

    SlotView.props = Array.from(new Set([...SlotView.props, ...props]));

    return;
  } else {
    props = registerProps(componentName, node);
  }

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

        if (!node.source.value.startsWith('remax/') && node.source.value !== 'remax-one') {
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

          const componentName = (componentPath.node as t.ImportSpecifier).imported.name;
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
