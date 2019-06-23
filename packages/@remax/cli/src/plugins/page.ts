import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { addNamed } from '@babel/helper-module-imports';

export default () => ({
  visitor: {
    ExportDefaultDeclaration: (path: NodePath<t.ExportDefaultDeclaration>) => {
      if (t.isExpression(path.node.declaration)) {
        const pageId = path.scope.generateUidIdentifier('page');
        const declaration = path.node.declaration;
        path.replaceWith(t.variableDeclaration('const', [t.variableDeclarator(pageId, declaration)]));
        const renderId = addNamed(path, 'render', '@remax/core');
        path.insertAfter(
          t.exportDefaultDeclaration(
            t.callExpression(t.identifier('Page'), [
              t.callExpression(renderId, [
                t.callExpression(t.memberExpression(t.identifier('React'), t.identifier('createElement')), [pageId]),
              ]),
            ]),
          ),
        );
        path.stop();
      }
    },
  },
});
