'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var createPageConfig = require('../npm/remax/esm/createPageConfig.js');
var createNativeComponent = require('../npm/remax/esm/createNativeComponent.js');
require('../npm/remax/esm/index.js');
var View = require('../components/View.js');
var index = require('../components/g/index.js');

var B = createNativeComponent.default('b-0');


var _page = function _page() {
  return React.createElement(View.default, null, React.createElement(index.default, null), React.createElement(B, null));
};

var index3 = Page(createPageConfig.default(_page));

exports.default = index3;
