import ReactReconciler from 'react-reconciler';
import React from 'react';
import {
  useState,
} from 'react';

const REACT_MINI_APP_ROOT = '$$REACT_MINI_APP_ROOT';
const REACT_MINI_APP_ROOT_BACKUP = '$$REACT_MINI_APP_ROOT_BACKUP';
const REACT_MINI_APP_METHOD = '$$REACT_MINI_APP_METHOD';
const TYPE_TEXT = Symbol('text');

let instanceCount = 0;

function setData(rootContext) {
  function clone(item) {
    let result = {};
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

  const pureObject = clone(rootContext[REACT_MINI_APP_ROOT_BACKUP]);

  rootContext.setData({
    [REACT_MINI_APP_ROOT]: [pureObject],
  });
}

function processProps(newProps, rootContext, id) {
  const props = {};
  for (const propKey of Object.keys(newProps)) {
    if (typeof newProps[propKey] === 'function') {
      const contextKey = `${REACT_MINI_APP_METHOD}_${id}_${propKey}`;
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

const hostConfig = {
  now: Date.now,

  getRootHostContext: () => {
    return rootHostContext;
  },
  shouldSetTextContent: (type, props) => {
    return typeof props.children === 'string' || typeof props.children === 'number';
  },
  prepareForCommit: () => {},
  resetAfterCommit: () => {},
  getChildHostContext: () => {
    return childHostContext;
  },
  prepareUpdate(domElement, oldProps, newProps) {
    return true;
  },
  commitTextUpdate(textInstance, oldText, newText) {
    textInstance.text = newText;
    setData(textInstance.rootContext);
  },

  createInstance: (type, newProps, rootContainerInstance, _currentHostContext, workInProgress) => {
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
  createTextInstance: (text) => {
    return {
      type: TYPE_TEXT,
      text,
    };
  },
  commitUpdate(targetIns, updatePayload, type, oldProps, newProps) {
    const props = processProps(newProps, targetIns.rootContext, targetIns.id);

    targetIns.props = props;

    setData(targetIns.rootContext);
  },
  appendInitialChild: (parent, child) => {
    child.rootContext = parent.rootContext;
    parent.children.push(child);
  },
  appendChild(parent, child) {
    child.rootContext = parent.rootContext;
    parent.children.push(child);
  },
  finalizeInitialChildren: () => {},
  supportsMutation: true,
  appendChildToContainer: (_parent, child) => {
    let parent = null;
    if (_parent._rootContainer) {
      // append to root
      parent = {
        type: 'view',
        children: [],
        rootContext: _parent,
      };
    }


    parent.children.push(child);

    child.rootContext[REACT_MINI_APP_ROOT_BACKUP] = parent;
    setData(child.rootContext);
  },

  removeChild(parentInstance, child) {
    parentInstance.children.splice(parentInstance.indexOf(child), 1);
  },
};

const ReactReconcilerInst = ReactReconciler(hostConfig);
export default {
  ...React,
  React,
  render: (reactElement, miniAppContext, callback) => {
    // Create a root Container if it doesnt exist
    if (!miniAppContext._rootContainer) {
      miniAppContext._rootContainer = ReactReconcilerInst.createContainer(miniAppContext, false);
    }

    // update the root Container
    return ReactReconcilerInst.updateContainer(reactElement, miniAppContext._rootContainer, null, callback);
  },
};
