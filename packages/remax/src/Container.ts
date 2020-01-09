import VNode, { Path, RawNode } from './VNode';
import { generate } from './instanceId';
import { FiberRoot } from 'react-reconciler';
import Platform from './Platform';
import propsAlias from './propsAlias';
import { isHostComponent } from './createHostComponent';

declare const my: any;

function normalizeRawNode(item: RawNode): any {
  return {
    ...item,
    props: propsAlias(item.props, !isHostComponent(item.type)),
    c: item.children ? item.children.map(normalizeRawNode) : item.children,
  };
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
  _rootContainer?: FiberRoot;
  stopUpdate?: boolean;
  rendered = false;

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
    immediately: boolean,
    ...items: RawNode[]
  ) {
    const update: SpliceUpdate = {
      path,
      start,
      deleteCount,
      items: items.map(normalizeRawNode),
    };
    if (immediately) {
      this.updateQueue.push(update);
      this.applyUpdate();
    } else {
      if (this.updateQueue.length === 0) {
        Promise.resolve().then(() => this.applyUpdate());
      }
      this.updateQueue.push(update);
    }
  }

  applyUpdate() {
    if (this.stopUpdate) {
      return;
    }

    this.context.$batchedUpdates(() => {
      const length = this.updateQueue.length;
      this.updateQueue.forEach((update, index) => {
        this.context.$spliceData(
          {
            [update.path.join('.')]: [
              update.start,
              update.deleteCount,
              ...update.items,
            ],
          },
          () => {
            if (index + 1 === length) {
              my.showToast({
                content: new Date().getTime() - getApp().testTime,
              });
            }
          }
        );
      });
    });

    // let tree: typeof action | { root: RawNode } = action;

    // if (Platform.isToutiao) {
    //   tree = {
    //     root: normalizeRawNode(this.root.toJSON()),
    //   };
    // }

    // this.context.setData({ action: tree }, () => {
    //   nativeEffector.run();
    //   /* istanbul ignore next */
    //   if (process.env.REMAX_DEBUG) {
    //     console.log(
    //       `setData => 回调时间：${new Date().getTime() - startTime}ms`,
    //       action
    //     );
    //   }
    // });
    this.rendered = true;
    this.updateQueue = [];
  }

  clearUpdate() {
    this.stopUpdate = true;

    if (Platform.isWechat) {
      this.context.setData({
        action: {
          type: 'clear',
        },
      });
    }
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
