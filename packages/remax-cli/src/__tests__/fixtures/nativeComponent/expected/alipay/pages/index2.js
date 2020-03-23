'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('../index-chunk.js');
require('react-reconciler');
require('scheduler');
var React = require('react');
var alipay = require('../alipay-chunk.js');

var D = index$1.createNativeComponent('d-0');
var F = index$1.createNativeComponent('f-0');


var Hello = (function () {
  return /*#__PURE__*/React.createElement(alipay.View, null, /*#__PURE__*/React.createElement(F, null), /*#__PURE__*/React.createElement(D, null));
});

var Nihao = (function () {
  return /*#__PURE__*/React.createElement(alipay.View, null, /*#__PURE__*/React.createElement(Hello, null));
});

var _page = function _page() {
  return /*#__PURE__*/React.createElement(alipay.View, null, /*#__PURE__*/React.createElement(Nihao, null));
};

var index2 = Page(index$1.createPageConfig(_page));

exports.default = index2;
