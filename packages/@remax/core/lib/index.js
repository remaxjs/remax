import ReactReconciler from 'react-reconciler';
const REMAX_ROOT = '$$REMAX_ROOT';
const REMAX_ROOT_BACKUP = '$$REMAX_ROOT_BACKUP';
const REMAX_METHOD = '$$REMAX_METHOD';
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

  const pureObject = clone(rootContext[REMAX_ROOT_BACKUP]);
  rootContext.setData({
    [REMAX_ROOT]: pureObject
  });
}

function processProps(newProps, rootContext, id) {
  const props = {};

  for (const propKey of Object.keys(newProps)) {
    if (typeof newProps[propKey] === 'function') {
      const contextKey = `${REMAX_METHOD}_${id}_${propKey}`;
      rootContext[contextKey] = newProps[propKey];
      props[propKey] = contextKey;
    } else if (propKey === 'children') {// pass
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
    return false; // console.log(props);
    // return typeof props.children === 'string' || typeof props.children === 'number';
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
      id
    };
    return ins;
  },
  createTextInstance: text => {
    return {
      type: TYPE_TEXT,
      text
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
        type: 'mini-view',
        children: [],
        rootContext: _parent
      };
    }

    parent.children.push(child);
    child.rootContext[REMAX_ROOT_BACKUP] = child.rootContext[REMAX_ROOT_BACKUP] || [];
    child.rootContext[REMAX_ROOT_BACKUP].push(parent);
    setData(child.rootContext);
  },

  removeChild(parentInstance, child) {
    console.log('remove');
    parentInstance.children.splice(parentInstance.indexOf(child), 1);
  }

};
const ReactReconcilerInst = ReactReconciler(hostConfig);
export default {
  api: {
    showToast(conf) {
      wx.showToast(conf);
    }

  },
  render: (reactElement, callback) => {
    Page({
      data: {
        $$REMAX_ROOT: []
      },

      onReady() {
        const miniAppContext = this; // Create a root Container if it doesnt exist

        if (!miniAppContext._rootContainer) {
          miniAppContext._rootContainer = ReactReconcilerInst.createContainer(miniAppContext, false);
        }

        return ReactReconcilerInst.updateContainer(reactElement, miniAppContext._rootContainer, null, callback);
      }

    });
  }
};