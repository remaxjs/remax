'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var createPageConfig = require('../npm/remax/esm/createPageConfig.js');
require('../npm/remax/esm/index.js');
var View = require('../components/View.js');
var Text = require('../components/Text.js');

var _page = function _page() {
  var _, _obj$a;

  var props = {};
  var TextElement = React.cloneElement(React.createElement(Text.default, null));

  var handleClick = function handleClick() {
    return void 0;
  };

  var handleTouchStart = function handleTouchStart() {
    return void 0;
  };

  var obj = {};
  var value = (_ = 0) !== null && _ !== void 0 ? _ : 1;
  return React.createElement(View.default, null, React.createElement(View.default, _rollupPluginBabelHelpers.extends({
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    id: "view"
  }, props), "foo", obj === null || obj === void 0 ? void 0 : (_obj$a = obj.a) === null || _obj$a === void 0 ? void 0 : _obj$a.b, value), TextElement);
};

var index = Page(createPageConfig.default(_page));

exports.default = index;
