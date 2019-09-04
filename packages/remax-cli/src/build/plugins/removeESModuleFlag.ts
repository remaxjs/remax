import { Plugin } from 'rollup';
import { simple } from 'acorn-walk';
import MagicString from 'magic-string';

// __esModule 标示会影响  webpack 编译出来的模块
export default function removeESModuleFlag(): Plugin {
  return {
    name: 'remove-esmodule-flag',
    transform(code) {
      const magicString = new MagicString(code);
      const ast = this.parse(code, {
        ecmaVersion: 6,
        sourceType: 'module',
      });

      const remove = (node: any) => {
        if (
          node.callee.type === 'MemberExpression' &&
          node.callee.object.name === 'Object' &&
          node.callee.property.name === 'defineProperty' &&
          node.arguments.length === 3 &&
          node.arguments[0].name === 'exports' &&
          node.arguments[1].value === '__esModule'
        ) {
          magicString.remove(node.start, node.end);
        }
      };

      simple(ast, {
        CallExpression: remove,
      });

      return {
        code: magicString.toString(),
        map: magicString.generateMap().toString(),
      };
    },
  };
}
