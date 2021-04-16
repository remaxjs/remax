import { declare } from '@babel/helper-plugin-utils';
import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';

export default function fixRegeneratorRuntime() {
  return declare(() => {
    return {
      visitor: {
        CallExpression: (path: NodePath<t.CallExpression>) => {
          const node = path.node;
          const arg0 = node.arguments[0];
          const arg1 = node.arguments[1];

          if (
            t.isIdentifier(node.callee) &&
            node.callee.name === 'Function' &&
            node.arguments.length === 2 &&
            t.isStringLiteral(arg0) &&
            arg0.value === 'r' &&
            t.isStringLiteral(arg1) &&
            arg1.value === 'regeneratorRuntime = r'
          ) {
            path.parentPath.remove();
            path.stop();
          }
        },
      },
    };
  });
}
