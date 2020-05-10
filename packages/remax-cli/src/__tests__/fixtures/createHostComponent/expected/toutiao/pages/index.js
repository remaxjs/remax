require('./../runtime.js');
(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([[2],[
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
/* harmony import */ var custom_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);




var FooBar = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('foo-bar');

var _page = function _page() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](FooBar, {
    foo: "bar",
    className: "class"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](custom_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
    foo: "bar"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_page, "pages/index")));

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('custom-component'));

/***/ })
],[[4,0]]]);