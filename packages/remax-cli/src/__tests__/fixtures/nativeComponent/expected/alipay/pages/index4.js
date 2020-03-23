'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('../index-chunk.js');
require('react-reconciler');
require('scheduler');
var React = require('react');
var alipay = require('../alipay-chunk.js');
var index = require('../index-chunk3.js');

var B = index$1.createNativeComponent('b-0');


var _page = function _page() {
  return /*#__PURE__*/React.createElement(alipay.View, null, /*#__PURE__*/React.createElement(index.G, null), /*#__PURE__*/React.createElement(B, null));
};

var index4 = Page(index$1.createPageConfig(_page));

exports.default = index4;
