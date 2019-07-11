import { resolve } from 'path';
import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';

export default () => {
  return {
    visitor: {
      ImportSpecifier(path: NodePath<t.ImportSpecifier>) {
        const parent = path.findParent(p => p.isImportDeclaration()) as NodePath<t.ImportDeclaration>;
        const appPath = resolve(process.cwd(), 'src/app.js');
        if (parent.node.source.value.startsWith('remax') && path.node.local.name === 'getApp') {
          parent.insertAfter(
            t.importDeclaration(
              [t.importDefaultSpecifier(t.identifier(path.node.local.name))],
              t.stringLiteral(appPath),
            ),
          );
          path.remove();
        }
      },
    },
  };
};
