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
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remax__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var remax_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var remax_web__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(remax_web__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_remax_runtime__WEBPACK_IMPORTED_MODULE_6__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








Object(remax_web__WEBPACK_IMPORTED_MODULE_5__["hd"])();
var page_0 = Object(remax_web__WEBPACK_IMPORTED_MODULE_5__["loadable"])(function () {
  return __webpack_require__.e(/* import() | pages/index */ 2).then(__webpack_require__.bind(null, 10)).then(function (_ref) {
    var c = _ref.default;
    return Object(remax__WEBPACK_IMPORTED_MODULE_4__["createPageConfig"])(c);
  });
});
var page_manifest_0 = {};
var app_config = {
  "pages": ["pages/index"],
  "title": "Web App"
};
var history = !app_config.router || app_config.router.type !== 'browser' ? Object(remax_web__WEBPACK_IMPORTED_MODULE_5__["createHashHistory"])() : Object(remax_web__WEBPACK_IMPORTED_MODULE_5__["createBrowserHistory"])();
var first_page_path = app_config.pages[0] || '';
first_page_path = !first_page_path.startsWith('/') ? '/' + first_page_path : first_page_path;
_remax_runtime__WEBPACK_IMPORTED_MODULE_6__["RuntimeOptions"].apply({
  history: history
});
var AppConfig = Object(remax__WEBPACK_IMPORTED_MODULE_4__["createAppConfig"])(_app__WEBPACK_IMPORTED_MODULE_2__["default"]);
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
})))), document.getElementById('remax-app'));

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
/***/ (function(module, exports) {

module.exports = require("remax");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("remax/web");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@remax/runtime");

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

module.exports = require("remax/one");

/***/ })
],[[0,0]]]);