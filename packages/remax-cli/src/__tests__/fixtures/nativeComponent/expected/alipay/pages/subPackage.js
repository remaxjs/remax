require('./../runtime.js');
require('./../app~pages/index~pages/index2~pages/index3~pages/index4~pages/subPackage.js');
require('./index~pages/index2~pages/index3~pages/index4~pages/subPackage.js');
(my["webpackJsonp"] = my["webpackJsonp"] || []).push([[7],{

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(104);


/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_alipay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);




var Plugin = requirePlugin('plugin://myPlugin');
Plugin.api();
var PluginComponent = Object(remax__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])("xx");
var PluginComponent2 = Object(remax__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])("dddd");

var _page = function _page() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_alipay__WEBPACK_IMPORTED_MODULE_2__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](PluginComponent, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](PluginComponent2, null));
};

/* harmony default export */ __webpack_exports__["default"] = (Page(Object(remax__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_page)));

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = react;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = react-reconciler;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = scheduler;

/***/ })

},[[103,0,2,8]]]);