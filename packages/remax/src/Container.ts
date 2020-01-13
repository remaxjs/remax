import VNode, { Path, RawNode } from './VNode';
import { generate } from './instanceId';
import { generate as generateActionId } from './actionId';
import { FiberRoot } from 'react-reconciler';
import propsAlias from './propsAlias';
import nativeEffector from './nativeEffect';
import Platform from './Platform';

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

  normalizeRawNode = (item: RawNode): RawNode => {
    return {
      ...item,
      props: propsAlias(item.props, item.type),
      children: item.children
        ? item.children.map(this.normalizeRawNode)
        : item.children,
    };
  };

  dispatchAction = (inputAction: { type: string; payload?: any }) => {
    const startTime = new Date().getTime();

    const action =
      inputAction.type === 'replace' ? inputAction.payload : inputAction;

    this.context.setData(
      {
        action,
      },
      /* istanbul ignore next */
      () => {
        nativeEffector.run();
        if (process.env.REMAX_DEBUG) {
          console.log(
            `setData => 回调时间：${new Date().getTime() - startTime}ms`,
            action
          );
        }
      }
    );
  };

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
      items: items.map(this.normalizeRawNode),
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

    let action: { type: string; payload: any; id?: number } = {
      type: 'splice',
      payload: this.updateQueue.map(update => ({
        path: stringPath(update.path),
        start: update.start,
        deleteCount: update.deleteCount,
        item: update.items[0],
      })),
      id: generateActionId(),
    };

    if (Platform.isAlipay && !this.rendered) {
      action.type = 'init';
      this.rendered = true;
    }

    if (Platform.isToutiao) {
      action = {
        type: 'replace',
        payload: {
          root: this.normalizeRawNode(this.root.toJSON()),
        },
      };
    }

    this.dispatchAction(action);

    this.updateQueue = [];
  }

  clearUpdate() {
    this.stopUpdate = true;

    if (Platform.isWechat) {
      this.dispatchAction({
        type: 'clear',
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
