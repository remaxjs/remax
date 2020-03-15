'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var index$1 = require('../../index-224604e8.js');
require('react-reconciler');
require('scheduler');
var React = require('react');
var React__default = _interopDefault(React);
var Text = require('../../Text-a98472d3.js');

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

var index = Page(index$1.createPageConfig(_page));

exports.default = index;
