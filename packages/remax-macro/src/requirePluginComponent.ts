import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import * as path from 'path';
import { kebabCase } from 'lodash';
import insertImportDeclaration from './utils/insertImportDeclaration';
import { NativeComponent } from '@remax/types';

export const nativeComponents: Map<string, NativeComponent> = new Map();

export function register(sourcePath: string, importer = '', assets: string[] = []) {
  const component = Array.from(nativeComponents.values()).find(c => c.sourcePath === sourcePath);

  if (component) {
    component.assets = Array.from(new Set([...component.assets, ...assets]));
    component.importers = Array.from(new Set([...component.importers, importer].filter(Boolean)));
    return component.id;
  }

  const ext = path.extname(sourcePath);
  const basename = path.basename(sourcePath);
  const name = kebabCase(basename.replace(ext, ''));
  let num = 0;
  let id = name;

  while (nativeComponents.has(id)) {
    id = name + num;
    num += 1;
  }

  nativeComponents.set(id, {
    id,
    sourcePath,
    importers: [importer].filter(Boolean),
    assets,
  });

  return id;
}

const PACKAGE_NAME = '@remax/runtime';
const FUNCTION_NAME = 'createNativeComponent';

function getName(callExpression: NodePath<t.CallExpression>) {
  const args = callExpression.node.arguments;
  const name = args[0] as t.StringLiteral;
  return name;
}

export default function requirePluginComponent(path: NodePath, state: any) {
  const importer = state.file.opts.filename;
  const program = state.file.path;
  const functionName = insertImportDeclaration(program, FUNCTION_NAME, PACKAGE_NAME);
  const callExpression = path.findParent(p => t.isCallExpression(p)) as NodePath<t.CallExpression>;
  const name = getName(callExpression);

  name.value = register(name.value, importer);
  callExpression.replaceWith(t.callExpression(t.identifier(functionName), [name]));
}
