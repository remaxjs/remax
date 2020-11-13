require('./../runtime.js');
(my["webpackJsonp"] = my["webpackJsonp"] || []).push([[2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@remax/runtime");

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);


Page(Object(_alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index'));

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _alipay_remix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _alipay_remix__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_alipay_remix__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_nativeComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}







var RenameView = _alipay_remix__WEBPACK_IMPORTED_MODULE_2__["View"];
var Deep = {
  Object: {
    View: _alipay_remix__WEBPACK_IMPORTED_MODULE_2__["View"]
  }
};
var DDD = Object(_alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('ddd');

function ReactComp(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alipay_remix__WEBPACK_IMPORTED_MODULE_2__["View"], {
    _tid: "5da6971-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alipay_remix__WEBPACK_IMPORTED_MODULE_2__["Text"], null, "react component"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alipay_remix__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    _tid: "5da6971-2"
  }, "Text inside Fragment")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alipay_remix__WEBPACK_IMPORTED_MODULE_2__["View"], {
    _tid: "5da6971-3"
  }, "View inside Expression")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, react__WEBPACK_IMPORTED_MODULE_1__["Children"].map(children, function (child, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"](child, {
      id: 'reactComp' + index
    });
  }))));
}

function Index() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](1),
      _React$useState2 = _slicedToArray(_React$useState, 1),
      count = _React$useState2[0];

  var props = {
    id: 'spreadId'
  };

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](true),
      _React$useState4 = _slicedToArray(_React$useState3, 1),
      show = _React$useState4[0];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](true),
      _React$useState6 = _slicedToArray(_React$useState5, 1),
      showPlainText = _React$useState6[0];

  var plainText = 'plain-text-leaf';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alipay_remix__WEBPACK_IMPORTED_MODULE_2__["View"], {
    entry: true,
    _tid: "5da6971-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, 'expression entry'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, 123313), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alipay_remix__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    _tid: "5da6971-5"
  }, "Fragment Text 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alipay_remix__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    _tid: "5da6971-6"
  }, "Fragment Text 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alipay_remix__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    _tid: "5da6971-7"
  }, "Fragment Text 3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alipay_remix__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    _tid: "5da6971-8"
  }, "Fragment Text 4"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, "Fragment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, "React.Fragment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DDD, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alipay_remix__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    _tid: "5da6971-9"
  }, "Remix.Text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_nativeComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "ns:attr": "1"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ReactComp, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alipay_remix__WEBPACK_IMPORTED_MODULE_2__["View"], {
    _tid: "5da6971-10"
  }, "React Component First Child"), 'React Component Second Child')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alipay_remix__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "className",
    _tid: "5da6971-11"
  }, "Count: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, count)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alipay_remix__WEBPACK_IMPORTED_MODULE_2__["View"], {
    id: count,
    className: 'class',
    _tid: "5da6971-12"
  }, "view"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alipay_remix__WEBPACK_IMPORTED_MODULE_2__["View"], {
    _tid: "5da6971-13"
  }, "custom view"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]('view', {
    id: 'view'
  }, [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alipay_remix__WEBPACK_IMPORTED_MODULE_2__["View"], {
    key: "1",
    _tid: "5da6971-14",
    __key: "1"
  }, "create element children 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]('view', {
    key: '2'
  })])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, [1, 2, 3].map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alipay_remix__WEBPACK_IMPORTED_MODULE_2__["View"], {
      key: item,
      _tid: "5da6971-15",
      __key: item
    }, "array map: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, item));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alipay_remix__WEBPACK_IMPORTED_MODULE_2__["View"], props, "Spread Attributes View"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alipay_remix__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    _tid: "5da6971-16"
  }, "long long long long long long long long long long long long text long long long long long long long long long long long long text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, 'Literal Expression'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Deep.Object.View, null, "Deep Object View")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](RenameView, null, "Rename View")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alipay_remix__WEBPACK_IMPORTED_MODULE_2__["View"], {
    _tid: "5da6971-17"
  }, "Conditional View")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alipay_remix__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    leaf: true,
    _tid: "5da6971-18"
  }, showPlainText && plainText)));
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@alipay/remix");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])('native-component-index-f24c316'));

/***/ })
],[[8,0]]]);
