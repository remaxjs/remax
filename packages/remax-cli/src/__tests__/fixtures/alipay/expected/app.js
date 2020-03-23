'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./index-chunk.js');
require('react-reconciler');
require('scheduler');
var React = require('react');
var cat_png = require('./assets/images/cat.png.js');

var _App = /*#__PURE__*/function (_React$Component) {
  index._inherits(_App, _React$Component);

  function _App() {
    var _getPrototypeOf2;

    var _this;

    index._classCallCheck(this, _App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = index._possibleConstructorReturn(this, (_getPrototypeOf2 = index._getPrototypeOf(_App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    index._defineProperty(index._assertThisInitialized(_this), "image", cat_png.default);

    return _this;
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
