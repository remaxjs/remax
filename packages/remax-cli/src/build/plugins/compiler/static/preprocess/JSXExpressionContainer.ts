import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import * as helpers from '../helpers';

/**
 * 处理 JSX 中的表达式，使其可数
 *
 * @export
 * @param {NodePath} path
 * @returns
 */
export default function(path: NodePath<t.JSXExpressionContainer>) {
  const node = path.node;
  // 清除空表达式
  if (t.isJSXEmptyExpression(node.expression)) {
    path.remove();
    return;
  }

  // case plain text leaf
  // 父节点被标记为单文本节点的表达式情况
  // 不对表达式做处理
  if (helpers.isPlainTextLeaf(path.parentPath.node, path.parentPath)) {
    return;
  }

  // case expression-block
  // 默认都按照 expression-block 处理，对表达式的节点做遍历渲染
  helpers.wrappedByExpressionBlock(node, path);
}
