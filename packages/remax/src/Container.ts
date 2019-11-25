import VNode, { Path, RawNode } from './VNode';
import { generate } from './instanceId';
import { generate as generateActionId } from './actionId';
import { FiberRoot } from 'react-reconciler';
import Platform from './Platform';
import propsAlias from './propsAlias';
import { isHostComponent } from './createHostComponent';

function stringPath(path: Path) {
  return path.join('.');
}

function normalizeRawNode(item: RawNode): RawNode {
  return {
    ...item,
    props: propsAlias(item.props, !isHostComponent(item.type)),
    children: item.children
      ? item.children.map(normalizeRawNode)
      : item.children,
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

    const startTime = new Date().getTime();

    const action = {
      type: 'splice',
      payload: this.updateQueue.map(update => ({
        path: stringPath(update.path),
        start: update.start,
        deleteCount: update.deleteCount,
        item: update.items[0],
      })),
      id: generateActionId(),
    };

    let tree: typeof action | { root: RawNode } = action;

    if (Platform.isToutiao) {
      tree = {
        root: normalizeRawNode(this.root.toJSON()),
      };
    }

    this.context.setData({ action: tree }, () => {
      /* istanbul ignore next */
      if (process.env.REMAX_DEBUG) {
        console.log(
          `setData => 回调时间：${new Date().getTime() - startTime}ms`,
          action
        );
      }
    });
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
