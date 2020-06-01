import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { addNamed } from '@babel/helper-module-imports';
import { Options } from '@remax/types';

function componentConfigExpression(path: NodePath<t.ExportDefaultDeclaration>, id: t.Identifier, options: Options) {
  const createId = addNamed(path, 'createComponentConfig', `@remax/runtime`);
  path.insertAfter(
    t.exportDefaultDeclaration(t.callExpression(t.identifier('Component'), [t.callExpression(createId, [id])]))
  );
}

export default function component(options: Options) {
  return {
    visitor: {
      ExportDefaultDeclaration: (path: NodePath<t.ExportDefaultDeclaration>) => {
        if (t.isExpression(path.node.declaration)) {
          const componentId = path.scope.generateUidIdentifier('component');
          const declaration = path.node.declaration;
          path.replaceWith(t.variableDeclaration('const', [t.variableDeclarator(componentId, declaration)]));
          componentConfigExpression(path, componentId, options);
          path.stop();
        } else if (t.isFunctionDeclaration(path.node.declaration) || t.isClassDeclaration(path.node.declaration)) {
          const declaration = path.node.declaration;
          const componentId = path.scope.generateUidIdentifierBasedOnNode(path.node);
          declaration.id = componentId;
          path.replaceWith(declaration);
          componentConfigExpression(path, componentId, options);
          path.stop();
        }
      },
    },
  };
}
