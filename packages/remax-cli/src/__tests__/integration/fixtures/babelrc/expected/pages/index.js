require('./../runtime.js');
(my["webpackJsonp"] = my["webpackJsonp"] || []).push([[2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);


Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index'));

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@remax/runtime");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_a__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remax__WEBPACK_IMPORTED_MODULE_2__);
var _class, _descriptor, _temp;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) { return; } Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; var _a2 = Object.keys(descriptor); var _f2 = function _f2(key) { desc[key] = descriptor[key]; }; for (var _i2 = 0; _i2 < _a2.length; _i2++) { _f2(_a2[_i2], _i2, _a2); } undefined; desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }





function timesTwo(arr) {
  var _a = arr;

  var _f = function _f(n) {
    return n * 2;
  };

  var _r = [];

  for (var _i = 0; _i < _a.length; _i++) {
    _r.push(_f(_a[_i], _i, _a));
  }

  return _r;
}

function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

var C = (_class = (_temp = function C() {
  _classCallCheck(this, C);

  _initializerDefineProperty(this, "p", _descriptor, this);
}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "p", [readonly], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 'p';
  }
})), _class);
var c = new C();
c.p = 'a';
var props = {};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax__WEBPACK_IMPORTED_MODULE_2__["View"], null, timesTwo([1, 2, 3]), c.p, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_a__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax__WEBPACK_IMPORTED_MODULE_2__["View"], _extends({
    slot: "slot"
  }, props))));
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])('a-index-20116ca'));

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("remax");

/***/ })
],[[5,0]]]);