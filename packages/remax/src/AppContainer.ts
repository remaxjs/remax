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

  constructor(context: any) {
    this.context = context;

    this.root = new VNode({
      id: generate(),
      type: 'root',
      container: this,
    });
    this.root.mounted = true;
  }

  requestUpdate(
    path: string,
    start: number,
    deleteCount: number,
    ...items: RawNode[]
  ) {
    // ignore
  }

  createCallback(name: string, fn: Function) {
    this.context[name] = fn;
  }

  appendChild(child: VNode) {
    this.root.appendChild(child, true);
  }

  removeChild(child: VNode) {
    this.root.removeChild(child, true);
  }

  insertBefore(child: VNode, beforeChild: VNode) {
    this.root.insertBefore(child, beforeChild, true);
  }
}
