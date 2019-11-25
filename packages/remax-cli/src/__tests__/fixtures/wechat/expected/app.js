'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_virtual/_rollupPluginBabelHelpers.js');
var createAppConfig = require('../../npm/remax/esm/createAppConfig.js');
require('../../npm/remax/esm/index.js');

var _App =
/*#__PURE__*/
function () {
  function _App() {
    _rollupPluginBabelHelpers.classCallCheck(this, _App);
  }

  _rollupPluginBabelHelpers.createClass(_App, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return _App;
}();

var _app = _App;
var app = App(createAppConfig.default(_app));

exports.default = app;
