'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var index = require('./index-b4a5e116.js');
require('react-reconciler');
require('scheduler');
var React = require('react');
var React__default = _interopDefault(React);

function useAppContextValue() {
  var _useState = React.useState(false),
      _useState2 = index._slicedToArray(_useState, 1),
      bindStatus = _useState2[0];

  return {
    bindStatus: bindStatus
  };
}

var defaultAppContext = new Proxy({}, {
  get: function get() {
    throw new Error('This object should never be called');
  }
});
var AppContext = React.createContext(defaultAppContext);

var AppContextProvider = function AppContextProvider(props) {
  var context = useAppContextValue();
  return React__default.createElement(AppContext.Provider, {
    value: context
  }, props.children);
};

var _ref = /*#__PURE__*/function (_React$Component) {
  index._inherits(_ref, _React$Component);

  function _ref() {
    index._classCallCheck(this, _ref);

    return index._possibleConstructorReturn(this, index._getPrototypeOf(_ref).apply(this, arguments));
  }

  index._createClass(_ref, [{
    key: "render",
    value: function render() {
      return React__default.createElement(AppContextProvider, null, this.props.children);
    }
  }]);

  return _ref;
}(React__default.Component);

var app = App(index.createAppConfig(_ref));

exports.AppContext = AppContext;
exports.default = app;
