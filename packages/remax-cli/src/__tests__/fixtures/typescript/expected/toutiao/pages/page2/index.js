'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('../../index.js');
require('react-reconciler');
require('scheduler');
var React = require('react');
var Text = require('../../Text.js');

var _page = function _page() {
  var props = {};
  var TextElement = React.cloneElement(React.createElement(Text.Text, null));

  var handleClick = function handleClick() {
    return void 0;
  };

  var handleTouchStart = function handleTouchStart() {
    return void 0;
  };

  return React.createElement(Text.View, null, React.createElement(Text.View, index$1._extends({
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    id: "view"
  }, props), "foo"), TextElement);
};

var index = Page(index$1.createPageConfig(_page), true);

exports.default = index;
