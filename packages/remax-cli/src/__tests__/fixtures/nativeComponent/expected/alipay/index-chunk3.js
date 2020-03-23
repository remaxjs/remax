'use strict';

var index$1 = require('./index-chunk.js');
var React = require('react');

var D = index$1.createNativeComponent('d-0');

var Hello = (function () {
  return /*#__PURE__*/React.createElement(D, null);
});

var C = index$1.createNativeComponent('c-0');
var H = (function () {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(C, null), /*#__PURE__*/React.createElement(Hello, null));
});

var NavBar = index$1.createNativeComponent('a-0');
var G = (function () {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NavBar, {
    title: "Test title"
  }), /*#__PURE__*/React.createElement(H, null));
});

exports.G = G;
