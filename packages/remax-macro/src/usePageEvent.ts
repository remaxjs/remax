import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { slash } from '@remax/shared';
import Store from '@remax/build-store';
import insertImportDeclaration from './utils/insertImportDeclaration';

const PACKAGE_NAME = '@remax/runtime';
const FUNCTION_NAME = 'usePageEvent';

function getArguments(callExpression: NodePath<t.CallExpression>, importer: string) {
  const args = callExpression.node.arguments;
  const eventName = args[0] as t.StringLiteral;
  const callback = args[1];

  Store.pageEvents.set(importer, Store.pageEvents.get(importer)?.add(eventName.value) ?? new Set([eventName.value]));

  return [eventName, callback];
}

export default function usePageEvent(path: NodePath, state: any) {
  const program = state.file.path;
  const importer = slash(state.file.opts.filename);
  const functionName = insertImportDeclaration(program, FUNCTION_NAME, PACKAGE_NAME);
  const callExpression = path.findParent(p => t.isCallExpression(p)) as NodePath<t.CallExpression>;
  const [eventName, callback] = getArguments(callExpression, importer);

  callExpression.replaceWith(t.callExpression(t.identifier(functionName), [eventName, callback]));
}
