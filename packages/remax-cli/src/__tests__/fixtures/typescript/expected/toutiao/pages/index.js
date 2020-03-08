'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('../index.js');
require('react-reconciler');
require('scheduler');
var React = require('react');
var Text = require('../Text.js');

var _page = function _page() {
  var _, _obj$a;

  var props = {};
  var TextElement = React.cloneElement(React.createElement(Text.Text, null));

  var handleClick = function handleClick() {
    return void 0;
  };

  var handleTouchStart = function handleTouchStart() {
    return void 0;
  };

  var obj = {};
  var value = (_ = 0) !== null && _ !== void 0 ? _ : 1;
  return React.createElement(Text.View, null, React.createElement(Text.View, index$1._extends({
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    id: "view"
  }, props), "foo", obj === null || obj === void 0 ? void 0 : (_obj$a = obj.a) === null || _obj$a === void 0 ? void 0 : _obj$a.b, value), TextElement);
};

var index = Page(index$1.createPageConfig(_page), true);

exports.default = index;
