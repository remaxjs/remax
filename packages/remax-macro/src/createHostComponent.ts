import * as t from '@babel/types';
import type { NodePath } from '@babel/traverse';
import Store from '@remax/build-store';
import insertImportDeclaration from './utils/insertImportDeclaration';

const PACKAGE_NAME = '@remax/runtime';
const FUNCTION_NAME = 'createHostComponent';

function getConfig(callExpression: NodePath<t.CallExpression>) {
  const args = callExpression.node.arguments;
  const name = args[0] as t.StringLiteral;
  const props = (args[1] as t.ArrayExpression).elements
    .filter(element => element !== null)
    .map(element => {
      if (t.isStringLiteral(element)) {
        const value = element.value;
        return [value, value];
      } else if (t.isArrayExpression(element)) {
        return element.elements.map(ele => (ele as t.StringLiteral).value);
      }
    });

  return [name, props];
}

export default function createHostComponent(path: NodePath, state: any) {
  const program = state.file.path;
  const functionName = insertImportDeclaration(program, FUNCTION_NAME, PACKAGE_NAME);
  const callExpression = path.findParent(p => t.isCallExpression(p)) as NodePath<t.CallExpression>;
  const config = getConfig(callExpression);
  const name = config[0] as t.StringLiteral;
  const aliasPair = config[1] as string[][];
  const props = aliasPair.map(prop => prop[0]);
  const alias = aliasPair.reduce<{ [key: string]: string }>((prev, current) => {
    prev[current[1]] = current[0];
    return prev;
  }, {});

  Store.registeredHostComponents.set(name.value, {
    props,
    alias,
    additional: true,
  });

  callExpression.replaceWith(t.callExpression(t.identifier(functionName), [name]));
}
