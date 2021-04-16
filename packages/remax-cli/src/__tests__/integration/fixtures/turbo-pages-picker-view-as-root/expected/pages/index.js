require('./../runtime.js');
(my["webpackJsonp"] = my["webpackJsonp"] || []).push([[2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _alipay_remix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _alipay_remix__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_alipay_remix__WEBPACK_IMPORTED_MODULE_2__);




var _page = function _page(props) {
  var columns = [[{
    label: '1.1'
  }, {
    label: '1.2'
  }], [{
    label: '2.1'
  }, {
    label: '2.2'
  }]];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_alipay_remix__WEBPACK_IMPORTED_MODULE_2__["View"], {
    _tid: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_alipay_remix__WEBPACK_IMPORTED_MODULE_2__["PickerView"], null, columns.map(function (colum, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_alipay_remix__WEBPACK_IMPORTED_MODULE_2__["PickerViewColumn"], {
      key: idx
    }, colum.map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_alipay_remix__WEBPACK_IMPORTED_MODULE_2__["View"], {
        key: index,
        _tid: "2",
        __key: index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("block", null, item.label));
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Page(Object(_alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_page, "pages/index")));

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@remax/runtime");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@alipay/remax");

/***/ })
],[[6,0]]]);
