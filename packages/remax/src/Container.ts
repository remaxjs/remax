import VNode, { Path, RawNode } from './VNode';
import API from './API';
import { generate } from './instanceId';
import { generate as generateActionId } from './actionId';
import { FiberRoot } from 'react-reconciler';
import propsAlias from './propsAlias';

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

    const updateAction = API.onUpdateAction({
      container: this,
      action,
    });

    this.dispatchAction(updateAction);

    this.updateQueue = [];
  }

  clearUpdate() {
    this.stopUpdate = true;

    API.onUnload({ container: this });
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
