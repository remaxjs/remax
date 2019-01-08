"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactReconciler = _interopRequireDefault(require("react-reconciler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REMAX_ROOT = '$$REMAX_ROOT';
var REMAX_ROOT_BACKUP = '$$REMAX_ROOT_BACKUP';
var REMAX_METHOD = '$$REMAX_METHOD';
var TYPE_TEXT = Symbol('text');
var instanceCount = 0;

function setData(rootContext) {
  function clone(item) {
    var result = {};

    if (Array.isArray(item)) {
      result = item.map(function (item) {
        return clone(item);
      });
    } else if (_typeof(item) === 'object') {
      var _arr = Object.keys(item);

      for (var _i = 0; _i < _arr.length; _i++) {
        var key = _arr[_i];

        if (key !== 'rootContext') {
          result[key] = clone(item[key]);
        }
      }
    } else {
      result = item;
    }

    return result;
  }

  var pureObject = clone(rootContext[REMAX_ROOT_BACKUP]);
  rootContext.setData(_defineProperty({}, REMAX_ROOT, pureObject));
}

function processProps(newProps, rootContext, id) {
  var props = {};

  var _arr2 = Object.keys(newProps);

  for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
    var propKey = _arr2[_i2];

    if (typeof newProps[propKey] === 'function') {
      var contextKey = "".concat(REMAX_METHOD, "_").concat(id, "_").concat(propKey);
      rootContext[contextKey] = newProps[propKey];
      props[propKey] = contextKey;
    } else if (propKey === 'children') {// pass
    } else {
      props[propKey] = newProps[propKey];
    }
  }

  return props;
}

var rootHostContext = {};
var childHostContext = {};
var hostConfig = {
  now: Date.now,
  getRootHostContext: function getRootHostContext() {
    return rootHostContext;
  },
  shouldSetTextContent: function shouldSetTextContent(type, props) {
    return false; // console.log(props);
    // return typeof props.children === 'string' || typeof props.children === 'number';
  },
  prepareForCommit: function prepareForCommit() {},
  resetAfterCommit: function resetAfterCommit() {},
  getChildHostContext: function getChildHostContext() {
    return childHostContext;
  },
  prepareUpdate: function prepareUpdate(domElement, oldProps, newProps) {
    return true;
  },
  commitTextUpdate: function commitTextUpdate(textInstance, oldText, newText) {
    textInstance.text = newText;
    setData(textInstance.rootContext);
  },
  createInstance: function createInstance(type, newProps, rootContainerInstance, _currentHostContext, workInProgress) {
    var rootContext = rootContainerInstance;
    var id = instanceCount;
    instanceCount += 1;
    var props = processProps(newProps, rootContext, id);
    var ins = {
      type: type === 'div' ? 'view' : type,
      props: props,
      children: [],
      rootContext: rootContext,
      id: id
    };
    return ins;
  },
  createTextInstance: function createTextInstance(text) {
    return {
      type: TYPE_TEXT,
      text: text
    };
  },
  commitUpdate: function commitUpdate(targetIns, updatePayload, type, oldProps, newProps) {
    var props = processProps(newProps, targetIns.rootContext, targetIns.id);
    targetIns.props = props;
    setData(targetIns.rootContext);
  },
  appendInitialChild: function appendInitialChild(parent, child) {
    child.rootContext = parent.rootContext;
    parent.children.push(child);
  },
  appendChild: function appendChild(parent, child) {
    child.rootContext = parent.rootContext;
    parent.children.push(child);
  },
  finalizeInitialChildren: function finalizeInitialChildren() {},
  supportsMutation: true,
  appendChildToContainer: function appendChildToContainer(_parent, child) {
    var parent = null;

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
  removeChild: function removeChild(parentInstance, child) {
    console.log('remove');
    parentInstance.children.splice(parentInstance.indexOf(child), 1);
  }
};
var ReactReconcilerInst = (0, _reactReconciler.default)(hostConfig);
var _default = {
  api: {
    showToast: function showToast(conf) {
      wx.showToast(conf);
    }
  },
  render: function render(reactElement, callback) {
    Page({
      data: {
        $$REMAX_ROOT: []
      },
      onReady: function onReady() {
        var miniAppContext = this; // Create a root Container if it doesnt exist

        if (!miniAppContext._rootContainer) {
          miniAppContext._rootContainer = ReactReconcilerInst.createContainer(miniAppContext, false);
        }

        return ReactReconcilerInst.updateContainer(reactElement, miniAppContext._rootContainer, null, callback);
      }
    });
  }
};
exports.default = _default;