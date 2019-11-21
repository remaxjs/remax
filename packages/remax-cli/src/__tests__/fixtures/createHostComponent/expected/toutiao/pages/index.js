'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var createHostComponent = require('../npm/remax/esm/createHostComponent.js');
var createPageConfig = require('../npm/remax/esm/createPageConfig.js');
require('../npm/remax/esm/index.js');
var index$2 = require('../npm/custom-component/index.js');

var FooBar = createHostComponent.default('foo-bar');

var _page = function _page() {
  return React.createElement(React.Fragment, null, React.createElement(FooBar, {
    foo: "bar",
    className: "class"
  }), React.createElement(index$2.default, {
    foo: "bar"
  }));
};

var index = Page(createPageConfig.default(_page));

exports.default = index;
