'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../_virtual/_rollupPluginBabelHelpers.js');
require('../npm/remax/esm/render.js');
var React = require('react');
require('../npm/remax/esm/createAppConfig.js');
require('../npm/remax/esm/createHostComponent.js');
var createPageConfig = require('../npm/remax/esm/createPageConfig.js');
require('../npm/remax/esm/index.js');
var runtime = require('../npm/regenerator-runtime/runtime.js');
var index$2 = require('../npm/remax/npm/remax-alipay/esm/hostComponents/View/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/ScrollView/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Swiper/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/SwiperItem/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/MovableView/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/MovableArea/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/CoverView/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/CoverImage/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Icon/index.js');
var index$b = require('../npm/remax/npm/remax-alipay/esm/hostComponents/Text/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/RichText/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Progress/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Button/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/CheckboxGroup/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Checkbox/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Form/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Input/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Label/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Picker/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/PickerView/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/PickerViewColumn/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/RadioGroup/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Radio/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Slider/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Switch/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Textarea/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Navigator/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Image/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Map/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Canvas/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/WebView/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Lifestyle/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/ContactButton/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Video/index.js');
require('../npm/remax/npm/remax-alipay/esm/api/index.js');
var index$B = require('../npm/remax/npm/remax-wechat/esm/hostComponents/index.js');

var _page = function _page() {
  var _, _obj$a;

  var props = {};
  var TextElement = React.cloneElement(React.createElement(index$b.default, null));

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
              return Promise.resolve(1);

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

  var obj = {};
  var value = (_ = 0) !== null && _ !== void 0 ? _ : 1;
  return React.createElement(index$2.default, null, React.createElement(index$2.default, _rollupPluginBabelHelpers.extends({
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    id: "view",
    "data-foo": "bar"
  }, props), "foo", obj === null || obj === void 0 ? void 0 : (_obj$a = obj.a) === null || _obj$a === void 0 ? void 0 : _obj$a.b, value), React.createElement(index$B.FunctionalPageNavigator, null), React.createElement(UnBindingComponent, null), TextElement);
};

var index = Page(createPageConfig.default(_page));

exports.default = index;
