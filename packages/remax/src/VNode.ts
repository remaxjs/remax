import { TYPE_TEXT } from './constants';
import Container from './Container';

export interface RawNode {
  id?: number;
  type: string;
  props?: any;
  children?: RawNode[];
  text?: string;
}

export type Path = Array<string | number>;

export default class VNode {
  id: number;
  container: Container;
  mounted = false;
  type: string;
  props?: any;
  parent: VNode | null = null;
  firstChild: VNode | null = null;
  lastChild: VNode | null = null;
  size = 0;
  previousSibling: VNode | null = null;
  nextSibling: VNode | null = null;
  text?: string;

  constructor({
    id,
    type,
    props,
    container,
  }: {
    id: number;
    type: string;
    props?: any;
    container: any;
  }) {
    this.id = id;
    this.container = container;
    this.type = type;
    this.props = props;
  }

  get index(): number {
    if (!this.previousSibling) {
      return 0;
    }

    return this.previousSibling.index + 1;
  }

  get children() {
    const arr = [];
    let item = this.firstChild;

    while (item) {
      arr.push(item);
      item = item.nextSibling;
    }

    return arr;
  }

  appendChild(node: VNode, immediately: boolean) {
    this.removeChild(node, immediately);
    this.size += 1;

    node.parent = this;

    if (!this.firstChild) {
      this.firstChild = node;
    }

    if (this.lastChild) {
      this.lastChild.nextSibling = node;
      node.previousSibling = this.lastChild;
    }

    this.lastChild = node;

    if (this.isMounted()) {
      this.container.requestUpdate(
        [...this.path(), 'children'],
        this.size - 1,
        0,
        immediately,
        node.toJSON()
      );
    }
  }

  removeChild(node: VNode, immediately: boolean) {
    const { previousSibling, nextSibling } = node;

    if (node.parent !== this) {
      return;
    }

    this.size -= 1;

    if (this.firstChild === node) {
      this.firstChild = node.nextSibling;
    }

    if (this.lastChild === node) {
      this.lastChild = node.previousSibling;
    }

    if (previousSibling) {
      previousSibling.nextSibling = nextSibling;
    }

    if (nextSibling) {
      nextSibling.previousSibling = previousSibling;
    }

    node.previousSibling = null;
    node.nextSibling = null;

    if (this.isMounted()) {
      this.container.requestUpdate(
        [...this.path(), 'children'],
        node.index,
        1,
        immediately
      );
    }
  }

  insertBefore(node: VNode, referenceNode: VNode, immediately: boolean) {
    this.removeChild(node, immediately);
    this.size += 1;

    node.parent = this;

    if (referenceNode === this.firstChild) {
      this.firstChild = node;
    }

    if (referenceNode.previousSibling) {
      referenceNode.previousSibling.nextSibling = node;
      node.previousSibling = referenceNode.previousSibling;
    }

    referenceNode.previousSibling = node;
    node.nextSibling = referenceNode;

    if (this.isMounted()) {
      this.container.requestUpdate(
        [...this.path(), 'children'],
        referenceNode.index,
        0,
        immediately,
        node.toJSON()
      );
    }
  }

  update() {
    // root 不会更新，所以肯定有 parent
    this.container.requestUpdate(
      [...this.parent!.path(), 'children'],
      this.index,
      1,
      false,
      this.toJSON()
    );
  }

  path(): Path {
    if (!this.parent) {
      return ['root'];
    }
    return [...this.parent.path(), 'children', this.index];
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
      children: this.children.map(c => c.toJSON()),
      text: this.text,
    };
  }
}
