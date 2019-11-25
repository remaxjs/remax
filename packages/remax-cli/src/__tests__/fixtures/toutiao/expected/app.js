'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_virtual/_rollupPluginBabelHelpers.js');
var createAppConfig = require('../../npm/remax/esm/createAppConfig.js');
require('../../npm/remax/esm/index.js');

var _ref =
/*#__PURE__*/
function () {
  function _ref() {
    _rollupPluginBabelHelpers.classCallCheck(this, _ref);
  }

  _rollupPluginBabelHelpers.createClass(_ref, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return _ref;
}();

var app = App(createAppConfig.default(_ref));

exports.default = app;
