require('./runtime.js');
(my["webpackJsonp"] = my["webpackJsonp"] || []).push([[1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(11);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _remix_runtime_options___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _remix_runtime_options___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_remix_runtime_options___WEBPACK_IMPORTED_MODULE_1__);


var pluginDriver = new _alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__["PluginDriver"]([__webpack_require__(4)].map(function (p) {
  return p.default || p;
}));
_alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__["RuntimeOptions"].apply({
  platform: "ali",
  debug: false,
  pxToRpx: true,
  pluginDriver: pluginDriver,
  hostComponents: _remix_runtime_options___WEBPACK_IMPORTED_MODULE_1__["hostComponents"],
  pageEvents: _remix_runtime_options___WEBPACK_IMPORTED_MODULE_1__["pageEvents"],
  appEvents: _remix_runtime_options___WEBPACK_IMPORTED_MODULE_1__["appEvents"]
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@alipay/remix/runtime");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require('/__remix_runtime_options__');

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _alipay_tracert_ta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _alipay_tracert_ta__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_alipay_tracert_ta__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _WithTracert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
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






var spmConfig = __webpack_require__(10);

function initTracert(options, query) {
  if (query === void 0) {
    query = {};
  }

  var chInfo = query.chInfo;
  var bizType = options.bizType,
      spmAPos = options.spmAPos,
      spmBPos = options.spmBPos,
      debug = options.debug,
      mdata = options.mdata,
      _a = options.autoLogPv,
      autoLogPv = _a === void 0 ? true : _a;
  var tracert = new _alipay_tracert_ta__WEBPACK_IMPORTED_MODULE_1___default.a({
    debug: debug,
    mdata: mdata,
    chInfo: chInfo,
    spmAPos: spmAPos || 'a1',
    spmBPos: spmBPos || 'b1',
    bizType: bizType,
    logLevel: 2
  });

  if (autoLogPv) {
    tracert.logPv();
  }

  return tracert;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  onPageComponent: function onPageComponent(_a) {
    var component = _a.component,
        page = _a.page;
    return (
      /** @class */
      function (_super) {
        __extends(PageWrapper, _super);

        function PageWrapper(props) {
          var _this = _super.call(this, props) || this;

          var _a = spmConfig || {},
              _b = _a.spm,
              spm = _b === void 0 ? {} : _b,
              _c = _a.pages,
              pages = _c === void 0 ? [] : _c;

          var spmBPos = pages[page];
          _this.tracert = initTracert(__assign(__assign({}, spm), {
            spmBPos: spmBPos
          }));
          return _this;
        }

        PageWrapper.prototype.render = function () {
          var query = this.props.location.query;
          this.tracert && this.tracert.set({
            chInfo: query.chInfo
          });
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_2__["PageTracertContext"].Provider, {
            value: this.tracert
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component, this.props));
        };

        return PageWrapper;
      }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)
    );
  },
  onCreateHostComponentElement: function onCreateHostComponentElement(_a) {
    var element = _a.element;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WithTracert__WEBPACK_IMPORTED_MODULE_3__["WithTracert"], {
      element: element
    });
  }
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@alipay/tracert-ta");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTracertContext", function() { return PageTracertContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPMPosCContext", function() { return SPMPosCContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTracert", function() { return useTracert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTracert", function() { return withTracert; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
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


var PageTracertContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"](null);
var SPMPosCContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"]('');
function useTracert() {
  return react__WEBPACK_IMPORTED_MODULE_0__["useContext"](PageTracertContext);
}
function withTracert(component) {
  var Wrapped = function Wrapped(props) {
    var tracert = useTracert();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](component, __assign(__assign({}, props), {
      tracert: tracert
    }));
  };

  return Wrapped;
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithTracert", function() { return WithTracert; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);



var WithTracert = function WithTracert(props) {
  var element = props.element;
  var tracert = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_context__WEBPACK_IMPORTED_MODULE_1__["PageTracertContext"]);
  var spmCPos = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_context__WEBPACK_IMPORTED_MODULE_1__["SPMPosCContext"]);

  if (!tracert) {
    return element;
  }

  var newProps = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["proxyEvent"])(element.props, tracert, spmCPos);
  var spmCVal = element.props[_utils__WEBPACK_IMPORTED_MODULE_2__["ASPM"]];

  if (/^(c{1})((?!d|\.).)*$/.test(spmCVal)) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_context__WEBPACK_IMPORTED_MODULE_1__["SPMPosCContext"].Provider, {
      value: spmCVal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](element, newProps));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](element, newProps);
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASPM", function() { return ASPM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASPM_CLICK", function() { return ASPM_CLICK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASPM_EXPO", function() { return ASPM_EXPO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASPM_EXPO_ONCE", function() { return ASPM_EXPO_ONCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASPM_PARAM", function() { return ASPM_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proxyEvent", function() { return proxyEvent; });
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

var ASPM = 'data-aspm';
var ASPM_CLICK = 'data-aspm-click';
var ASPM_EXPO = 'data-aspm-expo';
var ASPM_EXPO_ONCE = 'data-aspm-expo-once';
var ASPM_PARAM = 'data-aspm-param';

var addSpmC = function addSpmC(aspm, spmC) {
  if (!spmC || !aspm || aspm.indexOf('c') > -1) {
    return aspm;
  }

  var aspmArr = aspm.split('.');

  if (aspmArr.length === 1) {
    aspmArr.unshift(spmC);
    return aspmArr.join('.');
  }

  return aspm;
};

var wrapperCallBack = function wrapperCallBack(_a) {
  var aspm = _a.aspm,
      tracert = _a.tracert,
      method = _a.method,
      callback = _a.callback,
      aspmParam = _a.aspmParam;
  return function (event) {
    var restParams = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      restParams[_i - 1] = arguments[_i];
    }

    if (true) {
      console.log("spm: method=" + method + " aspm=" + aspm);
    }

    aspm && tracert && tracert[method](aspm, aspmParam);
    callback && callback.apply(void 0, __spreadArrays([event], restParams));
  };
};

var proxyEvent = function proxyEvent(props, tracert, spmC) {
  if (props === void 0) {
    props = {};
  }

  var newProps = {};
  var aspm = props[ASPM_CLICK] || props[ASPM];

  if (!aspm) {
    return newProps;
  }

  aspm = addSpmC(aspm, spmC);
  var events = [{
    name: 'onTap',
    alias: 'onClick',
    action: 'click',
    dataAttrName: ASPM_CLICK
  }, {
    name: 'onAppear',
    action: 'expo',
    dataAttrName: ASPM_EXPO
  }, {
    name: 'onFirstAppear',
    action: 'expo',
    dataAttrName: ASPM_EXPO_ONCE
  }];
  events.forEach(function (event) {
    var _a;

    if (props[event.dataAttrName]) {
      newProps[event.name] = wrapperCallBack({
        aspm: aspm,
        tracert: tracert,
        method: event.action,
        callback: (_a = props[event.alias]) !== null && _a !== void 0 ? _a : props[event.name],
        aspmParam: props[ASPM_PARAM] || {}
      });
    }
  });
  return newProps;
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("/__spmConfig__");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);


App(Object(_alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__["createAppConfig"])(_app_js__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@remax/runtime");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

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

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}



var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })
],[[0,0]]]);
