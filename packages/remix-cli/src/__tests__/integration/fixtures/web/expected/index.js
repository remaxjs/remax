(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _alipay_remix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _alipay_remix__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_alipay_remix__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _alipay_remix_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _alipay_remix_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_alipay_remix_web__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _alipay_remix_appx_components_lib_autoSetContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _alipay_remix_appx_components_lib_autoSetContext_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_alipay_remix_appx_components_lib_autoSetContext_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _alipay_remix_appx_components_lib_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _alipay_remix_appx_components_lib_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_alipay_remix_appx_components_lib_index_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _alipay_remix_web_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
/* harmony import */ var _alipay_remix_web_app_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_alipay_remix_web_app_css__WEBPACK_IMPORTED_MODULE_6__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








Object(_alipay_remix_web__WEBPACK_IMPORTED_MODULE_3__["hd"])();
var page_0 = Object(_alipay_remix_web__WEBPACK_IMPORTED_MODULE_3__["loadable"])(function () {
  return __webpack_require__.e(/* import() | pages/index/index */ 2).then(__webpack_require__.bind(null, 10)).then(function (_ref) {
    var c = _ref.default;
    return Object(_alipay_remix__WEBPACK_IMPORTED_MODULE_2__["createPageConfig"])(c);
  });
});
var page_1 = Object(_alipay_remix_web__WEBPACK_IMPORTED_MODULE_3__["loadable"])(function () {
  return __webpack_require__.e(/* import() | pages/index/index2 */ 3).then(__webpack_require__.bind(null, 12)).then(function (_ref2) {
    var c = _ref2.default;
    return Object(_alipay_remix__WEBPACK_IMPORTED_MODULE_2__["createPageConfig"])(c);
  });
});
var page_manifest_0 = {};
var page_manifest_1 = {};
var app_config = {
  "pages": ["pages/index/index", "pages/index/index2"],
  "window": {
    "navigationBarTitleText": "Remax Ali Template",
    "navigationBarBackgroundColor": "#282c34"
  }
};
var AppConfig = Object(_alipay_remix__WEBPACK_IMPORTED_MODULE_2__["createAppConfig"])(_app__WEBPACK_IMPORTED_MODULE_0__["default"]);
Object(_alipay_remix_web__WEBPACK_IMPORTED_MODULE_3__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](AppConfig, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alipay_remix_web__WEBPACK_IMPORTED_MODULE_3__["Router"], {
  history: _alipay_remix_web__WEBPACK_IMPORTED_MODULE_3__["history"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alipay_remix_web__WEBPACK_IMPORTED_MODULE_3__["CacheSwitch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alipay_remix_web__WEBPACK_IMPORTED_MODULE_3__["Route"], {
  exact: true,
  path: "/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alipay_remix_web__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
  to: "/pages/index/index"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alipay_remix_web__WEBPACK_IMPORTED_MODULE_3__["CacheRoute"], {
  className: "remix-cached-router-wrapper",
  path: "/pages/index/index",
  exact: true
}, function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](page_0, _objectSpread(_objectSpread({}, props), {}, {
    pageConfig: page_manifest_0,
    appConfig: app_config
  }));
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alipay_remix_web__WEBPACK_IMPORTED_MODULE_3__["CacheRoute"], {
  className: "remix-cached-router-wrapper",
  path: "/pages/index/index2",
  exact: true
}, function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](page_1, _objectSpread(_objectSpread({}, props), {}, {
    pageConfig: page_manifest_1,
    appConfig: app_config
  }));
})))), document.getElementById('remix-app'));

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var App = function App(props) {
  return props.children;
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@alipay/remix");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@alipay/remix/web");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@alipay/remix-appx-components/lib/autoSetContext.js");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@alipay/remix-appx-components/lib/index.css");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@alipay/remix/web/app.css");

/***/ })
],[[0,0]]]);