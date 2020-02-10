import VNode, { RawNode } from './VNode';
import { generate } from './instanceId';
import { generate as generateActionId } from './actionId';
import { FiberRoot } from 'react-reconciler';
import nativeEffector from './nativeEffect';
import Platform from './Platform';

interface SpliceUpdate {
  path: string;
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
    path: string,
    start: number,
    deleteCount: number,
    immediately: boolean,
    ...items: RawNode[]
  ) {
    const update: SpliceUpdate = {
      path,
      start,
      deleteCount,
      items,
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

    const startTime = new Date().getTime();

    if (typeof this.context.$spliceData === 'function') {
      let $batchedUpdates = (callback: Function) => {
        callback();
      };

      if (typeof this.context.$batchedUpdates === 'function') {
        $batchedUpdates = this.context.$batchedUpdates;
      }

      $batchedUpdates(() => {
        this.updateQueue.map((update, index) => {
          let callback = undefined;
          if (index + 1 === this.updateQueue.length) {
            callback = () => {
              nativeEffector.run();
              /* istanbul ignore next */
              if (__REMAX_DEBUG__) {
                console.log(
                  `setData => 回调时间：${new Date().getTime() - startTime}ms`
                );
              }
            };
          }

          this.context.$spliceData(
            {
              [update.path]: [
                update.start,
                update.deleteCount,
                ...update.items,
              ],
            },
            callback
          );
        });
      });

      this.updateQueue = [];

      return;
    }

    // TODO 统一更新行为
    let action: any = {
      type: 'splice',
      payload: this.updateQueue.map(update => ({
        path: update.path,
        start: update.start,
        deleteCount: update.deleteCount,
        item: update.items[0],
      })),
      id: generateActionId(),
    };

    if (Platform.isToutiao) {
      action = {
        root: this.root.toJSON(),
      };
    }

    this.context.setData(
      {
        action,
      },
      () => {
        nativeEffector.run();
        /* istanbul ignore next */
        if (__REMAX_DEBUG__) {
          console.log(
            `setData => 回调时间：${new Date().getTime() - startTime}ms`,
            action
          );
        }
      }
    );

    this.updateQueue = [];
  }

  clearUpdate() {
    this.stopUpdate = true;

    if (Platform.isWechat) {
      this.context.setData({
        action: { type: 'clear' },
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
