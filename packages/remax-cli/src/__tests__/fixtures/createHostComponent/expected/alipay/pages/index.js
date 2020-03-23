'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('../index-chunk.js');
require('react-reconciler');
require('scheduler');
var React = require('react');

var CustomComponent = index$1.createHostComponent('custom-component');

var FooBar = index$1.createHostComponent('foo-bar');

var _page = function _page() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FooBar, {
    foo: "bar",
    className: "class"
  }), /*#__PURE__*/React.createElement(CustomComponent, {
    foo: "bar"
  }));
};

var index = Page(index$1.createPageConfig(_page));

exports.default = index;
