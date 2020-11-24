import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { JSXNode, Options } from './types';
import { EXPRESSION_BLOCK, LEAF, TEMPLATE_ID } from './constants';
import cleanJSXElementLiteralChild from './helpers/cleanJSXElementLiteralChild';

/**
 * 从 JSXElement 中取出 Host Component 的名称
 * 必须已经确定是 JSXElement 属于 Host Component
 * 可以通过 isHostComponent 判断
 */
export function getHostComponentName(node: t.JSXElement, path: NodePath<any>) {
  if (t.isJSXIdentifier(node.openingElement.name)) {
    const tag = node.openingElement.name.name;
    const binding = path.scope.getBinding(tag);

    if (!binding) {
      return tag;
    }

    const importPath = binding.path;
    if (importPath && t.isImportSpecifier(importPath.node) && t.isIdentifier(importPath.node.imported)) {
      return importPath.node.imported.name;
    }

    return tag;
  }

  if (t.isJSXMemberExpression(node.openingElement.name)) {
    const property = node.openingElement.name.property;

    return property.name;
  }
}

/**
 * 判断 JSXElement 是否是 Host Component
 */
export function isHostComponentElement(node: t.JSXElement | t.JSXFragment, path: NodePath<any>, options: Options) {
  if (t.isJSXFragment(node)) {
    return false;
  }

  /**
   * case:
   * import { View, View as CustomView } from 'components';
   * <View></View>
   * <CustomView></CustomView>
   */
  if (t.isJSXIdentifier(node.openingElement.name)) {
    const tag = node.openingElement.name.name;
    const binding = path.scope.getBinding(tag);

    if (!binding) {
      // EXPRESSION_BLOCK 是 'block' 标签，也是 host component
      if (tag === EXPRESSION_BLOCK) {
        return true;
      }

      return false;
    }

    const importPath = binding.path;

    if (
      importPath &&
      t.isImportSpecifier(importPath.node) &&
      t.isImportDeclaration(importPath.parent) &&
      options.isHostComponentPackage(importPath.parent.source.value)
    ) {
      return true;
    }

    return false;
  }

  /**
   * case:
   * import * as Com from 'components';
   * <Com.View></Com.View>
   */
  if (t.isJSXMemberExpression(node.openingElement.name)) {
    const object = node.openingElement.name.object;

    if (!t.isJSXIdentifier(object)) {
      return false;
    }

    const binding = path.scope.getBinding(object.name);
    if (!binding) {
      return false;
    }

    const importPath = binding.path;

    if (
      importPath &&
      t.isImportNamespaceSpecifier(importPath.node) &&
      t.isImportDeclaration(importPath.parent) &&
      options.isHostComponentPackage(importPath.parent.source.value)
    ) {
      return true;
    }

    return false;
  }

  return false;
}

/**
 * 判断是否是 expression block
 */
export function isExpressionBlock(path: any) {
  return path?.node?.openingElement?.name?.name === EXPRESSION_BLOCK;
}

/**
 * 判断是否是 <React.Fragment></React.Fragment> 或 <></>
 */
export function isReactFragment(node: t.JSXElement | t.JSXFragment, path: NodePath<any>) {
  if (t.isJSXFragment(node)) {
    return true;
  }

  /**
   * case:
   * import { Fragment } from 'react';
   * <Fragment></Fragment>
   */
  if (t.isJSXIdentifier(node.openingElement.name)) {
    const tag = node.openingElement.name.name;
    const binding = path.scope.getBinding(tag);

    if (!binding) {
      return false;
    }

    const importPath = binding.path;

    if (
      importPath &&
      t.isImportSpecifier(importPath.node) &&
      t.isImportDeclaration(importPath.parent) &&
      t.isIdentifier(importPath.node.imported) &&
      importPath.parent.source.value.startsWith('react')
    ) {
      return importPath.node.imported.name === 'Fragment';
    }

    return false;
  }

  /**
   * case:
   * import * as React from 'react';
   * <React.Fragment></React.Fragment>
   */
  if (t.isJSXMemberExpression(node.openingElement.name)) {
    const object = node.openingElement.name.object;
    const property = node.openingElement.name.property;

    if (!t.isJSXIdentifier(object)) {
      return false;
    }

    return object.name.toLowerCase() === 'react' && property.name === 'Fragment';
  }

  return false;
}

/**
 * 通过名称查找属性
 *
 * @export
 * @param {string} name
 * @param {t.JSXOpeningElement['attributes']} attributes
 * @returns
 */
export function getAttributeByName(name: string, attributes: t.JSXOpeningElement['attributes']) {
  return attributes.find(attr => t.isJSXAttribute(attr) && attr.name.name === name);
}

/**
 * 从 attributes 中获取 leaf 属性
 *
 * @export
 * @param {t.JSXOpeningElement} element
 * @returns
 */
export function getLeafAttribute(element: t.JSXOpeningElement) {
  const attribute = getAttributeByName(LEAF, element.attributes) as t.JSXAttribute | undefined;

  return attribute;
}

/**
 * 从 attributes 中获取 template id
 *
 * @export
 * @param {t.JSXOpeningElement} element
 * @returns
 */
export function getTemplateID(element: t.JSXOpeningElement) {
  const attribute: any = getAttributeByName(TEMPLATE_ID, element.attributes);

  return attribute?.value?.value;
}

/**
 * 判断是否是 Leaf 节点
 * 组件标记了 leaf 属性时，说明其子节点是单节点
 * 目前只有 plain text 文本情况
 */
export function isPlainTextLeaf(node: t.Node, path: NodePath<any>, options: Options) {
  if (!t.isJSXElement(node)) {
    return false;
  }

  if (!isHostComponentElement(node, path, options)) {
    return false;
  }

  return getLeafAttribute(node.openingElement);
}

/**
 * 用标签包裹当前 node
 */
export function wrappedByElement(name: string, node: JSXNode, path: NodePath<any>) {
  path.replaceWith(
    t.jsxElement(
      t.jsxOpeningElement(t.jsxIdentifier(name), []),
      t.jsxClosingElement(t.jsxIdentifier(name)),
      [node],
      false
    ) as any
  );
}

/**
 * 用 <block> 标签包裹，用于处理无法静态化的标签和表达式
 *
 */
export function wrappedByExpressionBlock(node: JSXNode, path: NodePath<any>) {
  // 如果不是在一个 JSXElement|JSXFragment 中，则不处理
  // 如：这是一个属性表达式 attr={xxx}
  if (!t.isJSXElement(path.parentPath.node) && !t.isJSXFragment(path.parentPath.node)) {
    return;
  }

  // 已经被 <block> 包裹
  if (isExpressionBlock(path.parentPath)) {
    return;
  }

  wrappedByElement(EXPRESSION_BLOCK, node, path);
}

/**
 * 将标签替换成 JSXFragment
 */
export function replacedWithJSXFragment(node: t.JSXElement, path: NodePath<any>) {
  path.replaceWith(t.jsxFragment(t.jsxOpeningFragment(), t.jsxClosingFragment(), node.children) as any);
}

/**
 * 判断是否是空的 JSXText
 * 空的含义是，只包含空格，换行符，空字符串的 JSXText
 *
 * @export
 * @param node
 * @returns
 */
export function isEmptyText(node: JSXNode) {
  if (!t.isJSXText(node)) {
    return false;
  }

  // 过滤掉空格，换行符后，是否还为空
  return !cleanJSXElementLiteralChild(node);
}

/**
 * 格式化 literal
 * 由于在 JSX 中，任何换行都会被处理成 JSXText 的内容，因此需要对 JSXText 的内容做格式化
 * 如：
 * <Text>
 *  text1
 *  text2
 * </Text>
 * 在上例中，
 * case A: 由开标签 <Text> 到第二行的 'text1' 前的这部分换行+空格组成的字符串需要剔除
 * case B: 由第二行 'text1' 结尾到第三行的 'text2'前的这部分换行+空格组成的字符串需要处理成一个空格 ' '
 * case C: 由第三行 'text2' 结尾到第四行的闭标签 </Text>前的这部分换行+空格组成的字符串需要剔除
 *
 * @export
 * @param {string} literal
 * @returns
 */
export function normalizeLiteral(literal: string) {
  let value = literal.toString();
  // case A
  if (value.startsWith('\n')) {
    value = value.trimLeft();
  }

  // case B
  if (value.trim().indexOf('\n') !== -1) {
    value = value.replace(/\n\s+/g, ' ');
  }

  // case C
  if (value.indexOf('\n') !== -1) {
    value = value.trimRight();
  }

  return value;
}

/**
 * 判断一个元素上是否有 ...props
 *
 * @param node
 */
export function hasSpreadAttribute(node: t.JSXElement) {
  return node.openingElement.attributes.some(attr => t.isJSXSpreadAttribute(attr));
}

/**
 * 判断一个元素属性里是不是有 children
 */
export function hasChildrenAttribute(node: t.JSXElement) {
  return node.openingElement.attributes.some(attr => t.isJSXAttribute(attr) && attr.name.name === 'children');
}
