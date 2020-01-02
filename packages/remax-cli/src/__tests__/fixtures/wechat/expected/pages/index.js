'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../_virtual/_rollupPluginBabelHelpers.js');
require('../npm/remax/esm/render.js');
var React = require('react');
require('../npm/remax/esm/createAppConfig.js');
require('../npm/remax/esm/Platform.js');
require('../npm/remax/esm/createHostComponent.js');
var createPageConfig = require('../npm/remax/esm/createPageConfig.js');
require('../npm/remax/esm/index.js');
var runtime = require('../npm/regenerator-runtime/runtime.js');
var View = require('../npm/remax/esm/adapters/wechat/components/View.js');
require('../npm/remax/esm/adapters/wechat/components/Input.js');
require('../npm/remax/esm/adapters/wechat/components/Textarea.js');
require('../npm/remax/esm/adapters/wechat/components/Video.js');
var Swiper = require('../npm/remax/esm/adapters/wechat/components/Swiper.js');
var ScrollView = require('../npm/remax/esm/adapters/wechat/components/ScrollView.js');
require('../npm/remax/esm/adapters/wechat/components/SwiperItem.js');
require('../npm/remax/esm/adapters/wechat/components/MovableView.js');
require('../npm/remax/esm/adapters/wechat/components/MovableArea.js');
require('../npm/remax/esm/adapters/wechat/components/CoverView.js');
require('../npm/remax/esm/adapters/wechat/components/CoverImage.js');
require('../npm/remax/esm/adapters/wechat/components/Icon.js');
var Text = require('../npm/remax/esm/adapters/wechat/components/Text.js');
require('../npm/remax/esm/adapters/wechat/components/RichText.js');
require('../npm/remax/esm/adapters/wechat/components/Progress.js');
require('../npm/remax/esm/adapters/wechat/components/Button.js');
require('../npm/remax/esm/adapters/wechat/components/CheckboxGroup.js');
require('../npm/remax/esm/adapters/wechat/components/Checkbox.js');
require('../npm/remax/esm/adapters/wechat/components/Form.js');
require('../npm/remax/esm/adapters/wechat/components/Label.js');
require('../npm/remax/esm/adapters/wechat/components/Picker.js');
require('../npm/remax/esm/adapters/wechat/components/PickerView.js');
require('../npm/remax/esm/adapters/wechat/components/PickerViewColumn.js');
require('../npm/remax/esm/adapters/wechat/components/RadioGroup.js');
require('../npm/remax/esm/adapters/wechat/components/Radio.js');
require('../npm/remax/esm/adapters/wechat/components/Slider.js');
require('../npm/remax/esm/adapters/wechat/components/Switch.js');
require('../npm/remax/esm/adapters/wechat/components/Navigator.js');
require('../npm/remax/esm/adapters/wechat/components/Image.js');
require('../npm/remax/esm/adapters/wechat/components/LivePlayer.js');
require('../npm/remax/esm/adapters/wechat/components/LivePusher.js');
require('../npm/remax/esm/adapters/wechat/components/Map.js');
require('../npm/remax/esm/adapters/wechat/components/Canvas.js');
require('../npm/remax/esm/adapters/wechat/components/OpenData.js');
require('../npm/remax/esm/adapters/wechat/components/OfficialAccount.js');
require('../npm/remax/esm/adapters/wechat/components/Editor.js');
require('../npm/remax/esm/adapters/wechat/components/Audio.js');
require('../npm/remax/esm/adapters/wechat/components/Ad.js');
require('../npm/remax/esm/adapters/wechat/components/WebView.js');
require('../npm/remax/esm/adapters/wechat/components/FunctionalPageNavigator.js');
require('../npm/remax/esm/adapters/wechat/api.js');
var index$2 = require('../npm/remax/esm/adapters/alipay/components/index.js');

var _page = function _page() {
  var props = {};
  var TextElement = React.cloneElement(React.createElement(Text.default, null));

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

  return React.createElement(View.default, null, React.createElement(View.default, _rollupPluginBabelHelpers.extends({
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    id: "view",
    "data-foo": "bar"
  }, props), "foo"), TextElement, React.createElement(index$2.Lifestyle, null), React.createElement(UnBindingComponent, null), React.createElement(ScrollView.default, null), React.createElement(Swiper.default, null), React.createElement(View.default, null, React.createElement(View.default, null, React.createElement(ScrollView.default, null), React.createElement(Swiper.default, null), React.createElement(Text.default, null, React.createElement(Text.default, null, "text")))));
};

var index = Page(createPageConfig.default(_page));

exports.default = index;
