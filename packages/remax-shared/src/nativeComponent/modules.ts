import * as fs from 'fs';
import * as babelParser from '@babel/parser';
import traverse from '@babel/traverse';
import { get } from 'lodash';
import resolve from 'resolve';
import type { Options } from '@remax/types';
import { getPath } from './helpers';

const walk = (jsPath: string, modules: Set<string>, options: Options) => {
  const jsContent = fs.readFileSync(jsPath).toString();
  const ast = babelParser.parse(jsContent, {
    sourceType: 'module',
  });

  const extract = ({ node }: any) => {
    let importPath =
      (get(node, 'callee.name') === 'require' ? get(node, 'arguments[0].value') : '') || get(node, 'source.value');

    if (!importPath) {
      return;
    }

    try {
      // 尝试 resolve，失败跳过
      importPath = resolve.sync(importPath, { basedir: options.cwd });
    } catch {
      // ignore
    }

    const absoluteId = getPath(jsPath, importPath);

    let absolutePath = /.js$/.test(absoluteId) ? absoluteId : absoluteId + '.js';

    if (!fs.existsSync(absolutePath)) {
      absolutePath = absoluteId + '/index.js';
    }

    if (!fs.existsSync(absolutePath)) {
      return;
    }

    modules.add(absolutePath);

    walk(absolutePath, modules, options);
  };

  traverse(ast, {
    CallExpression: extract,
    ImportDeclaration: extract,
  });
};

const parseTemplate = (filePath: string, modules: Set<string>, options: Options) => {
  walk(filePath, modules, options);
  modules.add(filePath);
};

export default function jsModule(options: Options, id: string) {
  const templatePath = id;
  const modules: Set<string> = new Set();

  parseTemplate(templatePath, modules, options);

  return Array.from(modules);
}
