'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var createPageConfig = require('../npm/remax/esm/createPageConfig.js');
require('../npm/remax/esm/index.js');
var View = require('../../components/View.js');
var Text = require('../../components/Text.js');

var _page = function _page() {
  var props = {};
  var TextElement = React.cloneElement(React.createElement(Text.default, null));

  var handleClick = function handleClick() {
    return void 0;
  };

  var handleTouchStart = function handleTouchStart() {
    return void 0;
  };

  return React.createElement(View.default, null, React.createElement(View.default, _rollupPluginBabelHelpers.extends({
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    id: "view"
  }, props), "foo"), TextElement);
};

var index = Page(createPageConfig.default(_page));

exports.default = index;
