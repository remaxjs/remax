import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { addNamed } from '@babel/helper-module-imports';

function pageConfigExpression(
  path: NodePath<t.ExportDefaultDeclaration>,
  id: t.Identifier
) {
  const createId = addNamed(path, 'createPageConfig', 'remax');
  path.insertAfter(
    t.exportDefaultDeclaration(
      t.callExpression(t.identifier('Page'), [t.callExpression(createId, [id])])
    )
  );
}

export default (entries: string[]) => {
  let skip = false;
  return {
    pre(state: any) {
      skip = entries.every(e => e !== state.opts.filename);
    },
    visitor: {
      ExportDefaultDeclaration: (
        path: NodePath<t.ExportDefaultDeclaration>
      ) => {
        if (skip) {
          return;
        }

        if (t.isExpression(path.node.declaration)) {
          const pageId = path.scope.generateUidIdentifier('page');
          const declaration = path.node.declaration;
          path.replaceWith(
            t.variableDeclaration('const', [
              t.variableDeclarator(pageId, declaration),
            ])
          );
          pageConfigExpression(path, pageId);
          path.stop();
        } else if (
          t.isFunctionDeclaration(path.node.declaration) ||
          t.isClassDeclaration(path.node.declaration)
        ) {
          const declaration = path.node.declaration;
          const pageId = path.scope.generateUidIdentifierBasedOnNode(path.node);
          declaration.id = pageId;
          path.replaceWith(declaration);
          pageConfigExpression(path, pageId);
          path.stop();
        }
      },
    },
  };
};
