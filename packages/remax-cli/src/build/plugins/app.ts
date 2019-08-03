import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { addNamed } from '@babel/helper-module-imports';

export default () => ({
  visitor: {
    ExportDefaultDeclaration: (path: NodePath<t.ExportDefaultDeclaration>) => {
      if (t.isExpression(path.node.declaration)) {
        const appId = path.scope.generateUidIdentifier('app');
        const declaration = path.node.declaration;
        path.replaceWith(
          t.variableDeclaration('const', [
            t.variableDeclarator(appId, declaration),
          ])
        );
        const createId = addNamed(path, 'createAppConfig', 'remax');
        path.insertAfter(
          t.exportDefaultDeclaration(
            t.callExpression(t.identifier('App'), [
              t.callExpression(createId, [appId]),
            ])
          )
        );
        path.stop();
      }
    },
    Identifier(path: NodePath<t.Identifier>) {
      // 防止跟小程序的  App 冲突
      if (path.node.name === 'App') {
        path.scope.rename('App', path.scope.generateUidIdentifier('App').name);
        return;
      }
    },
  },
});
