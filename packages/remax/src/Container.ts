import Platform from './Platform';
import VNode, { Path } from './VNode';

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

interface Update {
  path: Path;
  data: any;
}

export default class Container {
  context: any;
  root: VNode[] = [];
  inQueue: boolean = false;
  queue: Update[] = [];

  constructor(context: any) {
    this.context = context;
  }

  requestUpdate(path: Path, data: any) {
    this.queue.push({
      path,
      data,
    });
    if (this.inQueue) {
      return;
    }
    this.inQueue = true;
    Promise.resolve().then(() => this.applyUpdate(path, data));
  }

  applyUpdate(path: Path, data: any) {
    this.inQueue = false;
    const startTime = new Date().getTime();
    const msg = this.context.$spliceData
      ? this.queue.reduce((acc: any, update) => {
          acc[`root${stringPath(update.path)}`] = update.data;
          return acc;
        }, {})
      : {
          action: {
            type: 'set',
            payload: this.queue.map(update => ({
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
    this.queue = [];
  }

  spliceData(
    path: Path,
    start: number,
    deleteCount: number,
    ...items: VNode[]
  ) {
    const startTime = new Date().getTime();
    const msg = this.context.$spliceData
      ? {
          [`root${stringPath(path)}`]: [start, deleteCount, ...items],
        }
      : {
          action: {
            type: 'splice',
            payload: {
              path: stringPath(path),
              start,
              deleteCount,
              item: items[0],
            },
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
      this.spliceData(child.path(), start, 1);
    }
  }

  insertBefore(child: VNode, beforeChild: VNode) {
    const start = this.root.indexOf(beforeChild);
    this.root.splice(start, 0, child);
    this.spliceData(child.path(), start, 0, child);
  }
}
