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
  children: VNode[];
  mounted = false;
  type: string;
  props?: any;
  parent: VNode | null = null;
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
    this.children = [];
  }

  appendChild(node: VNode, immediately: boolean) {
    node.parent = this;
    if (this.children.find(child => child.id === node.id)) {
      this.removeChild(node, immediately);
    }

    this.children.push(node);
    if (this.isMounted()) {
      this.container.requestUpdate(
        [...this.path(), 'children'],
        this.children.length - 1,
        0,
        immediately,
        node.toJSON()
      );
    }
  }

  removeChild(node: VNode, immediately: boolean) {
    const start = this.children.indexOf(node);
    this.children.splice(start, 1);
    if (this.isMounted()) {
      this.container.requestUpdate(
        [...this.path(), 'children'],
        start,
        1,
        immediately
      );
    }
  }

  insertBefore(newNode: VNode, referenceNode: VNode, immediately: boolean) {
    newNode.parent = this;
    if (this.children.find(child => child.id === newNode.id)) {
      this.removeChild(newNode, immediately);
    }

    const start = this.children.indexOf(referenceNode);
    this.children.splice(start, 0, newNode);
    if (this.isMounted()) {
      this.container.requestUpdate(
        [...this.path(), 'children'],
        start,
        0,
        immediately,
        newNode.toJSON()
      );
    }
  }

  update() {
    // root 不会更新，所以肯定有 parent
    this.container.requestUpdate(
      [...this.parent!.path(), 'children'],
      this.parent!.children.indexOf(this),
      1,
      false,
      this.toJSON()
    );
  }

  path(): Path {
    if (!this.parent) {
      return ['root'];
    }
    return [
      ...this.parent.path(),
      'children',
      this.parent.children.indexOf(this),
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
