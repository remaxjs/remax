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

      const magicString = new MagicString(code);

      ast.body.forEach((node: any) => {
        if (node.type === 'ExportDefaultDeclaration') {
          magicString.overwrite(node.start, node.end, `\nexport default {};`);
        } else if (node.type === 'ExportNamedDeclaration') {
          if (node.declaration == null) {
            let content = '';
            node.specifiers.forEach((specifier: any) => {
              content += `\nexport var ${specifier.exported.name} = undefined;`;
            });
            magicString.overwrite(node.start, node.end, content);
          } else if (node.declaration.type === 'VariableDeclaration') {
            node.declaration.declarations.forEach((declaration: any) => {
              magicString.overwrite(
                node.start,
                node.end,
                `\nexport var ${declaration.id.name} = undefined;`
              );
            });
          } else if (node.declaration.type === 'FunctionDeclaration') {
            magicString.overwrite(
              node.start,
              node.end,
              `\nexport var ${node.declaration.id.name} = undefined;`
            );
          } else if (node.declaration.type === 'ClassDeclaration') {
            magicString.overwrite(
              node.start,
              node.end,
              `\nexport var ${node.declaration.id.name} = undefined;`
            );
          }
        }
      });

      code = magicString.toString();
      const map = options.sourceMap ? magicString.generateMap() : null;
      ast = this.parse(code, {
        sourceType: 'module',
      });

      return { code, map };
    },
  };
}
