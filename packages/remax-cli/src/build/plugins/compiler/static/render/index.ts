import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { TEMPLATE_ID, ENTRY } from '../constants';
import { createTemplate, templateInfoMap } from '../render/templates';
import { JSXNode, RenderNode } from '../types';
import * as helpers from '../helpers';

/**
 * 判断 JSX 元素是否处于一段 JSX 片段的顶部
 * 用于标记 template id
 */
function isRootPath(path: NodePath<t.JSXElement | t.JSXFragment>) {
  const { parent, parentPath, node } = path;

  // 元素自身是非 host component 或者是 block，不能识别为 Root
  if (
    t.isJSXElement(node) &&
    ((node.openingElement.name as t.JSXIdentifier).name === 'block' ||
      !helpers.isHostComponentElement(node, path))
  ) {
    return false;
  }

  // case:
  // 记录根节点
  // 父节点不为 JSXElement 或 JSXFragment，说明 path 为根节点
  if (!t.isJSXElement(parent) && !t.isJSXFragment(parent)) {
    return true;
  }

  // case:
  // parent 本身是一个非 host 组件(React 组件, 原生组件或者无法识别的组件等)
  if (
    t.isJSXElement(parent) &&
    !helpers.isHostComponentElement(parent, parentPath)
  ) {
    return true;
  }

  return false;
}

/**
 * 判断是否是入口 JSX 元素
 *
 * @param {t.JSXElement} node
 * @returns
 */
function isEntry(node: t.JSXElement | t.JSXFragment) {
  if (t.isJSXFragment(node)) {
    return false;
  }

  return !!node.openingElement.attributes.find(
    attr => t.isJSXAttribute(attr) && attr.name.name === ENTRY
  );
}

let id = 0;

function generateID() {
  id += 1;
  return id.toString();
}

/**
 * 标记 template id
 * 在 react 虚拟 dom 上记录 template id，就可以在渲染时找到虚拟节点对应的模板
 *
 * @param {t.JSXOpeningElement} element
 * @returns
 */
function markTemplateID(element: t.JSXOpeningElement): string {
  let templateID = helpers.getTemplateID(element);

  if (!templateID) {
    templateID = generateID();
    element.attributes.push(
      t.jsxAttribute(t.jsxIdentifier(TEMPLATE_ID), t.stringLiteral(templateID))
    );
  }

  return templateID;
}

/**
 * 整理 JSXNodes，主要目的是消化 JSXFragment，得到正确的 Node 结构
 *
 * @param {JSXNode} node
 * @returns {RenderNode[]}
 */
function sortNodes(node: JSXNode): RenderNode[] {
  if (t.isJSXFragment(node)) {
    return node.children.reduce<RenderNode[]>(
      (prev, current) => prev.concat(sortNodes(current)),
      []
    );
  }

  if (t.isJSXElement(node)) {
    return [
      {
        node,
        children: node.children.reduce<RenderNode[]>(
          (prev, current) => prev.concat(sortNodes(current)),
          []
        ),
      },
    ];
  }

  // case JSXText
  // case JSXExpressionContainer
  // case JSXSpreadChild

  return [
    {
      node,
      children: [],
    },
  ];
}

/**
 * 遍历 JSX 元素，生成所有模板
 *
 * @param {(NodePath<t.JSXElement | t.JSXFragment>)} path
 * @param {*} state
 * @returns
 */
function renderTemplates(
  path: NodePath<t.JSXElement | t.JSXFragment>,
  state: any
) {
  if (!isRootPath(path)) {
    return;
  }

  const nodes = sortNodes(path.node);

  nodes.forEach(node => {
    // case: JSXExpressionContainer 已经都被包裹在 block 里面，entry 中不会有
    // case: JSXFragment 已经被 sortNodes 方法处理掉了，不会出现
    // case: JSXText TODO: 由于 JSXText 无法记录 template id，这里先不处理
    // case: JSXSpreadChild 未知使用场景
    if (!t.isJSXElement(node.node)) {
      return;
    }

    const module = state.filename;
    const templateID = markTemplateID(node.node.openingElement);

    if (templateInfoMap.has(templateID)) {
      return;
    }

    templateInfoMap.set(
      templateID,
      createTemplate(node, path, module, ['node']),
      module,
      isEntry(path.node)
    );
  });
}

/**
 * 将 JSX 片段保存起来，用于生成静态化的原生模板
 *
 * @export
 * @returns
 */
export default function render() {
  return {
    pre(state: any) {
      templateInfoMap.remove(state.opts.filename);
    },
    visitor: {
      JSXElement: renderTemplates,
      JSXFragment: renderTemplates,
    },
  };
}
