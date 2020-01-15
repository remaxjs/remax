'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var createNativeComponent = require('../npm/remax/esm/createNativeComponent.js');
require('../npm/remax/esm/index.js');
var index = require('../h/index.js');

var NavBar = createNativeComponent.default('a-0');
var G = (function () {
  return React.createElement(React.Fragment, null, React.createElement(NavBar, {
    title: "Test title"
  }), React.createElement(index.default, null));
});

exports.default = G;
