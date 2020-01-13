import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { HostComponents } from 'remax-types';

const PACKAGE_NAME = 'remax';
const FUNCTION_NAME = 'createHostComponent';

export const hostComponents: HostComponents = new Map();

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

function insertImportDeclaration(program: any) {
  let name = FUNCTION_NAME;

  const node = program.node.body.find(
    (node: t.Node) =>
      t.isImportDeclaration(node) && node.source.value === PACKAGE_NAME
  );

  if (node) {
    const specifier = (node as t.ImportDeclaration).specifiers.find(
      specifier =>
        t.isImportSpecifier(specifier) &&
        specifier.imported.name === FUNCTION_NAME
    );

    if (specifier) {
      name = specifier.local.name;
    } else {
      node.specifiers.push(
        t.importSpecifier(t.identifier(name), t.identifier(name))
      );
    }
  } else {
    const importDeclaration = t.importDeclaration(
      [t.importSpecifier(t.identifier(name), t.identifier(name))],
      t.stringLiteral(PACKAGE_NAME)
    );
    program.node.body.unshift(importDeclaration);
  }

  return name;
}

export default function createHostComponent(path: NodePath, state: any) {
  const program = state.file.path;
  const functionName = insertImportDeclaration(program);
  const callExpression = path.findParent(p =>
    t.isCallExpression(p)
  ) as NodePath<t.CallExpression>;
  const config = getConfig(callExpression);
  const name = config[0] as t.StringLiteral;
  const aliasPair = config[1] as string[][];
  const props = aliasPair.map(prop => prop[0]);
  const alias = aliasPair.reduce<{ [key: string]: string }>((prev, current) => {
    prev[current[1]] = current[0];
    return prev;
  }, {});

  hostComponents.set(name.value, {
    props,
    alias,
    additional: true,
  });

  callExpression.replaceWith(
    t.callExpression(t.identifier(functionName), [name])
  );
}
