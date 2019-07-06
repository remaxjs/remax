import * as scheduler from '@remax/scheduler';

const {
  unstable_scheduleCallback: scheduleDeferredCallback,
  unstable_cancelCallback: cancelDeferredCallback,
  unstable_shouldYield: shouldYield,
  unstable_now: now,
} = scheduler;

const REMAX_ROOT = '$$REMAX_ROOT';
const REMAX_ROOT_BACKUP = '$$REMAX_ROOT_BACKUP';
const REMAX_METHOD = '$$REMAX_METHOD';
const TYPE_TEXT = Symbol('text');

let instanceCount = 0;

// 缓冲一下要 set 的 Data
// 如果有值说明还没 set，直接改变他的值
// 真正 setData 后把 lastData 置空
let lastData: any = null;

function setData(rootContext: any) {
  function clone(item: any) {
    let result: any = {};
    if (Array.isArray(item)) {
      result = item.map(item => clone(item));
    } else if (typeof item === 'object') {
      for (const key of Object.keys(item)) {
        if (key !== 'rootContext') {
          result[key] = clone(item[key]);
        }
      }
    } else {
      result = item;
    }

    return result;
  }

  const pureObject = clone(rootContext[REMAX_ROOT_BACKUP]);

  if (lastData) {
    // 更新了 lastData 等待 setData 发生即可
    lastData = pureObject;
  } else {
    lastData = pureObject;
    const startTime = new Date().getTime();
    rootContext.setData(
      {
        [REMAX_ROOT]: lastData,
      },
      () => {
        if (process.env.NODE_ENV !== 'production') {
          console.log(`setData => 回调时间：${new Date().getTime() - startTime}ms`);
        }
      },
    );

    lastData = null;
  }
}

function processProps(newProps: any, rootContext: any, id: number) {
  const props: any = {};
  for (const propKey of Object.keys(newProps)) {
    if (typeof newProps[propKey] === 'function') {
      const contextKey = `${REMAX_METHOD}_${id}_${propKey}`;
      rootContext[contextKey] = newProps[propKey];
      props[propKey] = contextKey;
    } else if (propKey === 'children') {
      // pass
    } else {
      props[propKey] = newProps[propKey];
    }
  }
  return props;
}

const rootHostContext = {};
const childHostContext = {};

export default {
  now,

  getRootHostContext: () => {
    return rootHostContext;
  },

  shouldSetTextContent(type: any, props: any) {
    return false;
  },

  prepareForCommit: () => {},

  resetAfterCommit: () => {},

  getChildHostContext: () => {
    return childHostContext;
  },

  prepareUpdate() {
    return true;
  },

  commitTextUpdate(textInstance: any, oldText: string, newText: string) {
    textInstance.text = newText;
    setData(textInstance.rootContext);
  },

  createInstance: (type: string, newProps: any, rootContainerInstance: any, _currentHostContext: any) => {
    const rootContext = rootContainerInstance;
    const id = instanceCount;
    instanceCount += 1;

    const props = processProps(newProps, rootContext, id);

    const ins = {
      type: type === 'div' ? 'view' : type,
      props,
      children: [],
      rootContext,
      id,
    };

    return ins;
  },

  createTextInstance(text: string) {
    return {
      type: TYPE_TEXT,
      text,
    };
  },

  commitUpdate(targetIns: any, updatePayload: any, type: string, oldProps: any, newProps: any) {
    const props = processProps(newProps, targetIns.rootContext, targetIns.id);

    targetIns.props = props;

    setData(targetIns.rootContext);
  },

  appendInitialChild: (parent: any, child: any) => {
    child.rootContext = parent.rootContext;
    parent.children.push(child);
  },

  appendChild(parent: any, child: any) {
    child.rootContext = parent.rootContext;
    parent.children.push(child);
  },

  insertBefore(parent: any, child: any) {
    child.rootContext = parent.rootContext;
    parent.children.unshift(child);
  },

  finalizeInitialChildren: () => {
    return false;
  },

  supportsMutation: true,

  appendChildToContainer: (_parent: any, child: any) => {
    let parent: any = null;
    if (_parent._rootContainer) {
      // append to root
      parent = {
        type: 'root',
        children: [],
        rootContext: _parent,
      };
    }

    parent.children.push(child);

    child.rootContext[REMAX_ROOT_BACKUP] = child.rootContext[REMAX_ROOT_BACKUP] || [];
    child.rootContext[REMAX_ROOT_BACKUP].push(parent);
    setData(child.rootContext);
  },

  removeChild(parentInstance: any, child: any) {
    parentInstance.children.splice(parentInstance.indexOf(child), 1);
  },

  schedulePassiveEffects: scheduleDeferredCallback,
  cancelPassiveEffects: cancelDeferredCallback,
  shouldYield,
  scheduleDeferredCallback,
  cancelDeferredCallback,
};
