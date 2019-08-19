import Platform from './Platform';
import VNode, { Path, RawNode } from './VNode';
import { generate } from './instanceId';

function stringPath(path: Path) {
  if (Platform.isAlipay) {
    return path.reduce((acc, i) => {
      if (typeof i === 'number') {
        acc += `[${i}]`;
      } else {
        acc += `.${i}`;
      }
      return acc;
    });
  } else {
    return path.join('.');
  }
}

interface SetUpdate {
  path: Path;
  data: RawNode;
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
    if (this.context.$spliceData) {
      const prevSamePathUpdate = this.updateQueue.find(
        u => stringPath(u.path) === stringPath(path)
      );
      if (prevSamePathUpdate) {
        if (prevSamePathUpdate.start < start) {
          prevSamePathUpdate.items = prevSamePathUpdate.items.concat(items);
        } else {
          prevSamePathUpdate.items = items.concat(prevSamePathUpdate.items);
        }
        return;
      }
    }
    const update: SpliceUpdate = {
      path,
      start,
      deleteCount,
      items,
    };
    if (this.updateQueue.length === 0) {
      Promise.resolve().then(() => this.applyUpdate());
    }
    this.updateQueue.push(update);
  }

  applyUpdate() {
    const startTime = new Date().getTime();

    const msg = this.context.$spliceData
      ? this.updateQueue.reduce((acc: any, update) => {
          acc[stringPath(update.path)] = [
            update.start,
            update.deleteCount,
            ...update.items,
          ];
          return acc;
        }, {})
      : {
          action: {
            type: 'splice',
            payload: this.updateQueue.map(update => ({
              path: stringPath(update.path),
              start: update.start,
              deleteCount: update.deleteCount,
              item: update.items[0],
            })),
          },
        };
    const method = this.context.$spliceData ? '$spliceData' : 'setData';

    this.context[method](msg, () => {
      if (process.env.REMAX_DEBUG) {
        console.log(
          `setData => 回调时间：${new Date().getTime() - startTime}ms`
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
