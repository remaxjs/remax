import { Plugin } from 'rollup';
import { simple } from 'acorn-walk';
import MagicString from 'magic-string';

/**
 * rollup-plugin-commonjs 把 regenerator-runtime  变成了 es module
 * 然后 es module 默认就是 strict mode
 * 支付宝小程序用 webpack 打包的时候默认会给 es module 加个 use strict。
 */
export default function fixRegeneratorRuntime(): Plugin {
  return {
    name: 'fix-regenerator-runetime',
    transform(code) {
      const magicString = new MagicString(code);
      const ast = this.parse(code, {
        sourceType: 'module',
      });

      const remove = (node: any) => {
        if (
          node.callee.type === 'CallExpression' &&
          node.callee.callee.name === 'Function' &&
          node.callee.arguments.length === 2 &&
          node.callee.arguments[0].value === 'r' &&
          node.callee.arguments[1].value === 'regeneratorRuntime = r'
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
