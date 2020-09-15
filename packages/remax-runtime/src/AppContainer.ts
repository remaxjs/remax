import VNode, { RawNode } from './VNode';
import { generate } from './instanceId';
import { FiberRoot } from 'react-reconciler';

interface SpliceUpdate {
  path: string;
  start: number;
  deleteCount: number;
  items: RawNode[];
}

export default class AppContainer {
  context: any;
  root: VNode;
  updateQueue: SpliceUpdate[] = [];
  _rootContainer?: FiberRoot;

  constructor() {
    this.root = new VNode({
      id: generate(),
      type: 'root',
      container: this,
    });
    this.root.mounted = true;
  }

  requestUpdate(path: string, start: number, deleteCount: number, ...items: RawNode[]) {
    // ignore
  }

  applyUpdate() {
    this.context._pages.forEach((page: any) => {
      page.container.applyUpdate();
      page.modalContainer.applyUpdate();
    });
  }

  createCallback(name: string, fn: (...params: any) => any) {
    this.context[name] = fn;
  }

  appendChild(child: VNode) {
    this.root.appendChild(child);
  }

  removeChild(child: VNode) {
    this.root.removeChild(child);
  }

  insertBefore(child: VNode, beforeChild: VNode) {
    this.root.insertBefore(child, beforeChild);
  }
}
