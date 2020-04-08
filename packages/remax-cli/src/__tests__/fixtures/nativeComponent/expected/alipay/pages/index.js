require('./../runtime.js');
require('./../app~pages/index~pages/index2~pages/index3~pages/index4~pages/subPackage.js');
require('./index~pages/index2~pages/index3~pages/index4~pages/subPackage.js');
(my["webpackJsonp"] = my["webpackJsonp"] || []).push([[3],{

/***/ 14:
/***/ (function(module, exports) {

module.exports = react;

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(39);


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_alipay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var _components_a__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80);
/* harmony import */ var _components_b__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81);
/* harmony import */ var _components_c_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82);
/* harmony import */ var _c_d_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83);
/* harmony import */ var _components_e_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84);
/* harmony import */ var _components_complex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85);
/* harmony import */ var _components_slot__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(86);
/* harmony import */ var _components_foo_a__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87);
/* harmony import */ var _components_src__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(88);
/* harmony import */ var _components_notInJSX__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(89);
/* harmony import */ var cjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(90);















var PluginComponent = Object(remax__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])("xx");
var PluginComponent2 = Object(remax__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])("dddd");

var _page = function _page() {
  var b = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
  var text = 'not in jsx' + _components_notInJSX__WEBPACK_IMPORTED_MODULE_12__["default"];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_alipay__WEBPACK_IMPORTED_MODULE_2__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_a__WEBPACK_IMPORTED_MODULE_3__["default"], {
    foo: "bar"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_b__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ref: b
  }), /*#__PURE__*/React.createElement(C, null), /*#__PURE__*/React.createElement(D, null), /*#__PURE__*/React.createElement(E, null), /*#__PURE__*/React.createElement(Complex, null), /*#__PURE__*/React.createElement(PluginComponent, null), /*#__PURE__*/React.createElement(PluginComponent2, null), /*#__PURE__*/React.createElement(SlotComponent, null, /*#__PURE__*/React.createElement(alipay.View, {
    id: "inner",
    slot: "inner"
  })), /*#__PURE__*/React.createElement(SlotComponent, null, /*#__PURE__*/React.createElement(alipay.View, {
    className: "outer",
    slot: "outer",
    "ns:attr": "value"
  })), /*#__PURE__*/React.createElement(ScopedComponent, null), /*#__PURE__*/React.createElement(SrcComponent, null), /*#__PURE__*/React.createElement(CJSComponent, null), text);
};

/* harmony default export */ __webpack_exports__["default"] = (Page(Object(remax__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_page)));

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = react-reconciler;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = scheduler;

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/* harmony default export */ __webpack_exports__["default"] = (Object(remax__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])('index'));

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/* harmony default export */ __webpack_exports__["default"] = (Object(remax__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])('index0'));

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/* harmony default export */ __webpack_exports__["default"] = (Object(remax__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])('index1'));

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/* harmony default export */ __webpack_exports__["default"] = (Object(remax__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])('index2'));

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/* harmony default export */ __webpack_exports__["default"] = (Object(remax__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])('index3'));

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/* harmony default export */ __webpack_exports__["default"] = (Object(remax__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])('index4'));

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/* harmony default export */ __webpack_exports__["default"] = (Object(remax__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])('index5'));

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/* harmony default export */ __webpack_exports__["default"] = (Object(remax__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])('index6'));

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/* harmony default export */ __webpack_exports__["default"] = (Object(remax__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])('index7'));

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/* harmony default export */ __webpack_exports__["default"] = (Object(remax__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])('index10'));

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/* harmony default export */ __webpack_exports__["default"] = (Object(remax__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])('index8'));

/***/ })

},[[38,0,2,8]]]);