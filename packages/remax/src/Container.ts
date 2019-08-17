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

export default class Container {
  context: any;
  root: VNode[] = [];

  constructor(context: any) {
    this.context = context;
  }

  updateData(path: Path, data: any) {
    const startTime = new Date().getTime();
    const msg = this.context.$spliceData
      ? {
          [`root${stringPath(path)}`]: data,
        }
      : {
          action: {
            type: 'set',
            payload: {
              path: stringPath(path),
              value: data,
            },
          },
        };
    this.context.setData(msg, () => {
      if (process.env.NODE_ENV !== 'production') {
        console.log(
          `updateData => 回调时间：${new Date().getTime() - startTime}ms`
        );
      }
    });
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
    this.updateData(child.path(), child.toJSON());
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
