import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { get } from 'dot-prop';
import { kebabCase, unionBy } from 'lodash';

interface Component {
  type: string;
  id: string;
  props: string[];
  children?: Component[];
}

const components: Component[] = [];

const propsAlias: { [key: string]: string } = {
  className: 'class',
  onClick: 'onTap',
  onTap: 'onTap',
};

export default () => ({
  visitor: {
    JSXElement(path: NodePath) {
      const node = path.node as t.JSXElement;
      if (t.isJSXIdentifier(node.openingElement.name)) {
        const componentName = node.openingElement.name.name;
        const binding = path.scope.getBinding(componentName);
        if (!binding) {
          return;
        }
        const componentPath = get(binding, 'path') as NodePath;
        let notBaseComponent = true;
        if (
          componentPath &&
          t.isImportSpecifier(componentPath.node) &&
          t.isImportDeclaration(componentPath.parent) &&
          componentPath.parent.source.value === 'remax'
        ) {
          notBaseComponent = false;
        }

        if (notBaseComponent) return;

        // 基础组件
        node.openingElement.attributes.map(e => {
          if (t.isJSXAttribute(e)) {
            const propName = get(e, 'name.name') as string;
            if (propsAlias[propName]) {
              e.name.name = propsAlias[propName];
            }
            if (propName === 'key') {
              node.openingElement.attributes.push(t.jsxAttribute(t.jsxIdentifier('__key__'), e.value));
              return '__key__';
            }
            return propName;
          }
        });

        const id = kebabCase(componentName);
        const { props } = require(`../hostComponents/${id}`);

        components.push({
          type: kebabCase(componentName),
          id,
          props,
        });
      }
    },
  },
});

export function getComponents() {
  return unionBy(components, 'type');
}
