import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { addNamed } from '@babel/helper-module-imports';

export default () => ({
  visitor: {
    ExportDefaultDeclaration(path: NodePath<t.ExportDefaultDeclaration>) {
      if (path.shouldSkip || !/src\/app.(js|jsx|ts|tsx)$/.test(path.hub.file.opts.filename)) {
        return;
      }
      if (t.isExpression(path.node.declaration)) {
        const appId = path.scope.generateUidIdentifier('app');
        const declaration = path.node.declaration;
        path.replaceWith(t.variableDeclaration('const', [t.variableDeclarator(appId, declaration)]));
        const createId = addNamed(path, 'createAppConfig', 'remax/lib/adapters/h5');
        const [exportPath] = path.insertAfter(t.exportDefaultDeclaration(t.callExpression(createId, [appId])));
        exportPath.shouldSkip = true;
      }
    },
  },
});
