'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./index.js');
require('react-reconciler');
require('scheduler');
var React = require('react');

var _ref = /*#__PURE__*/function (_React$Component) {
  index._inherits(_ref, _React$Component);

  function _ref() {
    index._classCallCheck(this, _ref);

    return index._possibleConstructorReturn(this, index._getPrototypeOf(_ref).apply(this, arguments));
  }

  index._createClass(_ref, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return _ref;
}(React.Component);

var app = App(index.createAppConfig(_ref));

exports.default = app;
