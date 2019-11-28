import { Plugin } from 'rollup';
import { simple } from 'acorn-walk';
import MagicString from 'magic-string';

const removeDefineProperty = (magicString: MagicString) => (node: any) => {
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

const removeExportsAssignment = (magicString: MagicString) => (node: any) => {
  if (
    node.operator === '=' &&
    node.left.type === 'MemberExpression' &&
    node.left.object.name === 'exports' &&
    node.left.property.name === '__esModule' &&
    node.right.value === true
  ) {
    magicString.remove(node.start, node.end);
  }
};

// __esModule 标示会影响  webpack 编译出来的模块，需要删除
// 两种情况：
//  1. Object.defineProperty(exports, '__esModule', { value: true });
//  2. exports.__esModule = true;
export default function removeESModuleFlag(): Plugin {
  return {
    name: 'remove-esmodule-flag',
    transform(code) {
      const magicString = new MagicString(code);
      const ast = this.parse(code, {
        sourceType: 'module',
      });

      simple(ast, {
        CallExpression: removeDefineProperty(magicString),
        AssignmentExpression: removeExportsAssignment(magicString),
      });

      return {
        code: magicString.toString(),
        map: magicString.generateMap().toString(),
      };
    },
  };
}
