import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { addNamed } from '@babel/helper-module-imports';
import { Options } from '@remax/types';
import { getPages } from '../../getEntries';
import winPath from '../../winPath';

function pageConfigExpression(path: NodePath<t.ExportDefaultDeclaration>, id: t.Identifier, name: t.StringLiteral) {
  const createId = addNamed(path, 'createPageConfig', '@remax/runtime');
  path.insertAfter(
    t.exportDefaultDeclaration(t.callExpression(t.identifier('Page'), [t.callExpression(createId, [id, name])]))
  );
}

export default function page(options: Options) {
  let skip = false;
  let name = '';

  return {
    pre(state: any) {
      name = getPages(options).find(e => e.filename === winPath(state.opts.filename))?.name || '';
      skip = !name;
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
          pageConfigExpression(path, pageId, t.stringLiteral(name));
          path.stop();
        } else if (t.isFunctionDeclaration(path.node.declaration) || t.isClassDeclaration(path.node.declaration)) {
          const declaration = path.node.declaration;
          const pageId = path.scope.generateUidIdentifierBasedOnNode(path.node);
          declaration.id = pageId;
          path.replaceWith(declaration);
          pageConfigExpression(path, pageId, t.stringLiteral(name));
          path.stop();
        }
      },
    },
  };
}
