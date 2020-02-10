import * as t from '@babel/types';

export type JSXNode =
  | t.JSXElement
  | t.JSXFragment
  | t.JSXText
  | t.JSXExpressionContainer
  | t.JSXSpreadChild;

export interface RenderNode<T = JSXNode> {
  node: T;
  children: RenderNode[];
}
