'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('../index-chunk.js');
require('react-reconciler');
require('scheduler');
var React = require('react');
require('../index-chunk2.js');
var alipay = require('../alipay-chunk.js');

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
  return /*#__PURE__*/React.createElement(alipay.View, null, /*#__PURE__*/React.createElement(A, {
    foo: "bar"
  }), /*#__PURE__*/React.createElement(B, {
    ref: b
  }), /*#__PURE__*/React.createElement(C, null), /*#__PURE__*/React.createElement(D, null), /*#__PURE__*/React.createElement(E, null), /*#__PURE__*/React.createElement(Complex, null), /*#__PURE__*/React.createElement(PluginComponent, null), /*#__PURE__*/React.createElement(PluginComponent2, null), /*#__PURE__*/React.createElement(SlotComponent, null, /*#__PURE__*/React.createElement(alipay.View, {
    id: "inner",
    slot: "inner"
  })), /*#__PURE__*/React.createElement(SlotComponent, null, /*#__PURE__*/React.createElement(alipay.View, {
    className: "outer",
    slot: "outer",
    "ns:attr": "value"
  })), /*#__PURE__*/React.createElement(ScopedComponent, null), /*#__PURE__*/React.createElement(SrcComponent, null), /*#__PURE__*/React.createElement(CJSComponent, null), text);
};

var index = Page(index$1.createPageConfig(_page));

exports.default = index;
