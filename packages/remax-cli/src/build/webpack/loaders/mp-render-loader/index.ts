import * as loaderUtils from 'loader-utils';
import * as webpack from 'webpack';

import generator from '@babel/generator';
import { addNamed } from '@babel/helper-module-imports';
import { parse as babelParse } from '@babel/parser';
import traverse, { Node, NodePath } from '@babel/traverse';
import * as t from '@babel/types';

const parse = function(code: string): Node {
  return babelParse(code, {
    sourceType: 'module',
    plugins: [
      'classProperties',
      'jsx',
      'typescript',
      'asyncGenerators',
      'decorators-legacy',
      'dynamicImport',
      'objectRestSpread',
    ],
  }) as Node;
};

function appConfigExpression(path: NodePath<t.ExportDefaultDeclaration>, id: t.Identifier) {
  const createId = addNamed(path, 'createAppConfig', 'remax');
  path.insertAfter(
    t.exportDefaultDeclaration(t.callExpression(t.identifier('App'), [t.callExpression(createId, [id])])) as any
  );
}

function pageConfigExpression(path: NodePath<t.ExportDefaultDeclaration>, id: t.Identifier) {
  const createId = addNamed(path, 'createPageConfig', 'remax');
  path.insertAfter(
    t.exportDefaultDeclaration(t.callExpression(t.identifier('Page'), [t.callExpression(createId, [id])])) as any
  );
}

export default function mpRenderLoader(this: webpack.loader.LoaderContext, source: string) {
  if (!this.resourceQuery) {
    return `${source}`;
  }
  const query = loaderUtils.parseQuery(this.resourceQuery);

  if (query.render) {
    const ast = parse(source);
    traverse(ast as Node, {
      ExportDefaultDeclaration(path: NodePath<t.ExportDefaultDeclaration>) {
        if (t.isExpression(path.node.declaration)) {
          const appId = path.scope.generateUidIdentifier('app');
          const declaration = path.node.declaration;
          const defined: any = t.variableDeclaration('const', [t.variableDeclarator(appId, declaration)]);
          path.replaceWith(defined);
          appConfigExpression(path, appId);
          path.stop();
        } else if (t.isFunctionDeclaration(path.node.declaration) || t.isClassDeclaration(path.node.declaration)) {
          const declaration = path.node.declaration;
          const appId = path.scope.generateUidIdentifierBasedOnNode(path.node as any);
          declaration.id = appId;
          path.replaceWith(declaration as any);
          appConfigExpression(path, appId);
          path.stop();
        }
      },
      Identifier(path) {
        if (path.node.name === 'App') {
          path.scope.rename('App', path.scope.generateUidIdentifier('App').name);
        }
      },
    });

    // 转换成 createAppConfig
    const { code } = generator(ast, {}, source);

    return `${code}`;
  } else if (query.page) {
    const ast = parse(source);
    traverse(ast as Node, {
      ExportDefaultDeclaration(path: NodePath<t.ExportDefaultDeclaration>) {
        if (t.isExpression(path.node.declaration)) {
          const pageId = path.scope.generateUidIdentifier('page');
          const declaration = path.node.declaration;
          path.replaceWith(t.variableDeclaration('const', [t.variableDeclarator(pageId, declaration)]) as any);
          pageConfigExpression(path, pageId);
          path.stop();
        } else if (t.isFunctionDeclaration(path.node.declaration) || t.isClassDeclaration(path.node.declaration)) {
          const declaration = path.node.declaration;
          const pageId = path.scope.generateUidIdentifierBasedOnNode(path.node as any);
          declaration.id = pageId;
          path.replaceWith(declaration as any);
          pageConfigExpression(path, pageId);
          path.stop();
        }
      },
    });

    // 转换成 createAppConfig
    const { code } = generator(ast, {}, source);

    return `${code}`;
  }
}

export function processEntry(entry: { [key: string]: string }) {
  Object.keys(entry).forEach(entryName => {
    if (entryName === 'app') {
      entry[entryName] = entry[entryName] + `?render=App`;
    } else {
      entry[entryName] = `${entry[entryName]}?page=${entryName.replace(/\//g, '_').toUpperCase()}`;
    }
  });
  return entry;
}
