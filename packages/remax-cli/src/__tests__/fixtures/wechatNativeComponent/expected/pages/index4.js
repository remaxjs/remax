'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('../index.js');
require('react-reconciler');
require('scheduler');
var React = require('react');
var wechat = require('../wechat.js');
var index = require('../index2.js');

var B = index$1.createNativeComponent('b-0');


var _page = function _page() {
  return React.createElement(wechat.View, null, React.createElement(index.G, null), React.createElement(B, null));
};

var index4 = Page(index$1.createPageConfig(_page));

exports.default = index4;
