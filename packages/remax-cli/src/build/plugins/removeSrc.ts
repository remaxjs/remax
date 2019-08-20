import { OutputAsset, Plugin } from 'rollup';
import * as path from 'path';
import { simple } from 'acorn-walk';
import MagicString from 'magic-string';
import winPath from '../../winPath';

interface Options {
  sourceMap?: boolean;
}

interface Node {
  start: number;
  end: number;
  type: NodeType;
  [additional: string]: any;
}

enum NodeType {
  Literal = 'Literal',
  CallExpresssion = 'CallExpression',
  Identifier = 'Identifier',
  ImportDeclaration = 'ImportDeclaration',
  ExportNamedDeclaration = 'ExportNamedDeclaration',
  ExportAllDeclaration = 'ExportAllDeclaration',
}

const PREFIX_SRC_PATTERN = /^src\//;
const PARENT_DIR_PATTERN = /^\.\.\//;

function isAsset(module: any): module is OutputAsset {
  return !!module && module.isAsset;
}

export function getImportSource(node: Node): Node | false {
  if (
    node.type !== NodeType.ImportDeclaration ||
    node.source.type !== NodeType.Literal
  ) {
    return false;
  }

  return node.source;
}

function isEmpty(array: any[] | undefined) {
  return !array || array.length === 0;
}

export function getRequireSource(node: Node): Node | false {
  if (node.type !== NodeType.CallExpresssion) {
    return false;
  }

  if (node.callee.type !== NodeType.Identifier || isEmpty(node.arguments)) {
    return false;
  }

  const args = node.arguments;

  if (node.callee.name !== 'require' || args[0].type !== NodeType.Literal) {
    return false;
  }

  return args[0];
}

function rewrite(input: string) {
  return input.replace(PREFIX_SRC_PATTERN, '');
}

function isInsideSrc(file: string, req: string) {
  return path
    .resolve(path.dirname(file), req)
    .replace(process.cwd(), '')
    .startsWith('/src/');
}

export default function removeSrc(options: Options): Plugin {
  const sourceMaps = options.sourceMap !== false;
  return {
    name: 'remove-src',
    generateBundle(_, bundle) {
      const files = Object.keys(bundle);
      files.map(file => {
        if (PREFIX_SRC_PATTERN.test(file)) {
          const module = bundle[file];
          if (isAsset(module)) {
            return;
          }

          module.fileName = rewrite(module.fileName);
          module.facadeModuleId = rewrite(module.fileName);

          if (module.code) {
            const magicString = new MagicString(module.code);
            const ast = this.parse(module.code, {
              ecmaVersion: 6,
              sourceType: 'module',
            });

            const extract = (node: Node) => {
              const req = getRequireSource(node) || getImportSource(node);
              if (req) {
                const { start, end } = req;
                const distance = req.value
                  .split('/')
                  .filter((d: string) => d === '..').length;
                const targetDistance = winPath(
                  path.relative(path.dirname(file), 'src')
                ).split('/').length;
                if (isInsideSrc(file, req.value)) {
                  return;
                }
                if (distance == 1 && targetDistance === 1) {
                  // app.js
                  const newPath = req.value.replace(PARENT_DIR_PATTERN, './');
                  magicString.overwrite(start, end, `'${newPath}'`);
                } else if (distance > targetDistance) {
                  // page
                  const newPath = req.value.replace(PARENT_DIR_PATTERN, '');
                  magicString.overwrite(start, end, `'${newPath}'`);
                }
              }
            };

            simple(ast, {
              ImportDeclaration: extract,
              CallExpression: extract,
            });

            if (sourceMaps) {
              module.map = magicString.generateMap();
            }

            module.code = magicString.toString();
          }

          delete bundle[file];
          bundle[rewrite(file)] = module;
        }
      });
    },
  };
}
