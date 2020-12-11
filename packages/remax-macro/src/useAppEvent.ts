import * as t from '@babel/types';
import { slash } from '@remax/shared';
import { NodePath } from '@babel/traverse';
import Store from '@remax/build-store';
import insertImportDeclaration from './utils/insertImportDeclaration';

const PACKAGE_NAME = '@remax/runtime';
const FUNCTION_NAME = 'useAppEvent';

function getArguments(callExpression: NodePath<t.CallExpression>, importer: string) {
  const args = callExpression.node.arguments;
  const eventName = args[0] as t.StringLiteral;
  const callback = args[1];

  Store.appEvents.set(importer, Store.appEvents.get(importer)?.add(eventName.value) ?? new Set([eventName.value]));

  return [eventName, callback];
}

export default function useAppEvent(path: NodePath, state: any) {
  const program = state.file.path;
  const importer = slash(state.file.opts.filename);
  const functionName = insertImportDeclaration(program, FUNCTION_NAME, PACKAGE_NAME);
  const callExpression = path.findParent(p => t.isCallExpression(p)) as NodePath<t.CallExpression>;
  const [eventName, callback] = getArguments(callExpression, importer);

  callExpression.replaceWith(t.callExpression(t.identifier(functionName), [eventName, callback]));
}
