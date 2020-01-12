'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var createPageConfig = require('../npm/remax/esm/createPageConfig.js');
require('../npm/remax/esm/index.js');
var View = require('../components/View.js');
var Nihao = require('./Nihao.js');

var _page = function _page() {
  return React.createElement(View.default, null, React.createElement(Nihao.default, null));
};

var index2 = Page(createPageConfig.default(_page));

exports.default = index2;
