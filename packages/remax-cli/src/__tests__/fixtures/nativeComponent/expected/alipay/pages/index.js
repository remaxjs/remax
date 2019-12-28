'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var createPageConfig = require('../npm/remax/esm/createPageConfig.js');
var createNativeComponent = require('../npm/remax/esm/createNativeComponent.js');
require('../npm/remax/esm/index.js');
var View = require('../components/View.js');

var CJSComponent = createNativeComponent.default('cjs-0');
var NotInJSXComponent = createNativeComponent.default('not-in-jsx-0');
var SrcComponent = createNativeComponent.default('src-0');
var ScopedComponent = createNativeComponent.default('a-1');
var SlotComponent = createNativeComponent.default('slot-0');
var PluginComponent2 = createNativeComponent.default('my-plugin-1');
var PluginComponent = createNativeComponent.default('my-plugin-0');
var Complex = createNativeComponent.default('complex-0');
var E = createNativeComponent.default('e-0');
var D = createNativeComponent.default('d-0');
var C = createNativeComponent.default('c-0');
var B = createNativeComponent.default('b-0');
var A = createNativeComponent.default('a-0');














var _page = function _page() {
  var b = React.createRef();
  var text = 'not in jsx' + NotInJSXComponent;
  return React.createElement(View.default, null, React.createElement(A, {
    foo: "bar"
  }), React.createElement(B, {
    ref: b
  }), React.createElement(C, null), React.createElement(D, null), React.createElement(E, null), React.createElement(Complex, null), React.createElement(PluginComponent, null), React.createElement(PluginComponent2, null), React.createElement(SlotComponent, null, React.createElement(View.default, {
    slot: "inner"
  })), React.createElement(ScopedComponent, null), React.createElement(SrcComponent, null), React.createElement(CJSComponent, null), text);
};

var index = Page(createPageConfig.default(_page));

exports.default = index;
