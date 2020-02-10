import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import * as helpers from '../helpers';

/**
 * 1. 将 <React.Fragment> 转换成 <block>
 * 2. 将不能静态化的标签（非 Host Component）包裹在 <block> 里面，使其可数，可动态处理
 *
 * @export
 * @param {NodePath} path
 * @returns
 */
export default function JSXElement(path: NodePath<t.JSXElement>) {
  const node = path.node;

  // case: React.Fragment
  // 将 React Fragment 转换成 JSXFragment，方便处理
  if (helpers.isReactFragment(node, path)) {
    helpers.replacedWithJSXFragment(node, path);
    return;
  }

  // case: Host Component Tag
  // Host Component 不处理
  if (helpers.isHostComponentElement(node, path)) {
    return;
  }

  helpers.wrappedByExpressionBlock(node, path);
}
