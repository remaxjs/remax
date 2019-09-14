import * as t from '@babel/types';
import * as PATH from 'path';
import winPath from '../../winPath';
import fs from 'fs';
import { NodePath } from '@babel/traverse';
import { get } from 'dot-prop';
import { kebabCase } from 'lodash';
import { Adapter } from '../adapters';

interface Component {
  id: string;
  props: string[];
}

interface ComponentCollection {
  [id: string]: Component;
}

const components: ComponentCollection = {};
const importedComponents: ComponentCollection = {};

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

function shouldRegisterAllProps(adapter: Adapter, node: t.JSXElement) {
  if (adapter.name === 'alipay') {
    return true;
  }

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

  try {
    if (!adapter.hostComponents(componentName)) {
      return;
    }
  } catch (error) {
    return;
  }

  let usedProps = adapter.hostComponents(componentName).props;
  if (node && !shouldRegisterAllProps(adapter, node)) {
    usedProps = node.openingElement.attributes.map(e => {
      const propName = get(e, 'name.name') as string;
      return propName;
    });
  }

  const props = usedProps.filter(prop => !!prop).map(adapter.getNativePropName);

  const component = {
    id: componentName,
    props,
  };

  addToComponentCollection(component, componentCollection);
}

export default (adapter: Adapter) => () => ({
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
        if (!binding) {
          return;
        }
        const componentPath = get(binding, 'path') as NodePath;
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
