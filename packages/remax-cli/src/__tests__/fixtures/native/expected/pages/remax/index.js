'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('react-reconciler');
require('scheduler');
var remaxVendor = require('../../remaxVendor.js');
var React = require('react');

var NativeComponent = remaxVendor.createNativeComponent('native-component-0');


function _ref(props) {
  return React.createElement(remaxVendor.View, null, React.createElement(NativeComponent, null), "alipay view");
}

var index = Page(remaxVendor.createPageConfig(_ref));

exports.default = index;
