'use strict';

var index$1 = require('./index.js');
var React = require('react');

var D = index$1.createNativeComponent('d-0');

var Hello = (function () {
  return React.createElement(D, null);
});

var C = index$1.createNativeComponent('c-0');
var H = (function () {
  return React.createElement(React.Fragment, null, React.createElement(C, null), React.createElement(Hello, null));
});

var NavBar = index$1.createNativeComponent('a-0');
var G = (function () {
  return React.createElement(React.Fragment, null, React.createElement(NavBar, {
    title: "Test title"
  }), React.createElement(H, null));
});

exports.G = G;
