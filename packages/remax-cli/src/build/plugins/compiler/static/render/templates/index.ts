import * as t from '@babel/types';
import * as helpers from '../../helpers';
import { NodePath } from '@babel/traverse';
import JSXElement from './JSXElement';
import JSXExpressionContainer from './JSXExpressionContainer';
import TemplateInfoMap from './TemplateInfoMap';
import { RenderNode } from '../../types';

export const templateInfoMap = new TemplateInfoMap();

/**
 * 创建单个原生模板
 *
 * @param element
 * @param {NodePath} path
 * @param {string} module
 * @param {(Array<string | number>)} dataPath
 * @returns {string}
 */
export function createTemplate(
  element: RenderNode,
  path: NodePath,
  module: string,
  dataPath: Array<string | number>
): string {
  if (t.isJSXElement(element.node)) {
    return JSXElement(
      element as RenderNode<t.JSXElement>,
      path,
      dataPath,
      createTemplate
    );
  }

  if (t.isJSXExpressionContainer(element.node)) {
    return JSXExpressionContainer(element.node, dataPath);
  }

  if (t.isJSXText(element.node)) {
    return `{{'${helpers.normalizeLiteral(element.node.value)}'}}`;
  }

  // case: JSXFragment
  // JSXFragment 已经被过滤，不存在

  // case: JSXSpreadChild
  // 未知使用场景

  return '';
}
