'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
require('../npm/remax/esm/render.js');
var React = require('react');
require('../npm/remax/esm/createAppConfig.js');
require('../npm/remax/esm/createHostComponent.js');
require('../npm/remax/esm/Platform.js');
var createPageConfig = require('../npm/remax/esm/createPageConfig.js');
require('../npm/remax/esm/index.js');
var index$u = require('../npm/remax/npm/remax-wechat/esm/hostComponents/index.js');

var _page = function _page() {
  var props = {};
  var TextElement = React.cloneElement(React.createElement(index$u.Text, null));

  function handleClick() {}

  function handleTouchStart() {}

  return React.createElement(index$u.View, null, React.createElement(index$u.View, _rollupPluginBabelHelpers.extends({
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    id: "view",
    "data-foo": "bar"
  }, props), "foo"), TextElement);
};

var index = Page(createPageConfig.default(_page));

exports.default = index;
