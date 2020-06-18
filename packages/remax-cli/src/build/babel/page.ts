import * as t from '@babel/types';
import { NodePath, Node } from '@babel/traverse';
import { addNamed } from '@babel/helper-module-imports';
import { Options } from '@remax/types';
import { slash } from '@remax/shared';
import { getPages } from '../../getEntries';
import API from '../../API';

function pageConfigExpression(path: NodePath<t.ExportDefaultDeclaration>, id: t.Identifier, name: string) {
  const createId = addNamed(path, 'createPageConfig', '@remax/runtime');
  const insert: Node[] = [
    t.exportDefaultDeclaration(
      t.callExpression(t.identifier('Page'), [t.callExpression(createId, [id, t.stringLiteral(name)])])
    ),
  ];
  if (process.env.NODE_ENV === 'development') {
    insert.unshift(
      t.expressionStatement(
        t.assignmentExpression(
          '=',
          t.memberExpression(id, t.identifier('displayName')),
          t.stringLiteral(`Page[${name}]`)
        )
      )
    );
  }
  path.insertAfter(insert);
}

export default function page(options: Options, api: API) {
  let skip = false;
  let name = '';

  return {
    pre(state: any) {
      name = getPages(options, api).find(e => e.filename === slash(state.opts.filename))?.name || '';
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
          pageConfigExpression(path, pageId, name);
          skip = true;
        } else if (t.isFunctionDeclaration(path.node.declaration) || t.isClassDeclaration(path.node.declaration)) {
          const declaration = path.node.declaration;
          const pageId = path.scope.generateUidIdentifierBasedOnNode(path.node);
          declaration.id = pageId;
          path.replaceWith(declaration);
          pageConfigExpression(path, pageId, name);
          skip = true;
        }
      },
    },
  };
}
