import { Plugin } from 'rollup';
import { simple } from 'acorn-walk';
import MagicString from 'magic-string';
import { createFilter } from 'rollup-pluginutils';

const files = [
  /node_modules\/scheduler\/cjs\/scheduler-tracing.development.js$/,
  /node_modules\/scheduler\/cjs\/scheduler-tracing.production.min.js$/,
  /node_modules\/scheduler\/cjs\/scheduler.development.js/,
  /node_modules\/scheduler\/cjs\/scheduler.production.min.js/,
];

export default function removeESModuleFlag(): Plugin {
  return {
    name: 'remove-esmodule-flag',
    transform(code, id) {
      const filter = createFilter(files);
      if (!filter(id)) {
        return null;
      }

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
