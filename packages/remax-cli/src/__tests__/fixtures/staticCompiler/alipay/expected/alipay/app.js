'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var createAppConfig = require('../../../npm/remax/esm/createAppConfig.js');
require('../../../npm/remax/esm/index.js');

var _ref = /*#__PURE__*/function (_React$Component) {
  _rollupPluginBabelHelpers.inherits(_ref, _React$Component);

  function _ref() {
    _rollupPluginBabelHelpers.classCallCheck(this, _ref);

    return _rollupPluginBabelHelpers.possibleConstructorReturn(this, _rollupPluginBabelHelpers.getPrototypeOf(_ref).apply(this, arguments));
  }

  _rollupPluginBabelHelpers.createClass(_ref, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return _ref;
}(React.Component);

var app = App(createAppConfig.default(_ref));

exports.default = app;
