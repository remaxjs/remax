import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';

export default (target: string) => () => {
  const adapter = 'remax/lib/adapters/' + target;
  return {
    visitor: {
      ImportDeclaration(path: NodePath<t.ImportDeclaration>) {
        if (path.node.source.value === 'remax') {
          path.node.source.value = adapter;

          path.node.specifiers.forEach(specifier => {
            if (t.isImportSpecifier(specifier) && specifier.imported.name === 'getApp') {
              specifier.imported.name = 'getAppStub';
            }
          });
        }
      },
      CallExpression(path: NodePath<t.CallExpression>) {
        if (t.isIdentifier(path.node.callee)) {
          const firstArg = path.node.arguments[0];
          if (path.node.callee.name === 'require' && t.isStringLiteral(firstArg) && firstArg.value === 'remax') {
            firstArg.value = adapter;
          }
        }
      },
    },
  };
};
