'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var ReactReconciler = _interopDefault(require('react-reconciler'));
var scheduler = require('scheduler');
var React = require('react');

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var REMAX_METHOD = '$$REMAX_METHOD';
var TYPE_TEXT = 'plain-text';

var instanceId = 0;
function generate() {
  var id = instanceId;
  instanceId += 1;
  return id;
}

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
  if (!style) {
    return '';
  }

  return Object.keys(style).reduce(function (acc, key) {
    var value = style[key];

    if (!Number.isNaN(Number(value)) && !isUnitlessNumber[key]) {
      value = value + 'rpx';
    }

    return __spreadArrays(acc, [transformReactStyleKey(key) + ":" + ( transformPx(value) ) + ";"]);
  }, []).join('');
};

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
var hostComponents = {"button":{"alias":{"id":"id","className":"class","size":"size","type":"type","plain":"plain","disabled":"disabled","loading":"loading","hoverClass":"hover-class","hoverClassName":"hover-class","hoverStartTime":"hover-start-time","hoverStayTime":"hover-stay-time","hoverStopPropagation":"hover-stop-propagation","formType":"form-type","openType":"open-type","scope":"scope","onClick":"onTap","onTap":"onTap","appParameter":"app-parameter","publicId":"public-id"}},"canvas":{"alias":{"id":"id","style":"style","className":"class","width":"width","height":"height","disableScroll":"disable-scroll","onClick":"onTap","onTap":"onTap","onTouchStart":"onTouchStart","onTouchMove":"onTouchMove","onTouchEnd":"onTouchEnd","onTouchCancel":"onTouchCancel","onLongTap":"onLongTap","onLongClick":"onLongTap"}},"checkbox-group":{"alias":{"id":"id","className":"class","style":"style","name":"name","onChange":"onChange"}},"checkbox":{"alias":{"className":"class","style":"style","id":"id","value":"value","checked":"checked","disabled":"disabled","onChange":"onChange","color":"color"}},"contact-button":{"alias":{"id":"id","className":"class","style":"style","tntInstId":"tnt-inst-id","scene":"scene","size":"size","color":"color","icon":"icon","alipayCardNo":"alipay-card-no"}},"cover-image":{"alias":{"id":"id","className":"class","src":"src","style":"style","onClick":"onTap","onTap":"onTap"}},"cover-view":{"alias":{"id":"id","className":"class","style":"style","onTap":"onTap","onClick":"onTap"}},"form":{"alias":{"id":"id","className":"class","style":"style","reportSubmit":"report-submit","onSubmit":"onSubmit","onReset":"onReset"}},"icon":{"alias":{"id":"id","className":"class","style":"style","type":"type","size":"size","color":"color"}},"image":{"alias":{"id":"id","src":"src","mode":"mode","className":"class","style":"style","lazyLoad":"lazy-load","onLoad":"onLoad","onError":"onError","onTap":"onTap","onClick":"onTap"}},"input":{"alias":{"id":"id","className":"class","style":"style","value":"value","name":"name","type":"type","password":"password","placeholder":"placeholder","placeholderStyle":"placeholder-style","placeholderClass":"placeholder-class","placeholderClassName":"placeholder-class","disabled":"disabled","maxlength":"maxlength","focus":"focus","confirmType":"confirm-type","confirmHold":"confirm-hold","cursor":"cursor","selectionStart":"selection-start","selectionEnd":"selection-end","randomNumber":"randomNumber","controlled":"controlled","onInput":"onInput","onConfirm":"onConfirm","onFocus":"onFocus","onBlur":"onBlur"}},"label":{"alias":{"id":"id","className":"class","style":"style","for":"for"}},"lifestyle":{"alias":{"publicId":"public-id","onFollow":"onFollow"}},"map":{"alias":{"id":"id","style":"style","className":"class","latitude":"latitude","longitude":"longitude","scale":"scale","markers":"markers","polyline":"polyline","circles":"circles","controls":"controls","polygon":"polygon","showLocation":"show-location","includePoints":"include-points","includePadding":"include-padding","groundOverlays":"ground-overlays","tileOverlay":"tile-overlay","setting":"setting","onMarkerTap":"onMarkerTap","onMarkerClick":"onMarkerTap","onCalloutTap":"onCalloutTap","onCalloutClick":"onCalloutTap","onControlTap":"onControlTap","onControlClick":"onControlTap","onRegionChange":"onRegionChange","onTap":"onTap","onClick":"onTap"}},"movable-area":{"alias":{"id":"id","className":"class","style":"style","width":"width","height":"height"}},"movable-view":{"alias":{"id":"id","className":"class","style":"style","direction":"direction","width":"width","height":"height","x":"x","y":"y","disabled":"disabled","onTouchStart":"onTouchStart","onTouchMove":"onTouchMove","onTouchEnd":"onTouchEnd","onTouchCancel":"onTouchCancel","onChange":"onChange","onChangeEnd":"onChangeEnd"}},"navigator":{"alias":{"id":"id","className":"class","style":"style","openType":"open-type","hoverClass":"hover-class","hoverClassName":"hover-class","hoverStartTime":"hover-start-time","hoverStayTime":"hover-stay-time","url":"url"}},"picker-view-column":{"alias":{}},"picker-view":{"alias":{"id":"id","className":"class","style":"style","value":"value","indicatorStyle":"indicator-style","indicatorClass":"indicator-class","indicatorClassName":"indicator-class","maskStyle":"mask-style","maskClass":"mask-class","maskClassName":"mask-class","onChange":"onChange"}},"picker":{"alias":{"id":"id","className":"class","style":"style","range":"range","rangeKey":"range-key","value":"value","onChange":"onChange","disabled":"disabled"}},"progress":{"alias":{"id":"id","className":"class","style":"style","percent":"percent","showInfo":"show-info","strokeWidth":"stroke-width","activeColor":"active-color","backgroundColor":"background-color","active":"active"}},"radio-group":{"alias":{"id":"id","className":"class","style":"style","onChange":"onChange","name":"name"}},"radio":{"alias":{"id":"id","className":"class","style":"style","value":"value","checked":"checked","disabled":"disabled","color":"color"}},"rich-text":{"alias":{"id":"id","className":"class","style":"style","nodes":"nodes","onTap":"onTap","onClick":"onTap","onTouchStart":"onTouchStart","onTouchMove":"onTouchMove","onTouchEnd":"onTouchEnd","onTouchCancel":"onTouchCancel","onLongTap":"onLongTap","onLongClick":"onLongTap"}},"scroll-view":{"alias":{"id":"id","className":"class","style":"style","scrollX":"scroll-x","scrollY":"scroll-y","upperThreshold":"upper-threshold","lowerThreshold":"lower-threshold","scrollTop":"scroll-top","scrollLeft":"scroll-left","scrollIntoView":"scroll-into-view","scrollWithAnimation":"scroll-with-animation","scrollAnimationDuration":"scroll-animation-duration","enableBackToTop":"enable-back-to-top","trapScroll":"trap-scroll","onScrollToUpper":"onScrollToUpper","onScrollToLower":"onScrollToLower","onScroll":"onScroll","onTouchStart":"onTouchStart","onTouchMove":"onTouchMove","onTouchEnd":"onTouchEnd","onTouchCancel":"onTouchCancel"}},"slider":{"alias":{"id":"id","className":"class","style":"style","name":"name","min":"min","max":"max","step":"step","disabled":"disabled","value":"value","showValue":"show-value","activeColor":"active-color","backgroundColor":"background-color","trackSize":"track-size","handleSize":"handle-size","handleColor":"handle-color","onChange":"onChange","onChanging":"onChanging"}},"swiper-item":{"alias":{"key":"key"}},"swiper":{"alias":{"id":"id","className":"class","style":"style","indicatorDots":"indicator-dots","indicatorColor":"indicator-color","indicatorActiveColor":"indicator-active-color","activeClass":"active-class","activeClassName":"active-class","changingClass":"changing-class","changingClassName":"changing-class","autoplay":"autoplay","current":"current","duration":"duration","interval":"interval","circular":"circular","vertical":"vertical","previousMargin":"previous-margin","nextMargin":"next-margin","acceleration":"acceleration","disableProgrammaticAnimation":"disable-programmatic-animation","onChange":"onChange","onTransition":"onTransition","onAnimationEnd":"onAnimationEnd","disableTouch":"disable-touch"}},"switch":{"alias":{"id":"id","className":"class","style":"style","name":"name","checked":"checked","disabled":"disabled","color":"color","onChange":"onChange","controlled":"controlled"}},"text":{"alias":{"id":"id","className":"class","style":"style","selectable":"selectable","space":"space","decode":"decode","numberOfLines":"number-of-lines","onClick":"onTap","onTap":"onTap"}},"textarea":{"alias":{"id":"id","className":"class","style":"style","name":"name","value":"value","placeholder":"placeholder","placeholderStyle":"placeholder-style","placeholderClass":"placeholder-class","placeholderClassName":"placeholder-class","disabled":"disabled","maxlength":"maxlength","focus":"focus","autoHeight":"auto-height","showCount":"show-count","controlled":"controlled","onInput":"onInput","onFocus":"onFocus","onBlur":"onBlur","onConfirm":"onConfirm"}},"view":{"alias":{"id":"id","disableScroll":"disable-scroll","hoverClass":"hover-class","hoverClassName":"hover-class","hoverStartTime":"hover-start-time","hoverStayTime":"hover-stay-time","hidden":"hidden","className":"class","style":"style","animation":"animation","hoverStopPropagation":"hover-stop-propagation","onClick":"onTap","onTap":"onTap","onTouchStart":"onTouchStart","onTouchMove":"onTouchMove","onTouchEnd":"onTouchEnd","onTouchCancel":"onTouchCancel","onLongTap":"onLongTap","onLongClick":"onLongTap","onTransitionEnd":"onTransitionEnd","onAnimationIteration":"onAnimationIteration","onAnimationStart":"onAnimationStart","onAnimationEnd":"onAnimationEnd","onAppear":"onAppear","onDisappear":"onDisappear","onFirstAppear":"onFirstAppear"}},"web-view":{"alias":{"src":"src","onMessage":"onMessage"}},"video":{"alias":{"className":"class","src":"src","id":"id","poster":"poster","objectFit":"objectFit","initialTime":"initial-time","duration":"duration","controls":"controls","autoplay":"autoplay","direction":"direction","loop":"loop","muted":"muted","showFullscreenBtn":"show-fullscreen-btn","showPlayBtn":"show-play-btn","showCenterPlayBtn":"show-center-play-btn","showMuteBtn":"show-mute-btn","enableProgressGesture":"enableProgressGesture","mobilenetHintType":"mobilenetHintType","onPlay":"onPlay","onPause":"onPause","onEnded":"onEnded","onTimeUpdate":"onTimeUpdate","onLoading":"onLoading","onError":"onError","onFullScreenChange":"onFullScreenChange","onTap":"onTap","onClick":"onTap","onUserAction":"onUserAction"}},"foo-bar":{"alias":{"foo":"foo","className":"class"}},"custom-component":{"alias":{"foo":"foo"}}} || {};
function createHostComponent(name, component) {
  if (component) {
    return component;
  }

  var Component = function Component(props, ref) {
    var _a = props.children,
        children = _a === void 0 ? [] : _a;
    return React.createElement(name, __assign(__assign({}, props), {
      ref: ref
    }), children);
  };

  return React.forwardRef(Component);
}

function getAlias(prop, type) {
  var _a, _b;

  prop = prop.replace('className', 'class');
  var hostComponent = hostComponents[type];
  return (_b = (_a = hostComponent === null || hostComponent === void 0 ? void 0 : hostComponent.alias) === null || _a === void 0 ? void 0 : _a[prop]) !== null && _b !== void 0 ? _b : prop;
}

function getValue(prop, value) {
  if (prop.toLowerCase().endsWith('style') && prop !== 'layerStyle') {
    return plainStyle(value);
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

function toRawNode(node) {
  if (node.type === TYPE_TEXT) {
    return {
      type: node.type,
      text: node.text
    };
  }

  return {
    id: node.id,
    type: node.type,
    props: propsAlias(node.props, node.type),
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
      var children = stackItem.children,
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

var DEPRECATED_CATCH_TYPE = 'catchClick';
var SYNTHETIC_TYPES = ['onClick', 'onTap'];

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

  for (var i = 0; i < SYNTHETIC_TYPES.length; i++) {
    if ((_a = parent.props) === null || _a === void 0 ? void 0 : _a[SYNTHETIC_TYPES[i]]) {
      return;
    }
  }

  validate(parent);
}
function stopPropagation(node) {
  isPropagationStopped = true;
  validate(node);
}

var __spreadArrays$1 = undefined && undefined.__spreadArrays || function () {
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
  if (DEPRECATED_CATCH_TYPE === inputType) {
    console.warn('DEPRECATION: remax 已支持在 onClick 事件中使用 stopPropagation 阻止事件冒泡，请尽量不要使用 catchClick');
  }

  return !!SYNTHETIC_TYPES.find(function (type) {
    return type === inputType;
  });
}

function createBaseSyntheticEvent(node, nativeEvent) {
  // 添加阻止冒泡方法
  nativeEvent.stopPropagation = function () {
    stopPropagation(node);
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

    if (isPropagationStopped) {
      validate(node);
      return;
    }

    return callback.apply(void 0, __spreadArrays$1([syntheticEvent], restParams));
  };
}

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

var scheduleDeferredCallback = scheduler.unstable_scheduleCallback,
    cancelDeferredCallback = scheduler.unstable_cancelCallback,
    shouldYield = scheduler.unstable_shouldYield,
    now = scheduler.unstable_now;

function processProps(newProps, node, id) {
  var props = {};

  for (var _i = 0, _a = Object.keys(newProps); _i < _a.length; _i++) {
    var propKey = _a[_i];

    if (typeof newProps[propKey] === 'function') {
      var contextKey = REMAX_METHOD + "_" + id + "_" + propKey;
      node.container.createCallback(contextKey, createCallbackProxy(propKey, node, newProps[propKey]));
      props[propKey] = contextKey;
    } else if (propKey === 'style') {
      props[propKey] = newProps[propKey] || '';
    } else if (propKey === 'children') ; else {
      props[propKey] = newProps[propKey];
    }
  }

  return props;
}

var rootHostContext = {};
var childHostContext = {};
var hostConfig = {
  now: now,
  getPublicInstance: function getPublicInstance(inst) {
    return inst;
  },
  getRootHostContext: function getRootHostContext() {
    return rootHostContext;
  },
  shouldSetTextContent: function shouldSetTextContent() {
    return false;
  },
  prepareForCommit: function prepareForCommit() {// nothing to do
  },
  resetAfterCommit: function resetAfterCommit() {// nothing to do
  },
  getChildHostContext: function getChildHostContext() {
    return childHostContext;
  },
  createInstance: function createInstance(type, newProps, container) {
    var id = generate();
    var node = new VNode({
      id: id,
      type: type,
      props: {},
      container: container
    });
    node.props = processProps(newProps, node, id);
    return node;
  },
  createTextInstance: function createTextInstance(text, container) {
    var id = generate();
    var node = new VNode({
      id: id,
      type: TYPE_TEXT,
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

    if (diffProperties(lastProps, nextProps)) {
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
};

var ReactReconcilerInst = ReactReconciler(hostConfig);

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

var AppContainer =
/** @class */
function () {
  function AppContainer(context) {
    this.updateQueue = [];
    this.context = context;
    this.root = new VNode({
      id: generate(),
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

function isClassComponent(Component) {
  return Component.prototype && typeof Component.prototype.render === 'function';
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

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

function callbackName(name) {
  if (name.startsWith('before')) {
    return capitalize(name);
  }

  return 'on' + capitalize(name);
}

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
var REACT_PORTAL_TYPE = hasSymbol ? Symbol["for"]('react.portal') : 0xeaca;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol["for"]('react.forward_ref') : 0xead0;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Portal = REACT_PORTAL_TYPE;

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

var DefaultAppComponent =
/** @class */
function (_super) {
  __extends(DefaultAppComponent, _super);

  function DefaultAppComponent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  DefaultAppComponent.prototype.render = function () {
    return React.createElement(React.Fragment, null, this.props.children);
  };

  return DefaultAppComponent;
}(React.Component);

function createAppConfig(App) {
  var _this = this;

  var createConfig = function createConfig(AppComponent) {
    if (AppComponent === void 0) {
      AppComponent = DefaultAppComponent;
    }

    var config = {
      _container: new AppContainer(_this),
      _pages: [],
      _instance: React.createRef(),
      callLifecycle: function callLifecycle(lifecycle) {
        var _a;

        var args = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }

        var callbacks = context.lifecycleCallback[lifecycle] || [];
        var result;
        callbacks.forEach(function (callback) {
          result = callback.apply(void 0, args);
        });

        if (result) {
          return result;
        }

        var callback = callbackName(lifecycle);

        if (this._instance.current && this._instance.current[callback]) {
          return (_a = this._instance.current)[callback].apply(_a, args);
        }
      },
      onLaunch: function onLaunch(options) {
        this._render();

        this.callLifecycle(AppLifecycle.launch, options);
      },
      onShow: function onShow(options) {
        this.callLifecycle(AppLifecycle.show, options);
      },
      onHide: function onHide() {
        this.callLifecycle(AppLifecycle.hide);
      },
      onError: function onError(error) {
        this.callLifecycle(AppLifecycle.error, error);
      },
      // 支付宝
      onShareAppMessage: function onShareAppMessage(options) {
        this.callLifecycle(AppLifecycle.shareAppMessage, options);
      },
      // 微信
      onPageNotFound: function onPageNotFound(options) {
        this.callLifecycle(AppLifecycle.pageNotFound, options);
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

        if (isClassComponent(AppComponent) || AppComponent.$$typeof === ForwardRef) {
          props.ref = this._instance;
        }

        return render(React.createElement(AppComponent, props, this._pages.map(function (p) {
          return p.element;
        })), this._container);
      }
    };
    return config;
  }; // 兼容老的写法


  if (isClass(App) && !isClassComponent(App)) {
    // eslint-disable-next-line no-console
    console.warn('使用非 React 组件定义 App 的方式已经废弃，详细请参考：https://remaxjs.org/guide/framework');
    Object.assign(App.prototype, createConfig());
    return new App();
  } else {
    return createConfig(App);
  }
}

var PageInstanceContext = React.createContext(null);

var __extends$1 = undefined && undefined.__extends || function () {
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

var __spreadArrays$2 = undefined && undefined.__spreadArrays || function () {
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
      __extends$1(PageWrapper, _super);

      function PageWrapper(props) {
        var _this = _super.call(this, props) || this; // 页面组件的实例


        _this.pageComponentInstance = null;
        _this.callbacks = new Map();
        Object.keys(Lifecycle).forEach(function (phase) {
          var callback = callbackName(phase);

          _this[callback] = function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return _this.callLifecycle.apply(_this, __spreadArrays$2([phase], args));
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

        var callback = callbackName(phase);

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

        if (isClassComponent(Page) || Page.$$typeof === ForwardRef) {
          props.ref = function (node) {
            return _this.pageComponentInstance = node;
          };
        }

        return React.createElement(PageInstanceContext.Provider, {
          value: this.props.page
        }, React.createElement(Page, props));
      };

      return PageWrapper;
    }(React.Component)
  );
}

var actionId = 0;
function generate$1() {
  var id = actionId;
  actionId += 1;
  return id;
}

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

var nativeEffect = {
  connect: connect,
  run: run,
  dispose: dispose
};

var is = function is(platform) {
  return undefined === platform;
};

var Platform = {
  get current() {
    return undefined;
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

var __spreadArrays$3 = undefined && undefined.__spreadArrays || function () {
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
    this.root = new VNode({
      id: generate(),
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
              nativeEffect.run();
            };
          }

          _this.context.$spliceData((_a = {}, _a[update.path] = __spreadArrays$3([update.start, update.deleteCount], update.items), _a), callback);
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
      id: generate$1()
    };

    if (Platform.isToutiao) {
      action = {
        root: this.root.toJSON()
      };
    }

    this.context.setData({
      action: action
    }, function () {
      nativeEffect.run();
    });
    this.updateQueue = [];
  };

  Container.prototype.clearUpdate = function () {
    this.stopUpdate = true;

    if (Platform.isWechat) {
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

function createPortal(children, containerInfo, key) {
  return {
    // This tag allow us to uniquely identify this as a React Portal
    $$typeof: Portal,
    key: key == null ? null : '' + key,
    children: children,
    containerInfo: containerInfo,
    implementation: null
  };
}

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
    wrapperRef: React.createRef(),
    lifecycleCallback: {},
    onLoad: function onLoad(query) {
      var PageWrapper = createPageWrapper(Page, query);
      this.query = query;
      this.container = new Container(this);
      this.element = createPortal(React.createElement(PageWrapper, {
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
      callbacks.forEach(function (callback) {
        result = callback.apply(void 0, args);
      });

      if (result) {
        return result;
      }

      var callback = callbackName(lifecycle);

      if (this.wrapperRef.current && this.wrapperRef.current[callback]) {
        return (_a = this.wrapperRef.current)[callback].apply(_a, args);
      }
    },
    onShow: function onShow() {
      return this.callLifecycle(Lifecycle.show);
    },
    onHide: function onHide() {
      return this.callLifecycle(Lifecycle.hide);
    },
    onReady: function onReady() {
      return this.callLifecycle(Lifecycle.ready);
    },
    onPullDownRefresh: function onPullDownRefresh(e) {
      return this.callLifecycle(Lifecycle.pullDownRefresh, e);
    },
    onReachBottom: function onReachBottom() {
      return this.callLifecycle(Lifecycle.reachBottom);
    },
    onPageScroll: function onPageScroll(e) {
      return this.callLifecycle(Lifecycle.pageScroll, e);
    },
    onShareAppMessage: function onShareAppMessage(options) {
      return this.callLifecycle(Lifecycle.shareAppMessage, options);
    },
    onTitleClick: function onTitleClick() {
      return this.callLifecycle(Lifecycle.titleClick);
    },
    onOptionMenuClick: function onOptionMenuClick() {
      return this.callLifecycle(Lifecycle.optionMenuClick);
    },
    onPopMenuClick: function onPopMenuClick(e) {
      return this.callLifecycle(Lifecycle.popMenuClick, e);
    },
    onPullIntercept: function onPullIntercept() {
      return this.callLifecycle(Lifecycle.pullIntercept);
    },
    events: {
      // 页面返回时触发
      onBack: function onBack() {
        return this.callLifecycle(Lifecycle.back);
      },
      // 键盘高度变化时触发
      onKeyboardHeight: function onKeyboardHeight(e) {
        return this.callLifecycle(Lifecycle.keyboardHeight, e);
      },
      onTabItemTap: function onTabItemTap(e) {
        return this.callLifecycle(Lifecycle.keyboardHeight, e);
      },
      // 点击但切换tabItem前触发
      beforeTabItemTap: function beforeTabItemTap() {
        return this.callLifecycle(Lifecycle.beforeTabItemTap);
      },
      onResize: function onResize(e) {
        return this.callLifecycle(Lifecycle.keyboardHeight, e);
      }
    }
  };
  return config;
}

var __assign$1 = undefined && undefined.__assign || function () {
  __assign$1 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign$1.apply(this, arguments);
};

var unstable_batchedUpdates = ReactReconcilerInst.batchedUpdates;

exports._classCallCheck = _classCallCheck;
exports._createClass = _createClass;
exports._getPrototypeOf = _getPrototypeOf;
exports._inherits = _inherits;
exports._possibleConstructorReturn = _possibleConstructorReturn;
exports.createAppConfig = createAppConfig;
exports.createHostComponent = createHostComponent;
exports.createPageConfig = createPageConfig;
