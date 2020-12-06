require('./../../runtime.js');
(my["webpackJsonp"] = my["webpackJsonp"] || []).push([[3],{

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _module_a__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_module_a__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__(45);

'use strict';

var _fmtEvent = _interopRequireDefault(__webpack_require__(46));



function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

Component({
  data: {},
  props: {
    className: '',
    style: '',
    onClick: function onClick(e) {},
    onLongpress: function onLongpress(e) {},
    onAppear: function onAppear(e) {},
    onDisAppear: function onDisAppear(e) {},
    onTouchStart: function onTouchStart(e) {},
    onTouchMove: function onTouchMove(e) {},
    onTouchEnd: function onTouchEnd(e) {},
    onTouchCancel: function onTouchCancel(e) {},
    animation: null
  },
  didMount: function didMount() {},
  methods: {
    onClick: function onClick(e) {
      var event = (0, _fmtEvent['default'])(this.props, e);
      this.props.onClick(event);
    },
    onLongpress: function onLongpress(e) {
      var event = (0, _fmtEvent['default'])(this.props, e);
      this.props.onLongpress(event);
    },
    onAppear: function onAppear(e) {
      var event = (0, _fmtEvent['default'])(this.props, e);
      this.props.onAppear(event);
    },
    onDisAppear: function onDisAppear(e) {
      var event = (0, _fmtEvent['default'])(this.props, e);
      this.props.onDisAppear(event);
    },
    onTouchStart: function onTouchStart(e) {
      var event = (0, _fmtEvent['default'])(this.props, e);
      this.props.onTouchStart(event);
    },
    onTouchMove: function onTouchMove(e) {
      var event = (0, _fmtEvent['default'])(this.props, e);
      this.props.onTouchMove(event);
    },
    onTouchEnd: function onTouchEnd(e) {
      var event = (0, _fmtEvent['default'])(this.props, e);
      this.props.onTouchEnd(event);
    },
    onTouchCancel: function onTouchCancel(e) {
      var event = (0, _fmtEvent['default'])(this.props, e);
      this.props.onTouchCancel(event);
    }
  }
});

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

/* istanbul ignore next */
// extracted by mini-css-extract-plugin

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _esmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);



exports.__esModule = true;
exports.default = fmtEvent;

function fmtEvent(props, e) {
  var dataset = {};

  for (var key in props) {
    if (/data-/gi.test(key)) {
      dataset[key.replace(/data-/gi, '')] = props[key];
    }
  }

  return Object.assign({}, e, {
    currentTarget: {
      dataset: dataset
    },
    target: {
      dataset: dataset,
      targetDataset: dataset
    }
  });
}

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('esmodule');

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

/* istanbul ignore next */
module.exports = 'module-a';

/***/ })

},[[44,0]]]);