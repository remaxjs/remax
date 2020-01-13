'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../_virtual/_rollupPluginBabelHelpers.js');
require('../npm/remax/esm/render.js');
var React = require('react');
require('../npm/remax/esm/createAppConfig.js');
require('../npm/remax/esm/createHostComponent.js');
require('../npm/remax/esm/Platform.js');
var createPageConfig = require('../npm/remax/esm/createPageConfig.js');
require('../npm/remax/esm/index.js');
var runtime = require('../npm/regenerator-runtime/runtime.js');
var index$2 = require('../npm/remax/npm/remax-toutiao/esm/hostComponents/View/index.js');
require('../npm/remax/npm/remax-toutiao/esm/hostComponents/Input/index.js');
require('../npm/remax/npm/remax-toutiao/esm/hostComponents/Textarea/index.js');
require('../npm/remax/npm/remax-toutiao/esm/hostComponents/Video/index.js');
require('../npm/remax/npm/remax-toutiao/esm/hostComponents/Swiper/index.js');
require('../npm/remax/npm/remax-toutiao/esm/hostComponents/ScrollView/index.js');
require('../npm/remax/npm/remax-toutiao/esm/hostComponents/SwiperItem/index.js');
require('../npm/remax/npm/remax-toutiao/esm/hostComponents/Icon/index.js');
var index$a = require('../npm/remax/npm/remax-toutiao/esm/hostComponents/Text/index.js');
require('../npm/remax/npm/remax-toutiao/esm/hostComponents/RichText/index.js');
require('../npm/remax/npm/remax-toutiao/esm/hostComponents/Progress/index.js');
require('../npm/remax/npm/remax-toutiao/esm/hostComponents/Button/index.js');
require('../npm/remax/npm/remax-toutiao/esm/hostComponents/CheckboxGroup/index.js');
require('../npm/remax/npm/remax-toutiao/esm/hostComponents/Checkbox/index.js');
require('../npm/remax/npm/remax-toutiao/esm/hostComponents/Form/index.js');
require('../npm/remax/npm/remax-toutiao/esm/hostComponents/Label/index.js');
require('../npm/remax/npm/remax-toutiao/esm/hostComponents/Picker/index.js');
require('../npm/remax/npm/remax-toutiao/esm/hostComponents/PickerView/index.js');
require('../npm/remax/npm/remax-toutiao/esm/hostComponents/PickerViewColumn/index.js');
require('../npm/remax/npm/remax-toutiao/esm/hostComponents/RadioGroup/index.js');
require('../npm/remax/npm/remax-toutiao/esm/hostComponents/Radio/index.js');
require('../npm/remax/npm/remax-toutiao/esm/hostComponents/Slider/index.js');
require('../npm/remax/npm/remax-toutiao/esm/hostComponents/Switch/index.js');
require('../npm/remax/npm/remax-toutiao/esm/hostComponents/Navigator/index.js');
require('../npm/remax/npm/remax-toutiao/esm/hostComponents/Image/index.js');
require('../npm/remax/npm/remax-toutiao/esm/hostComponents/Canvas/index.js');
require('../npm/remax/npm/remax-toutiao/esm/hostComponents/WebView/index.js');
require('../npm/remax/npm/remax-toutiao/esm/api/index.js');
var index$u = require('../npm/remax/npm/remax-wechat/esm/hostComponents/index.js');

var _page = function _page() {
  var props = {};
  var TextElement = React.cloneElement(React.createElement(index$a.default, null));

  function handleClick() {
    return _handleClick.apply(this, arguments);
  }

  function _handleClick() {
    _handleClick = _rollupPluginBabelHelpers.asyncToGenerator(
    /*#__PURE__*/
    runtime.default.mark(function _callee() {
      return runtime.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.resolve();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleClick.apply(this, arguments);
  }

  function handleTouchStart() {}

  return React.createElement(index$2.default, null, React.createElement(index$2.default, _rollupPluginBabelHelpers.extends({
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    id: "view",
    "data-foo": "bar"
  }, props), "foo"), TextElement, React.createElement(index$u.FunctionalPageNavigator, null), React.createElement(UnBindingComponent, null));
};

var index = Page(createPageConfig.default(_page));

exports.default = index;
