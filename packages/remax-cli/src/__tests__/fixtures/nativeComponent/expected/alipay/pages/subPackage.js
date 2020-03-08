'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('../index.js');
require('react-reconciler');
require('scheduler');
var React = require('react');
var alipay = require('../alipay.js');

var PluginComponent2 = index$1.createNativeComponent('sub-plugin-1');
var PluginComponent = index$1.createNativeComponent('sub-plugin-0');



var _page = function _page() {
  return React.createElement(alipay.View, null, React.createElement(PluginComponent, null), React.createElement(PluginComponent2, null));
};

var subPackage = Page(index$1.createPageConfig(_page), true);

exports.default = subPackage;
