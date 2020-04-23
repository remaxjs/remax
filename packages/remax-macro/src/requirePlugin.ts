import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';

function getName(callExpression: NodePath<t.CallExpression>) {
  const args = callExpression.node.arguments;
  const name = args[0] as t.StringLiteral;
  return name;
}

export default function requirePlugin(path: NodePath) {
  const callExpression = path.findParent(p => t.isCallExpression(p)) as NodePath<t.CallExpression>;
  const name = getName(callExpression);

  callExpression.replaceWith(t.callExpression(t.identifier('requirePlugin'), [name]));
}
