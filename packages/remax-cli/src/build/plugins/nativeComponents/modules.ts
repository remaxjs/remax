import * as fs from 'fs';
import * as babelParser from '@babel/parser';
import traverse from '@babel/traverse';
import { get } from 'lodash';
import { getPath, pushArray, readFile } from './util';

const modules: string[] = [];

const walk = (jsPath: string) => {
  const jsContent = readFile(jsPath);
  const ast = babelParser.parse(jsContent, {
    sourceType: 'module',
  });

  const extract = ({ node }: any) => {
    const importPath =
      (get(node, 'callee.name') === 'require'
        ? get(node, 'arguments[0].value')
        : '') || get(node, 'source.value');

    if (!importPath) {
      return;
    }

    const absoluteId = getPath(jsPath, importPath);

    let absolutePath = absoluteId + '.js';

    if (!fs.existsSync(absolutePath)) {
      absolutePath = absoluteId + '/index.js';
    }

    if (!fs.existsSync(absolutePath)) {
      return;
    }

    pushArray(modules, absolutePath);

    walk(absolutePath);
  };

  traverse(ast, {
    CallExpression: extract,
    ImportDeclaration: extract,
  });
};

const parseTemplate = (filePath: string) => {
  walk(filePath);
  pushArray(modules, filePath);
};

export default function jsModule(id: string) {
  const templatePath = id;

  parseTemplate(templatePath);
}

export const getJsModules = () => modules;
