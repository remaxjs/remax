require('./../runtime.js');
require('./../remax-vendors.js');
(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([[2],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

module.exports = "@remax/runtime";

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

module.exports = "react";

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_remax_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remax_wechat__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_C__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/* harmony import */ var _api_chooseImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28);
/* harmony import */ var _api_chooseImageMini__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29);
/* harmony import */ var _api_chooseImageAli__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30);
/* harmony import */ var _index_module_css_modules__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31);
/* harmony import */ var _index_module_css_modules__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_module_css_modules__WEBPACK_IMPORTED_MODULE_9__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }











var _page = function _page() {
  var _, _obj$a;

  var props = {};
  var TextElement = react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"]( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["Text"], null));

  function handleClick() {
    return _handleClick.apply(this, arguments);
  }

  function _handleClick() {
    _handleClick = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Object(_api_chooseImage__WEBPACK_IMPORTED_MODULE_6__["default"])();
              Object(_api_chooseImageMini__WEBPACK_IMPORTED_MODULE_7__["default"])();
              Object(_api_chooseImageAli__WEBPACK_IMPORTED_MODULE_8__["default"])();
              _context.next = 5;
              return Promise.resolve(1);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleClick.apply(this, arguments);
  }

  function handleTouchStart() {}

  var obj = {};
  var value = (_ = 0) !== null && _ !== void 0 ? _ : 1;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: _index_module_css_modules__WEBPACK_IMPORTED_MODULE_9___default.a['page-index']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_components_C__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "b"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], _extends({
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    id: "view",
    "data-foo": "bar"
  }, props), "foo", obj === null || obj === void 0 ? void 0 : (_obj$a = obj.a) === null || _obj$a === void 0 ? void 0 : _obj$a.b, value), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    "wechat-bindtap": handleClick
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_4__["FunctionalPageNavigator"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](UnBindingComponent, null), TextElement);
};

/* harmony default export */ __webpack_exports__["default"] = (Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_1__["createPageConfig"])(_page, "pages/index")));

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "regenerator-runtime";

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["Form"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["Label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["Textarea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["View"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["WebView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["navigateTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBack", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["navigateBack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["redirectTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reLaunch", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["reLaunch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchTab", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["switchTab"]; });



/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports) {

module.exports = "@remax/toutiao";

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "remax/wechat";

/***/ }),
/* 25 */,
/* 26 */
/***/ (function(module, exports) {

module.exports = "remax/ali";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_ali__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var remax_ali__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(remax_ali__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (remax_ali__WEBPACK_IMPORTED_MODULE_0__["chooseImage"]);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_ali__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var remax_ali__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(remax_ali__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (remax_ali__WEBPACK_IMPORTED_MODULE_0__["chooseImage"]);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {// ignore
});

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"page-index":"page-index___1ZW9Y"};

/***/ })
],[[6,0,4]]]);