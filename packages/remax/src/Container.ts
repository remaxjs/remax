import VNode, { Path, RawNode } from './VNode';
import { generate } from './instanceId';

function stringPath(path: Path) {
  return path.join('.');
}

interface SpliceUpdate {
  path: Path;
  start: number;
  deleteCount: number;
  items: RawNode[];
}

export default class Container {
  context: any;
  root: VNode;
  updateQueue: SpliceUpdate[] = [];

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
    path: Path,
    start: number,
    deleteCount: number,
    ...items: RawNode[]
  ) {
    const update: SpliceUpdate = {
      path,
      start,
      deleteCount,
      items,
    };
    if (this.updateQueue.length === 0) {
      setTimeout(() => this.applyUpdate());
    }
    this.updateQueue.push(update);
  }

  applyUpdate() {
    const startTime = new Date().getTime();

    const action = {
      type: 'splice',
      payload: this.updateQueue.map(update => ({
        path: stringPath(update.path),
        start: update.start,
        deleteCount: update.deleteCount,
        item: update.items[0],
      })),
    };

    this.context.setData({ action }, () => {
      if (process.env.REMAX_DEBUG) {
        console.log(
          `setData => 回调时间：${new Date().getTime() - startTime}ms`,
          action
        );
      }
    });
    this.updateQueue = [];
  }

  createCallback(name: string, fn: Function) {
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
