import * as t from '@babel/types';
import {
  TEMPLATE_ID_ATTRIBUTE_NAME,
  REACT_KEY_ATTRIBUTE_NAME,
  LEAF_ATTRIBUTE_NAME,
} from '../../constants';
import API from '../../../../../../API';

/**
 * 生成属性值模板
 *
 * @param {string} attributeName
 * @param {string} dataPath
 * @param {(t.StringLiteral | t.JSXExpressionContainer)} [value]
 * @returns
 */
function createAttributeValueTemplate(
  attributeName: string,
  dataPath: string,
  value?: t.StringLiteral | t.JSXExpressionContainer
) {
  let template = '';
  // case: Literal
  // 直接静态化
  if (t.isLiteral(value)) {
    template = value.value;
  }

  // case: JSXExpressionContainer
  if (t.isJSXExpressionContainer(value)) {
    // 同 Literal 处理
    if (t.isLiteral(value.expression)) {
      template = (value.expression as t.StringLiteral).value;
    } else {
      // TODO: 更多情况处理
      // 1. 属性是方法，可以直接用对应方法名做属性值
      // ...其他情况
      template = `{{${dataPath}.props['${attributeName}']}}`;
    }
  }

  // 附加的一些默认属性，没有 value，如 data-rid
  if (!value) {
    template = `{{${dataPath}.props['${attributeName}']}}`;
  }

  return `"${template}"`;
}

/**
 * 生成模板中的属性片段
 *
 * @export
 * @param {string} componentType
 * @param {string} dataPath
 * @param {(Array<t.JSXAttribute | t.JSXSpreadAttribute>)} attributes
 * @returns
 */
export function createAttributesTemplate(
  componentType: string,
  dataPath: string,
  attributes: Array<t.JSXAttribute | t.JSXSpreadAttribute>
) {
  const SEPARATOR = '\n  ';
  const hostComponent = API.getHostComponents().get(componentType);
  let template: Array<[string, string]> = [];

  // case: Spread Attributes
  // 包含了 Spread Attributes 就返回所有属性
  if (hostComponent && attributes.find(attr => t.isJSXSpreadAttribute(attr))) {
    template = hostComponent.props.map(prop => [
      prop,
      createAttributeValueTemplate(prop, dataPath),
    ]);
  } else {
    template = (attributes as t.JSXAttribute[])
      // template id 不渲染
      .filter(attr => attr.name.name !== TEMPLATE_ID_ATTRIBUTE_NAME)
      // react "key" 属性 不渲染
      .filter(attr => attr.name.name !== REACT_KEY_ATTRIBUTE_NAME)
      // leaf 属性 不渲染
      .filter(attr => attr.name.name !== LEAF_ATTRIBUTE_NAME)
      .map(attr => {
        // t.JSXNamespacedName 的 case 暂不处理
        const name = attr.name.name as string;
        const prop = hostComponent?.alias?.[name] ?? name;
        return [
          prop,
          createAttributeValueTemplate(prop, dataPath, attr.value as any),
        ];
      });
  }

  // 默认都加上 data-rid 属性，block 标签不用处理
  if (componentType !== 'block') {
    template.push([
      'data-rid',
      createAttributeValueTemplate('data-rid', dataPath),
    ]);
  }

  return template.map(([prop, value]) => `${prop}=${value}`).join(SEPARATOR);
}
