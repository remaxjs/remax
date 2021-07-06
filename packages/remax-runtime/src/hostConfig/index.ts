import * as scheduler from 'scheduler';
import { REMAX_METHOD, TYPE_TEXT } from '../constants';
import { generate } from '../instanceId';
import VNode from '../VNode';
import Container from '../Container';
import { createCallbackProxy } from '../SyntheticEvent/createCallbackProxy';
import diffProperties from './diffProperties';

const {
  unstable_scheduleCallback: scheduleDeferredCallback,
  unstable_cancelCallback: cancelDeferredCallback,
  unstable_shouldYield: shouldYield,
  unstable_now: now,
} = scheduler;

const DOM_TAG_MAP: { [name: string]: string } = {
  span: 'text',
  div: 'view',
  img: 'image',
};

function processProps(newProps: any, node: VNode, id: number) {
  const props: any = {};
  for (const propKey of Object.keys(newProps)) {
    if (typeof newProps[propKey] === 'function') {
      const contextKey = `${REMAX_METHOD}_${id}_${propKey}`;
      node.container.createCallback(contextKey, createCallbackProxy(propKey, node, newProps[propKey]));
      props[propKey] = contextKey;
    } else if (propKey === 'style') {
      props[propKey] = newProps[propKey] || '';
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

  shouldSetTextContent(type: string) {
    return type === 'stub-block';
  },

  prepareForCommit: () => {
    return null;
  },

  preparePortalMount: () => {
    // nothing to do
  },

  clearContainer: () => {
    // nothing to do
  },

  resetAfterCommit: (container: Container) => {
    container.applyUpdate();
  },

  getChildHostContext: () => {
    return childHostContext;
  },

  createInstance(type: string, newProps: any, container: Container) {
    const id = generate();
    const node = new VNode({
      id,
      type: DOM_TAG_MAP[type] ?? type,
      props: {},
      container,
    });
    node.props = processProps(newProps, node, id);

    return node;
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

  prepareUpdate(node: VNode, type: string, lastProps: any, nextProps: any) {
    lastProps = processProps(lastProps, node, node.id);
    nextProps = processProps(nextProps, node, node.id);

    return diffProperties(lastProps, nextProps);
  },

  commitUpdate(node: VNode, updatePayload: any, type: string, oldProps: any, newProps: any) {
    node.props = processProps(newProps, node, node.id);
    node.update(updatePayload);
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

  hideInstance(instance: VNode) {
    const originStyle = instance.props?.style;
    const newStyle = Object.assign({}, originStyle || {}, { display: 'none' }); // 微信和阿里的小程序都不支持在内联样式中加`important!`
    instance.props = Object.assign({}, instance.props || {}, { style: newStyle });
    instance.update();
  },

  hideTextInstance(instance: VNode) {
    instance.text = '';
    instance.update();
  },

  unhideInstance(instance: VNode, props: any) {
    instance.props = props;
    instance.update();
  },

  unhideTextInstance(instance: VNode, text: string) {
    instance.text = text;
    instance.update();
  },

  schedulePassiveEffects: scheduleDeferredCallback,
  cancelPassiveEffects: cancelDeferredCallback,
  shouldYield,
  scheduleDeferredCallback,
  cancelDeferredCallback,

  supportsMutation: true,
};
