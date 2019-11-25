'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var createPageConfig = require('../npm/remax/esm/createPageConfig.js');
require('../npm/remax/esm/index.js');
var index$2 = require('../npm/remax/esm/adapters/wechat/components/index.js');

var _page = function _page() {
  var props = {};
  var TextElement = React.cloneElement(React.createElement(index$2.Text, null));

  function handleClick() {}

  function handleTouchStart() {}

  return React.createElement(index$2.View, null, React.createElement(index$2.View, _rollupPluginBabelHelpers.extends({
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    id: "view",
    "data-foo": "bar"
  }, props), "foo"), TextElement);
};

var index = Page(createPageConfig.default(_page));

exports.default = index;
