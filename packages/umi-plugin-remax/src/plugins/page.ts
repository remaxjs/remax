import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { addNamed } from '@babel/helper-module-imports';
import getEntries from '../getEntries';

export default () => ({
  visitor: {
    ExportDefaultDeclaration: (
      path: NodePath<t.ExportDefaultDeclaration>,
      state: any
    ) => {
      const entries = getEntries();
      if (
        state.shouldShip ||
        entries.pages.indexOf(path.hub.file.opts.filename) === -1
      ) {
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
        const createId = addNamed(
          path,
          'createPageConfig',
          'remax/lib/adapters/h5'
        );
        const [exportPath] = path.insertAfter(
          t.exportDefaultDeclaration(t.callExpression(createId, [pageId]))
        );
        exportPath.shouldSkip = true;
        // 不知道为啥会执行两次，标记下避免多次执行
        state.shouldShip = true;
      }
    },
  },
});
