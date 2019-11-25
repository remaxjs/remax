import { createClass as _createClass, classCallCheck as _classCallCheck } from './_virtual/_rollupPluginBabelHelpers.js';
import createAppConfig from '../../npm/remax/esm/createAppConfig.js';
import '../../npm/remax/esm/index.js';

var _ref =
/*#__PURE__*/
function () {
  function _ref() {
    _classCallCheck(this, _ref);
  }

  _createClass(_ref, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return _ref;
}();

var app = App(createAppConfig(_ref));

export default app;
