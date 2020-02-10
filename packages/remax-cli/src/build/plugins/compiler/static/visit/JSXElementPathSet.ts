import { NodePath } from '@babel/traverse';
import * as t from '@babel/types';
import { TEMPLATE_ID_ATTRIBUTE_NAME } from '../constants';
import * as helpers from '../helpers';

export interface JSXElementPath {
  path: NodePath<t.JSXElement>;
  templateID: string;
  module: string;
  isEntry?: boolean;
}

/**
 * 存储用于转换成原生 template 的 JSXElement Path
 *
 * @export
 * @class JSXElementPaths
 */
export default class JSXElementPathSet {
  public values() {
    return this.paths;
  }

  public add(path: NodePath<t.JSXElement>, module: string, isEntry?: boolean) {
    const templateID = this.markTemplateID(path.node.openingElement);
    this.paths.push({ path, module, templateID, isEntry });
  }

  public clear() {
    this.paths = [];
    this.id = 0;
  }

  private paths: JSXElementPath[] = [];
  private id = 0;

  private generateID() {
    this.id += 1;
    return this.id.toString();
  }

  /**
   * 标记 template id
   * 在 react 虚拟 dom 上记录 template id，就可以在渲染时找到虚拟节点对应的模板
   *
   * @private
   * @param {t.JSXOpeningElement} element
   * @returns
   * @memberof JSXElementPaths
   */
  private markTemplateID(element: t.JSXOpeningElement) {
    let templateID = helpers.getTemplateID(element);

    if (!templateID) {
      templateID = this.generateID();
      element.attributes.push(
        t.jsxAttribute(
          t.jsxIdentifier(TEMPLATE_ID_ATTRIBUTE_NAME),
          t.stringLiteral(templateID)
        )
      );
    }

    return templateID;
  }
}
