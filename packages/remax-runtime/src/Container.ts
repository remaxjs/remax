import VNode, { RawNode } from './VNode';
import { generate } from './instanceId';
import { FiberRoot } from 'react-reconciler';
import nativeEffector from './nativeEffect';

interface SpliceUpdate {
  path: string;
  start: number;
  deleteCount: number;
  items: RawNode[];
  type: 'splice';
}

interface PayloadUpdate {
  path: string;
  name: string;
  value: any;
  type: 'payload';
}

export default class Container {
  context: any;
  root: VNode;
  updateQueue: Array<SpliceUpdate | PayloadUpdate> = [];
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

  requestUpdate(update: SpliceUpdate | PayloadUpdate, immediately?: boolean) {
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
                console.log(`setData => 回调时间：${new Date().getTime() - startTime}ms`);
              }
            };
          }

          if (update.type === 'splice') {
            this.context.$spliceData(
              {
                [update.path]: [update.start, update.deleteCount, ...update.items],
              },
              callback
            );
          }

          if (update.type === 'payload') {
            this.context.setData(
              {
                [update.path + '.' + update.name]: update.value,
              },
              callback
            );
          }
        });
      });

      this.updateQueue = [];

      return;
    }

    const updatePayload = this.updateQueue.reduce<{ [key: string]: any }>((acc, update) => {
      if (update.type === 'splice') {
        return {
          ...acc,
          [update.path + '.' + update.start]: update.items[0],
        };
      }

      if (update.type === 'payload') {
        return {
          ...acc,
          [update.path + '.' + update.name]: update.value,
        };
      }

      return acc;
    }, {});

    this.context.setData(updatePayload, () => {
      nativeEffector.run();
      /* istanbul ignore next */
      if (__REMAX_DEBUG__) {
        console.log(`setData => 回调时间：${new Date().getTime() - startTime}ms`);
      }
    });

    this.updateQueue = [];
  }

  clearUpdate() {
    this.stopUpdate = true;

    if (process.env.REMAX_PLATFORM === 'wechat') {
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
