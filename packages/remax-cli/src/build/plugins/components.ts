import * as t from '@babel/types';
import * as PATH from 'path';
import winPath from '../../winPath';
import fs from 'fs';
import { NodePath } from '@babel/traverse';
import { kebabCase } from 'lodash';
import { Adapter } from '../adapters';

interface Component {
  id: string;
  props: string[];
}

interface ComponentCollection {
  [id: string]: Component;
}

let components: ComponentCollection = {};
let importedComponents: ComponentCollection = {};

function clear() {
  components = {};
  importedComponents = {};
}

function addToComponentCollection(
  component: Component,
  componentCollection: ComponentCollection
) {
  if (!componentCollection[component.id]) {
    componentCollection[component.id] = component;
  }

  component.props.forEach(prop => {
    if (
      componentCollection[component.id].props.findIndex(
        item => item === prop
      ) !== -1
    ) {
      return;
    }

    componentCollection[component.id].props.push(prop);
  });
}

function shouldRegisterAllProps(node: t.JSXElement) {
  if (
    node.openingElement.attributes.find(a => a.type === 'JSXSpreadAttribute')
  ) {
    return true;
  }

  return false;
}

function registerComponent(
  componentName: string,
  componentCollection: ComponentCollection,
  adapter: Adapter,
  node?: t.JSXElement
) {
  if (componentName === 'swiper-item') {
    return;
  }

  if (adapter.name === 'alipay' && componentName === 'picker-view-column') {
    return;
  }

  /* istanbul ignore next */
  try {
    if (!adapter.hostComponents(componentName)) {
      return;
    }
  } catch (error) {
    return;
  }

  let usedProps = adapter.hostComponents(componentName).props;
  if (node && adapter.name === 'alipay') {
    // 支付宝在使用全部props的基础上，还加入用户定义的prop，用于收集 dataset, catch 事件等props
    node.openingElement.attributes.forEach(attr => {
      if (t.isJSXSpreadAttribute(attr)) {
        return;
      }

      const propName = attr.name.name as string;

      if (!usedProps.find(prop => prop === propName)) {
        usedProps.push(propName);
      }
    });
  } else if (node && !shouldRegisterAllProps(node)) {
    usedProps = node.openingElement.attributes.map(attr => {
      /* istanbul ignore next */
      if (t.isJSXSpreadAttribute(attr)) {
        return '';
      }

      return attr.name.name as string;
    });
  }

  const props = usedProps
    .filter(Boolean)
    .map(prop => adapter.getNativePropName(prop));

  const component = {
    id: componentName,
    props,
  };

  addToComponentCollection(component, componentCollection);
}

export default (adapter: Adapter) => {
  clear();

  return () => ({
    visitor: {
      ImportDeclaration(path: NodePath) {
        const node = path.node as t.ImportDeclaration;

        if (!node.source.value.startsWith('remax/')) {
          return;
        }

        node.specifiers.forEach(specifier => {
          if (t.isImportSpecifier(specifier)) {
            const componentName = specifier.imported.name;
            const id = kebabCase(componentName);
            registerComponent(id, importedComponents, adapter);
          }
        });
      },
      JSXElement(path: NodePath) {
        const node = path.node as t.JSXElement;
        if (t.isJSXIdentifier(node.openingElement.name)) {
          const tagName = node.openingElement.name.name;
          const binding = path.scope.getBinding(tagName);

          /* istanbul ignore next */
          if (!binding) {
            return;
          }

          const componentPath = binding.path as NodePath;

          if (
            !componentPath ||
            !t.isImportSpecifier(componentPath.node) ||
            !t.isImportDeclaration(componentPath.parent) ||
            !componentPath.parent.source.value.startsWith('remax/')
          ) {
            return;
          }

          const componentName = componentPath.node.imported.name;
          const id = kebabCase(componentName);

          registerComponent(id, components, adapter, node);
        }
      },
    },
  });
};

function getAlipayComponents(adapter: Adapter) {
  const DIR_PATH = winPath(
    PATH.resolve(__dirname, '../adapters/alipay/hostComponents')
  );
  const files = fs.readdirSync(DIR_PATH);
  files.forEach(file => {
    const name = PATH.basename(file).replace(PATH.extname(file), '');
    registerComponent(name, components, adapter);
  });

  return Object.values(components);
}

export function getComponents(adapter: Adapter) {
  if (adapter.name === 'alipay') {
    return getAlipayComponents(adapter);
  }

  const data = Object.values(components);

  Object.values(importedComponents).forEach(c => {
    if (!components[c.id]) {
      data.push(c);
    }
  });

  return data;
}
