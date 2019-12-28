'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var createNativeComponent = require('../npm/remax/esm/createNativeComponent.js');
require('../npm/remax/esm/index.js');
var View = require('../components/View.js');

var D = createNativeComponent.default('d-0');
var F = createNativeComponent.default('f-0');


var Hello = (function () {
  return React.createElement(View.default, null, React.createElement(F, null), React.createElement(D, null));
});

exports.default = Hello;
