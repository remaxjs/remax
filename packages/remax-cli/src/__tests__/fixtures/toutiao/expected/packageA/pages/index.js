'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('../../index.js');
require('react-reconciler');
require('scheduler');
var React = require('react');
var wechat = require('../../wechat.js');

var _page = function _page() {
  var props = {};
  var TextElement = React.cloneElement(React.createElement(wechat.Text, null));

  function handleClick() {}

  function handleTouchStart() {}

  return React.createElement(wechat.View, null, React.createElement(wechat.View, index$1._extends({
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    id: "view",
    "data-foo": "bar"
  }, props), "foo"), TextElement);
};

var index = Page(index$1.createPageConfig(_page), true);

exports.default = index;
