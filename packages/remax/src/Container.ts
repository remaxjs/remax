import Platform from './Platform';
import VNode, { Path, RawNode } from './VNode';

function stringPath(path: Path) {
  if (Platform.isAlipay) {
    return path.reduce((acc, i) => {
      if (typeof i === 'number') {
        acc += `[${i}]`;
      } else {
        acc += `.${i}`;
      }
      return acc;
    }, '');
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
  root: VNode[] = [];
  setQueue: SetUpdate[] = [];
  spliceQueue: SpliceUpdate[] = [];

  constructor(context: any) {
    this.context = context;
  }

  requestUpdate(path: Path, data: any) {
    if (this.setQueue.length === 0) {
      Promise.resolve().then(() => this.applyUpdate(path, data));
    }
    this.setQueue.push({
      path,
      data,
    });
  }

  applyUpdate(path: Path, data: any) {
    const startTime = new Date().getTime();
    const msg = this.context.$spliceData
      ? this.setQueue.reduce((acc: any, update) => {
          acc[`root${stringPath(update.path)}`] = update.data;
          return acc;
        }, {})
      : {
          action: {
            type: 'set',
            payload: this.setQueue.map(update => ({
              path: stringPath(update.path),
              value: update.data,
            })),
          },
        };
    this.context.setData(msg, () => {
      if (process.env.NODE_ENV !== 'production') {
        console.log(
          `updateData => 回调时间：${new Date().getTime() - startTime}ms`
        );
      }
    });
    this.setQueue = [];
  }

  requestSpliceUpdate(
    path: Path,
    start: number,
    deleteCount: number,
    ...items: RawNode[]
  ) {
    if (this.spliceQueue.length === 0) {
      Promise.resolve().then(() => this.applySpliceUpdate());
    }
    this.spliceQueue.push({
      path,
      start,
      deleteCount,
      items,
    });
  }

  applySpliceUpdate() {
    const startTime = new Date().getTime();
    const msg = this.context.$spliceData
      ? this.spliceQueue.reduce(
          (acc, update) => ({
            ...acc,
            [`root${stringPath(update.path)}`]: [
              update.start,
              update.deleteCount,
              ...update.items,
            ],
          }),
          {}
        )
      : {
          action: {
            type: 'splice',
            payload: this.spliceQueue.map(update => ({
              path: stringPath(update.path),
              start: update.start,
              deleteCount: update.start,
              item: update.items[0],
            })),
          },
        };
    const method = this.context.$spliceData ? '$spliceData' : 'setData';
    this.context[method](msg, () => {
      if (process.env.NODE_ENV !== 'production') {
        console.log(
          `spliceData => 回调时间：${new Date().getTime() - startTime}ms`
        );
      }
    });
    this.spliceQueue = [];
  }

  createCallback(name: string, fn: Function) {
    this.context[name] = fn;
  }

  appendChild(child: VNode) {
    this.root.push(child);
    this.requestUpdate(child.path(), child.toJSON());
  }

  removeChild(child: VNode) {
    const start = this.root.indexOf(child);
    if (start >= 0 && !this.context.unloaded) {
      this.root.splice(start, 1);
      this.requestSpliceUpdate(child.path(), start, 1);
    }
  }

  insertBefore(child: VNode, beforeChild: VNode) {
    const start = this.root.indexOf(beforeChild);
    this.root.splice(start, 0, child);
    this.requestSpliceUpdate(child.path(), start, 0, child);
  }
}
