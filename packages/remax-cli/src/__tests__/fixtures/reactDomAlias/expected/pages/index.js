require('./../runtime.js');
(my["webpackJsonp"] = my["webpackJsonp"] || []).push([[2],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

module.exports = "@remax/runtime";

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "react";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_ali__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var remax_ali__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remax_ali__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);




Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["unstable_batchedUpdates"])(function () {});

var _page = function _page() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_ali__WEBPACK_IMPORTED_MODULE_2__["View"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_page, "pages/index")));

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "remax/ali";

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return unstable_batchedUpdates; });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _render__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _createAppConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAppConfig", function() { return _createAppConfig__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _createPageConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPageConfig", function() { return _createPageConfig__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHostComponent", function() { return _createHostComponent__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _createNativeComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createNativeComponent", function() { return _createNativeComponent__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageInstance", function() { return _hooks__WEBPACK_IMPORTED_MODULE_5__["usePageInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return _hooks__WEBPACK_IMPORTED_MODULE_5__["useQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNativeEffect", function() { return _hooks__WEBPACK_IMPORTED_MODULE_5__["useNativeEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageEvent", function() { return _hooks__WEBPACK_IMPORTED_MODULE_5__["usePageEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppEvent", function() { return _hooks__WEBPACK_IMPORTED_MODULE_5__["useAppEvent"]; });







 // eslint-disable-next-line @typescript-eslint/camelcase

var unstable_batchedUpdates = _render__WEBPACK_IMPORTED_MODULE_0__["ReactReconcilerInst"].batchedUpdates;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactReconcilerInst", function() { return ReactReconcilerInst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var react_reconciler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react_reconciler__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_reconciler__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hostConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);


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
/* 9 */
/***/ (function(module, exports) {

module.exports = "react-reconciler";

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var scheduler__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scheduler__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _instanceId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _VNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _SyntheticEvent_createCallbackProxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _diffProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);
var __values = undefined && undefined.__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};







var scheduleDeferredCallback = scheduler__WEBPACK_IMPORTED_MODULE_0__["unstable_scheduleCallback"],
    cancelDeferredCallback = scheduler__WEBPACK_IMPORTED_MODULE_0__["unstable_cancelCallback"],
    shouldYield = scheduler__WEBPACK_IMPORTED_MODULE_0__["unstable_shouldYield"],
    now = scheduler__WEBPACK_IMPORTED_MODULE_0__["unstable_now"];

function processProps(newProps, node, id) {
  var e_1, _a;

  var props = {};

  try {
    for (var _b = __values(Object.keys(newProps)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var propKey = _c.value;

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
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_1) throw e_1.error;
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
/* 11 */
/***/ (function(module, exports) {

module.exports = "scheduler";

/***/ }),
/* 12 */
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
/* 13 */
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _propsAlias__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);



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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlias", function() { return getAlias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return propsAlias; });
/* harmony import */ var _utils_plainStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function getAlias(prop, type) {
  var _a, _b;

  prop = prop.replace('className', 'class');
  var hostComponent = _createHostComponent__WEBPACK_IMPORTED_MODULE_1__["hostComponents"][type];
  var prefix = "ali" + "-"; // 判断是否是平台独有属性

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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSSProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = undefined && undefined.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
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

    return __spread(acc, [transformReactStyleKey(key) + ":" + ( true ? transformPx(value) : undefined) + ";"]);
  }, []).join('');
};

/* harmony default export */ __webpack_exports__["default"] = (plainStyle);

/***/ }),
/* 17 */
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
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
};

for (var prop in isUnitlessNumber) {
  _loop_1(prop);
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hostComponents", function() { return hostComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createHostComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
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
      "enableNative": "enableNative",
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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCallbackProxy", function() { return createCallbackProxy; });
/* harmony import */ var _stopPropagation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = undefined && undefined.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
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
  if (!nativeEvent) {
    return;
  } // 添加阻止冒泡方法


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

    return callback.apply(void 0, __spread([syntheticEvent], restParams));
  };
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPropagationStopped", function() { return isPropagationStopped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return stopPropagation; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);

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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEPRECATED_CATCH_TYPE", function() { return DEPRECATED_CATCH_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYNTHETIC_TYPES", function() { return SYNTHETIC_TYPES; });
var DEPRECATED_CATCH_TYPE = 'catchClick';
var SYNTHETIC_TYPES = ['onClick', 'onTap', 'onLongClick', 'onLongTap'];

/***/ }),
/* 22 */
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
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createAppConfig; });
/* harmony import */ var _polyfills_Function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _polyfills_Function__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfills_Function__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _AppContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
/* harmony import */ var _utils_isClassComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);
/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27);
/* harmony import */ var _AppInstanceContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31);
/* harmony import */ var _ReactIs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32);
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
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

var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = undefined && undefined.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};










var DefaultAppComponent =
/** @class */
function (_super) {
  __extends(DefaultAppComponent, _super);

  function DefaultAppComponent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  DefaultAppComponent.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, this.props.children);
  };

  return DefaultAppComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

function createAppConfig(App) {
  var _this = this;

  var createConfig = function createConfig(AppComponent) {
    if (AppComponent === void 0) {
      AppComponent = DefaultAppComponent;
    }

    var config = {
      _container: new _AppContainer__WEBPACK_IMPORTED_MODULE_3__["default"](_this),
      _pages: [],
      _instance: react__WEBPACK_IMPORTED_MODULE_1__["createRef"](),
      onLaunch: function onLaunch(options) {
        this._render();

        return this.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_5__["AppLifecycle"].launch, options);
      },
      callLifecycle: function callLifecycle(lifecycle) {
        var _a;

        var args = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }

        var callbacks = _AppInstanceContext__WEBPACK_IMPORTED_MODULE_6__["default"].lifecycleCallback[lifecycle] || [];
        var result;
        callbacks.forEach(function (callback) {
          result = callback.apply(void 0, __spread(args));
        });

        if (result) {
          return result;
        }

        var callback = Object(_lifecycle__WEBPACK_IMPORTED_MODULE_5__["callbackName"])(lifecycle);

        if (this._instance.current && this._instance.current[callback]) {
          return (_a = this._instance.current)[callback].apply(_a, __spread(args));
        }
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

        return Object(_render__WEBPACK_IMPORTED_MODULE_2__["default"])(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](AppComponent, props, this._pages.map(function (p) {
          return p.element;
        })), this._container);
      }
    };
    var lifecycleEvent = {
      onShow: function onShow(options) {
        return this.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_5__["AppLifecycle"].show, options);
      },
      onHide: function onHide() {
        return this.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_5__["AppLifecycle"].hide);
      },
      onError: function onError(error) {
        return this.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_5__["AppLifecycle"].error, error);
      },
      // 阿里
      onShareAppMessage: function onShareAppMessage(options) {
        return this.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_5__["AppLifecycle"].shareAppMessage, options);
      },
      // 微信
      onPageNotFound: function onPageNotFound(options) {
        return this.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_5__["AppLifecycle"].pageNotFound, options);
      }
    };
    Object(_lifecycle__WEBPACK_IMPORTED_MODULE_5__["appEvents"])().forEach(function (eventName) {
      if (lifecycleEvent[eventName]) {
        config[eventName] = lifecycleEvent[eventName];
      }
    });
    return config;
  };

  return createConfig(App);
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};
/* eslint-disable prefer-rest-params */

/* istanbul ignore next */


if (typeof Function.prototype.call === 'undefined') {
  Function.prototype.call = function (context) {
    context = context || window;
    context.fn = this;

    var args = __spread(arguments).slice(1);

    var result = context.fn.apply(context, __spread(args));
    delete context.fn;
    return result;
  };
}
/* istanbul ignore next */


if (typeof Function.prototype.apply === 'undefined') {
  Function.prototype.apply = function (context) {
    context = context || window;
    context.fn = this;
    var result;

    if (arguments[1]) {
      result = context.fn.apply(context, __spread(arguments[1]));
    } else {
      result = context.fn();
    }

    delete context.fn;
    return result;
  };
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _instanceId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);



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
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isClassComponent; });
function isClassComponent(Component) {
  return Component.prototype && typeof Component.prototype.render === 'function';
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lifecycle", function() { return Lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLifecycle", function() { return AppLifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lifeCycleName", function() { return lifeCycleName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callbackName", function() { return callbackName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerLifecycle", function() { return registerLifecycle; });
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _utils_lowercase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pageEvents", function() { return _events__WEBPACK_IMPORTED_MODULE_2__["pageEvents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appEvents", function() { return _events__WEBPACK_IMPORTED_MODULE_2__["appEvents"]; });



var Lifecycle;

(function (Lifecycle) {
  Lifecycle["load"] = "load";
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
  Lifecycle["unload"] = "unload";
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
    return name;
  }

  return 'on' + Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
}
function registerLifecycle(instance, method, callback) {
  return instance.registerLifecycle(method, callback);
}


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return capitalize; });
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lowercase; });
function lowercase(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageEvents", function() { return pageEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appEvents", function() { return appEvents; });
var PAGE_EVENTS = {
  "pages/index": []
};
var APP_EVENTS = [];
function pageEvents(name) {
  return PAGE_EVENTS[name];
}
function appEvents() {
  return APP_EVENTS;
}

/***/ }),
/* 31 */
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
/* 32 */
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
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
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
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetPageId", function() { return resetPageId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createPageConfig; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createPageWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var _stopPullDownRefresh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37);
/* harmony import */ var _ReactPortal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40);
var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = undefined && undefined.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};







var idCounter = 0;

function generatePageId() {
  var id = idCounter;
  var pageId = 'page_' + id;
  idCounter += 1;
  return pageId;
} // for testing


function resetPageId() {
  idCounter = 0;
}
function createPageConfig(Page, name) {
  var app = getApp();
  var config = {
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
      this.pageId = generatePageId();
      this.query = query;
      this.container = new _Container__WEBPACK_IMPORTED_MODULE_4__["default"](this);
      this.element = Object(_ReactPortal__WEBPACK_IMPORTED_MODULE_5__["createPortal"])(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PageWrapper, {
        page: this,
        ref: this.wrapperRef
      }), this.container, this.pageId);

      app._mount(this);
    },
    onUnload: function onUnload() {
      this.unloaded = true;
      this.container.clearUpdate();

      app._unmount(this);

      return this.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["Lifecycle"].load);
    },
    onTabItemTap: function onTabItemTap(e) {
      return this.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["Lifecycle"].tabItemTap, e);
    },
    onResize: function onResize(e) {
      return this.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["Lifecycle"].resize, e);
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
      callbacks.forEach(function (callback) {
        result = callback.apply(void 0, __spread(args));
      });

      if (result) {
        return result;
      }

      var callback = Object(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["callbackName"])(lifecycle);

      if (this.wrapperRef.current && this.wrapperRef.current[callback]) {
        return (_a = this.wrapperRef.current)[callback].apply(_a, __spread(args));
      }
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
  var lifecycleEvents = {
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
      var result = this.callLifecycle(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["Lifecycle"].pullDownRefresh, e);

      if (result && typeof result.then === 'function') {
        Promise.resolve(result).then(function () {
          Object(_stopPullDownRefresh__WEBPACK_IMPORTED_MODULE_3__["default"])();
        });
      }
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
    }
  };
  Object(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["pageEvents"])(name).forEach(function (eventName) {
    if (lifecycleEvents[eventName]) {
      config[eventName] = lifecycleEvents[eventName];
    }
  });
  return config;
}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createPageWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_isClassComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var _PageInstanceContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _ReactIs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
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

var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = undefined && undefined.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
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
        Object.keys(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["Lifecycle"]).forEach(function (phase) {
          var callback = Object(_lifecycle__WEBPACK_IMPORTED_MODULE_2__["callbackName"])(phase);

          _this[callback] = function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return _this.callLifecycle.apply(_this, __spread([phase], args));
          };
        });
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
          return (_a = this.pageComponentInstance)[callback].apply(_a, __spread(args));
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
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var PageInstanceContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](null);
/* harmony default export */ __webpack_exports__["default"] = (PageInstanceContext);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (my.stopPullDownRefresh);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _instanceId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _actionId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var _nativeEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);
var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = undefined && undefined.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
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
        _this.updateQueue.map(function (update, index) {
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

          _this.context.$spliceData((_a = {}, _a[update.path] = __spread([update.start, update.deleteCount], update.items), _a), callback);
        });
      });
      this.updateQueue = [];
      return;
    } // TODO 统一更新行为


    var action = {
      type: 'splice',
      payload: this.updateQueue.map(function (update) {
        return {
          path: update.path,
          start: update.start,
          deleteCount: update.deleteCount,
          item: update.items[0]
        };
      }),
      id: Object(_actionId__WEBPACK_IMPORTED_MODULE_2__["generate"])()
    };

    if (false) {}

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

    if (false) {}
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
/* 38 */
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
/* 39 */
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
  effector.listenerConfigs.forEach(function (config) {
    config.listener();

    if (config.once) {
      dispose(config.listener);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  connect: connect,
  run: run,
  dispose: dispose
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return createPortal; });
/* harmony import */ var _ReactIs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);

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
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createNativeComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};


function createNativeComponent(name) {
  return react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](function (props, ref) {
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
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePageInstance", function() { return usePageInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return useQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePageEvent", function() { return usePageEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppEvent", function() { return useAppEvent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _PageInstanceContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
/* harmony import */ var _AppInstanceContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var _useNativeEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNativeEffect", function() { return _useNativeEffect__WEBPACK_IMPORTED_MODULE_4__["default"]; });





/**
 *  Page Hooks
 */

function usePageInstance() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_PageInstanceContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
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

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useNativeEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nativeEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);


function useNativeEffect(listener, deps) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    return _nativeEffect__WEBPACK_IMPORTED_MODULE_1__["default"].connect(listener, !!deps);
  }, deps);
}

/***/ })
],[[4,0]]]);