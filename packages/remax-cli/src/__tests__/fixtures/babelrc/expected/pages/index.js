require('./../runtime.js');
(my["webpackJsonp"] = my["webpackJsonp"] || []).push([[2],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_a__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var remax_alipay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _class, _descriptor, _temp;

function _initializerDefineProperty(target, property, descriptor, context) {
  if (!descriptor) {
    return;
  }

  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};

  var _a2 = Object.keys(descriptor);

  var _f2 = function _f2(key) {
    desc[key] = descriptor[key];
  };

  for (var _i2 = 0; _i2 < _a2.length; _i2++) {
    _f2(_a2[_i2], _i2, _a2);
  }

  undefined;
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.');
}



 // eslint-disable-next-line @typescript-eslint/no-namespace

var N;

(function (_N) {
  var V = _N.V = 1;
})(N || (N = {})); // eslint-disable-next-line @typescript-eslint/no-namespace


(function (_N2) {
  var W = _N2.W = V;
})(N || (N = {}));

function timesTwo(arr) {
  var _a = arr;

  var _f = function _f(n) {
    return n * 2;
  };

  var _r = [];

  for (var _i = 0; _i < _a.length; _i++) {
    _r.push(_f(_a[_i], _i, _a));
  }

  return _r;
}

function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

var C = (_class = (_temp = function C() {
  _classCallCheck(this, C);

  _initializerDefineProperty(this, "p", _descriptor, this);
}, _temp), _descriptor = _applyDecoratedDescriptor(_class.prototype, "p", [readonly], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 'p';
  }
}), _class);
var c = new C();
c.p = 'a';
var props = {};

var _page = function _page() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_alipay__WEBPACK_IMPORTED_MODULE_3__["View"], null, timesTwo([1, 2, 3]), N.V, N.W, c.p, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_a__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_alipay__WEBPACK_IMPORTED_MODULE_3__["View"], _extends({
    slot: "slot"
  }, props))));
};

/* harmony default export */ __webpack_exports__["default"] = (Page(Object(remax__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_page)));

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return unstable_batchedUpdates; });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _render__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _createAppConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAppConfig", function() { return _createAppConfig__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _createPageConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPageConfig", function() { return _createPageConfig__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHostComponent", function() { return _createHostComponent__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _createNativeComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createNativeComponent", function() { return _createNativeComponent__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return _Platform__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageInstance", function() { return _hooks__WEBPACK_IMPORTED_MODULE_6__["usePageInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_useNativeEffect", function() { return _hooks__WEBPACK_IMPORTED_MODULE_6__["unstable_useNativeEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useShow", function() { return _hooks__WEBPACK_IMPORTED_MODULE_6__["useShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReady", function() { return _hooks__WEBPACK_IMPORTED_MODULE_6__["useReady"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHide", function() { return _hooks__WEBPACK_IMPORTED_MODULE_6__["useHide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePullDownRefresh", function() { return _hooks__WEBPACK_IMPORTED_MODULE_6__["usePullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReachBottom", function() { return _hooks__WEBPACK_IMPORTED_MODULE_6__["useReachBottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageScroll", function() { return _hooks__WEBPACK_IMPORTED_MODULE_6__["usePageScroll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useShareAppMessage", function() { return _hooks__WEBPACK_IMPORTED_MODULE_6__["useShareAppMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTitleClick", function() { return _hooks__WEBPACK_IMPORTED_MODULE_6__["useTitleClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOptionMenuClick", function() { return _hooks__WEBPACK_IMPORTED_MODULE_6__["useOptionMenuClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePopMenuClick", function() { return _hooks__WEBPACK_IMPORTED_MODULE_6__["usePopMenuClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePullIntercept", function() { return _hooks__WEBPACK_IMPORTED_MODULE_6__["usePullIntercept"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return _hooks__WEBPACK_IMPORTED_MODULE_6__["useQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageEvent", function() { return _hooks__WEBPACK_IMPORTED_MODULE_6__["usePageEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppEvent", function() { return _hooks__WEBPACK_IMPORTED_MODULE_6__["useAppEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppShow", function() { return _hooks__WEBPACK_IMPORTED_MODULE_6__["useAppShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppLaunch", function() { return _hooks__WEBPACK_IMPORTED_MODULE_6__["useAppLaunch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppError", function() { return _hooks__WEBPACK_IMPORTED_MODULE_6__["useAppError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppHide", function() { return _hooks__WEBPACK_IMPORTED_MODULE_6__["useAppHide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppPageNotFound", function() { return _hooks__WEBPACK_IMPORTED_MODULE_6__["useAppPageNotFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppShareAppMessage", function() { return _hooks__WEBPACK_IMPORTED_MODULE_6__["useAppShareAppMessage"]; });








 // eslint-disable-next-line @typescript-eslint/camelcase

var unstable_batchedUpdates = _render__WEBPACK_IMPORTED_MODULE_0__["ReactReconcilerInst"].batchedUpdates;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactReconcilerInst", function() { return ReactReconcilerInst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var react_reconciler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react_reconciler__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_reconciler__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hostConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


var ReactReconcilerInst = react_reconciler__WEBPACK_IMPORTED_MODULE_0___default()(_hostConfig__WEBPACK_IMPORTED_MODULE_1__["default"]);

function getPublicRootInstance(container) {
  var containerFiber = container.current;

  if (!containerFiber.child) {
    return null;
  }

  return containerFiber.child.stateNode;
}

function render(rootElement, container) {
  // Create a root Container if it doesnt exist
  if (!container._rootContainer) {
    container._rootContainer = ReactReconcilerInst.createContainer(container, false, false);
  }

  ReactReconcilerInst.updateContainer(rootElement, container._rootContainer, null, function () {// ignore
  });
  return getPublicRootInstance(container._rootContainer);
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = react-reconciler;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var scheduler__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scheduler__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _instanceId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _VNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _SyntheticEvent_createCallbackProxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _diffProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);






var scheduleDeferredCallback = scheduler__WEBPACK_IMPORTED_MODULE_0__["unstable_scheduleCallback"],
    cancelDeferredCallback = scheduler__WEBPACK_IMPORTED_MODULE_0__["unstable_cancelCallback"],
    shouldYield = scheduler__WEBPACK_IMPORTED_MODULE_0__["unstable_shouldYield"],
    now = scheduler__WEBPACK_IMPORTED_MODULE_0__["unstable_now"];

function processProps(newProps, node, id) {
  var props = {};

  for (var _i = 0, _a = Object.keys(newProps); _i < _a.length; _i++) {
    var propKey = _a[_i];

    if (typeof newProps[propKey] === 'function') {
      var contextKey = _constants__WEBPACK_IMPORTED_MODULE_1__["REMAX_METHOD"] + "_" + id + "_" + propKey;
      node.container.createCallback(contextKey, Object(_SyntheticEvent_createCallbackProxy__WEBPACK_IMPORTED_MODULE_4__["createCallbackProxy"])(propKey, node, newProps[propKey]));
      props[propKey] = contextKey;
    } else if (propKey === 'style') {
      props[propKey] = newProps[propKey] || '';
    } else if (propKey === 'children') {// pass
    } else {
      props[propKey] = newProps[propKey];
    }
  }

  return props;
}

var rootHostContext = {};
var childHostContext = {};
/* harmony default export */ __webpack_exports__["default"] = ({
  now: now,
  getPublicInstance: function getPublicInstance(inst) {
    return inst;
  },
  getRootHostContext: function getRootHostContext() {
    return rootHostContext;
  },
  shouldSetTextContent: function shouldSetTextContent(type) {
    return type === 'stub-block';
  },
  prepareForCommit: function prepareForCommit() {// nothing to do
  },
  resetAfterCommit: function resetAfterCommit() {// nothing to do
  },
  getChildHostContext: function getChildHostContext() {
    return childHostContext;
  },
  createInstance: function createInstance(type, newProps, container) {
    var id = Object(_instanceId__WEBPACK_IMPORTED_MODULE_2__["generate"])();
    var node = new _VNode__WEBPACK_IMPORTED_MODULE_3__["default"]({
      id: id,
      type: type,
      props: {},
      container: container
    });
    node.props = processProps(newProps, node, id);
    return node;
  },
  createTextInstance: function createTextInstance(text, container) {
    var id = Object(_instanceId__WEBPACK_IMPORTED_MODULE_2__["generate"])();
    var node = new _VNode__WEBPACK_IMPORTED_MODULE_3__["default"]({
      id: id,
      type: _constants__WEBPACK_IMPORTED_MODULE_1__["TYPE_TEXT"],
      props: null,
      container: container
    });
    node.text = text;
    return node;
  },
  commitTextUpdate: function commitTextUpdate(node, oldText, newText) {
    if (oldText !== newText) {
      node.text = newText;
      node.update();
    }
  },
  prepareUpdate: function prepareUpdate(node, type, lastProps, nextProps) {
    lastProps = processProps(lastProps, node, node.id);
    nextProps = processProps(nextProps, node, node.id);

    if (Object(_diffProperties__WEBPACK_IMPORTED_MODULE_5__["default"])(lastProps, nextProps)) {
      return true;
    }

    return null;
  },
  commitUpdate: function commitUpdate(node, updatePayload, type, oldProps, newProps) {
    node.props = processProps(newProps, node, node.id);
    node.update();
  },
  appendInitialChild: function appendInitialChild(parent, child) {
    parent.appendChild(child, false);
  },
  appendChild: function appendChild(parent, child) {
    parent.appendChild(child, false);
  },
  insertBefore: function insertBefore(parent, child, beforeChild) {
    parent.insertBefore(child, beforeChild, false);
  },
  removeChild: function removeChild(parent, child) {
    parent.removeChild(child, false);
  },
  finalizeInitialChildren: function finalizeInitialChildren() {
    return false;
  },
  appendChildToContainer: function appendChildToContainer(container, child) {
    container.appendChild(child);
    child.mounted = true;
  },
  insertInContainerBefore: function insertInContainerBefore(container, child, beforeChild) {
    container.insertBefore(child, beforeChild);
  },
  removeChildFromContainer: function removeChildFromContainer(container, child) {
    container.removeChild(child);
  },
  schedulePassiveEffects: scheduleDeferredCallback,
  cancelPassiveEffects: cancelDeferredCallback,
  shouldYield: shouldYield,
  scheduleDeferredCallback: scheduleDeferredCallback,
  cancelDeferredCallback: cancelDeferredCallback,
  supportsMutation: true
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = scheduler;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMAX_ROOT_BACKUP", function() { return REMAX_ROOT_BACKUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMAX_METHOD", function() { return REMAX_METHOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_TEXT", function() { return TYPE_TEXT; });
var REMAX_ROOT_BACKUP = '$$REMAX_ROOT_BACKUP';
var REMAX_METHOD = '$$REMAX_METHOD';
var TYPE_TEXT = 'plain-text';

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return generate; });
var instanceId = 0;
function reset() {
  instanceId = 0;
}
function generate() {
  var id = instanceId;
  instanceId += 1;
  return id;
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _propsAlias__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);



function toRawNode(node) {
  if (node.type === _constants__WEBPACK_IMPORTED_MODULE_1__["TYPE_TEXT"]) {
    return {
      type: node.type,
      text: node.text
    };
  }

  return {
    id: node.id,
    type: node.type,
    props: Object(_propsAlias__WEBPACK_IMPORTED_MODULE_0__["default"])(node.props, node.type),
    children: [],
    text: node.text
  };
}

var VNode =
/** @class */
function () {
  function VNode(_a) {
    var id = _a.id,
        type = _a.type,
        props = _a.props,
        container = _a.container;
    this.mounted = false;
    this.parent = null;
    this.firstChild = null;
    this.lastChild = null;
    this.size = 0;
    this.previousSibling = null;
    this.nextSibling = null;
    this.id = id;
    this.container = container;
    this.type = type;
    this.props = props;
  }

  VNode.prototype.appendChild = function (node, immediately) {
    this.removeChild(node, immediately);
    this.size += 1;
    node.parent = this;

    if (!this.firstChild) {
      this.firstChild = node;
    }

    if (this.lastChild) {
      this.lastChild.nextSibling = node;
      node.previousSibling = this.lastChild;
    }

    this.lastChild = node;

    if (this.isMounted()) {
      this.container.requestUpdate(this.path + '.children', this.size - 1, 0, immediately, node.toJSON());
    }
  };

  VNode.prototype.removeChild = function (node, immediately) {
    var previousSibling = node.previousSibling,
        nextSibling = node.nextSibling;

    if (node.parent !== this) {
      return;
    }

    var index = node.index;
    this.size -= 1;

    if (this.firstChild === node) {
      this.firstChild = node.nextSibling;
    }

    if (this.lastChild === node) {
      this.lastChild = node.previousSibling;
    }

    if (previousSibling) {
      previousSibling.nextSibling = nextSibling;
    }

    if (nextSibling) {
      nextSibling.previousSibling = previousSibling;
    }

    node.previousSibling = null;
    node.nextSibling = null;

    if (this.isMounted()) {
      this.container.requestUpdate(this.path + '.children', index, 1, immediately);
    }
  };

  VNode.prototype.insertBefore = function (node, referenceNode, immediately) {
    this.removeChild(node, immediately);
    this.size += 1;
    node.parent = this;

    if (referenceNode === this.firstChild) {
      this.firstChild = node;
    }

    if (referenceNode.previousSibling) {
      referenceNode.previousSibling.nextSibling = node;
      node.previousSibling = referenceNode.previousSibling;
    }

    referenceNode.previousSibling = node;
    node.nextSibling = referenceNode;

    if (this.isMounted()) {
      this.container.requestUpdate(this.path + '.children', node.index, 0, immediately, node.toJSON());
    }
  };

  VNode.prototype.update = function () {
    // root 不会更新，所以肯定有 parent
    this.container.requestUpdate(this.parent.path + '.children', this.index, 1, false, this.toJSON());
  };

  Object.defineProperty(VNode.prototype, "index", {
    get: function get() {
      var value = 0;
      var previousSibling = this.previousSibling;

      while (previousSibling) {
        value += 1;
        previousSibling = previousSibling.previousSibling;
      }

      return value;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VNode.prototype, "children", {
    get: function get() {
      var arr = [];
      var item = this.firstChild;

      while (item) {
        arr.push(item);
        item = item.nextSibling;
      }

      return arr;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VNode.prototype, "path", {
    get: function get() {
      var dataPath = 'root';
      var parents = [];
      var parent = this.parent;

      while (parent) {
        parents.unshift(parent);
        parent = parent.parent;
      }

      for (var i = 0; i < parents.length; i++) {
        var child = parents[i + 1] || this;
        dataPath += '.children.' + child.index;
      }

      return dataPath;
    },
    enumerable: true,
    configurable: true
  });

  VNode.prototype.isMounted = function () {
    return this.parent ? this.parent.isMounted() : this.mounted;
  };

  VNode.prototype.toJSON = function () {
    var stack = [];
    var rawNode = toRawNode(this);
    stack.push({
      currentNode: rawNode,
      children: this.children
    });

    while (stack.length > 0) {
      // while 循环已经保证了不会有空值
      var stackItem = stack.pop();
      var _a = stackItem.children,
          children = _a === void 0 ? [] : _a,
          currentNode = stackItem.currentNode;

      for (var i = children.length - 1; i >= 0; i--) {
        var currentVNode = children[i];
        var currentRawNode = toRawNode(currentVNode);
        currentNode.children[i] = currentRawNode;
        stack.push({
          currentNode: currentRawNode,
          children: currentVNode.children
        });
      }
    }

    return rawNode;
  };

  return VNode;
}();

/* harmony default export */ __webpack_exports__["default"] = (VNode);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlias", function() { return getAlias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return propsAlias; });
/* harmony import */ var _utils_plainStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function getAlias(prop, type) {
  var _a, _b;

  prop = prop.replace('className', 'class');
  var hostComponent = _createHostComponent__WEBPACK_IMPORTED_MODULE_1__["hostComponents"][type];
  var prefix = "alipay" + "-"; // 判断是否是平台独有属性

  if (prop.startsWith(prefix)) {
    return prop.replace(new RegExp("^" + prefix), '');
  }

  return (_b = (_a = hostComponent === null || hostComponent === void 0 ? void 0 : hostComponent.alias) === null || _a === void 0 ? void 0 : _a[prop]) !== null && _b !== void 0 ? _b : prop;
}

function getValue(prop, value) {
  if (prop.toLowerCase().endsWith('style') && _typeof(value) === 'object') {
    return Object(_utils_plainStyle__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
  }

  return value;
}

function propsAlias(props, type) {
  if (!props) {
    return props;
  }

  var aliasProps = {};

  for (var prop in props) {
    aliasProps[getAlias(prop, type)] = getValue(prop, props[prop]);
  }

  return aliasProps;
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSSProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};


var vendorPrefixes = ['webkit', 'moz', 'ms', 'o'];

var transformReactStyleKey = function transformReactStyleKey(key) {
  // css3 var
  if (key === null || key === void 0 ? void 0 : key.startsWith('--')) {
    return key;
  }

  var styleValue = key.replace(/\.?([A-Z]+)/g, function (_x, y) {
    return '-' + y.toLowerCase();
  }); // vendor prefix

  if (styleValue === null || styleValue === void 0 ? void 0 : styleValue.startsWith('-')) {
    var firstWord_1 = styleValue.split('-').filter(function (s) {
      return s;
    })[0];
    styleValue = styleValue.replace(/^-/, '');

    if (vendorPrefixes.find(function (prefix) {
      return prefix === firstWord_1;
    })) {
      styleValue = '-' + styleValue;
    }
  }

  return styleValue;
};

var transformPx = function transformPx(value) {
  if (typeof value !== 'string') {
    return value;
  }

  return value.replace(/\b(\d+(\.\d+)?)px\b/g, function (match, x) {
    var targetUnit = 'rpx';
    var size = Number(x);
    return size % 1 === 0 ? size + targetUnit : size.toFixed(2) + targetUnit;
  });
};

var plainStyle = function plainStyle(style) {
  return Object.keys(style).reduce(function (acc, key) {
    var value = style[key];

    if (!Number.isNaN(Number(value)) && !_CSSProperty__WEBPACK_IMPORTED_MODULE_0__["isUnitlessNumber"][key]) {
      value = value + 'rpx';
    }

    return __spreadArrays(acc, [transformReactStyleKey(key) + ":" + ( true ? transformPx(value) : undefined) + ";"]);
  }, []).join('');
};

/* harmony default export */ __webpack_exports__["default"] = (plainStyle);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnitlessNumber", function() { return isUnitlessNumber; });
// https://github.com/facebook/react/blob/master/packages/react-dom/src/shared/CSSProperty.js

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */

function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}
/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */


var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

var _loop_1 = function _loop_1(prop) {
  var _a = prefixes;

  var _f = function _f(prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  };

  for (var _i = 0; _i < _a.length; _i++) {
    _f(_a[_i], _i, _a);
  }

  undefined;
};

for (var prop in isUnitlessNumber) {
  _loop_1(prop);
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hostComponents", function() { return hostComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createHostComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) {
          t[p] = s[p];
        }
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};


var hostComponents = {
  "button": {
    "alias": {
      "id": "id",
      "className": "class",
      "size": "size",
      "type": "type",
      "plain": "plain",
      "disabled": "disabled",
      "loading": "loading",
      "hoverClass": "hover-class",
      "hoverClassName": "hover-class",
      "hoverStartTime": "hover-start-time",
      "hoverStayTime": "hover-stay-time",
      "hoverStopPropagation": "hover-stop-propagation",
      "formType": "form-type",
      "openType": "open-type",
      "scope": "scope",
      "onClick": "onTap",
      "onTap": "onTap",
      "appParameter": "app-parameter",
      "publicId": "public-id"
    }
  },
  "canvas": {
    "alias": {
      "id": "id",
      "style": "style",
      "className": "class",
      "width": "width",
      "height": "height",
      "disableScroll": "disable-scroll",
      "onClick": "onTap",
      "onTap": "onTap",
      "onTouchStart": "onTouchStart",
      "onTouchMove": "onTouchMove",
      "onTouchEnd": "onTouchEnd",
      "onTouchCancel": "onTouchCancel",
      "onLongTap": "onLongTap",
      "onLongClick": "onLongTap"
    }
  },
  "checkbox-group": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "name": "name",
      "onChange": "onChange"
    }
  },
  "checkbox": {
    "alias": {
      "className": "class",
      "style": "style",
      "id": "id",
      "value": "value",
      "checked": "checked",
      "disabled": "disabled",
      "onChange": "onChange",
      "color": "color"
    }
  },
  "contact-button": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "tntInstId": "tnt-inst-id",
      "scene": "scene",
      "size": "size",
      "color": "color",
      "icon": "icon",
      "alipayCardNo": "alipay-card-no"
    }
  },
  "cover-image": {
    "alias": {
      "id": "id",
      "className": "class",
      "src": "src",
      "style": "style",
      "onClick": "onTap",
      "onTap": "onTap"
    }
  },
  "cover-view": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "onTap": "onTap",
      "onClick": "onTap"
    }
  },
  "form": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "reportSubmit": "report-submit",
      "onSubmit": "onSubmit",
      "onReset": "onReset"
    }
  },
  "icon": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "type": "type",
      "size": "size",
      "color": "color"
    }
  },
  "image": {
    "alias": {
      "id": "id",
      "src": "src",
      "mode": "mode",
      "className": "class",
      "style": "style",
      "lazyLoad": "lazy-load",
      "onLoad": "onLoad",
      "onError": "onError",
      "onTap": "onTap",
      "onTouchStart": "onTouchStart",
      "onTouchMove": "onTouchMove",
      "onTouchEnd": "onTouchEnd",
      "onTouchCancel": "onTouchCancel",
      "onClick": "onTap"
    }
  },
  "input": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "value": "value",
      "name": "name",
      "type": "type",
      "password": "password",
      "placeholder": "placeholder",
      "placeholderStyle": "placeholder-style",
      "placeholderClass": "placeholder-class",
      "placeholderClassName": "placeholder-class",
      "disabled": "disabled",
      "maxlength": "maxlength",
      "focus": "focus",
      "confirmType": "confirm-type",
      "confirmHold": "confirm-hold",
      "cursor": "cursor",
      "selectionStart": "selection-start",
      "selectionEnd": "selection-end",
      "randomNumber": "randomNumber",
      "controlled": "controlled",
      "onInput": "onInput",
      "onConfirm": "onConfirm",
      "onFocus": "onFocus",
      "onBlur": "onBlur"
    }
  },
  "label": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "for": "for"
    }
  },
  "lifestyle": {
    "alias": {
      "publicId": "public-id",
      "onFollow": "onFollow"
    }
  },
  "map": {
    "alias": {
      "id": "id",
      "style": "style",
      "className": "class",
      "latitude": "latitude",
      "longitude": "longitude",
      "scale": "scale",
      "markers": "markers",
      "polyline": "polyline",
      "circles": "circles",
      "controls": "controls",
      "polygon": "polygon",
      "showLocation": "show-location",
      "includePoints": "include-points",
      "includePadding": "include-padding",
      "groundOverlays": "ground-overlays",
      "tileOverlay": "tile-overlay",
      "setting": "setting",
      "onMarkerTap": "onMarkerTap",
      "onMarkerClick": "onMarkerTap",
      "onCalloutTap": "onCalloutTap",
      "onCalloutClick": "onCalloutTap",
      "onControlTap": "onControlTap",
      "onControlClick": "onControlTap",
      "onRegionChange": "onRegionChange",
      "onTap": "onTap",
      "onClick": "onTap"
    }
  },
  "movable-area": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "width": "width",
      "height": "height"
    }
  },
  "movable-view": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "direction": "direction",
      "width": "width",
      "height": "height",
      "x": "x",
      "y": "y",
      "disabled": "disabled",
      "onTouchStart": "onTouchStart",
      "onTouchMove": "onTouchMove",
      "onTouchEnd": "onTouchEnd",
      "onTouchCancel": "onTouchCancel",
      "onChange": "onChange",
      "onChangeEnd": "onChangeEnd"
    }
  },
  "navigator": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "openType": "open-type",
      "hoverClass": "hover-class",
      "hoverClassName": "hover-class",
      "hoverStartTime": "hover-start-time",
      "hoverStayTime": "hover-stay-time",
      "url": "url"
    }
  },
  "picker-view-column": {
    "alias": {}
  },
  "picker-view": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "value": "value",
      "indicatorStyle": "indicator-style",
      "indicatorClass": "indicator-class",
      "indicatorClassName": "indicator-class",
      "maskStyle": "mask-style",
      "maskClass": "mask-class",
      "maskClassName": "mask-class",
      "onChange": "onChange"
    }
  },
  "picker": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "range": "range",
      "rangeKey": "range-key",
      "value": "value",
      "onChange": "onChange",
      "disabled": "disabled"
    }
  },
  "progress": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "percent": "percent",
      "showInfo": "show-info",
      "strokeWidth": "stroke-width",
      "activeColor": "active-color",
      "backgroundColor": "background-color",
      "active": "active"
    }
  },
  "radio-group": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "onChange": "onChange",
      "name": "name"
    }
  },
  "radio": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "value": "value",
      "checked": "checked",
      "disabled": "disabled",
      "color": "color"
    }
  },
  "rich-text": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "nodes": "nodes",
      "onTap": "onTap",
      "onClick": "onTap",
      "onTouchStart": "onTouchStart",
      "onTouchMove": "onTouchMove",
      "onTouchEnd": "onTouchEnd",
      "onTouchCancel": "onTouchCancel",
      "onLongTap": "onLongTap",
      "onLongClick": "onLongTap"
    }
  },
  "scroll-view": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "scrollX": "scroll-x",
      "scrollY": "scroll-y",
      "upperThreshold": "upper-threshold",
      "lowerThreshold": "lower-threshold",
      "scrollTop": "scroll-top",
      "scrollLeft": "scroll-left",
      "scrollIntoView": "scroll-into-view",
      "scrollWithAnimation": "scroll-with-animation",
      "scrollAnimationDuration": "scroll-animation-duration",
      "enableBackToTop": "enable-back-to-top",
      "trapScroll": "trap-scroll",
      "onScrollToUpper": "onScrollToUpper",
      "onScrollToLower": "onScrollToLower",
      "onScroll": "onScroll",
      "onTouchStart": "onTouchStart",
      "onTouchMove": "onTouchMove",
      "onTouchEnd": "onTouchEnd",
      "onTouchCancel": "onTouchCancel"
    }
  },
  "slider": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "name": "name",
      "min": "min",
      "max": "max",
      "step": "step",
      "disabled": "disabled",
      "value": "value",
      "showValue": "show-value",
      "activeColor": "active-color",
      "backgroundColor": "background-color",
      "trackSize": "track-size",
      "handleSize": "handle-size",
      "handleColor": "handle-color",
      "onChange": "onChange",
      "onChanging": "onChanging"
    }
  },
  "swiper-item": {
    "alias": {
      "key": "key"
    }
  },
  "swiper": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "indicatorDots": "indicator-dots",
      "indicatorColor": "indicator-color",
      "indicatorActiveColor": "indicator-active-color",
      "activeClass": "active-class",
      "activeClassName": "active-class",
      "changingClass": "changing-class",
      "changingClassName": "changing-class",
      "autoplay": "autoplay",
      "current": "current",
      "duration": "duration",
      "interval": "interval",
      "circular": "circular",
      "vertical": "vertical",
      "previousMargin": "previous-margin",
      "nextMargin": "next-margin",
      "acceleration": "acceleration",
      "disableProgrammaticAnimation": "disable-programmatic-animation",
      "onChange": "onChange",
      "onTransition": "onTransition",
      "onAnimationEnd": "onAnimationEnd",
      "disableTouch": "disable-touch"
    }
  },
  "switch": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "name": "name",
      "checked": "checked",
      "disabled": "disabled",
      "color": "color",
      "onChange": "onChange",
      "controlled": "controlled"
    }
  },
  "text": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "selectable": "selectable",
      "space": "space",
      "decode": "decode",
      "numberOfLines": "number-of-lines",
      "onClick": "onTap",
      "onTap": "onTap"
    }
  },
  "textarea": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "name": "name",
      "value": "value",
      "placeholder": "placeholder",
      "placeholderStyle": "placeholder-style",
      "placeholderClass": "placeholder-class",
      "placeholderClassName": "placeholder-class",
      "disabled": "disabled",
      "maxlength": "maxlength",
      "focus": "focus",
      "autoHeight": "auto-height",
      "showCount": "show-count",
      "controlled": "controlled",
      "onInput": "onInput",
      "onFocus": "onFocus",
      "onBlur": "onBlur",
      "onConfirm": "onConfirm"
    }
  },
  "view": {
    "alias": {
      "id": "id",
      "disableScroll": "disable-scroll",
      "hoverClass": "hover-class",
      "hoverClassName": "hover-class",
      "hoverStartTime": "hover-start-time",
      "hoverStayTime": "hover-stay-time",
      "hidden": "hidden",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "hoverStopPropagation": "hover-stop-propagation",
      "onClick": "onTap",
      "onTap": "onTap",
      "onTouchStart": "onTouchStart",
      "onTouchMove": "onTouchMove",
      "onTouchEnd": "onTouchEnd",
      "onTouchCancel": "onTouchCancel",
      "onLongTap": "onLongTap",
      "onLongClick": "onLongTap",
      "onTransitionEnd": "onTransitionEnd",
      "onAnimationIteration": "onAnimationIteration",
      "onAnimationStart": "onAnimationStart",
      "onAnimationEnd": "onAnimationEnd",
      "onAppear": "onAppear",
      "onDisappear": "onDisappear",
      "onFirstAppear": "onFirstAppear"
    }
  },
  "web-view": {
    "alias": {
      "id": "id",
      "src": "src",
      "onMessage": "onMessage"
    }
  },
  "video": {
    "alias": {
      "className": "class",
      "src": "src",
      "id": "id",
      "poster": "poster",
      "objectFit": "objectFit",
      "initialTime": "initial-time",
      "duration": "duration",
      "controls": "controls",
      "autoplay": "autoplay",
      "direction": "direction",
      "loop": "loop",
      "muted": "muted",
      "showFullscreenBtn": "show-fullscreen-btn",
      "showPlayBtn": "show-play-btn",
      "showCenterPlayBtn": "show-center-play-btn",
      "showMuteBtn": "show-mute-btn",
      "enableProgressGesture": "enableProgressGesture",
      "mobilenetHintType": "mobilenetHintType",
      "onPlay": "onPlay",
      "onPause": "onPause",
      "onEnded": "onEnded",
      "onTimeUpdate": "onTimeUpdate",
      "onLoading": "onLoading",
      "onError": "onError",
      "onFullScreenChange": "onFullScreenChange",
      "onTap": "onTap",
      "onClick": "onTap",
      "onUserAction": "onUserAction"
    }
  }
} || {};
function createHostComponent(name, component) {
  if (component) {
    return component;
  }

  var Component = function Component(props, ref) {
    var _a = props.children,
        children = _a === void 0 ? [] : _a;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](name, __assign(__assign({}, props), {
      ref: ref
    }), children);
  };

  return react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](Component);
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = react;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCallbackProxy", function() { return createCallbackProxy; });
/* harmony import */ var _stopPropagation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};




function isSyntheticType(inputType) {
  if (_constants__WEBPACK_IMPORTED_MODULE_1__["DEPRECATED_CATCH_TYPE"] === inputType) {
    console.warn('DEPRECATION: remax 已支持在 onClick 事件中使用 stopPropagation 阻止事件冒泡，请尽量不要使用 catchClick');
  }

  return !!_constants__WEBPACK_IMPORTED_MODULE_1__["SYNTHETIC_TYPES"].find(function (type) {
    return type === inputType;
  });
}

function createBaseSyntheticEvent(node, nativeEvent) {
  // 添加阻止冒泡方法
  nativeEvent.stopPropagation = function () {
    Object(_stopPropagation__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  };

  return nativeEvent;
}

function createCallbackProxy(eventType, node, callback) {
  if (!isSyntheticType(eventType)) {
    return callback;
  }

  return function (nativeEvent) {
    var restParams = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      restParams[_i - 1] = arguments[_i];
    }

    var syntheticEvent = createBaseSyntheticEvent(node, nativeEvent);

    if (_stopPropagation__WEBPACK_IMPORTED_MODULE_0__["isPropagationStopped"]) {
      Object(_stopPropagation__WEBPACK_IMPORTED_MODULE_0__["validate"])(node);
      return;
    }

    return callback.apply(void 0, __spreadArrays([syntheticEvent], restParams));
  };
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPropagationStopped", function() { return isPropagationStopped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return stopPropagation; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);

var isPropagationStopped = false;
/**
 * 检查父元素里还有没有点击事件
 *
 * @export
 * @param {VNode} node
 * @returns
 */

function validate(node) {
  var _a;

  var parent = node.parent;

  if (!parent) {
    isPropagationStopped = false;
    return;
  }

  for (var i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_0__["SYNTHETIC_TYPES"].length; i++) {
    if ((_a = parent.props) === null || _a === void 0 ? void 0 : _a[_constants__WEBPACK_IMPORTED_MODULE_0__["SYNTHETIC_TYPES"][i]]) {
      return;
    }
  }

  validate(parent);
}
function stopPropagation(node) {
  isPropagationStopped = true;
  validate(node);
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEPRECATED_CATCH_TYPE", function() { return DEPRECATED_CATCH_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYNTHETIC_TYPES", function() { return SYNTHETIC_TYPES; });
var DEPRECATED_CATCH_TYPE = 'catchClick';
var SYNTHETIC_TYPES = ['onClick', 'onTap', 'onLongClick', 'onLongTap'];

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return diffProperties; });
var STYLE = 'style';
var CHILDREN = 'children';
function diffProperties(lastRawProps, nextRawProps) {
  var updatePayload = null;
  var lastProps = lastRawProps;
  var nextProps = nextRawProps;
  var propKey;
  var styleName;
  var styleUpdates = null;

  for (propKey in lastProps) {
    if (Object.prototype.hasOwnProperty.call(nextProps, propKey) || !Object.prototype.hasOwnProperty.call(lastProps, propKey) || lastProps[propKey] == null) {
      continue;
    }

    if (propKey === STYLE) {
      var lastStyle = lastProps[propKey];

      for (styleName in lastStyle) {
        if (Object.prototype.hasOwnProperty.call(lastStyle, styleName)) {
          if (!styleUpdates) {
            styleUpdates = {};
          }

          styleUpdates[styleName] = '';
        }
      }
    } else {
      // For all other deleted properties we add it to the queue. We use
      // the whitelist in the commit phase instead.
      (updatePayload = updatePayload || []).push(propKey, null);
    }
  }

  for (propKey in nextProps) {
    var nextProp = nextProps[propKey];
    var lastProp = lastProps != null ? lastProps[propKey] : undefined;

    if (!Object.prototype.hasOwnProperty.call(nextProps, propKey) || nextProp === lastProp || nextProp == null && lastProp == null) {
      continue;
    }

    if (propKey === STYLE) {
      if (false) {}

      if (lastProp) {
        // Unset styles on `lastProp` but not on `nextProp`.
        for (styleName in lastProp) {
          if (Object.prototype.hasOwnProperty.call(lastProp, styleName) && (!nextProp || !Object.prototype.hasOwnProperty.call(nextProp, styleName))) {
            if (!styleUpdates) {
              styleUpdates = {};
            }

            styleUpdates[styleName] = '';
          }
        } // Update styles that changed since `lastProp`.


        for (styleName in nextProp) {
          if (Object.prototype.hasOwnProperty.call(nextProp, styleName) && lastProp[styleName] !== nextProp[styleName]) {
            if (!styleUpdates) {
              styleUpdates = {};
            }

            styleUpdates[styleName] = nextProp[styleName];
          }
        }
      } else {
        // Relies on `updateStylesByID` not mutating `styleUpdates`.
        if (!styleUpdates) {
          if (!updatePayload) {
            updatePayload = [];
          }

          updatePayload.push(propKey, styleUpdates);
        }

        styleUpdates = nextProp;
      }
    } else if (propKey === CHILDREN) {
      if (lastProp !== nextProp && (typeof nextProp === 'string' || typeof nextProp === 'number')) {
        (updatePayload = updatePayload || []).push(propKey, '' + nextProp);
      }
    } else {
      // For any other property we always add it to the queue and then we
      // filter it out using the whitelist during the commit.
      (updatePayload = updatePayload || []).push(propKey, nextProp);
    }
  }

  if (styleUpdates) {
    (updatePayload = updatePayload || []).push(STYLE, styleUpdates);
  }

  return updatePayload;
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createAppConfig; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _AppContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var _utils_isClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var _utils_isClassComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/* harmony import */ var _AppInstanceContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28);
/* harmony import */ var _ReactIs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29);
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) {
          d[p] = b[p];
        }
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();










var DefaultAppComponent =
/** @class */
function (_super) {
  __extends(DefaultAppComponent, _super);

  function DefaultAppComponent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  DefaultAppComponent.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, this.props.children);
  };

  return DefaultAppComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function createAppConfig(App) {
  var _this = this;

  var createConfig = function createConfig(AppComponent) {
    if (AppComponent === void 0) {
      AppComponent = DefaultAppComponent;
    }

    var config = {
      _container: new _AppContainer__WEBPACK_IMPORTED_MODULE_2__["default"](_this),
      _pages: [],
      _instance: react__WEBPACK_IMPORTED_MODULE_0__["createRef"](),
      callLifecycle: function callLifecycle(lifecycle) {
        var _a;

        var args = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }

        var callbacks = _AppInstanceContext__WEBPACK_IMPORTED_MODULE_6__["default"].lifecycleCallback[lifecycle] || [];
        var result;
        var _a2 = callbacks;

        var _f = function _f(callback) {
          result = callback.apply(void 0, args);
        };

        for (var _i2 = 0; _i2 < _a2.length; _i2++) {
          _f(_a2[_i2], _i2, _a2);
        }

        undefined;

        if (result) {
          return result;
        }

        var callback = Object(_lifecycle__WEBPACK_IMPORTED_MODULE_5__["callbackName"])(lifecycle);

        if (this._instance.current && this._instance.current[callback]) {
          return (_a = this._instance.current)[callback].apply(_a, args);
        }
      },
      onLaunch: function onLaunch(options) {
        this._render();

        return this.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_5__["AppLifecycle"].launch, options);
      },
      onShow: function onShow(options) {
        return this.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_5__["AppLifecycle"].show, options);
      },
      onHide: function onHide() {
        return this.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_5__["AppLifecycle"].hide);
      },
      onError: function onError(error) {
        return this.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_5__["AppLifecycle"].error, error);
      },
      // 支付宝
      onShareAppMessage: function onShareAppMessage(options) {
        return this.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_5__["AppLifecycle"].shareAppMessage, options);
      },
      // 微信
      onPageNotFound: function onPageNotFound(options) {
        return this.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_5__["AppLifecycle"].pageNotFound, options);
      },
      _mount: function _mount(pageInstance) {
        this._pages.push(pageInstance);

        this._render();
      },
      _unmount: function _unmount(pageInstance) {
        this._pages.splice(this._pages.indexOf(pageInstance), 1);

        this._render();
      },
      _render: function _render() {
        var props = {};

        if (Object(_utils_isClassComponent__WEBPACK_IMPORTED_MODULE_4__["default"])(AppComponent) || AppComponent.$$typeof === _ReactIs__WEBPACK_IMPORTED_MODULE_7__["ForwardRef"]) {
          props.ref = this._instance;
        }

        var _a3 = this._pages;

        var _f2 = function _f2(p) {
          return p.element;
        };

        var _r2 = [];

        for (var _i3 = 0; _i3 < _a3.length; _i3++) {
          _r2.push(_f2(_a3[_i3], _i3, _a3));
        }

        return Object(_render__WEBPACK_IMPORTED_MODULE_1__["default"])(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](AppComponent, props, _r2), this._container);
      }
    };
    return config;
  }; // 兼容老的写法


  if (Object(_utils_isClass__WEBPACK_IMPORTED_MODULE_3__["default"])(App) && !Object(_utils_isClassComponent__WEBPACK_IMPORTED_MODULE_4__["default"])(App)) {
    // eslint-disable-next-line no-console
    console.warn('使用非 React 组件定义 App 的方式已经废弃，详细请参考：https://remaxjs.org/guide/framework');
    Object.assign(App.prototype, createConfig());
    return new App();
  } else {
    return createConfig(App);
  }
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _instanceId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);



var AppContainer =
/** @class */
function () {
  function AppContainer(context) {
    this.updateQueue = [];
    this.context = context;
    this.root = new _VNode__WEBPACK_IMPORTED_MODULE_0__["default"]({
      id: Object(_instanceId__WEBPACK_IMPORTED_MODULE_1__["generate"])(),
      type: 'root',
      container: this
    });
    this.root.mounted = true;
  }

  AppContainer.prototype.requestUpdate = function (path, start, deleteCount) {
    var items = [];

    for (var _i = 3; _i < arguments.length; _i++) {
      items[_i - 3] = arguments[_i];
    } // ignore

  };

  AppContainer.prototype.createCallback = function (name, fn) {
    this.context[name] = fn;
  };

  AppContainer.prototype.appendChild = function (child) {
    this.root.appendChild(child, true);
  };

  AppContainer.prototype.removeChild = function (child) {
    this.root.removeChild(child, true);
  };

  AppContainer.prototype.insertBefore = function (child, beforeChild) {
    this.root.insertBefore(child, beforeChild, true);
  };

  return AppContainer;
}();

/* harmony default export */ __webpack_exports__["default"] = (AppContainer);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isClass; });
function fnBody(fn) {
  return fn.toString().replace(/^[^{]*{\s*/, '').replace(/\s*}[^}]*$/, '');
}

function isClass(fn) {
  if (typeof fn !== 'function') {
    return false;
  }

  if (/^class[\s{]/.test(toString.call(fn))) {
    return true;
  } // babel.js classCallCheck() & inlined


  var body = fnBody(fn);
  return /classCallCheck/.test(body) || /TypeError\("Cannot call a class as a function"\)/.test(body);
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isClassComponent; });
function isClassComponent(Component) {
  return Component.prototype && typeof Component.prototype.render === 'function';
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lifecycle", function() { return Lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLifecycle", function() { return AppLifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lifeCycleName", function() { return lifeCycleName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callbackName", function() { return callbackName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerLifecycle", function() { return registerLifecycle; });
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _utils_lowercase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);


var Lifecycle;

(function (Lifecycle) {
  Lifecycle["show"] = "show";
  Lifecycle["hide"] = "hide";
  Lifecycle["ready"] = "ready";
  Lifecycle["pullDownRefresh"] = "pullDownRefresh";
  Lifecycle["reachBottom"] = "reachBottom";
  Lifecycle["pageScroll"] = "pageScroll";
  Lifecycle["shareAppMessage"] = "shareAppMessage";
  Lifecycle["titleClick"] = "titleClick";
  Lifecycle["optionMenuClick"] = "optionMenuClick";
  Lifecycle["popMenuClick"] = "popMenuClick";
  Lifecycle["pullIntercept"] = "pullIntercept";
  Lifecycle["back"] = "back";
  Lifecycle["keyboardHeight"] = "keyboardHeight";
  Lifecycle["tabItemTap"] = "tabItemTap";
  Lifecycle["beforeTabItemTap"] = "beforeTabItemTap";
  Lifecycle["resize"] = "resize";
})(Lifecycle || (Lifecycle = {}));

var AppLifecycle;

(function (AppLifecycle) {
  AppLifecycle["launch"] = "launch";
  AppLifecycle["show"] = "show";
  AppLifecycle["hide"] = "hide";
  AppLifecycle["error"] = "error";
  AppLifecycle["shareAppMessage"] = "shareAppMessage";
  AppLifecycle["pageNotFound"] = "pageNotFound";
})(AppLifecycle || (AppLifecycle = {}));

function lifeCycleName(name) {
  if (name.startsWith('before')) {
    return name;
  }

  return Object(_utils_lowercase__WEBPACK_IMPORTED_MODULE_1__["default"])(name.slice(2));
}
function callbackName(name) {
  if (name.startsWith('before')) {
    return Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
  }

  return 'on' + Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
}
function registerLifecycle(instance, method, callback) {
  return instance.registerLifecycle(method, callback);
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return capitalize; });
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lowercase; });
function lowercase(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var context = {
  lifecycleCallback: {},
  registerLifecycle: function registerLifecycle(lifecycle, callback) {
    var _this = this;

    this.lifecycleCallback[lifecycle] = this.lifecycleCallback[lifecycle] || [];
    this.lifecycleCallback[lifecycle].push(callback);
    return function () {
      _this.lifecycleCallback[lifecycle].splice(_this.lifecycleCallback[lifecycle].indexOf(callback), 1);
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (context);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElementType", function() { return isValidElementType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeOf", function() { return typeOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncMode", function() { return AsyncMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcurrentMode", function() { return ConcurrentMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextConsumer", function() { return ContextConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextProvider", function() { return ContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return Element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForwardRef", function() { return ForwardRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return Fragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lazy", function() { return Lazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Memo", function() { return Memo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portal", function() { return Portal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profiler", function() { return Profiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrictMode", function() { return StrictMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suspense", function() { return Suspense; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAsyncMode", function() { return isAsyncMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isConcurrentMode", function() { return isConcurrentMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isContextConsumer", function() { return isContextConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isContextProvider", function() { return isContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isForwardRef", function() { return isForwardRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFragment", function() { return isFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLazy", function() { return isLazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMemo", function() { return isMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPortal", function() { return isPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProfiler", function() { return isProfiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStrictMode", function() { return isStrictMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSuspense", function() { return isSuspense; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable */

/* istanbul ignore file */

/** @license React v16.12.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol["for"];
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol["for"]('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol["for"]('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol["for"]('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol["for"]('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol["for"]('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol["for"]('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol["for"]('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol["for"]('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol["for"]('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol["for"]('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol["for"]('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol["for"]('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol["for"]('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol["for"]('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol["for"]('react.scope') : 0xead7;
function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}
/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarningWithoutStack = function lowPriorityWarningWithoutStack() {};

{
  var printWarning_1 = function printWarning_1(format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function lowPriorityWarningWithoutStack(condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning_1.apply(void 0, [format].concat(args));
    }
  };
}
var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;
function typeOf(object) {
  if (_typeof(object) === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createPageConfig; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createPageWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/* harmony import */ var _ReactPortal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37);





var idCounter = 0;
function createPageConfig(Page) {
  var app = getApp();
  var id = idCounter;
  idCounter += 1;
  var config = {
    pageId: 'page_' + id,
    data: {
      action: {},
      root: {
        children: []
      }
    },
    wrapperRef: react__WEBPACK_IMPORTED_MODULE_0__["createRef"](),
    lifecycleCallback: {},
    onLoad: function onLoad(query) {
      var PageWrapper = Object(_createPageWrapper__WEBPACK_IMPORTED_MODULE_1__["default"])(Page, query);
      this.query = query;
      this.container = new _Container__WEBPACK_IMPORTED_MODULE_3__["default"](this);
      this.element = Object(_ReactPortal__WEBPACK_IMPORTED_MODULE_4__["createPortal"])(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PageWrapper, {
        page: this,
        ref: this.wrapperRef
      }), this.container, this.pageId);

      app._mount(this);
    },
    onUnload: function onUnload() {
      this.unloaded = true;
      this.container.clearUpdate();

      app._unmount(this);
    },

    /**
     * Lifecycle start
     */
    registerLifecycle: function registerLifecycle(lifecycle, callback) {
      var _this = this;

      this.lifecycleCallback[lifecycle] = this.lifecycleCallback[lifecycle] || [];
      this.lifecycleCallback[lifecycle].push(callback);
      return function () {
        _this.lifecycleCallback[lifecycle].splice(_this.lifecycleCallback[lifecycle].indexOf(callback), 1);
      };
    },
    callLifecycle: function callLifecycle(lifecycle) {
      var _a;

      var args = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }

      var callbacks = this.lifecycleCallback[lifecycle] || [];
      var result;
      var _a2 = callbacks;

      var _f = function _f(callback) {
        result = callback.apply(void 0, args);
      };

      for (var _i2 = 0; _i2 < _a2.length; _i2++) {
        _f(_a2[_i2], _i2, _a2);
      }

      undefined;

      if (result) {
        return result;
      }

      var callback = Object(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["callbackName"])(lifecycle);

      if (this.wrapperRef.current && this.wrapperRef.current[callback]) {
        return (_a = this.wrapperRef.current)[callback].apply(_a, args);
      }
    },
    onShow: function onShow() {
      return this.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["Lifecycle"].show);
    },
    onHide: function onHide() {
      return this.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["Lifecycle"].hide);
    },
    onReady: function onReady() {
      return this.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["Lifecycle"].ready);
    },
    onPullDownRefresh: function onPullDownRefresh(e) {
      return this.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["Lifecycle"].pullDownRefresh, e);
    },
    onReachBottom: function onReachBottom() {
      return this.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["Lifecycle"].reachBottom);
    },
    onPageScroll: function onPageScroll(e) {
      return this.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["Lifecycle"].pageScroll, e);
    },
    onShareAppMessage: function onShareAppMessage(options) {
      return this.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["Lifecycle"].shareAppMessage, options) || {};
    },
    onTitleClick: function onTitleClick() {
      return this.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["Lifecycle"].titleClick);
    },
    onOptionMenuClick: function onOptionMenuClick(e) {
      return this.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["Lifecycle"].optionMenuClick, e);
    },
    onPopMenuClick: function onPopMenuClick(e) {
      return this.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["Lifecycle"].popMenuClick, e);
    },
    onPullIntercept: function onPullIntercept() {
      return this.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["Lifecycle"].pullIntercept);
    },
    events: {
      // 页面返回时触发
      onBack: function onBack(e) {
        return config.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["Lifecycle"].back, e);
      },
      // 键盘高度变化时触发
      onKeyboardHeight: function onKeyboardHeight(e) {
        return config.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["Lifecycle"].keyboardHeight, e);
      },
      onTabItemTap: function onTabItemTap(e) {
        return config.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["Lifecycle"].tabItemTap, e);
      },
      // 点击但切换tabItem前触发
      beforeTabItemTap: function beforeTabItemTap() {
        return config.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["Lifecycle"].beforeTabItemTap);
      },
      onResize: function onResize(e) {
        return config.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["Lifecycle"].resize, e);
      }
    }
  };
  return config;
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createPageWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_isClassComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var _PageInstanceContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var _ReactIs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) {
          d[p] = b[p];
        }
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};






function createPageWrapper(Page, query) {
  return (
    /** @class */
    function (_super) {
      __extends(PageWrapper, _super);

      function PageWrapper(props) {
        var _this = _super.call(this, props) || this; // 页面组件的实例


        _this.pageComponentInstance = null;
        _this.callbacks = new Map();

        var _a2 = Object.keys(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["Lifecycle"]);

        var _f = function _f(phase) {
          var callback = Object(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["callbackName"])(phase);

          _this[callback] = function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return _this.callLifecycle.apply(_this, __spreadArrays([phase], args));
          };
        };

        for (var _i2 = 0; _i2 < _a2.length; _i2++) {
          _f(_a2[_i2], _i2, _a2);
        }

        undefined;
        return _this;
      }

      PageWrapper.prototype.callLifecycle = function (phase) {
        var _a;

        var args = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }

        var callback = Object(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["callbackName"])(phase);

        if (this.pageComponentInstance && typeof this.pageComponentInstance[callback] === 'function') {
          return (_a = this.pageComponentInstance)[callback].apply(_a, args);
        }
      };

      PageWrapper.prototype.render = function () {
        var _this = this;

        var props = {
          location: {
            query: query || {}
          }
        };

        if (Object(_utils_isClassComponent__WEBPACK_IMPORTED_MODULE_1__["default"])(Page) || Page.$$typeof === _ReactIs__WEBPACK_IMPORTED_MODULE_4__["ForwardRef"]) {
          props.ref = function (node) {
            return _this.pageComponentInstance = node;
          };
        }

        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PageInstanceContext__WEBPACK_IMPORTED_MODULE_3__["default"].Provider, {
          value: this.props.page
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Page, props));
      };

      return PageWrapper;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"])
  );
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var PageInstanceContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](null);
/* harmony default export */ __webpack_exports__["default"] = (PageInstanceContext);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _instanceId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _actionId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _nativeEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _Platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};







var Container =
/** @class */
function () {
  function Container(context) {
    this.updateQueue = [];
    this.rendered = false;
    this.context = context;
    this.root = new _VNode__WEBPACK_IMPORTED_MODULE_0__["default"]({
      id: Object(_instanceId__WEBPACK_IMPORTED_MODULE_1__["generate"])(),
      type: 'root',
      container: this
    });
    this.root.mounted = true;
  }

  Container.prototype.requestUpdate = function (path, start, deleteCount, immediately) {
    var _this = this;

    var items = [];

    for (var _i = 4; _i < arguments.length; _i++) {
      items[_i - 4] = arguments[_i];
    }

    var update = {
      path: path,
      start: start,
      deleteCount: deleteCount,
      items: items
    };

    if (immediately) {
      this.updateQueue.push(update);
      this.applyUpdate();
    } else {
      if (this.updateQueue.length === 0) {
        Promise.resolve().then(function () {
          return _this.applyUpdate();
        });
      }

      this.updateQueue.push(update);
    }
  };

  Container.prototype.applyUpdate = function () {
    var _this = this;

    if (this.stopUpdate) {
      return;
    }

    var startTime = new Date().getTime();

    if (typeof this.context.$spliceData === 'function') {
      var $batchedUpdates = function $batchedUpdates(callback) {
        callback();
      };

      if (typeof this.context.$batchedUpdates === 'function') {
        $batchedUpdates = this.context.$batchedUpdates;
      }

      $batchedUpdates(function () {
        var _a2 = _this.updateQueue;

        var _f = function _f(update, index) {
          var _a;

          var callback = undefined;

          if (index + 1 === _this.updateQueue.length) {
            callback = function callback() {
              _nativeEffect__WEBPACK_IMPORTED_MODULE_3__["default"].run();
              /* istanbul ignore next */

              if (undefined) {
                console.log("setData => \u56DE\u8C03\u65F6\u95F4\uFF1A" + (new Date().getTime() - startTime) + "ms");
              }
            };
          }

          _this.context.$spliceData((_a = {}, _a[update.path] = __spreadArrays([update.start, update.deleteCount], update.items), _a), callback);
        };

        var _r = [];

        for (var _i2 = 0; _i2 < _a2.length; _i2++) {
          _r.push(_f(_a2[_i2], _i2, _a2));
        }

        _r;
      });
      this.updateQueue = [];
      return;
    } // TODO 统一更新行为


    var _a3 = this.updateQueue;

    var _f2 = function _f2(update) {
      return {
        path: update.path,
        start: update.start,
        deleteCount: update.deleteCount,
        item: update.items[0]
      };
    };

    var _r2 = [];

    for (var _i3 = 0; _i3 < _a3.length; _i3++) {
      _r2.push(_f2(_a3[_i3], _i3, _a3));
    }

    var action = {
      type: 'splice',
      payload: _r2,
      id: Object(_actionId__WEBPACK_IMPORTED_MODULE_2__["generate"])()
    };

    if (_Platform__WEBPACK_IMPORTED_MODULE_4__["default"].isToutiao) {
      action = {
        root: this.root.toJSON()
      };
    }

    this.context.setData({
      action: action
    }, function () {
      _nativeEffect__WEBPACK_IMPORTED_MODULE_3__["default"].run();
      /* istanbul ignore next */

      if (undefined) {
        console.log("setData => \u56DE\u8C03\u65F6\u95F4\uFF1A" + (new Date().getTime() - startTime) + "ms", action);
      }
    });
    this.updateQueue = [];
  };

  Container.prototype.clearUpdate = function () {
    this.stopUpdate = true;

    if (_Platform__WEBPACK_IMPORTED_MODULE_4__["default"].isWechat) {
      this.context.setData({
        action: {
          type: 'clear'
        }
      });
    }
  };

  Container.prototype.createCallback = function (name, fn) {
    this.context[name] = fn;
  };

  Container.prototype.appendChild = function (child) {
    this.root.appendChild(child, true);
  };

  Container.prototype.removeChild = function (child) {
    this.root.removeChild(child, true);
  };

  Container.prototype.insertBefore = function (child, beforeChild) {
    this.root.insertBefore(child, beforeChild, true);
  };

  return Container;
}();

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return generate; });
var actionId = 0;
function reset() {
  actionId = 0;
}
function generate() {
  var id = actionId;
  actionId += 1;
  return id;
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var effector = {
  listenerConfigs: []
};

function dispose(listener) {
  effector.listenerConfigs = effector.listenerConfigs.filter(function (config) {
    return config.listener !== listener;
  });
}

function connect(listener, once) {
  effector.listenerConfigs.push({
    listener: listener,
    once: once
  });
  return function () {
    return dispose(listener);
  };
}

function run() {
  var _a = effector.listenerConfigs;

  var _f = function _f(config) {
    config.listener();

    if (config.once) {
      dispose(config.listener);
    }
  };

  for (var _i = 0; _i < _a.length; _i++) {
    _f(_a[_i], _i, _a);
  }

  undefined;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  connect: connect,
  run: run,
  dispose: dispose
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var is = function is(platform) {
  return "alipay" === platform;
};

var Platform = {
  get current() {
    return "alipay";
  },

  get isAlipay() {
    return is('alipay');
  },

  get isWechat() {
    return is('wechat');
  },

  get isToutiao() {
    return is('toutiao');
  }

};
/* harmony default export */ __webpack_exports__["default"] = (Platform);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return createPortal; });
/* harmony import */ var _ReactIs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);

function createPortal(children, containerInfo, key) {
  return {
    // This tag allow us to uniquely identify this as a React Portal
    $$typeof: _ReactIs__WEBPACK_IMPORTED_MODULE_0__["Portal"],
    key: key == null ? null : '' + key,
    children: children,
    containerInfo: containerInfo,
    implementation: null
  };
}

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createNativeComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) {
          t[p] = s[p];
        }
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};


function createNativeComponent(name) {
  return react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](function (props, ref) {
    if (typeof ref === 'string') {
      console.error('不支持使用 string 获取小程序组件 ref，请使用回调或 React.createRef/React.useRef');
    }

    var newProps = __assign({}, props);

    newProps.__ref = typeof ref === 'function' ? ref : function (e) {
      if (ref) {
        ref.current = e;
      }
    };
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](name, newProps, props.children);
  });
}

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePageInstance", function() { return usePageInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_useNativeEffect", function() { return unstable_useNativeEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useShow", function() { return useShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReady", function() { return useReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHide", function() { return useHide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePullDownRefresh", function() { return usePullDownRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReachBottom", function() { return useReachBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePageScroll", function() { return usePageScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useShareAppMessage", function() { return useShareAppMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTitleClick", function() { return useTitleClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOptionMenuClick", function() { return useOptionMenuClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePopMenuClick", function() { return usePopMenuClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePullIntercept", function() { return usePullIntercept; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return useQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePageEvent", function() { return usePageEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppEvent", function() { return useAppEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppShow", function() { return useAppShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppLaunch", function() { return useAppLaunch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppError", function() { return useAppError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppHide", function() { return useAppHide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppPageNotFound", function() { return useAppPageNotFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppShareAppMessage", function() { return useAppShareAppMessage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _PageInstanceContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _AppInstanceContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var _nativeEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);






function warn(message) {
  if (true) {
    console.warn(message);
  }
}
/**
 *  Page Hooks
 */
// eslint-disable-next-line @typescript-eslint/camelcase


function usePageInstance() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_PageInstanceContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
} // eslint-disable-next-line @typescript-eslint/camelcase

function unstable_useNativeEffect(listener, deps) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    return _nativeEffect__WEBPACK_IMPORTED_MODULE_4__["default"].connect(listener, !!deps);
  }, deps);
}
function useShow(callback) {
  var pageInstance = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_PageInstanceContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    warn('useShow 即将废弃，请使用 usePageEvent 代替。详情参考：https://remaxjs.org/guide/framework');
    return Object(_lifecycle__WEBPACK_IMPORTED_MODULE_1__["registerLifecycle"])(pageInstance, _lifecycle__WEBPACK_IMPORTED_MODULE_1__["Lifecycle"].show, callback);
  });
}
function useReady(callback) {
  var pageInstance = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_PageInstanceContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    warn('useReady 即将废弃，请使用 usePageEvent 代替。详情参考：https://remaxjs.org/guide/framework');
    return Object(_lifecycle__WEBPACK_IMPORTED_MODULE_1__["registerLifecycle"])(pageInstance, _lifecycle__WEBPACK_IMPORTED_MODULE_1__["Lifecycle"].ready, callback);
  });
}
function useHide(callback) {
  var pageInstance = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_PageInstanceContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    warn('useHide 即将废弃，请使用 usePageEvent 代替。详情参考：https://remaxjs.org/guide/framework');
    return Object(_lifecycle__WEBPACK_IMPORTED_MODULE_1__["registerLifecycle"])(pageInstance, _lifecycle__WEBPACK_IMPORTED_MODULE_1__["Lifecycle"].hide, callback);
  });
}
function usePullDownRefresh(callback) {
  var pageInstance = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_PageInstanceContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    warn('usePullDownRefresh 即将废弃，请使用 usePageEvent 代替。详情参考：https://remaxjs.org/guide/framework');
    return Object(_lifecycle__WEBPACK_IMPORTED_MODULE_1__["registerLifecycle"])(pageInstance, _lifecycle__WEBPACK_IMPORTED_MODULE_1__["Lifecycle"].pullDownRefresh, callback);
  });
}
function useReachBottom(callback) {
  var pageInstance = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_PageInstanceContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    warn('useReachBottom 即将废弃，请使用 usePageEvent 代替。详情参考：https://remaxjs.org/guide/framework');
    return Object(_lifecycle__WEBPACK_IMPORTED_MODULE_1__["registerLifecycle"])(pageInstance, _lifecycle__WEBPACK_IMPORTED_MODULE_1__["Lifecycle"].reachBottom, callback);
  });
}
function usePageScroll(callback) {
  var pageInstance = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_PageInstanceContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    warn('usePageScroll 即将废弃，请使用 usePageEvent 代替。详情参考：https://remaxjs.org/guide/framework');
    return Object(_lifecycle__WEBPACK_IMPORTED_MODULE_1__["registerLifecycle"])(pageInstance, _lifecycle__WEBPACK_IMPORTED_MODULE_1__["Lifecycle"].pageScroll, callback);
  });
}
function useShareAppMessage(callback) {
  var pageInstance = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_PageInstanceContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    warn('useShareAppMessage 即将废弃，请使用 usePageEvent 代替。详情参考：https://remaxjs.org/guide/framework');
    return Object(_lifecycle__WEBPACK_IMPORTED_MODULE_1__["registerLifecycle"])(pageInstance, _lifecycle__WEBPACK_IMPORTED_MODULE_1__["Lifecycle"].shareAppMessage, callback);
  });
}
function useTitleClick(callback) {
  var pageInstance = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_PageInstanceContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    warn('useTitleClick 即将废弃，请使用 usePageEvent 代替。详情参考：https://remaxjs.org/guide/framework');
    return Object(_lifecycle__WEBPACK_IMPORTED_MODULE_1__["registerLifecycle"])(pageInstance, _lifecycle__WEBPACK_IMPORTED_MODULE_1__["Lifecycle"].titleClick, callback);
  });
}
function useOptionMenuClick(callback) {
  var pageInstance = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_PageInstanceContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    warn('useOptionMenuClick 即将废弃，请使用 usePageEvent 代替。详情参考：https://remaxjs.org/guide/framework');
    return Object(_lifecycle__WEBPACK_IMPORTED_MODULE_1__["registerLifecycle"])(pageInstance, _lifecycle__WEBPACK_IMPORTED_MODULE_1__["Lifecycle"].optionMenuClick, callback);
  });
}
function usePopMenuClick(callback) {
  var pageInstance = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_PageInstanceContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    warn('usePopMenuClick 即将废弃，请使用 usePageEvent 代替。详情参考：https://remaxjs.org/guide/framework');
    return Object(_lifecycle__WEBPACK_IMPORTED_MODULE_1__["registerLifecycle"])(pageInstance, _lifecycle__WEBPACK_IMPORTED_MODULE_1__["Lifecycle"].popMenuClick, callback);
  });
}
function usePullIntercept(callback) {
  var pageInstance = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_PageInstanceContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    warn('usePullIntercept 即将废弃，请使用 usePageEvent 代替。详情参考：https://remaxjs.org/guide/framework');
    return Object(_lifecycle__WEBPACK_IMPORTED_MODULE_1__["registerLifecycle"])(pageInstance, _lifecycle__WEBPACK_IMPORTED_MODULE_1__["Lifecycle"].pullIntercept, callback);
  });
}
function useQuery() {
  var pageInstance = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_PageInstanceContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return pageInstance.query;
}
function usePageEvent(eventName, callback) {
  var pageInstance = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_PageInstanceContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  var lifeCycle = Object(_lifecycle__WEBPACK_IMPORTED_MODULE_1__["lifeCycleName"])(eventName);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    return Object(_lifecycle__WEBPACK_IMPORTED_MODULE_1__["registerLifecycle"])(pageInstance, lifeCycle, callback);
  });
}
/**
 * App Hooks
 */

function useAppEvent(eventName, callback) {
  var lifeCycle = Object(_lifecycle__WEBPACK_IMPORTED_MODULE_1__["lifeCycleName"])(eventName);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    return Object(_lifecycle__WEBPACK_IMPORTED_MODULE_1__["registerLifecycle"])(_AppInstanceContext__WEBPACK_IMPORTED_MODULE_3__["default"], lifeCycle, callback);
  });
}
function useAppShow(callback) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    warn('useAppShow 即将废弃，请使用 useAppEvent 代替。详情参考：https://remaxjs.org/guide/framework');
    return Object(_lifecycle__WEBPACK_IMPORTED_MODULE_1__["registerLifecycle"])(_AppInstanceContext__WEBPACK_IMPORTED_MODULE_3__["default"], _lifecycle__WEBPACK_IMPORTED_MODULE_1__["AppLifecycle"].show, callback);
  });
}
function useAppLaunch(callback) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    warn('useAppLaunch 即将废弃，请使用 useAppEvent 代替。详情参考：https://remaxjs.org/guide/framework');
    return Object(_lifecycle__WEBPACK_IMPORTED_MODULE_1__["registerLifecycle"])(_AppInstanceContext__WEBPACK_IMPORTED_MODULE_3__["default"], _lifecycle__WEBPACK_IMPORTED_MODULE_1__["AppLifecycle"].launch, callback);
  });
}
function useAppError(callback) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    warn('useAppError 即将废弃，请使用 useAppEvent 代替。详情参考：https://remaxjs.org/guide/framework');
    return Object(_lifecycle__WEBPACK_IMPORTED_MODULE_1__["registerLifecycle"])(_AppInstanceContext__WEBPACK_IMPORTED_MODULE_3__["default"], _lifecycle__WEBPACK_IMPORTED_MODULE_1__["AppLifecycle"].error, callback);
  });
}
function useAppHide(callback) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    warn('useAppHide 即将废弃，请使用 useAppEvent 代替。详情参考：https://remaxjs.org/guide/framework');
    return Object(_lifecycle__WEBPACK_IMPORTED_MODULE_1__["registerLifecycle"])(_AppInstanceContext__WEBPACK_IMPORTED_MODULE_3__["default"], _lifecycle__WEBPACK_IMPORTED_MODULE_1__["AppLifecycle"].hide, callback);
  });
}
function useAppPageNotFound(callback) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    warn('useAppPageNotFound 即将废弃，请使用 useAppEvent 代替。详情参考：https://remaxjs.org/guide/framework');
    return Object(_lifecycle__WEBPACK_IMPORTED_MODULE_1__["registerLifecycle"])(_AppInstanceContext__WEBPACK_IMPORTED_MODULE_3__["default"], _lifecycle__WEBPACK_IMPORTED_MODULE_1__["AppLifecycle"].pageNotFound, callback);
  });
}
function useAppShareAppMessage(callback) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    warn('useAppShareAppMessage 即将废弃，请使用 useAppEvent 代替。详情参考：https://remaxjs.org/guide/framework');
    return Object(_lifecycle__WEBPACK_IMPORTED_MODULE_1__["registerLifecycle"])(_AppInstanceContext__WEBPACK_IMPORTED_MODULE_3__["default"], _lifecycle__WEBPACK_IMPORTED_MODULE_1__["AppLifecycle"].shareAppMessage, callback);
  });
}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

/* harmony default export */ __webpack_exports__["default"] = (Object(remax__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])('index'));

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_alipay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["View"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["ScrollView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["Swiper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwiperItem", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["SwiperItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableView", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["MovableView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableArea", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["MovableArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverView", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["CoverView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverImage", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["CoverImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["Icon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["RichText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["Progress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["CheckboxGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["Checkbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["Form"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["Label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["Picker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerView", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["PickerView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerViewColumn", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["PickerViewColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["RadioGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["Radio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["Slider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["Switch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["Textarea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["Navigator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["Map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["Canvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["WebView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lifestyle", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["Lifestyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactButton", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["ContactButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["Video"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAppStub", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getAppStub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCardAuth", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["addCardAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPhoneContact", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["addPhoneContact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alert", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["alert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canIUse", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["canIUse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseAlipayContact", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["chooseAlipayContact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseCity", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["chooseCity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseContact", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["chooseContact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseImage", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["chooseImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseLocation", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["chooseLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "choosePhoneContact", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["choosePhoneContact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearStorage", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["clearStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearStorageSync", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["clearStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeBluetoothAdapter", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["closeBluetoothAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeSocket", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["closeSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compressImage", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["compressImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "confirm", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["confirm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectBLEDevice", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["connectBLEDevice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectSocket", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["connectSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAnimation", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["createAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCanvasContext", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["createCanvasContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createIntersectionObserver", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["createIntersectionObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMapContext", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["createMapContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorQuery", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["createSelectorQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createWebViewContext", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["createWebViewContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "datePicker", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["datePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disconnectBLEDevice", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["disconnectBLEDevice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["downloadFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAuthCode", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getAuthCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAuthUserInfo", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getAuthUserInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfo", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getBatteryInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfoSync", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getBatteryInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBeacons", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getBeacons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceCharacteristics", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getBLEDeviceCharacteristics"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceServices", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getBLEDeviceServices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBluetoothAdapterState", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getBluetoothAdapterState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBluetoothDevices", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getBluetoothDevices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClipboard", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getClipboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConnectedBluetoothDevices", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getConnectedBluetoothDevices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFileInfo", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getFileInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImageInfo", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getImageInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNetworkType", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getNetworkType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPhoneNumber", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getPhoneNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRunData", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getRunData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRunScene", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getRunScene"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSavedFileInfo", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getSavedFileInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSavedFileList", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getSavedFileList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScreenBrightness", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getScreenBrightness"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getServerTime", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getServerTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSetting", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getSetting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorage", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageInfo", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getStorageInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageInfoSync", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getStorageInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageSync", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSystemInfo", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getSystemInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSystemInfoSync", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getSystemInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTitleColor", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getTitleColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUpdateManager", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getUpdateManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideAddToDesktopMenu", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["hideAddToDesktopMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideAllAddToDesktopMenu", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["hideAllAddToDesktopMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideAllFavoriteMenu", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["hideAllFavoriteMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideBackHome", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["hideBackHome"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideFavoriteMenu", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["hideFavoriteMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideKeyboard", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["hideKeyboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["hideLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideNavigationBarLoading", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["hideNavigationBarLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideShareMenu", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["hideShareMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideTabBar", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["hideTabBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideTabBarRedDot", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["hideTabBarRedDot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideToast", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["hideToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadFontFace", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["loadFontFace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makePhoneCall", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["makePhoneCall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multiLevelSelect", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["multiLevelSelect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBack", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["navigateBack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBackMiniProgram", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["navigateBackMiniProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["navigateTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateToMiniProgram", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["navigateToMiniProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notifyBLECharacteristicValueChange", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["notifyBLECharacteristicValueChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAccelerometerChange", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["offAccelerometerChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBLECharacteristicValueChange", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["offBLECharacteristicValueChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBLEConnectionStateChanged", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["offBLEConnectionStateChanged"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBluetoothAdapterStateChange", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["offBluetoothAdapterStateChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBluetoothDeviceFound", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["offBluetoothDeviceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offCompassChange", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["offCompassChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offGyroscopeChange", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["offGyroscopeChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offMemoryWarning", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["offMemoryWarning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offNetworkStatusChange", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["offNetworkStatusChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offSocketClose", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["offSocketClose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offSocketError", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["offSocketError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offSocketMessage", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["offSocketMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offSocketOpen", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["offSocketOpen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offUserCaptureScreen", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["offUserCaptureScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAccelerometerChange", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["onAccelerometerChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeaconServiceChange", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["onBeaconServiceChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeaconUpdate", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["onBeaconUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBLECharacteristicValueChange", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["onBLECharacteristicValueChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBLEConnectionStateChanged", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["onBLEConnectionStateChanged"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBluetoothAdapterStateChange", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["onBluetoothAdapterStateChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBluetoothDeviceFound", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["onBluetoothDeviceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onCompassChange", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["onCompassChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onGyroscopeChange", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["onGyroscopeChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onMemoryWarning", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["onMemoryWarning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onNetworkStatusChange", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["onNetworkStatusChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketClose", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["onSocketClose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketError", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["onSocketError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketMessage", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["onSocketMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketOpen", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["onSocketOpen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onUserCaptureScreen", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["onUserCaptureScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openBluetoothAdapter", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["openBluetoothAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openCardDetail", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["openCardDetail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openCardList", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["openCardList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openKBVoucherDetail", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["openKBVoucherDetail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openLocation", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["openLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openMerchantCardList", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["openMerchantCardList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openMerchantTicketList", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["openMerchantTicketList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openMerchantVoucherList", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["openMerchantVoucherList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openSetting", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["openSetting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openTicketDetail", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["openTicketDetail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openTicketList", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["openTicketList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openVoucherDetail", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["openVoucherDetail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openVoucherList", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["openVoucherList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "optionsSelect", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["optionsSelect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pageScrollTo", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["pageScrollTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "previewImage", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["previewImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prompt", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["prompt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readBLECharacteristicValue", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["readBLECharacteristicValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["redirectTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reLaunch", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["reLaunch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeSavedFile", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["removeSavedFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeStorage", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["removeStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeStorageSync", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["removeStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeTabBarBadge", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["removeTabBarBadge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reportAnalytics", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["reportAnalytics"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "request", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["request"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rsa", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["rsa"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveFile", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["saveFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveImage", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["saveImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["scan"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKVersion", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["SDKVersion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendSocketMessage", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["sendSocketMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBackgroundColor", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["setBackgroundColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBackgroundTextStyle", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["setBackgroundTextStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCanPullDown", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["setCanPullDown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setClipboard", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["setClipboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setKeepScreenOn", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["setKeepScreenOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setNavigationBar", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["setNavigationBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setOptionMenu", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["setOptionMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setScreenBrightness", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["setScreenBrightness"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStorage", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["setStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStorageSync", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["setStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarBadge", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["setTabBarBadge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarItem", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["setTabBarItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarStyle", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["setTabBarStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showActionSheet", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["showActionSheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showAuthGuide", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["showAuthGuide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showLoading", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["showLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showNavigationBarLoading", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["showNavigationBarLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showSharePanel", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["showSharePanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showTabBar", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["showTabBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showTabBarRedDot", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["showTabBarRedDot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showToast", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["showToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startBeaconDiscovery", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["startBeaconDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startBluetoothDevicesDiscovery", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["startBluetoothDevicesDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startPullDownRefresh", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["startPullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startZMVerify", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["startZMVerify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopBeaconDiscovery", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["stopBeaconDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopBluetoothDevicesDiscovery", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["stopBluetoothDevicesDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopPullDownRefresh", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["stopPullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchTab", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["switchTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textRiskIdentification", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["textRiskIdentification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tradePay", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["tradePay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["uploadFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrate", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["vibrate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrateLong", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["vibrateLong"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrateShort", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["vibrateShort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchShake", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["watchShake"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "writeBLECharacteristicValue", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["writeBLECharacteristicValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createVideoContext", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["createVideoContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOpenUserInfo", function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__["getOpenUserInfo"]; });

/* harmony import */ var _esm_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _esm_render__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _esm_createAppConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAppConfig", function() { return _esm_createAppConfig__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _esm_createPageConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPageConfig", function() { return _esm_createPageConfig__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _esm_createHostComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHostComponent", function() { return _esm_createHostComponent__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _esm_Platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return _esm_Platform__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _esm_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageInstance", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["usePageInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_useNativeEffect", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["unstable_useNativeEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useShow", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReady", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useReady"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHide", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useHide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePullDownRefresh", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["usePullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReachBottom", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useReachBottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageScroll", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["usePageScroll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useShareAppMessage", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useShareAppMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTitleClick", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useTitleClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOptionMenuClick", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useOptionMenuClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePopMenuClick", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["usePopMenuClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePullIntercept", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["usePullIntercept"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageEvent", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["usePageEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppEvent", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useAppEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppShow", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useAppShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppLaunch", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useAppLaunch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppError", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useAppError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppHide", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useAppHide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppPageNotFound", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useAppPageNotFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppShareAppMessage", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useAppShareAppMessage"]; });









/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hostComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["View"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["ScrollView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Swiper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwiperItem", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["SwiperItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["MovableView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableArea", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["MovableArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["CoverView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverImage", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["CoverImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Icon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["RichText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Progress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["CheckboxGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Checkbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Form"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Picker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["PickerView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerViewColumn", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["PickerViewColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["RadioGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Radio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Slider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Switch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Textarea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Navigator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Canvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["WebView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lifestyle", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Lifestyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactButton", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["ContactButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Video"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAppStub", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getAppStub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCardAuth", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["addCardAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPhoneContact", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["addPhoneContact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alert", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["alert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canIUse", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["canIUse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseAlipayContact", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseAlipayContact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseCity", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseCity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseContact", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseContact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseImage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseLocation", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "choosePhoneContact", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["choosePhoneContact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearStorage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["clearStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearStorageSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["clearStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeBluetoothAdapter", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["closeBluetoothAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeSocket", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["closeSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compressImage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["compressImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "confirm", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["confirm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectBLEDevice", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["connectBLEDevice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectSocket", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["connectSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAnimation", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCanvasContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createCanvasContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createIntersectionObserver", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createIntersectionObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMapContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createMapContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorQuery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createSelectorQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createWebViewContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createWebViewContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "datePicker", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["datePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disconnectBLEDevice", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["disconnectBLEDevice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["downloadFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAuthCode", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getAuthCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAuthUserInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getAuthUserInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBatteryInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfoSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBatteryInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBeacons", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBeacons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceCharacteristics", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBLEDeviceCharacteristics"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceServices", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBLEDeviceServices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBluetoothAdapterState", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBluetoothAdapterState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBluetoothDevices", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBluetoothDevices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClipboard", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getClipboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConnectedBluetoothDevices", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getConnectedBluetoothDevices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFileInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getFileInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImageInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getImageInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNetworkType", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getNetworkType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPhoneNumber", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getPhoneNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRunData", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getRunData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRunScene", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getRunScene"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSavedFileInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSavedFileInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSavedFileList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSavedFileList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScreenBrightness", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getScreenBrightness"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getServerTime", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getServerTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSetting", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSetting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getStorageInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageInfoSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getStorageInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSystemInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSystemInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSystemInfoSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSystemInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTitleColor", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getTitleColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUpdateManager", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getUpdateManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideAddToDesktopMenu", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideAddToDesktopMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideAllAddToDesktopMenu", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideAllAddToDesktopMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideAllFavoriteMenu", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideAllFavoriteMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideBackHome", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideBackHome"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideFavoriteMenu", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideFavoriteMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideKeyboard", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideKeyboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideNavigationBarLoading", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideNavigationBarLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideShareMenu", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideShareMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideTabBar", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideTabBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideTabBarRedDot", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideTabBarRedDot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideToast", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadFontFace", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["loadFontFace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makePhoneCall", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["makePhoneCall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multiLevelSelect", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["multiLevelSelect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBack", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateBack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBackMiniProgram", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateBackMiniProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateToMiniProgram", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateToMiniProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notifyBLECharacteristicValueChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["notifyBLECharacteristicValueChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAccelerometerChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offAccelerometerChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBLECharacteristicValueChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offBLECharacteristicValueChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBLEConnectionStateChanged", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offBLEConnectionStateChanged"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBluetoothAdapterStateChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offBluetoothAdapterStateChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBluetoothDeviceFound", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offBluetoothDeviceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offCompassChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offCompassChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offGyroscopeChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offGyroscopeChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offMemoryWarning", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offMemoryWarning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offNetworkStatusChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offNetworkStatusChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offSocketClose", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offSocketClose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offSocketError", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offSocketError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offSocketMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offSocketMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offSocketOpen", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offSocketOpen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offUserCaptureScreen", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offUserCaptureScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAccelerometerChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onAccelerometerChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeaconServiceChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBeaconServiceChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeaconUpdate", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBeaconUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBLECharacteristicValueChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBLECharacteristicValueChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBLEConnectionStateChanged", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBLEConnectionStateChanged"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBluetoothAdapterStateChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBluetoothAdapterStateChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBluetoothDeviceFound", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBluetoothDeviceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onCompassChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onCompassChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onGyroscopeChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onGyroscopeChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onMemoryWarning", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onMemoryWarning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onNetworkStatusChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onNetworkStatusChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketClose", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onSocketClose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketError", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onSocketError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onSocketMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketOpen", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onSocketOpen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onUserCaptureScreen", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onUserCaptureScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openBluetoothAdapter", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openBluetoothAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openCardDetail", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openCardDetail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openCardList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openCardList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openKBVoucherDetail", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openKBVoucherDetail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openLocation", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openMerchantCardList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openMerchantCardList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openMerchantTicketList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openMerchantTicketList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openMerchantVoucherList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openMerchantVoucherList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openSetting", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openSetting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openTicketDetail", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openTicketDetail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openTicketList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openTicketList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openVoucherDetail", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openVoucherDetail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openVoucherList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openVoucherList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "optionsSelect", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["optionsSelect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pageScrollTo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["pageScrollTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "previewImage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["previewImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prompt", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["prompt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readBLECharacteristicValue", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["readBLECharacteristicValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["redirectTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reLaunch", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["reLaunch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeSavedFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["removeSavedFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeStorage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["removeStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeStorageSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["removeStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeTabBarBadge", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["removeTabBarBadge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reportAnalytics", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["reportAnalytics"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "request", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["request"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rsa", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["rsa"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["saveFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveImage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["saveImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["scan"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKVersion", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["SDKVersion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendSocketMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["sendSocketMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBackgroundColor", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setBackgroundColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBackgroundTextStyle", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setBackgroundTextStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCanPullDown", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setCanPullDown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setClipboard", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setClipboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setKeepScreenOn", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setKeepScreenOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setNavigationBar", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setNavigationBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setOptionMenu", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setOptionMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setScreenBrightness", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setScreenBrightness"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStorage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStorageSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarBadge", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setTabBarBadge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarItem", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setTabBarItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarStyle", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setTabBarStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showActionSheet", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showActionSheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showAuthGuide", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showAuthGuide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showLoading", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showNavigationBarLoading", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showNavigationBarLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showSharePanel", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showSharePanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showTabBar", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showTabBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showTabBarRedDot", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showTabBarRedDot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showToast", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startBeaconDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startBeaconDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startBluetoothDevicesDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startBluetoothDevicesDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startPullDownRefresh", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startPullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startZMVerify", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startZMVerify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopBeaconDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopBeaconDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopBluetoothDevicesDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopBluetoothDevicesDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopPullDownRefresh", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopPullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchTab", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["switchTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textRiskIdentification", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["textRiskIdentification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tradePay", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["tradePay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["uploadFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrate", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["vibrate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrateLong", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["vibrateLong"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrateShort", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["vibrateShort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchShake", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["watchShake"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "writeBLECharacteristicValue", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["writeBLECharacteristicValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createVideoContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createVideoContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOpenUserInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getOpenUserInfo"]; });




/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _View__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _ScrollView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return _ScrollView__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return _Swiper__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _SwiperItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwiperItem", function() { return _SwiperItem__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _MovableView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableView", function() { return _MovableView__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _MovableArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableArea", function() { return _MovableArea__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _CoverView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverView", function() { return _CoverView__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _CoverImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverImage", function() { return _CoverImage__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _Icon__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _Text__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _RichText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return _RichText__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Progress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _Progress__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _CheckboxGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(58);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return _CheckboxGroup__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(59);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _Checkbox__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(60);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _Form__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(61);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(62);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _Label__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Picker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(63);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _Picker__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _PickerView__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(64);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerView", function() { return _PickerView__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _PickerViewColumn__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(65);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerViewColumn", function() { return _PickerViewColumn__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _RadioGroup__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(66);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return _RadioGroup__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(67);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _Radio__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(68);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _Slider__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(69);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _Switch__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(70);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _Textarea__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Navigator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(71);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return _Navigator__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(72);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _Image__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(73);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return _Map__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(74);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return _Canvas__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _WebView__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(75);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return _WebView__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Lifestyle__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(76);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lifestyle", function() { return _Lifestyle__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _ContactButton__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(77);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactButton", function() { return _ContactButton__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(78);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return _Video__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* empty/unused harmony star reexport */




































































/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

var View = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('view');
/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createHostComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) {
          t[p] = s[p];
        }
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};


function createHostComponent(name) {
  var Component = function Component(props, ref) {
    var _a = props.children,
        children = _a === void 0 ? [] : _a;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](name, __assign(__assign({}, props), {
      ref: ref
    }), children);
  };

  return react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](Component);
}

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

var ScrollView = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('scroll-view');
/* harmony default export */ __webpack_exports__["default"] = (ScrollView);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('swiper'));

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('swiper-item'));

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

var MovableView = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('movable-view');
/* harmony default export */ __webpack_exports__["default"] = (MovableView);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

var MovableArea = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('movable-area');
/* harmony default export */ __webpack_exports__["default"] = (MovableArea);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

var CoverView = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('cover-view');
/* harmony default export */ __webpack_exports__["default"] = (CoverView);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

var CoverImage = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('cover-image');
/* harmony default export */ __webpack_exports__["default"] = (CoverImage);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('icon'));

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

var Text = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('text');
/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('rich-text'));

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('progress'));

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

var Button = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('button');
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('checkbox-group'));

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('checkbox'));

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

var Form = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('form');
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

var Input = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('input');
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('label'));

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('picker'));

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

var PickerView = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('picker-view');
/* harmony default export */ __webpack_exports__["default"] = (PickerView);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('picker-view-column'));

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('radio-group'));

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('radio'));

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('slider'));

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('switch'));

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

var Textarea = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('textarea');
/* harmony default export */ __webpack_exports__["default"] = (Textarea);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('navigator'));

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

var Image = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('image');
/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

var Map = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('map');
/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

var Canvas = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('canvas');
/* harmony default export */ __webpack_exports__["default"] = (Canvas);

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('web-view'));

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('lifestyle'));

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('contact-button'));

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('video'));

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppStub", function() { return getAppStub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCardAuth", function() { return addCardAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPhoneContact", function() { return addPhoneContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alert", function() { return alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canIUse", function() { return canIUse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseAlipayContact", function() { return chooseAlipayContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseCity", function() { return chooseCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseContact", function() { return chooseContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseImage", function() { return chooseImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseLocation", function() { return chooseLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choosePhoneContact", function() { return choosePhoneContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStorage", function() { return clearStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStorageSync", function() { return clearStorageSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeBluetoothAdapter", function() { return closeBluetoothAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeSocket", function() { return closeSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compressImage", function() { return compressImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirm", function() { return confirm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectBLEDevice", function() { return connectBLEDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectSocket", function() { return connectSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAnimation", function() { return createAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCanvasContext", function() { return createCanvasContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createIntersectionObserver", function() { return createIntersectionObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMapContext", function() { return createMapContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorQuery", function() { return createSelectorQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWebViewContext", function() { return createWebViewContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datePicker", function() { return datePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disconnectBLEDevice", function() { return disconnectBLEDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return downloadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthCode", function() { return getAuthCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthUserInfo", function() { return getAuthUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfo", function() { return getBatteryInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfoSync", function() { return getBatteryInfoSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBeacons", function() { return getBeacons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceCharacteristics", function() { return getBLEDeviceCharacteristics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceServices", function() { return getBLEDeviceServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBluetoothAdapterState", function() { return getBluetoothAdapterState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBluetoothDevices", function() { return getBluetoothDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClipboard", function() { return getClipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConnectedBluetoothDevices", function() { return getConnectedBluetoothDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFileInfo", function() { return getFileInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageInfo", function() { return getImageInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNetworkType", function() { return getNetworkType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPhoneNumber", function() { return getPhoneNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRunData", function() { return getRunData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRunScene", function() { return getRunScene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedFileInfo", function() { return getSavedFileInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedFileList", function() { return getSavedFileList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScreenBrightness", function() { return getScreenBrightness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerTime", function() { return getServerTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetting", function() { return getSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorage", function() { return getStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorageInfo", function() { return getStorageInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorageInfoSync", function() { return getStorageInfoSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorageSync", function() { return getStorageSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSystemInfo", function() { return getSystemInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSystemInfoSync", function() { return getSystemInfoSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTitleColor", function() { return getTitleColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUpdateManager", function() { return getUpdateManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideAddToDesktopMenu", function() { return hideAddToDesktopMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideAllAddToDesktopMenu", function() { return hideAllAddToDesktopMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideAllFavoriteMenu", function() { return hideAllFavoriteMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideBackHome", function() { return hideBackHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideFavoriteMenu", function() { return hideFavoriteMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideKeyboard", function() { return hideKeyboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return hideLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideNavigationBarLoading", function() { return hideNavigationBarLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideShareMenu", function() { return hideShareMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideTabBar", function() { return hideTabBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideTabBarRedDot", function() { return hideTabBarRedDot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideToast", function() { return hideToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFontFace", function() { return loadFontFace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePhoneCall", function() { return makePhoneCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiLevelSelect", function() { return multiLevelSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateBack", function() { return navigateBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateBackMiniProgram", function() { return navigateBackMiniProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return navigateTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateToMiniProgram", function() { return navigateToMiniProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyBLECharacteristicValueChange", function() { return notifyBLECharacteristicValueChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offAccelerometerChange", function() { return offAccelerometerChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offBLECharacteristicValueChange", function() { return offBLECharacteristicValueChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offBLEConnectionStateChanged", function() { return offBLEConnectionStateChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offBluetoothAdapterStateChange", function() { return offBluetoothAdapterStateChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offBluetoothDeviceFound", function() { return offBluetoothDeviceFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offCompassChange", function() { return offCompassChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offGyroscopeChange", function() { return offGyroscopeChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offMemoryWarning", function() { return offMemoryWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offNetworkStatusChange", function() { return offNetworkStatusChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offSocketClose", function() { return offSocketClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offSocketError", function() { return offSocketError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offSocketMessage", function() { return offSocketMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offSocketOpen", function() { return offSocketOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offUserCaptureScreen", function() { return offUserCaptureScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAccelerometerChange", function() { return onAccelerometerChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBeaconServiceChange", function() { return onBeaconServiceChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBeaconUpdate", function() { return onBeaconUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBLECharacteristicValueChange", function() { return onBLECharacteristicValueChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBLEConnectionStateChanged", function() { return onBLEConnectionStateChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBluetoothAdapterStateChange", function() { return onBluetoothAdapterStateChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBluetoothDeviceFound", function() { return onBluetoothDeviceFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onCompassChange", function() { return onCompassChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onGyroscopeChange", function() { return onGyroscopeChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMemoryWarning", function() { return onMemoryWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNetworkStatusChange", function() { return onNetworkStatusChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSocketClose", function() { return onSocketClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSocketError", function() { return onSocketError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSocketMessage", function() { return onSocketMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSocketOpen", function() { return onSocketOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onUserCaptureScreen", function() { return onUserCaptureScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openBluetoothAdapter", function() { return openBluetoothAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCardDetail", function() { return openCardDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCardList", function() { return openCardList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openKBVoucherDetail", function() { return openKBVoucherDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openLocation", function() { return openLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openMerchantCardList", function() { return openMerchantCardList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openMerchantTicketList", function() { return openMerchantTicketList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openMerchantVoucherList", function() { return openMerchantVoucherList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSetting", function() { return openSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openTicketDetail", function() { return openTicketDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openTicketList", function() { return openTicketList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openVoucherDetail", function() { return openVoucherDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openVoucherList", function() { return openVoucherList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsSelect", function() { return optionsSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageScrollTo", function() { return pageScrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previewImage", function() { return previewImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prompt", function() { return prompt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readBLECharacteristicValue", function() { return readBLECharacteristicValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return redirectTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reLaunch", function() { return reLaunch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeSavedFile", function() { return removeSavedFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeStorage", function() { return removeStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeStorageSync", function() { return removeStorageSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTabBarBadge", function() { return removeTabBarBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportAnalytics", function() { return reportAnalytics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rsa", function() { return rsa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveFile", function() { return saveFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveImage", function() { return saveImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return scan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDKVersion", function() { return SDKVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendSocketMessage", function() { return sendSocketMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBackgroundColor", function() { return setBackgroundColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBackgroundTextStyle", function() { return setBackgroundTextStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCanPullDown", function() { return setCanPullDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setClipboard", function() { return setClipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setKeepScreenOn", function() { return setKeepScreenOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNavigationBar", function() { return setNavigationBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOptionMenu", function() { return setOptionMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setScreenBrightness", function() { return setScreenBrightness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStorage", function() { return setStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStorageSync", function() { return setStorageSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTabBarBadge", function() { return setTabBarBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTabBarItem", function() { return setTabBarItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTabBarStyle", function() { return setTabBarStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showActionSheet", function() { return showActionSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAuthGuide", function() { return showAuthGuide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showLoading", function() { return showLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showNavigationBarLoading", function() { return showNavigationBarLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSharePanel", function() { return showSharePanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTabBar", function() { return showTabBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTabBarRedDot", function() { return showTabBarRedDot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showToast", function() { return showToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startBeaconDiscovery", function() { return startBeaconDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startBluetoothDevicesDiscovery", function() { return startBluetoothDevicesDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startPullDownRefresh", function() { return startPullDownRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startZMVerify", function() { return startZMVerify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopBeaconDiscovery", function() { return stopBeaconDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopBluetoothDevicesDiscovery", function() { return stopBluetoothDevicesDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopPullDownRefresh", function() { return stopPullDownRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchTab", function() { return switchTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textRiskIdentification", function() { return textRiskIdentification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tradePay", function() { return tradePay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return uploadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vibrate", function() { return vibrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vibrateLong", function() { return vibrateLong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vibrateShort", function() { return vibrateShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchShake", function() { return watchShake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeBLECharacteristicValue", function() { return writeBLECharacteristicValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVideoContext", function() { return createVideoContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOpenUserInfo", function() { return getOpenUserInfo; });
/* harmony import */ var _promisify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);

var getAppStub = getApp;
var addCardAuth = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.addCardAuth);
var addPhoneContact = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.addPhoneContact);
var alert = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.alert);
var canIUse = my.canIUse;
var chooseAlipayContact = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.chooseAlipayContact);
var chooseCity = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.chooseCity);
var chooseContact = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.chooseContact);
var chooseImage = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.chooseImage);
var chooseLocation = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.chooseLocation);
var choosePhoneContact = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.choosePhoneContact);
var clearStorage = my.clearStorage;
var clearStorageSync = my.clearStorageSync;
var closeBluetoothAdapter = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.closeBluetoothAdapter);
var closeSocket = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.closeSocket);
var compressImage = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.compressImage);
var confirm = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.confirm);
var connectBLEDevice = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.connectBLEDevice);
var connectSocket = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.connectSocket);
var createAnimation = my.createAnimation;
var createCanvasContext = my.createCanvasContext;
var createIntersectionObserver = my.createIntersectionObserver;
var createMapContext = my.createMapContext;
var createSelectorQuery = my.createSelectorQuery;
var createWebViewContext = my.createWebViewContext;
var datePicker = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.datePicker);
var disconnectBLEDevice = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.disconnectBLEDevice);
var downloadFile = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.downloadFile);
var getAuthCode = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.getAuthCode);
var getAuthUserInfo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.getAuthUserInfo);
var getBatteryInfo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.getBatteryInfo);
var getBatteryInfoSync = my.getBatteryInfoSync;
var getBeacons = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.getBeacons);
var getBLEDeviceCharacteristics = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.getBLEDeviceCharacteristics);
var getBLEDeviceServices = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.getBLEDeviceServices);
var getBluetoothAdapterState = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.getBluetoothAdapterState);
var getBluetoothDevices = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.getBluetoothDevices);
var getClipboard = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.getClipboard);
var getConnectedBluetoothDevices = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.getConnectedBluetoothDevices);
var getFileInfo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.getFileInfo);
var getImageInfo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.getImageInfo);
var getLocation = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.getLocation);
var getNetworkType = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.getNetworkType);
var getPhoneNumber = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.getPhoneNumber);
var getRunData = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.getRunData);
var getRunScene = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.getRunScene);
var getSavedFileInfo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.getSavedFileInfo);
var getSavedFileList = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.getSavedFileList);
var getScreenBrightness = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.getScreenBrightness);
var getServerTime = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.getServerTime);
var getSetting = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.getSetting);
var getStorage = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.getStorage);
var getStorageInfo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.getStorageInfo);
var getStorageInfoSync = my.getStorageInfoSync;
var getStorageSync = my.getStorageSync;
var getSystemInfo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.getSystemInfo);
var getSystemInfoSync = my.getSystemInfoSync;
var getTitleColor = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.getTitleColor);
var getUpdateManager = my.getUpdateManager;
var hideAddToDesktopMenu = my.hideAddToDesktopMenu;
var hideAllAddToDesktopMenu = my.hideAllAddToDesktopMenu;
var hideAllFavoriteMenu = my.hideAllFavoriteMenu;
var hideBackHome = my.hideBackHome;
var hideFavoriteMenu = my.hideFavoriteMenu;
var hideKeyboard = my.hideKeyboard;
var hideLoading = my.hideLoading;
var hideNavigationBarLoading = my.hideNavigationBarLoading;
var hideShareMenu = my.hideShareMenu;
var hideTabBar = my.hideTabBar;
var hideTabBarRedDot = my.hideTabBarRedDot;
var hideToast = my.hideToast;
var loadFontFace = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.loadFontFace);
var makePhoneCall = my.makePhoneCall;
var multiLevelSelect = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.multiLevelSelect);
var navigateBack = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.navigateBack);
var navigateBackMiniProgram = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.navigateBackMiniProgram);
var navigateTo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.navigateTo);
var navigateToMiniProgram = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.navigateToMiniProgram);
var notifyBLECharacteristicValueChange = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.notifyBLECharacteristicValueChange);
var offAccelerometerChange = my.offAccelerometerChange;
var offBLECharacteristicValueChange = my.offBLECharacteristicValueChange;
var offBLEConnectionStateChanged = my.offBLEConnectionStateChanged;
var offBluetoothAdapterStateChange = my.offBluetoothAdapterStateChange;
var offBluetoothDeviceFound = my.offBluetoothDeviceFound;
var offCompassChange = my.offCompassChange;
var offGyroscopeChange = my.offGyroscopeChange;
var offMemoryWarning = my.offMemoryWarning;
var offNetworkStatusChange = my.offNetworkStatusChange;
var offSocketClose = my.offSocketClose;
var offSocketError = my.offSocketError;
var offSocketMessage = my.offSocketMessage;
var offSocketOpen = my.offSocketOpen;
var offUserCaptureScreen = my.offUserCaptureScreen;
var onAccelerometerChange = my.onAccelerometerChange;
var onBeaconServiceChange = my.onBeaconServiceChange;
var onBeaconUpdate = my.onBeaconUpdate;
var onBLECharacteristicValueChange = my.onBLECharacteristicValueChange;
var onBLEConnectionStateChanged = my.onBLEConnectionStateChanged;
var onBluetoothAdapterStateChange = my.onBluetoothAdapterStateChange;
var onBluetoothDeviceFound = my.onBluetoothDeviceFound;
var onCompassChange = my.onCompassChange;
var onGyroscopeChange = my.onGyroscopeChange;
var onMemoryWarning = my.onMemoryWarning;
var onNetworkStatusChange = my.onNetworkStatusChange;
var onSocketClose = my.onSocketClose;
var onSocketError = my.onSocketError;
var onSocketMessage = my.onSocketMessage;
var onSocketOpen = my.onSocketOpen;
var onUserCaptureScreen = my.onUserCaptureScreen;
var openBluetoothAdapter = my.openBluetoothAdapter;
var openCardDetail = my.openCardDetail;
var openCardList = my.openCardList;
var openKBVoucherDetail = my.openKBVoucherDetail;
var openLocation = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.openLocation);
var openMerchantCardList = my.openMerchantCardList;
var openMerchantTicketList = my.openMerchantTicketList;
var openMerchantVoucherList = my.openMerchantVoucherList;
var openSetting = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.openSetting);
var openTicketDetail = my.openTicketDetail;
var openTicketList = my.openTicketList;
var openVoucherDetail = my.openVoucherDetail;
var openVoucherList = my.openVoucherList;
var optionsSelect = my.optionsSelect;
var pageScrollTo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.pageScrollTo);
var previewImage = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.previewImage);
var prompt = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.prompt);
var readBLECharacteristicValue = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.readBLECharacteristicValue);
var redirectTo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.redirectTo);
var reLaunch = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.reLaunch);
var removeSavedFile = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.removeSavedFile);
var removeStorage = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.removeStorage);
var removeStorageSync = my.removeStorageSync;
var removeTabBarBadge = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.removeTabBarBadge);
var reportAnalytics = my.reportAnalytics;
var request = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.request);
var rsa = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.rsa);
var saveFile = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.saveFile);
var saveImage = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.saveImage);
var scan = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.scan);
var SDKVersion = my.SDKVersion;
var sendSocketMessage = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.sendSocketMessage);
var setBackgroundColor = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.setBackgroundColor);
var setBackgroundTextStyle = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.setBackgroundTextStyle);
var setCanPullDown = my.setCanPullDown;
var setClipboard = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.setClipboard);
var setKeepScreenOn = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.setKeepScreenOn);
var setNavigationBar = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.setNavigationBar);
var setOptionMenu = my.setOptionMenu;
var setScreenBrightness = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.setScreenBrightness);
var setStorage = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.setStorage);
var setStorageSync = my.setStorageSync;
var setTabBarBadge = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.setTabBarBadge);
var setTabBarItem = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.setTabBarItem);
var setTabBarStyle = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.setTabBarStyle);
var showActionSheet = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.showActionSheet);
var showAuthGuide = my.showAuthGuide;
var showLoading = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.showLoading);
var showNavigationBarLoading = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.showNavigationBarLoading);
var showSharePanel = my.showSharePanel;
var showTabBar = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.showTabBar);
var showTabBarRedDot = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.showTabBarRedDot);
var showToast = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.showToast);
var startBeaconDiscovery = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.startBeaconDiscovery);
var startBluetoothDevicesDiscovery = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.startBluetoothDevicesDiscovery);
var startPullDownRefresh = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.startPullDownRefresh);
var startZMVerify = my.startZMVerify;
var stopBeaconDiscovery = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.stopBeaconDiscovery);
var stopBluetoothDevicesDiscovery = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.stopBluetoothDevicesDiscovery);
var stopPullDownRefresh = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.stopPullDownRefresh);
var switchTab = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.switchTab);
var textRiskIdentification = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.textRiskIdentification);
var tradePay = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.tradePay);
var uploadFile = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.uploadFile);
var vibrate = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.vibrate);
var vibrateLong = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.vibrateLong);
var vibrateShort = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.vibrateShort);
var watchShake = my.watchShake;
var writeBLECharacteristicValue = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.writeBLECharacteristicValue);
var createVideoContext = my.createVideoContext;
var getOpenUserInfo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(my.getOpenUserInfo);

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) {
          t[p] = s[p];
        }
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

function promisify(api) {
  return function (arg) {
    if (arg === void 0) {
      arg = {};
    }

    return new Promise(function (resolve, reject) {
      var promisifyArg = arg;
      api(__assign(__assign({}, promisifyArg), {
        success: function success(res) {
          if (promisifyArg && typeof promisifyArg.success === 'function') {
            promisifyArg.success(res);
          }

          resolve(res);
        },
        fail: function fail(res) {
          if (promisifyArg && typeof promisifyArg.fail === 'function') {
            promisifyArg.fail(res);
          }

          reject(res);
        }
      }));
    });
  };
}

/* harmony default export */ __webpack_exports__["default"] = (promisify);

/***/ })
],[[2,0]]]);