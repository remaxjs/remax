import { inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, possibleConstructorReturn as _possibleConstructorReturn, getPrototypeOf as _getPrototypeOf } from './_virtual/_rollupPluginBabelHelpers.js';
import '../../npm/remax/esm/render.js';
import { Component } from 'react';
import createAppConfig from '../../npm/remax/esm/createAppConfig.js';
import '../../npm/remax/esm/Platform.js';
import '../../npm/remax/esm/createHostComponent.js';
import '../../npm/remax/esm/createPageConfig.js';
import '../../npm/remax/esm/createNativeComponent.js';
import '../../npm/remax/esm/index.js';

var _ref =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_ref, _React$Component);

  function _ref() {
    _classCallCheck(this, _ref);

    return _possibleConstructorReturn(this, _getPrototypeOf(_ref).apply(this, arguments));
  }

  _createClass(_ref, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return _ref;
}(Component);

var app = App(createAppConfig(_ref));

export default app;
