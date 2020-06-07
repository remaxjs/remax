'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
require('../npm/remix/esm/render.js');
var React = require('react');
require('../npm/remix/esm/createAppConfig.js');
require('../npm/remix/esm/createHostComponent.js');
var createPageConfig = require('../npm/remix/esm/createPageConfig.js');
require('../npm/remix/esm/index.js');
var index$B = require('../npm/remix/npm/remix-wechat/esm/hostComponents/index.js');

var _page = function _page() {
  var props = {};
  var TextElement = React.cloneElement(React.createElement(index$B.Text, null));

  function handleClick() {}

  function handleTouchStart() {}

  return React.createElement(index$B.View, null, React.createElement(index$B.View, _rollupPluginBabelHelpers.extends({
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    id: "view",
    "data-foo": "bar"
  }, props), "foo"), TextElement);
};

var index = Page(createPageConfig.default(_page));

exports.default = index;
