'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./index-chunk.js');
require('react-reconciler');
require('scheduler');
var React = require('react');

var _App = /*#__PURE__*/function (_React$Component) {
  index._inherits(_App, _React$Component);

  var _super = index._createSuper(_App);

  function _App() {
    index._classCallCheck(this, _App);

    return _super.apply(this, arguments);
  }

  index._createClass(_App, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return _App;
}(React.Component);

var app = App(index.createAppConfig(_App));

exports.default = app;
