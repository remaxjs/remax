'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('../index.js');
require('react-reconciler');
require('scheduler');
var React = require('react');
var toutiao = require('../toutiao.js');

var CJSComponent = index$1.createNativeComponent('cjs-0');
var NotInJSXComponent = index$1.createNativeComponent('not-in-jsx-0');
var SrcComponent = index$1.createNativeComponent('src-0');
var ScopedComponent = index$1.createNativeComponent('a-1');
var SlotComponent = index$1.createNativeComponent('slot-0');
var PluginComponent2 = index$1.createNativeComponent('my-plugin-1');
var PluginComponent = index$1.createNativeComponent('my-plugin-0');
var Complex = index$1.createNativeComponent('complex-0');
var E = index$1.createNativeComponent('e-0');
var D = index$1.createNativeComponent('d-0');
var C = index$1.createNativeComponent('c-0');
var B = index$1.createNativeComponent('b-0');
var A = index$1.createNativeComponent('a-0');














var _page = function _page() {
  var b = React.createRef();
  var text = 'not in jsx' + NotInJSXComponent;
  return React.createElement(toutiao.View, null, React.createElement(A, {
    foo: "bar"
  }), React.createElement(B, {
    ref: b
  }), React.createElement(C, null), React.createElement(D, null), React.createElement(E, null), React.createElement(Complex, null), React.createElement(PluginComponent, null), React.createElement(PluginComponent2, null), React.createElement(SlotComponent, null, React.createElement(toutiao.View, {
    slot: "inner"
  })), React.createElement(ScopedComponent, null), React.createElement(SrcComponent, null), React.createElement(CJSComponent, null), text);
};

var index = Page(index$1.createPageConfig(_page), true);

exports.default = index;
