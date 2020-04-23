(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hostComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Form"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Textarea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["View"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["WebView"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBack", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateBack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["redirectTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reLaunch", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["reLaunch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchTab", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["switchTab"]; });




/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _Form__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _Image__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _Label__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _Text__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _Textarea__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _View__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _WebView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(42);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return _WebView__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* empty/unused harmony star reexport */


















/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _utils_isPlatformSpecifyProp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _useWebTouch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
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

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

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






var Button = function Button(props) {
  var _a;

  var _b = Object(_utils_isPlatformSpecifyProp__WEBPACK_IMPORTED_MODULE_2__["filterProps"])(props),
      hoverClassName = _b.hoverClassName,
      hoverStartTime = _b.hoverStartTime,
      hoverStayTime = _b.hoverStayTime,
      className = _b.className,
      onTouchStart = _b.onTouchStart,
      onTouchMove = _b.onTouchMove,
      onTouchEnd = _b.onTouchEnd,
      onTouchCancel = _b.onTouchCancel,
      onTap = _b.onTap,
      onLongTap = _b.onLongTap,
      restProps = __rest(_b, ["hoverClassName", "hoverStartTime", "hoverStayTime", "className", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel", "onTap", "onLongTap"]);

  var _c = __read(Object(_useWebTouch__WEBPACK_IMPORTED_MODULE_3__["default"])({
    hoverDelay: hoverStartTime,
    hoverDuration: hoverStayTime,
    onLongTap: onLongTap,
    onTouchStart: onTouchStart,
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd,
    onTouchCancel: onTouchCancel
  }), 5),
      hovered = _c[0],
      handleTouchStart = _c[1],
      handleTouchMove = _c[2],
      handleTouchEnd = _c[3],
      handleTouchCancel = _c[4];

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", __assign({}, restProps, {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    onTouchCancel: handleTouchCancel,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('remax-button', className, (_a = {}, _a[hoverClassName || ''] = hovered, _a)),
    onClick: onTap
  }));
};

Button.defaultProps = {
  hoverStayTime: 400,
  hoverStartTime: 50
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterProps", function() { return filterProps; });
var isPlatformSpecifyProp = function isPlatformSpecifyProp(prop) {
  return prop.match(/^(ali|wechat|toutiao)-/);
};

var normalizeWebSpecifyProp = function normalizeWebSpecifyProp(prop) {
  return prop.replace(/^web-/, '');
};

function filterProps(props) {
  return Object.keys(props).reduce(function (acc, cur) {
    var prop = cur; // web 平台没有 cli 帮助处理属性名称，直接去掉平台前缀

    if (true) {
      prop = normalizeWebSpecifyProp(cur);
    }

    if (isPlatformSpecifyProp(prop)) {
      return acc;
    }

    acc[prop] = props[cur];
    return acc;
  }, {});
}
/* harmony default export */ __webpack_exports__["default"] = (isPlatformSpecifyProp);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
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




function useWebTouch(_a) {
  var hoverDuration = _a.hoverDuration,
      hoverDelay = _a.hoverDelay,
      onLongTap = _a.onLongTap,
      onTouchCancel = _a.onTouchCancel,
      onTouchEnd = _a.onTouchEnd,
      onTouchMove = _a.onTouchMove,
      onTouchStart = _a.onTouchStart;

  var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2),
      touching = _b[0],
      setTouching = _b[1];

  var hoveringRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](false);
  var timers = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]([]);

  function executeTimeout(callback, time) {
    var timer = setTimeout(function () {
      callback();
      timers.current.filter(function (t) {
        return t !== timer;
      });
    }, time);
    timers.current.push(timer);
  }

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    return function () {
      timers.current.forEach(function (t) {
        return clearTimeout(t);
      });
    };
  }, []);

  function handleTouchStart(e) {
    hoveringRef.current = true;
    executeTimeout(function () {
      if (hoveringRef.current) {
        setTouching(true);
      }
    }, hoverDelay);
    executeTimeout(function () {
      if (hoveringRef.current && typeof onLongTap === 'function') {
        onLongTap(e);
      }
    }, _constants__WEBPACK_IMPORTED_MODULE_1__["LONG_TAP_DURATION"]);

    if (typeof onTouchStart === 'function') {
      return onTouchStart(e);
    }
  }

  function handleTouchMove(e) {
    hoveringRef.current = false;
    executeTimeout(function () {
      if (touching) {
        setTouching(false);
      }
    }, hoverDuration);

    if (typeof onTouchMove === 'function') {
      return onTouchMove(e);
    }
  }

  function handleTouchEnd(e) {
    hoveringRef.current = false;
    executeTimeout(function () {
      if (touching) {
        setTouching(false);
      }
    }, hoverDuration);

    if (typeof onTouchEnd === 'function') {
      return onTouchEnd(e);
    }
  }

  function handleTouchCancel(e) {
    hoveringRef.current = false;
    executeTimeout(function () {
      if (touching) {
        setTouching(false);
      }
    }, hoverDuration);

    if (typeof onTouchCancel === 'function') {
      return onTouchCancel(e);
    }
  }

  return [touching, handleTouchStart, handleTouchMove, handleTouchEnd, handleTouchCancel];
}

/* harmony default export */ __webpack_exports__["default"] = (useWebTouch);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LONG_TAP_DURATION", function() { return LONG_TAP_DURATION; });
var LONG_TAP_DURATION = 350;

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_isPlatformSpecifyProp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
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




var Form = function Form(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", __assign({}, Object(_utils_isPlatformSpecifyProp__WEBPACK_IMPORTED_MODULE_1__["filterProps"])(props)));
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_isPlatformSpecifyProp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _modeStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
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

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






var Image = function Image(props) {
  var _a = Object(_utils_isPlatformSpecifyProp__WEBPACK_IMPORTED_MODULE_1__["filterProps"])(props),
      className = _a.className,
      src = _a.src,
      style = _a.style,
      mode = _a.mode,
      onTap = _a.onTap,
      onLoad = _a.onLoad,
      onError = _a.onError,
      restProps = __rest(_a, ["className", "src", "style", "mode", "onTap", "onLoad", "onError"]);

  var isWidthFixMode = mode === 'widthFix';
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", __assign({}, restProps, {
    onClick: onTap,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])('remax-image', className),
    style: __assign(__assign(__assign({}, _modeStyle__WEBPACK_IMPORTED_MODULE_2__["default"][mode || 'scaleToFill']), {
      backgroundImage: "url(" + src + ")"
    }), style)
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: src,
    style: {
      visibility: 'hidden',
      width: isWidthFixMode ? '100%' : undefined,
      height: isWidthFixMode ? 'auto' : '1px'
    },
    onLoad: onLoad,
    onError: onError
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Image);
Image.defaultProps = {
  mode: 'scaleToFill'
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  scaleToFill: {
    backgroundSize: '100% 100%'
  },
  aspectFit: {
    backgroundSize: 'contain',
    backgroundPosition: 'center'
  },
  widthFix: {
    backgroundSize: '100% 100%',
    height: 'auto',
    lineHeight: 0
  },
  aspectFill: {
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  top: {
    backgroundPosition: 'top'
  },
  bottom: {
    backgroundPosition: 'bottom'
  },
  center: {
    backgroundPosition: 'center'
  },
  left: {
    backgroundPosition: 'center left'
  },
  right: {
    backgroundPosition: 'center right'
  },
  'top left': {
    backgroundPosition: 'top left'
  },
  'top right': {
    backgroundPosition: 'top right'
  },
  'bottom left': {
    backgroundPosition: 'bottom left'
  },
  'bottom right': {
    backgroundPosition: 'bottom right'
  }
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_isPlatformSpecifyProp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _useWebPlaceholderStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
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

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

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






var Input = function Input(props) {
  var _a = Object(_utils_isPlatformSpecifyProp__WEBPACK_IMPORTED_MODULE_1__["filterProps"])(props),
      password = _a.password,
      type = _a.type,
      onConfirm = _a.onConfirm,
      onKeyPress = _a.onKeyPress,
      placeholderStyle = _a.placeholderStyle,
      className = _a.className,
      restProps = __rest(_a, ["password", "type", "onConfirm", "onKeyPress", "placeholderStyle", "className"]);

  var _b = __read(Object(_useWebPlaceholderStyle__WEBPACK_IMPORTED_MODULE_2__["default"])(placeholderStyle), 1),
      placeholderStyleClassName = _b[0];

  var inputType = password ? 'password' : type;

  function handleKeyPress(e) {
    if (e.key === 'Enter' && typeof onConfirm === 'function') {
      onConfirm(e);
    }

    if (typeof onKeyPress === 'function') {
      onKeyPress(e);
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", __assign({}, restProps, {
    type: inputType,
    onKeyPress: handleKeyPress,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])('remax-input', className, placeholderStyleClassName)
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Input);
Input.defaultProps = {
  onChange: function onChange() {
    return void 0;
  }
};

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useWebPlaceholderStyle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plainStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);


var clsxId = 0;

var generateClassName = function generateClassName() {
  return "remax-placeholder-style-" + clsxId++;
};

function useWebPlaceholderStyle(css) {
  var className = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](generateClassName());
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    var styleContent = "." + className.current + "::placeholder {\n    " + Object(_plainStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(css) + "\n  }";
    var style = window.document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(styleContent));
    var head = window.document.head || window.document.getElementsByTagName('head')[0];
    head.appendChild(style);
    return function () {
      head.removeChild(style);
    };
  }, [css]);
  return [className.current];
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSSProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
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
    var targetUnit = 'rem';
    var size = Number(x / 100);
    return size % 1 === 0 ? size + targetUnit : size.toFixed(2) + targetUnit;
  });
};

var plainStyle = function plainStyle(style) {
  if (!style) {
    return '';
  }

  return Object.keys(style).reduce(function (acc, key) {
    var value = style[key];

    if (!Number.isNaN(Number(value)) && !_CSSProperty__WEBPACK_IMPORTED_MODULE_0__["isUnitlessNumber"][key]) {
      value = value + 'rpx';
    }

    return __spread(acc, [transformReactStyleKey(key) + ":" + ( true ? transformPx(value) : undefined) + ";"]);
  }, []).join('\n');
};

/* harmony default export */ __webpack_exports__["default"] = (plainStyle);

/***/ }),
/* 25 */
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
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_isPlatformSpecifyProp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
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




var Label = function Label(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", __assign({}, Object(_utils_isPlatformSpecifyProp__WEBPACK_IMPORTED_MODULE_1__["filterProps"])(props)));
};

/* harmony default export */ __webpack_exports__["default"] = (Label);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _utils_isPlatformSpecifyProp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
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

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





var Text = function Text(props) {
  var _a = Object(_utils_isPlatformSpecifyProp__WEBPACK_IMPORTED_MODULE_2__["filterProps"])(props),
      onTap = _a.onTap,
      onTouchStart = _a.onTouchStart,
      onTouchMove = _a.onTouchMove,
      onTouchEnd = _a.onTouchEnd,
      onTouchCancel = _a.onTouchCancel,
      className = _a.className,
      selectable = _a.selectable,
      restProps = __rest(_a, ["onTap", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel", "className", "selectable"]);

  var hoveringRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](false);

  function handleTouchStart(e) {
    hoveringRef.current = true;

    if (typeof onTouchStart === 'function') {
      return onTouchStart(e);
    }
  }

  function handleTouchMove(e) {
    hoveringRef.current = false;

    if (typeof onTouchMove === 'function') {
      return onTouchMove(e);
    }
  }

  function handleTouchEnd(e) {
    hoveringRef.current = false;

    if (typeof onTouchEnd === 'function') {
      return onTouchEnd(e);
    }
  }

  function handleTouchCancel(e) {
    hoveringRef.current = false;

    if (typeof onTouchCancel === 'function') {
      return onTouchCancel(e);
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", __assign({}, restProps, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(className, {
      'remax-text-selectable': selectable
    }),
    onClick: onTap,
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    onTouchCancel: handleTouchCancel
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useWebPlaceholderStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _utils_isPlatformSpecifyProp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
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

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

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







var Textarea = function Textarea(props) {
  var _a = Object(_utils_isPlatformSpecifyProp__WEBPACK_IMPORTED_MODULE_3__["filterProps"])(props),
      onConfirm = _a.onConfirm,
      onKeyPress = _a.onKeyPress,
      autoHeight = _a.autoHeight,
      className = _a.className,
      placeholderStyle = _a.placeholderStyle,
      restProps = __rest(_a, ["onConfirm", "onKeyPress", "autoHeight", "className", "placeholderStyle"]);

  var _b = __read(Object(_useWebPlaceholderStyle__WEBPACK_IMPORTED_MODULE_2__["default"])(placeholderStyle), 1),
      placeholderStyleClassName = _b[0];

  function handleKeyPress(e) {
    if (e.key === 'Enter' && typeof onConfirm === 'function') {
      onConfirm(e);
    }

    if (typeof onKeyPress === 'function') {
      onKeyPress(e);
    }
  }

  var textareaClassName = Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])('remax-textarea', className, placeholderStyleClassName);

  if (autoHeight) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_autosize_textarea__WEBPACK_IMPORTED_MODULE_1___default.a, __assign({}, restProps, {
      className: textareaClassName,
      onKeyPress: handleKeyPress
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("textarea", __assign({}, restProps, {
    className: textareaClassName,
    onKeyPress: handleKeyPress
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Textarea);
Textarea.defaultProps = {
  onChange: function onChange() {
    return void 0;
  }
};

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _utils_isPlatformSpecifyProp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _useWebTouch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
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

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

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






var View = function View(props) {
  var _a;

  var _b = Object(_utils_isPlatformSpecifyProp__WEBPACK_IMPORTED_MODULE_2__["filterProps"])(props),
      hoverClassName = _b.hoverClassName,
      hoverStartTime = _b.hoverStartTime,
      hoverStayTime = _b.hoverStayTime,
      className = _b.className,
      onTouchStart = _b.onTouchStart,
      onTouchMove = _b.onTouchMove,
      onTouchEnd = _b.onTouchEnd,
      onTouchCancel = _b.onTouchCancel,
      onTap = _b.onTap,
      onLongTap = _b.onLongTap,
      restProps = __rest(_b, ["hoverClassName", "hoverStartTime", "hoverStayTime", "className", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel", "onTap", "onLongTap"]);

  var _c = __read(Object(_useWebTouch__WEBPACK_IMPORTED_MODULE_3__["default"])({
    hoverDelay: hoverStartTime,
    hoverDuration: hoverStayTime,
    onLongTap: onLongTap,
    onTouchStart: onTouchStart,
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd,
    onTouchCancel: onTouchCancel
  }), 5),
      touching = _c[0],
      handleTouchStart = _c[1],
      handleTouchMove = _c[2],
      handleTouchEnd = _c[3],
      handleTouchCancel = _c[4];

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", __assign({}, restProps, {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    onTouchCancel: handleTouchCancel,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(className, (_a = {}, _a[hoverClassName || ''] = touching, _a)),
    onClick: onTap
  }));
};

View.defaultProps = {
  hoverStayTime: 400,
  hoverStartTime: 50
};
/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_isPlatformSpecifyProp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
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

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




var WebView = function WebView(props) {
  var _a = Object(_utils_isPlatformSpecifyProp__WEBPACK_IMPORTED_MODULE_1__["filterProps"])(props),
      onMessage = _a.onMessage,
      restProps = __rest(_a, ["onMessage"]);

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    var listener = function listener(event) {
      if (typeof onMessage === 'function') {
        onMessage(event);
      }
    };

    window.addEventListener('message', listener, false);
    return function () {
      return window.removeEventListener('message', listener);
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("iframe", __assign({}, restProps, {
    className: "remax-web-view"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (WebView);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return navigateTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateBack", function() { return navigateBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return redirectTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reLaunch", function() { return reLaunch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchTab", function() { return switchTab; });
/* harmony import */ var _remax_router_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);

function navigateTo(params) {
  _remax_router_web__WEBPACK_IMPORTED_MODULE_0__["history"].push(params.url);
  return Promise.resolve();
}
function navigateBack(params) {
  _remax_router_web__WEBPACK_IMPORTED_MODULE_0__["history"].go(-((params === null || params === void 0 ? void 0 : params.delta) || 1));
  return Promise.resolve();
}
function redirectTo(params) {
  _remax_router_web__WEBPACK_IMPORTED_MODULE_0__["history"].replace(params.url);
  return Promise.resolve();
}
function reLaunch(params) {
  window.location.href = params.url;
}
function switchTab(params) {
  navigateTo(params);
}

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var react_router_cache_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);
/* harmony import */ var react_router_cache_route__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_cache_route__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheRoute", function() { return react_router_cache_route__WEBPACK_IMPORTED_MODULE_1__["CacheRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheSwitch", function() { return react_router_cache_route__WEBPACK_IMPORTED_MODULE_1__["CacheSwitch"]; });

/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_2__["MemoryRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Prompt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Router"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_2__["StaticRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__RouterContext", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_2__["__RouterContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_2__["generatePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_2__["matchPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHistory", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocation", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useParams", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRouteMatch", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useRouteMatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_2__["HashRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"]; });



var history = Object(history__WEBPACK_IMPORTED_MODULE_0__["createHashHistory"])();


/***/ }),
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_ali__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66);
/* harmony import */ var remax_ali__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(remax_ali__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);


 // 测试 case: 样式引入先后顺序

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_ali__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "c ".concat(className)
  }, "c");
});

/***/ }),
/* 66 */,
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
]]);