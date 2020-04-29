import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { addNamed } from '@babel/helper-module-imports';

function pageConfigExpression(path: NodePath<t.ExportDefaultDeclaration>, id: t.Identifier, entry: t.StringLiteral) {
  const createId = addNamed(path, 'createPageConfig', '@remax/runtime');
  path.insertAfter(
    t.exportDefaultDeclaration(t.callExpression(t.identifier('Page'), [t.callExpression(createId, [id, entry])]))
  );
}

export default function page(entries: Array<{ path: string; key: string }>) {
  let skip = false;
  let entry = '';

  return {
    pre(state: any) {
      skip = entries.every(e => e.path !== state.opts.filename);

      if (!skip) {
        // 这里 find 肯定有值
        entry = entries.find(e => e.path === state.opts.filename)?.key!;
      }
    },
    visitor: {
      ExportDefaultDeclaration: (path: NodePath<t.ExportDefaultDeclaration>, state: any) => {
        if (skip) {
          return;
        }

        if (t.isExpression(path.node.declaration)) {
          const pageId = path.scope.generateUidIdentifier('page');
          const declaration = path.node.declaration;
          path.replaceWith(t.variableDeclaration('const', [t.variableDeclarator(pageId, declaration)]));
          pageConfigExpression(path, pageId, t.stringLiteral(entry));
          path.stop();
        } else if (t.isFunctionDeclaration(path.node.declaration) || t.isClassDeclaration(path.node.declaration)) {
          const declaration = path.node.declaration;
          const pageId = path.scope.generateUidIdentifierBasedOnNode(path.node);
          declaration.id = pageId;
          path.replaceWith(declaration);
          pageConfigExpression(path, pageId, t.stringLiteral(entry));
          path.stop();
        }
      },
    },
  };
}
