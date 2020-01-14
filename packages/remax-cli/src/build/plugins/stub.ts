import MagicString from 'magic-string';
import { Plugin } from 'rollup';
import winPath from '../../winPath';

interface Options {
  modules?: string[];
  sourceMap?: boolean;
}

export default function stub(options: Options = {}): Plugin {
  return {
    name: 'stub',

    transform(code: string, id: string) {
      if (options.modules) {
        if (
          options.modules.every(
            module => winPath(id).indexOf(winPath(module)) === -1
          )
        ) {
          return null;
        }
      }

      let ast = this.parse(code, {
        sourceType: 'module',
      });

      const exports: string[] = [];

      ast.body.forEach((node: any) => {
        if (node.type === 'ExportDefaultDeclaration') {
          exports.push(`\nexport default function() {};`);
        } else if (node.type === 'ExportNamedDeclaration') {
          if (node.declaration == null) {
            let content = '';
            node.specifiers.forEach((specifier: any) => {
              content += `\nexport var ${specifier.exported.name} = function() {};`;
            });
            exports.push(content);
          } else if (node.declaration.type === 'VariableDeclaration') {
            node.declaration.declarations.forEach((declaration: any) => {
              exports.push(
                `\nexport var ${declaration.id.name} = function() {};`
              );
            });
          } else if (node.declaration.type === 'FunctionDeclaration') {
            exports.push(
              `\nexport var ${node.declaration.id.name} = function() {};`
            );
          } else if (node.declaration.type === 'ClassDeclaration') {
            exports.push(
              `\nexport var ${node.declaration.id.name} = function() {};`
            );
          }
        }
      });

      const magicString = new MagicString(exports.join(''));
      code = magicString.toString();
      const map = options.sourceMap ? magicString.generateMap() : null;
      ast = this.parse(code, {
        sourceType: 'module',
      });

      return { code, map };
    },
  };
}
