'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var index$1 = require('../index-chunk.js');
require('react-reconciler');
require('scheduler');
var React = require('react');
var regeneratorRuntime = _interopDefault(require('regenerator-runtime'));
var wechat = require('../wechat-chunk.js');

var Lifestyle = function Lifestyle() {};

var _page = function _page() {
  var props = {};
  var TextElement = React.cloneElement( /*#__PURE__*/React.createElement(wechat.Text, null));

  function handleClick() {
    return _handleClick.apply(this, arguments);
  }

  function _handleClick() {
    _handleClick = index$1._asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.resolve(1);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleClick.apply(this, arguments);
  }

  function handleTouchStart() {}

  return /*#__PURE__*/React.createElement(wechat.View, null, /*#__PURE__*/React.createElement(wechat.View, index$1._extends({
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    id: "view",
    "data-foo": "bar"
  }, props), "foo"), TextElement, /*#__PURE__*/React.createElement(Lifestyle, null), /*#__PURE__*/React.createElement(UnBindingComponent, null), /*#__PURE__*/React.createElement(wechat.Input, null), /*#__PURE__*/React.createElement(wechat.Input, {
    focus: true
  }), /*#__PURE__*/React.createElement(wechat.ScrollView, {
    scrollTop: 0
  }, /*#__PURE__*/React.createElement(wechat.View, null)), /*#__PURE__*/React.createElement(wechat.ScrollView, {
    scrollLeft: 0
  }, /*#__PURE__*/React.createElement(wechat.View, null)), /*#__PURE__*/React.createElement(wechat.Swiper, null, /*#__PURE__*/React.createElement(wechat.SwiperItem, null, "a"), /*#__PURE__*/React.createElement(wechat.SwiperItem, null, "b")), /*#__PURE__*/React.createElement(wechat.View, null, /*#__PURE__*/React.createElement(wechat.View, null, /*#__PURE__*/React.createElement(wechat.ScrollView, null, /*#__PURE__*/React.createElement(wechat.View, null)), /*#__PURE__*/React.createElement(wechat.Swiper, {
    current: 5
  }, /*#__PURE__*/React.createElement(wechat.SwiperItem, null, "a"), /*#__PURE__*/React.createElement(wechat.SwiperItem, null, "b")), /*#__PURE__*/React.createElement(wechat.Text, null, /*#__PURE__*/React.createElement(wechat.Text, null, "text")))));
};

var index = Page(index$1.createPageConfig(_page));

exports.default = index;
