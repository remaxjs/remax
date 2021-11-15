require('./runtime.js');
(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([[1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var remax_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(remax_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _remax_runtime_options___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _remax_runtime_options___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_remax_runtime_options___WEBPACK_IMPORTED_MODULE_1__);


var pluginDriver = new remax_runtime__WEBPACK_IMPORTED_MODULE_0__["PluginDriver"]([].map(function (p) {
  return p.default || p;
}));
remax_runtime__WEBPACK_IMPORTED_MODULE_0__["RuntimeOptions"].apply({
  platform: "toutiao",
  debug: false,
  pxToRpx: true,
  pluginDriver: pluginDriver,
  hostComponents: _remax_runtime_options___WEBPACK_IMPORTED_MODULE_1__["hostComponents"],
  pageEvents: _remax_runtime_options___WEBPACK_IMPORTED_MODULE_1__["pageEvents"],
  appEvents: _remax_runtime_options___WEBPACK_IMPORTED_MODULE_1__["appEvents"]
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("remax/runtime");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require('/__remax_runtime_options__');

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
__webpack_require__(5);



App(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createAppConfig"])(_app_js__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@remax/runtime");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_0__);


var App = function App(props) {
  return props.children;
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })
],[[0,0]]]);