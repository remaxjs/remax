import * as scheduler from 'scheduler';
import { REMAX_ROOT_BACKUP, REMAX_METHOD, TYPE_TEXT } from './constants';

/**
 * rootContext Page 实例
 */

const {
  unstable_scheduleCallback: scheduleDeferredCallback,
  unstable_cancelCallback: cancelDeferredCallback,
  unstable_shouldYield: shouldYield,
  unstable_now: now,
} = scheduler;

let instanceCount = 0;

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
    textInstance.rootContext.requestUpdate();
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
    targetIns.rootContext.requestUpdate();
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
    child.rootContext.requestUpdate();
  },

  removeChild(parentInstance: any, child: any) {
    parentInstance.children.splice(parentInstance.indexOf(child), 1);
  },

  removeChildFromContainer() {},

  schedulePassiveEffects: scheduleDeferredCallback,
  cancelPassiveEffects: cancelDeferredCallback,
  shouldYield,
  scheduleDeferredCallback,
  cancelDeferredCallback,
};
