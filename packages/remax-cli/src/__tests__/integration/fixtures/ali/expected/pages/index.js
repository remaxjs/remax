require('./../runtime.js');
require('./../remax-vendors.js');
require('./../remax-styles.js');
(my["webpackJsonp"] = my["webpackJsonp"] || []).push([[2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@remax/runtime");

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
__webpack_require__(12);



Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index'));

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remax__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_C__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
var _data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(18, 1);
/* harmony import */ var _index_module_css_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _index_module_css_modules__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css_modules__WEBPACK_IMPORTED_MODULE_5__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



 // 测试引用 json 模块



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _;

  var props = {};
  var TextElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"]( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax__WEBPACK_IMPORTED_MODULE_2__["Text"], null));

  function handleClick() {
    return _handleClick.apply(this, arguments);
  }

  function _handleClick() {
    _handleClick = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.resolve(1);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleClick.apply(this, arguments);
  }

  function handleTouchStart() {}

  var value = (_ = 0) !== null && _ !== void 0 ? _ : 1;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_module_css_modules__WEBPACK_IMPORTED_MODULE_5___default.a['page-index']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_C__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "b"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax__WEBPACK_IMPORTED_MODULE_2__["View"], _extends({
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    id: "view",
    "unrecognized-props": "",
    "data-foo": "bar",
    key: "my-view"
  }, props, {
    __key: "my-view"
  }), "foo", _data_json__WEBPACK_IMPORTED_MODULE_4__ === null || _data_json__WEBPACK_IMPORTED_MODULE_4__ === void 0 ? void 0 : _data_json__WEBPACK_IMPORTED_MODULE_4__.data, value), TextElement);
});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("remax");

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":\"value\"}");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"page-index":"page-index___1ZW9Y"};

/***/ })
],[[10,0,6,4]]]);