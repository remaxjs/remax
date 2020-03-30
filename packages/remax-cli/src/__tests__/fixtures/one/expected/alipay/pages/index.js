'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var index$1 = require('../index-chunk.js');
require('react-reconciler');
require('scheduler');
var React = require('react');
var regeneratorRuntime = _interopDefault(require('regenerator-runtime'));
var index$2 = require('../index-chunk2.js');

var FunctionalPageNavigator = function FunctionalPageNavigator() {};

var styles = {"page-index":"index-module_page-index__1ZW9Y"};

var _page = function _page() {
  var _, _obj$a;

  var props = {};
  var TextElement = React.cloneElement( /*#__PURE__*/React.createElement(index$2.Text, null));

  function handleClick() {
    return _handleClick.apply(this, arguments);
  }

  function _handleClick() {
    _handleClick = index$1._asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              index$2.chooseImage();
              index$2.chooseImage();
              index$2.chooseImage();
              _context.next = 5;
              return Promise.resolve(1);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleClick.apply(this, arguments);
  }

  function handleTouchStart() {}

  var obj = {};
  var value = (_ = 0) !== null && _ !== void 0 ? _ : 1;
  return /*#__PURE__*/React.createElement(index$2.View, {
    className: styles['page-index']
  }, /*#__PURE__*/React.createElement(index$2.C, {
    className: "b"
  }), /*#__PURE__*/React.createElement(index$2.View, index$1._extends({
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    id: "view",
    "data-foo": "bar"
  }, props), "foo", obj === null || obj === void 0 ? void 0 : (_obj$a = obj.a) === null || _obj$a === void 0 ? void 0 : _obj$a.b, value), /*#__PURE__*/React.createElement(FunctionalPageNavigator, null), /*#__PURE__*/React.createElement(UnBindingComponent, null), TextElement);
};

var index = Page(index$1.createPageConfig(_page));

exports.default = index;
