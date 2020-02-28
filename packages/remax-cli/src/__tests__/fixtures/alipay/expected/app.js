'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var createAppConfig = require('../../npm/remax/esm/createAppConfig.js');
require('../../npm/remax/esm/index.js');
var cat = require('./assets/images/cat.png.js');

var _ref = /*#__PURE__*/function (_React$Component) {
  _rollupPluginBabelHelpers.inherits(_ref, _React$Component);

  function _ref() {
    var _getPrototypeOf2;

    var _this;

    _rollupPluginBabelHelpers.classCallCheck(this, _ref);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _rollupPluginBabelHelpers.possibleConstructorReturn(this, (_getPrototypeOf2 = _rollupPluginBabelHelpers.getPrototypeOf(_ref)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _rollupPluginBabelHelpers.defineProperty(_rollupPluginBabelHelpers.assertThisInitialized(_this), "image", cat.default);

    return _this;
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
