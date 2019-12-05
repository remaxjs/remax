'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var createPageConfig = require('../npm/remax/esm/createPageConfig.js');
require('../npm/remax/esm/index.js');
var runtime = require('../npm/regenerator-runtime/runtime.js');
var View = require('../components/View.js');
var Text = require('../components/Text.js');

var _page = function _page() {
  var props = {};
  var TextElement = React.cloneElement(React.createElement(Text.default, null));

  function handleClick() {
    return runtime.default.async(function handleClick$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return runtime.default.awrap(Promise.resolve(1));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  }

  function handleTouchStart() {}

  return React.createElement(View.default, null, React.createElement(View.default, _rollupPluginBabelHelpers.extends({
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    id: "view"
  }, props), "foo"), TextElement);
};

var index = Page(createPageConfig.default(_page));

exports.default = index;
