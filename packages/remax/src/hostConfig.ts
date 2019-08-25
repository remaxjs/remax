import * as scheduler from 'scheduler';
import shallowequal from 'shallowequal';
import { REMAX_METHOD, TYPE_TEXT } from './constants';
import { generate } from './instanceId';
import VNode from './VNode';
import Container from './Container';

/**
 * rootContext Page 实例
 */

const {
  unstable_scheduleCallback: scheduleDeferredCallback,
  unstable_cancelCallback: cancelDeferredCallback,
  unstable_shouldYield: shouldYield,
  unstable_now: now,
} = scheduler;

function processProps(newProps: any, rootContext: Container, id: number) {
  const props: any = {};
  for (const propKey of Object.keys(newProps)) {
    if (typeof newProps[propKey] === 'function') {
      const contextKey = `${REMAX_METHOD}_${id}_${propKey}`;
      rootContext.createCallback(contextKey, newProps[propKey]);
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

  shouldSetTextContent() {
    return false;
  },

  prepareForCommit: () => {},

  resetAfterCommit: () => {},

  getChildHostContext: () => {
    return childHostContext;
  },

  createInstance(type: string, newProps: any, container: Container) {
    const id = generate();
    const props = processProps(newProps, container, id);
    return new VNode({
      id,
      type,
      props,
      container,
    });
  },

  createTextInstance(text: string, container: Container) {
    const id = generate();
    const node = new VNode({
      id,
      type: TYPE_TEXT,
      props: null,
      container,
    });
    node.text = text;
    return node;
  },

  commitTextUpdate(node: VNode, oldText: string, newText: string) {
    if (oldText !== newText) {
      node.text = newText;
      node.update();
    }
  },

  prepareUpdate(node: VNode, type: string, oldProps: any, newProps: any) {
    oldProps = processProps(oldProps, node.container, node.id);
    newProps = processProps(newProps, node.container, node.id);
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
    node.props = processProps(newProps, node.container, node.id);
    node.update();
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
