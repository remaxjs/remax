import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import JSXElementPathSet from './JSXElementPathSet';
import { ENTRY_ATTRIBUTE_NAME } from '../constants';

export const jsxElementPathSet = new JSXElementPathSet();

/**
 * 是否该记录这个 JSX 片段，用于生成模板
 *
 * @param {NodePath} path
 * @returns
 */
function shouldBeTemplate(path: NodePath<t.JSXElement>) {
  const parent = path.parent;

  // case:
  // 记录根节点
  // 父节点不为 JSXElement，说明 path 为根节点
  if (!t.isJSXElement(parent)) {
    return true;
  }

  // TODO: path 本身是一个 React 组件 或者 原生组件，也应该记录下来，
  // 可以将它的 children 静态化成模板做优化

  return false;
}

/**
 * 判断是否是入口 JSX 片段
 *
 * @param {t.JSXElement} node
 * @returns
 */
function isEntryPath(node: t.JSXElement) {
  return !!node.openingElement.attributes.find(
    attr => t.isJSXAttribute(attr) && attr.name.name === ENTRY_ATTRIBUTE_NAME
  );
}

/**
 * 将 JSX 片段保存起来，用于生成静态化的原生模板
 *
 * @export
 * @returns
 */
export default function visitJSXElement() {
  return {
    visitor: {
      JSXElement: (path: NodePath<t.JSXElement>, state: any) => {
        if (!shouldBeTemplate(path)) {
          return;
        }

        jsxElementPathSet.add(path, state.filename, isEntryPath(path.node));
      },
    },
  };
}
