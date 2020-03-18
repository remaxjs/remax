import * as fs from 'fs';
import * as babelParser from '@babel/parser';
import traverse from '@babel/traverse';
import resolve from 'resolve';
import { get } from 'lodash';
import { getPath, pushArray, readFile } from './util';
import { RemaxOptions } from 'remax-types';

const modules: string[] = [];

const walk = (jsPath: string, options: RemaxOptions) => {
  const jsContent = readFile(jsPath);
  const ast = babelParser.parse(jsContent, {
    sourceType: 'module',
  });

  const extract = ({ node }: any) => {
    let importPath =
      (get(node, 'callee.name') === 'require'
        ? get(node, 'arguments[0].value')
        : '') || get(node, 'source.value');

    if (!importPath) {
      return;
    }

    try {
      importPath = resolve.sync(importPath, { basedir: options.cwd });
    } catch {
      // ignore
    }

    const absoluteId = getPath(jsPath, importPath);

    let absolutePath = /.js$/.test(absoluteId)
      ? absoluteId
      : absoluteId + '.js';

    if (!fs.existsSync(absolutePath)) {
      absolutePath = absoluteId + '/index.js';
    }

    if (!fs.existsSync(absolutePath)) {
      return;
    }

    pushArray(modules, absolutePath);

    walk(absolutePath, options);
  };

  traverse(ast, {
    CallExpression: extract,
    ImportDeclaration: extract,
  });
};

const parseTemplate = (filePath: string, options: RemaxOptions) => {
  walk(filePath, options);
  pushArray(modules, filePath);
};

export default function jsModule(id: string, options: RemaxOptions) {
  const templatePath = id;

  parseTemplate(templatePath, options);
}

export const getJsModules = () => modules;
