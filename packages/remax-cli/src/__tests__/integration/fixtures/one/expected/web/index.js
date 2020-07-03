(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_web_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var remax_web_normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(remax_web_normalize_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_web_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var remax_web_app_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(remax_web_app_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remax__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var remax_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var remax_web__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(remax_web__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_remax_runtime__WEBPACK_IMPORTED_MODULE_6__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








Object(remax_web__WEBPACK_IMPORTED_MODULE_5__["hd"])();
var page_0 = Object(remax_web__WEBPACK_IMPORTED_MODULE_5__["loadable"])(function () {
  return __webpack_require__.e(/* import() | pages/index */ 2).then(__webpack_require__.bind(null, 11)).then(function (_ref) {
    var c = _ref.default;
    return Object(remax__WEBPACK_IMPORTED_MODULE_4__["createPageConfig"])(c);
  });
});
var page_1 = Object(remax_web__WEBPACK_IMPORTED_MODULE_5__["loadable"])(function () {
  return __webpack_require__.e(/* import() | packageA/pages/index */ 3).then(__webpack_require__.bind(null, 22)).then(function (_ref2) {
    var c = _ref2.default;
    return Object(remax__WEBPACK_IMPORTED_MODULE_4__["createPageConfig"])(c);
  });
});
var page_manifest_0 = {
  "title": "Web App"
};
var page_manifest_1 = {};
var app_config = {
  "pages": ["pages/index", "pages/dont-exist/index"],
  "window": {
    "defaultTitle": "Ali App",
    "titleBarColor": "#323239"
  },
  "subPackages": [{
    "root": "packageA",
    "pages": ["pages/index"]
  }],
  "tabBar": {
    "textColor": "#ffffff",
    "selectedColor": "#000000",
    "backgroundColor": "#212121",
    "items": [{
      "pagePath": "pages/index/index",
      "name": "首页",
      "icon": "/assets/images/cat.png",
      "activeIcon": "/assets/images/dog.png"
    }, {
      "pagePath": "packageA/pages/index",
      "name": "其他",
      "icon": "https://img.com/assets/images/cat.png",
      "activeIcon": "/assets/images/dog.png"
    }]
  }
};
var history = !app_config.router || app_config.router.type !== 'browser' ? Object(remax_web__WEBPACK_IMPORTED_MODULE_5__["createHashHistory"])() : Object(remax_web__WEBPACK_IMPORTED_MODULE_5__["createBrowserHistory"])();
var first_page_path = app_config.pages[0] || '';
first_page_path = !first_page_path.startsWith('/') ? '/' + first_page_path : first_page_path;
_remax_runtime__WEBPACK_IMPORTED_MODULE_6__["RuntimeOptions"].apply({
  history: history
});
var AppConfig = Object(remax__WEBPACK_IMPORTED_MODULE_4__["createAppConfig"])(_app__WEBPACK_IMPORTED_MODULE_2__["default"]);

function TabBar() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__["useState"](history.location.pathname),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      currentPath = _React$useState2[0],
      setCurrentPath = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    return history.listen(function (location, action) {
      setCurrentPath(location.pathname);
    });
  }, []);

  function isActiveTab(url) {
    if (!url.startsWith('/')) {
      url = '/' + url;
    }

    if (currentPath === '/') {
      return first_page_path === url;
    }

    return currentPath === url;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    className: "remax-tab-bar",
    style: {
      backgroundColor: '#212121'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_web__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    replace: true,
    to: "/undefined",
    className: "remax-tab-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    className: "remax-tab-item-image",
    style: {
      backgroundImage: "url(".concat(isActiveTab('undefined') ? 'undefined' : 'undefined', ")")
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    className: 'remax-tab-item-title ' + (isActiveTab('undefined') ? 'active' : ''),
    style: {
      color: isActiveTab('undefined') ? '' : ''
    }
  }, "undefined")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_web__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    replace: true,
    to: "/undefined",
    className: "remax-tab-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    className: "remax-tab-item-image",
    style: {
      backgroundImage: "url(".concat(isActiveTab('undefined') ? 'undefined' : 'undefined', ")")
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    className: 'remax-tab-item-title ' + (isActiveTab('undefined') ? 'active' : ''),
    style: {
      color: isActiveTab('undefined') ? '' : ''
    }
  }, "undefined")));
}

Object(remax_web__WEBPACK_IMPORTED_MODULE_5__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](AppConfig, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_web__WEBPACK_IMPORTED_MODULE_5__["Router"], {
  history: history
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_web__WEBPACK_IMPORTED_MODULE_5__["CacheSwitch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_web__WEBPACK_IMPORTED_MODULE_5__["Route"], {
  exact: true,
  path: "/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_web__WEBPACK_IMPORTED_MODULE_5__["Redirect"], {
  to: "/pages/index"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_web__WEBPACK_IMPORTED_MODULE_5__["CacheRoute"], {
  className: "remax-cached-router-wrapper",
  path: "/pages/index",
  exact: true
}, function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](page_0, _objectSpread(_objectSpread({}, props), {}, {
    pageConfig: page_manifest_0,
    appConfig: app_config
  }));
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_web__WEBPACK_IMPORTED_MODULE_5__["CacheRoute"], {
  className: "remax-cached-router-wrapper",
  path: "/packageA/pages/index",
  exact: true
}, function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](page_1, _objectSpread(_objectSpread({}, props), {}, {
    pageConfig: page_manifest_1,
    appConfig: app_config
  }));
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](TabBar, null))), document.getElementById('remax-app'));

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("remax/web/normalize.css");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("remax/web/app.css");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_cat_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App() {
    var _this;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "image", _assets_images_cat_png__WEBPACK_IMPORTED_MODULE_2__["default"]);

    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "31d6cfe0d16ae931b73c59d7e0c089c0.png");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("remax");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("remax/web");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@remax/runtime");

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("remax/one");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("remax/wechat");

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

module.exports = require("remax/ali");

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@remax/one");

/***/ })
],[[0,0]]]);