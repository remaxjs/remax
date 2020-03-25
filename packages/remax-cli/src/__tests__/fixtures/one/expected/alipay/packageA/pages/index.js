'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('../../index-chunk.js');
require('react-reconciler');
require('scheduler');
var React = require('react');
var index$2 = require('../../index-chunk2.js');

var _page = function _page() {
  var props = {};
  var TextElement = React.cloneElement( /*#__PURE__*/React.createElement(index$2.Text, null));

  function handleTap() {}

  function handleTouchStart() {}

  return /*#__PURE__*/React.createElement(index$2.View, {
    className: "pageA-index"
  }, /*#__PURE__*/React.createElement(index$2.C, {
    className: "a"
  }), /*#__PURE__*/React.createElement(index$2.View, index$1._extends({
    onTap: handleTap,
    onTouchStart: handleTouchStart,
    id: "view",
    "data-foo": "bar"
  }, props), "foo"), TextElement);
};

var index = Page(index$1.createPageConfig(_page));

exports.default = index;
