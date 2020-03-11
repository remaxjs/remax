'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('../index.js');
require('react-reconciler');
require('scheduler');
var React = require('react');
var alipay = require('../alipay.js');

var _ref = /*#__PURE__*/function () {
  function _ref() {
    index$1._classCallCheck(this, _ref);
  }

  index$1._createClass(_ref, [{
    key: "render",
    value: function render() {
      return React.createElement(alipay.View, null, "remax class component page test");
    }
  }]);

  return _ref;
}();

var _class = Page(index$1.createPageConfig(_ref));

exports.default = _class;
