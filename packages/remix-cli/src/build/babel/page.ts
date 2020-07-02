import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { addNamed } from '@babel/helper-module-imports';
import { Options } from '@alipay/remix-types';
import { slash } from '@alipay/remix-shared';
import { getPages } from '../../getEntries';
import API from '../../API';

function pageConfigExpression(path: NodePath<t.ExportDefaultDeclaration>, id: t.Identifier, name: t.StringLiteral) {
  const createId = addNamed(path, 'createPageConfig', '@alipay/remix-runtime');
  path.insertAfter(
    t.exportDefaultDeclaration(t.callExpression(t.identifier('Page'), [t.callExpression(createId, [id, name])]))
  );
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
          pageConfigExpression(path, pageId, t.stringLiteral(name));
          skip = true;
        } else if (t.isFunctionDeclaration(path.node.declaration) || t.isClassDeclaration(path.node.declaration)) {
          const declaration = path.node.declaration;
          const pageId = path.scope.generateUidIdentifierBasedOnNode(path.node);
          declaration.id = pageId;
          path.replaceWith(declaration);
          pageConfigExpression(path, pageId, t.stringLiteral(name));
          skip = true;
        }
      },
    },
  };
}
