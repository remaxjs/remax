import * as t from '@babel/types';
import { slash } from '@remax/shared';
import { NodePath, Node } from '@babel/traverse';
import { addNamed } from '@babel/helper-module-imports';

function appConfigExpression(path: NodePath<t.ExportDefaultDeclaration>, id: t.Identifier) {
  const createId = addNamed(path, 'createAppConfig', '@remax/runtime');
  const insert: Node[] = [
    t.exportDefaultDeclaration(t.callExpression(t.identifier('App'), [t.callExpression(createId, [id])])),
  ];
  if (process.env.NODE_ENV === 'development') {
    insert.unshift(
      t.expressionStatement(
        t.assignmentExpression('=', t.memberExpression(id, t.identifier('displayName')), t.stringLiteral('App'))
      )
    );
  }
  path.insertAfter(insert);
}

export default (entry: string) => {
  let skip = false;

  return {
    pre(state: any) {
      skip = entry !== slash(state.opts.filename);
    },
    visitor: {
      ExportDefaultDeclaration: (path: NodePath<t.ExportDefaultDeclaration>) => {
        if (skip) {
          return;
        }

        if (t.isExpression(path.node.declaration)) {
          const appId = path.scope.generateUidIdentifier('app');
          const declaration = path.node.declaration;
          path.replaceWith(t.variableDeclaration('const', [t.variableDeclarator(appId, declaration)]));
          appConfigExpression(path, appId);
          skip = true;
        } else if (t.isFunctionDeclaration(path.node.declaration) || t.isClassDeclaration(path.node.declaration)) {
          const declaration = path.node.declaration;
          const appId = path.scope.generateUidIdentifierBasedOnNode(path.node);
          declaration.id = appId;
          path.replaceWith(declaration);
          appConfigExpression(path, appId);
          skip = true;
        }
      },
      Identifier(path: NodePath<t.Identifier>) {
        if (skip) {
          return;
        }
        // 防止跟小程序的  App 冲突
        if (path.node.name === 'App') {
          path.scope.rename('App', path.scope.generateUidIdentifier('App').name);
          return;
        }
      },
    },
  };
};
