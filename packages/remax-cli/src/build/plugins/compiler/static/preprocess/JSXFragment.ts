import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import * as helpers from '../helpers';

/**
 * 将 JSXFragment 都处理成 <block> 标签
 *
 * @export
 * @param {NodePath} path
 */
export default function(path: NodePath<t.JSXFragment>) {
  const node = path.node;

  helpers.replacedWithBlock(node, path);
}
