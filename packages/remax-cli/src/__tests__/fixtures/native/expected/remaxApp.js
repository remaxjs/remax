'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('react-reconciler');
require('scheduler');
var remaxVendor = require('./remaxVendor.js');
require('react');

function _ref(props) {
  return props.children;
}

var remaxApp = (function (config) {
  return remaxVendor.createAppConfig(_ref, config);
});

exports.default = remaxApp;
