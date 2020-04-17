require('./../../runtime.js');
require('./../../app~pages/entry/index~pages/index~pages/turboPageDisabled.js');
require('./index~pages/index~pages/turboPageDisabled.js');
(my["webpackJsonp"] = my["webpackJsonp"] || []).push([[4],{

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

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(84);


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_alipay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var _components_nativeComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81);
/* harmony import */ var remax_window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82);


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
  if (n === "Map" || n === "Set") return Array.from(n);
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








var RenameView = remax_alipay__WEBPACK_IMPORTED_MODULE_2__["View"];
var Deep = {
  Object: {
    View: remax_alipay__WEBPACK_IMPORTED_MODULE_2__["View"]
  }
};
var DDD = Object(remax__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('ddd');

function ReactComp(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_alipay__WEBPACK_IMPORTED_MODULE_2__["View"], {
    _tid: "30"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("stub-block", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("stub-block", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_alipay__WEBPACK_IMPORTED_MODULE_2__["View"], {
    _tid: "31"
  }, "View inside Expression")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, react__WEBPACK_IMPORTED_MODULE_1__["Children"].map(children, function (child, index) {
    return react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"](child, {
      id: 'reactComp' + index
    });
  }))));
}

function _Index() {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_alipay__WEBPACK_IMPORTED_MODULE_2__["View"], {
    entry: true,
    _tid: "32"
  }, "JSXText entry", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, 'expression entry'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("stub-block", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("stub-block", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("stub-block", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("stub-block", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, "Fragment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, "React.Fragment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DDD, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("stub-block", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_nativeComponent__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ReactComp, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_alipay__WEBPACK_IMPORTED_MODULE_2__["View"], {
    _tid: "33"
  }, "React Component First Child"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, 'React Component Second Child'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_alipay__WEBPACK_IMPORTED_MODULE_2__["View"], null, "Count: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, count)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_alipay__WEBPACK_IMPORTED_MODULE_2__["View"], {
    id: count
  }, "view"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("stub-block", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]('view', {
    id: 'view'
  }, [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_alipay__WEBPACK_IMPORTED_MODULE_2__["View"], {
    _tid: "34"
  }, "create element children 1"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]('view', {
    key: '2'
  })])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, [1, 2, 3].map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_alipay__WEBPACK_IMPORTED_MODULE_2__["View"], {
      key: item,
<<<<<<< HEAD
      _tid: "35",
      __key: item
    }, "array map: ", /*#__PURE__*/React.createElement("block", null, item));
  })), /*#__PURE__*/React.createElement(index$2.View, props, "Spread Attributes View"), /*#__PURE__*/React.createElement("stub-block", null), /*#__PURE__*/React.createElement("block", null, /*#__PURE__*/React.createElement(index$2.RemaxWindow, null)), /*#__PURE__*/React.createElement("block", null, 'Literal Expression'), /*#__PURE__*/React.createElement("block", null, /*#__PURE__*/React.createElement(Deep.Object.View, null, "Deep Object View")), /*#__PURE__*/React.createElement("block", null, /*#__PURE__*/React.createElement(RenameView, null, "Rename View")), /*#__PURE__*/React.createElement("block", null, show && /*#__PURE__*/React.createElement(index$2.View, {
=======
      _tid: "35"
    }, "array map: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, item));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_alipay__WEBPACK_IMPORTED_MODULE_2__["View"], props, "Spread Attributes View"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("stub-block", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_window__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, 'Literal Expression'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Deep.Object.View, null, "Deep Object View")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](RenameView, null, "Rename View")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", null, show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_alipay__WEBPACK_IMPORTED_MODULE_2__["View"], {
>>>>>>> next
    _tid: "36"
  }, "Conditional View")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_alipay__WEBPACK_IMPORTED_MODULE_2__["Text"], null, showPlainText && plainText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("stub-block", null));
}

/* harmony default export */ __webpack_exports__["default"] = (Page(Object(remax__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_Index)));

/***/ })

},[[83,0,2,6]]]);