'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('../index.js');
require('react-reconciler');
require('scheduler');
var React = require('react');

var CustomComponent = index$1.createHostComponent('custom-component');

var FooBar = index$1.createHostComponent('foo-bar');

var _page = function _page() {
  return React.createElement(React.Fragment, null, React.createElement(FooBar, {
    foo: "bar",
    className: "class"
  }), React.createElement(CustomComponent, {
    foo: "bar"
  }));
};

var index = Page(index$1.createPageConfig(_page), true);

exports.default = index;
