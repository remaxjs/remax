import * as t from '@babel/types';
import * as helpers from '../../helpers';
import stringPath from './stringPath';
import { TEMPLATE_ID_ATTRIBUTE_NAME } from '../../constants';

/**
 * 创建 JSXExpressionContainer 对应的模板
 *
 * @export
 * @param {t.JSXExpressionContainer} element
 * @param {(Array<string | number>)} dataPath
 * @returns
 */
export default function JSXExpressionContainer(
  element: t.JSXExpressionContainer,
  dataPath: Array<string | number>
) {
  const expressionContainer = element as t.JSXExpressionContainer;

  // case: Literal
  // 直接静态化
  if (t.isLiteral(expressionContainer.expression)) {
    return `{{'${helpers.normalizeLiteral(
      (expressionContainer.expression as t.StringLiteral).value
    )}'}}`;
  }

  // TODO: 更多 case 可以在这里处理, 如：
  // {array.map(...)} 可以定向处理
  // ... 其他情况

  // case: 默认
  // 遍历其中的节点，动态生成
  const nodePath = stringPath(dataPath);

  return `<block a:if="{{${nodePath}.children}}">
  <block a:for="{{${nodePath}.children || []}}" key="{{item.id}}">
    <template a:if="{{item.props.${TEMPLATE_ID_ATTRIBUTE_NAME} > 0}}" is="{{'TPL_' + item.props.${TEMPLATE_ID_ATTRIBUTE_NAME}}}" data="{{ node: item }}" />
    <template a:else is="{{ 'TPL_' + item.type }}" data="{{ node: item }}" />
  </block>
</block>
<template a:elif="{{${nodePath}.props.${TEMPLATE_ID_ATTRIBUTE_NAME} > 0}}" is="{{'TPL_' + ${nodePath}.props.${TEMPLATE_ID_ATTRIBUTE_NAME}}}" data="{{ node: ${nodePath} }}" />
<template a:else is="{{ 'TPL_' + ${nodePath}.type }}" data="{{ node: ${nodePath} }}" />
`;
}
