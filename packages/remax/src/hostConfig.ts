import * as scheduler from 'scheduler';
import shallowequal from 'shallowequal';
import { REMAX_METHOD, TYPE_TEXT } from './constants';
import { generate } from './instanceId';
import VNode from './VNode';

/**
 * rootContext Page 实例
 */

const {
  unstable_scheduleCallback: scheduleDeferredCallback,
  unstable_cancelCallback: cancelDeferredCallback,
  unstable_shouldYield: shouldYield,
  unstable_now: now,
} = scheduler;

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

  getPublicInstance: <T>(inst: T): T => {
    return inst;
  },

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

  createInstance: (
    type: string,
    newProps: any,
    rootContainerInstance: any,
    _currentHostContext: any
  ) => {
    const rootContext = rootContainerInstance;
    const id = generate();
    const props = processProps(newProps, rootContext, id);
    return new VNode(id, type, props, rootContext);
  },

  createTextInstance(text: string, rootContainerInstance: any) {
    const rootContext = rootContainerInstance;
    const id = generate();
    const node = new VNode(id, TYPE_TEXT, null, rootContext);
    node.text = text;
    return node;
  },

  commitTextUpdate(node: VNode, oldText: string, newText: string) {
    node.text = newText;
    if (oldText !== newText) {
      node.page.updateData(node.path(), node.toJSON());
    }
  },

  prepareUpdate(node: VNode, type: string, oldProps: any, newProps: any) {
    oldProps = processProps(oldProps, node.page, node.id);
    newProps = processProps(newProps, node.page, node.id);
    if (!shallowequal(newProps, oldProps)) {
      return true;
    }
    return null;
  },

  commitUpdate(
    node: VNode,
    updatePayload: any,
    type: string,
    oldProps: any,
    newProps: any
  ) {
    node.props = processProps(newProps, node.page, node.id);
    node.page.updateData(node.path(), node.toJSON());
  },

  appendInitialChild: (parent: VNode, child: VNode) => {
    parent.appendChild(child);
  },

  appendChild(parent: VNode, child: VNode) {
    parent.appendChild(child);
  },

  insertBefore(parent: VNode, child: VNode, beforeChild: VNode) {
    parent.insertBefore(child, beforeChild);
  },

  removeChild(parent: VNode, child: VNode) {
    parent.removeChild(child);
  },

  finalizeInitialChildren: () => {
    return false;
  },

  appendChildToContainer(container: any, child: VNode) {
    container.appendChild(child);
    child.mounted = true;
  },

  insertInContainerBefore(container: any, child: VNode, beforeChild: VNode) {
    container.insertBefore(child, beforeChild);
  },

  removeChildFromContainer(container: any, child: VNode) {
    container.removeChild(child);
  },

  schedulePassiveEffects: scheduleDeferredCallback,
  cancelPassiveEffects: cancelDeferredCallback,
  shouldYield,
  scheduleDeferredCallback,
  cancelDeferredCallback,

  supportsMutation: true,
};
