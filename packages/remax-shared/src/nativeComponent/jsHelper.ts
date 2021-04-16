import fs from 'fs';
import * as babelParser from '@babel/parser';
import traverse from '@babel/traverse';
import * as htmlparser2 from 'htmlparser2';
import { get } from 'lodash';
import type { Meta } from '@remax/types';
import { getPath } from './helpers';

const walk = (jsHelperPath: string, jsHelpers: Set<string>) => {
  const jsHelperContent = fs.readFileSync(jsHelperPath).toString();
  const ast = babelParser.parse(jsHelperContent, {
    sourceType: 'module',
  });

  const extract = ({ node }: any) => {
    const importPath =
      (get(node, 'callee.name') === 'require' ? get(node, 'arguments[0].value') : '') || get(node, 'source.value');

    if (!importPath) {
      return;
    }

    const absolutePath = getPath(jsHelperPath, importPath);

    jsHelpers.add(absolutePath);

    walk(absolutePath, jsHelpers);
  };

  traverse(ast, {
    CallExpression: extract,
    ImportDeclaration: extract,
  });
};

const parseTemplate = (filePath: string, jsHelpers: Set<string>, jsHelper: any) => {
  const parser = new htmlparser2.Parser({});

  const { tag, src } = jsHelper!;

  const content = fs.readFileSync(filePath).toString();

  (parser as any)._cbs.onopentag = (name: string, attrs: any) => {
    if (name === tag && attrs[src]) {
      const jsHelperPath = getPath(filePath, attrs[src]);

      if (!fs.existsSync(jsHelperPath)) {
        console.error(`文件 ${jsHelperPath} 不存在`);
        return;
      }

      walk(jsHelperPath, jsHelpers);

      jsHelpers.add(jsHelperPath);
    }
  };

  parser.reset();
  parser.write(content);
  parser.end();
};

export default function jsHelper(platformConfig: Meta, id: string) {
  const jsHelpers: Set<string> = new Set();
  const { jsHelper, template } = platformConfig;

  if (!jsHelper) {
    return [];
  }
  const templatePath = id.replace(/\.js$/, template.extension);

  parseTemplate(templatePath, jsHelpers, jsHelper);

  return Array.from(jsHelpers);
}
