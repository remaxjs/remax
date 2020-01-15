'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var createNativeComponent = require('../npm/remax/esm/createNativeComponent.js');
require('../npm/remax/esm/index.js');
var Hello = require('./Hello.js');

var C = createNativeComponent.default('c-0');
var H = (function () {
  return React.createElement(React.Fragment, null, React.createElement(C, null), React.createElement(Hello.default, null));
});

exports.default = H;
