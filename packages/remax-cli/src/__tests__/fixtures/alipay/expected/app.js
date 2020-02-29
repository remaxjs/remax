'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./index.js');
require('react-reconciler');
require('scheduler');
var React = require('react');
var cat_png = require('./assets/images/cat.png.js');

var _ref = /*#__PURE__*/function (_React$Component) {
  index._inherits(_ref, _React$Component);

  function _ref() {
    var _getPrototypeOf2;

    var _this;

    index._classCallCheck(this, _ref);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = index._possibleConstructorReturn(this, (_getPrototypeOf2 = index._getPrototypeOf(_ref)).call.apply(_getPrototypeOf2, [this].concat(args)));

    index._defineProperty(index._assertThisInitialized(_this), "image", cat_png.default);

    return _this;
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
