import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { get } from 'dot-prop';
import { kebabCase, unionBy } from 'lodash';
import { Adapter } from '../adapters';

interface Component {
  type: string;
  id: string;
  props: string[];
  children?: Component[];
}

const components: Component[] = [];

export default (adapter: Adapter) => () => ({
  visitor: {
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

        // 基础组件
        node.openingElement.attributes.map(e => {
          if (t.isJSXAttribute(e)) {
            const propName = get(e, 'name.name') as string;
            return propName;
          }
        });

        const componentName = componentPath.node.imported.name;

        const id = kebabCase(componentName);

        if (id === 'swiper-item') {
          return;
        }

        if (id === 'picker-view-column') {
          return;
        }

        const { props } = adapter.hostComponents(id);

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
