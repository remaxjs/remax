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
        const createId = addNamed(path, 'createPageConfig', '@remax/core');
        path.insertAfter(
          t.exportDefaultDeclaration(
            t.callExpression(t.identifier('Page'), [
              t.callExpression(createId, [
                pageId
              ]),
            ]),
          ),
        );
        path.stop();
      }
    },
  },
});
