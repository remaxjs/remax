import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { addNamed } from '@babel/helper-module-imports';

function appConfigExpression(
  path: NodePath<t.ExportDefaultDeclaration>,
  id: t.Identifier,
  isHybrid: boolean
) {
  const createId = addNamed(path, 'createAppConfig', 'remax');

  if (isHybrid) {
    //hybrid 模式，不调用小程序 App 方法 ，改为导出 (config) => createAppConfig(RemaxApp, config);
    const configParam = t.identifier('config');

    path.insertAfter(
      t.exportDefaultDeclaration(
        t.arrowFunctionExpression(
          [configParam],
          t.callExpression(createId, [id, configParam])
        )
      )
    );

    return;
  }

  path.insertAfter(
    t.exportDefaultDeclaration(
      t.callExpression(t.identifier('App'), [t.callExpression(createId, [id])])
    )
  );
}

export default (entry: string, isHybrid: boolean) => {
  let skip = false;

  return {
    pre(state: any) {
      skip = entry !== state.opts.filename;
    },
    visitor: {
      ExportDefaultDeclaration: (
        path: NodePath<t.ExportDefaultDeclaration>
      ) => {
        if (skip) {
          return;
        }

        if (t.isExpression(path.node.declaration)) {
          const appId = path.scope.generateUidIdentifier('app');
          const declaration = path.node.declaration;
          path.replaceWith(
            t.variableDeclaration('const', [
              t.variableDeclarator(appId, declaration),
            ])
          );
          appConfigExpression(path, appId, isHybrid);
          path.stop();
        } else if (
          t.isFunctionDeclaration(path.node.declaration) ||
          t.isClassDeclaration(path.node.declaration)
        ) {
          const declaration = path.node.declaration;
          const appId = path.scope.generateUidIdentifierBasedOnNode(path.node);
          declaration.id = appId;
          path.replaceWith(declaration);
          appConfigExpression(path, appId, isHybrid);
          path.stop();
        }
      },
      Identifier(path: NodePath<t.Identifier>) {
        // 防止跟小程序的  App 冲突
        if (path.node.name === 'App') {
          path.scope.rename(
            'App',
            path.scope.generateUidIdentifier('App').name
          );
          return;
        }
      },
    },
  };
};
