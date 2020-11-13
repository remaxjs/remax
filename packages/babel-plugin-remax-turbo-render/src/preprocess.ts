import { declare } from '@babel/helper-plugin-utils';
import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import * as helpers from './helpers';
import { SKIP_ELEMENTS } from './constants';
import { Options } from './types';

const noop = t.jsxExpressionContainer(t.arrowFunctionExpression([], t.blockStatement([]), false));

const addAttribute = (node: t.JSXElement, name: string, value: t.JSXExpressionContainer) => {
  node.openingElement.attributes.push(t.jsxAttribute(t.jsxIdentifier(name), value));
};

const DEPRECATED_CATCH_ATTRS = [
  'catchClick',
  'catchTap',
  'catchLongClick',
  'catchLongTap',
  'catchTouchMove',
  'catchTouchStart',
  'catchTouchEnd',
];

function throwOnDeprecatedCatchAttr(attrs: Array<t.JSXAttribute | t.JSXSpreadAttribute>) {
  attrs.forEach(attr => {
    if (t.isJSXSpreadAttribute(attr)) {
      return;
    }

    if (!t.isJSXIdentifier(attr.name)) {
      return;
    }

    if (DEPRECATED_CATCH_ATTRS.includes(attr.name.name)) {
      throw new Error(
        `Remax 支持在 onClick/onTap 等支持冒泡的事件中使用 event.stopPropagation 阻止事件冒泡，请不要使用 ${attr.name.name}`
      );
    }
  });
}

/**
 * 预处理 JSX 中的一些逻辑，方便后续收集静态模板和处理数据结构
 *
 * @export
 * @returns
 */
export default function preprocess(options: Options) {
  return declare(() => {
    return {
      visitor: {
        JSXExpressionContainer(path: NodePath<t.JSXExpressionContainer>) {
          const node = path.node;
          // 清除空表达式
          if (t.isJSXEmptyExpression(node.expression)) {
            path.remove();
            return;
          }

          // case plain text leaf
          // 父节点被标记为单文本节点的表达式情况
          // 不对表达式做处理
          if (helpers.isPlainTextLeaf(path.parentPath.node, path.parentPath, options)) {
            return;
          }

          /**
           * 父元素不是 host component 也不处理，因为父元素不能被静态化，子元素就没必要可遍历
           */
          if (t.isJSXElement(path.parent) && !helpers.isHostComponentElement(path.parent, path.parentPath, options)) {
            return;
          }

          if (
            t.isJSXElement(path.parent) &&
            SKIP_ELEMENTS.includes((path.parent.openingElement.name as t.JSXIdentifier).name)
          ) {
            return;
          }

          // case block
          // 默认都按照 block 处理，对表达式的节点做遍历渲染
          helpers.wrappedByExpressionBlock(node, path);
        },
        JSXElement(path: NodePath<t.JSXElement>) {
          const node = path.node;
          const attributes = node.openingElement.attributes;

          throwOnDeprecatedCatchAttr(attributes);

          /**
           *  为 remax-plugin-spm 开的后门
           */
          if (attributes.some(attr => t.isJSXAttribute(attr) && attr.name.name === 'data-aspm-expo')) {
            if (!attributes.some(attr => t.isJSXAttribute(attr) && attr.name.name === 'onAppear')) {
              addAttribute(node, 'onAppear', noop);
            }
            if (!attributes.some(attr => t.isJSXAttribute(attr) && attr.name.name === 'onFirstAppear')) {
              addAttribute(node, 'onFirstAppear', noop);
            }
          }
          if (attributes.some(attr => t.isJSXAttribute(attr) && attr.name.name === 'data-aspm-click')) {
            if (
              !attributes.some(attr => t.isJSXAttribute(attr) && attr.name.name === 'onTap') &&
              !attributes.some(attr => t.isJSXAttribute(attr) && attr.name.name === 'onClick') &&
              !attributes.some(attr => t.isJSXAttribute(attr) && attr.name.name === 'catchTap')
            ) {
              addAttribute(node, 'onTap', noop);
            }
          }

          // case: React.Fragment
          // 将 React Fragment 转换成 JSXFragment，方便处理
          if (helpers.isReactFragment(node, path)) {
            helpers.replacedWithJSXFragment(node, path);
            return;
          }

          // case: Host Component Tag
          // Host Component 不处理
          if (helpers.isHostComponentElement(node, path, options)) {
            return;
          }
          /**
           * 父元素不是 host component 也不处理，因为父元素不能被静态化，子元素就没必要可遍历
           */
          if (t.isJSXElement(path.parent) && !helpers.isHostComponentElement(path.parent, path.parentPath, options)) {
            return;
          }

          helpers.wrappedByExpressionBlock(node, path);
        },
      },
    };
  });
}
