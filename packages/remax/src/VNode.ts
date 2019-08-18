import { TYPE_TEXT } from './constants';
import Container from './Container';

export interface RawNode {
  id?: number;
  type: string | Symbol;
  props?: any;
  children?: RawNode[];
  text?: string;
}

export type Path = Array<string | number>;

export default class VNode {
  id: number;
  container: Container;
  children?: VNode[];
  mounted = false;
  type: string | Symbol;
  props: any;
  parent: VNode | null = null;
  text?: string;

  constructor(id: number, type: string | Symbol, props: any, page: any) {
    this.id = id;
    this.container = page;
    this.type = type;
    this.props = props;
  }

  appendChild(node: VNode) {
    node.parent = this;
    this.children = this.children || [];
    this.children.push(node);
    if (this.isMounted()) {
      this.container.requestUpdate(node.path(), node.toJSON());
    }
  }

  removeChild(node: VNode) {
    const start = this.children!.indexOf(node);
    this.children!.splice(start, 1);
    if (this.isMounted()) {
      const path = this.parent
        ? this.parent.path()
        : [...this.path(), 'children'];
      this.container.requestSpliceUpdate(path, start, 1);
    }
  }

  insertBefore(newNode: VNode, referenceNode: VNode) {
    newNode.parent = this;
    const start = this.children!.indexOf(referenceNode);
    this.children!.splice(start, 0, newNode);
    if (this.isMounted()) {
      const path = this.parent
        ? this.parent.path()
        : [...this.path(), 'children'];
      this.container.requestSpliceUpdate(path, start, 0, newNode);
    }
  }

  path(): Path {
    if (!this.parent) {
      return [this.container.root.length - 1];
    }
    return [
      ...this.parent.path(),
      'children',
      this.parent.children!.indexOf(this),
    ];
  }

  isMounted(): boolean {
    return this.parent ? this.parent.isMounted() : this.mounted;
  }

  toJSON(): RawNode {
    if (this.type === TYPE_TEXT) {
      return {
        type: this.type,
        text: this.text,
      };
    }
    return {
      id: this.id,
      type: this.type,
      props: this.props,
      children: this.children && this.children.map(c => c.toJSON()),
      text: this.text,
    };
  }
}
