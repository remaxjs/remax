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
var View = require('../npm/remax/esm/adapters/alipay/components/View.js');
require('../npm/remax/esm/adapters/alipay/components/ScrollView.js');
require('../npm/remax/esm/adapters/alipay/components/Swiper.js');
require('../npm/remax/esm/adapters/alipay/components/SwiperItem.js');
require('../npm/remax/esm/adapters/alipay/components/MovableView.js');
require('../npm/remax/esm/adapters/alipay/components/MovableArea.js');
require('../npm/remax/esm/adapters/alipay/components/CoverView.js');
require('../npm/remax/esm/adapters/alipay/components/CoverImage.js');
require('../npm/remax/esm/adapters/alipay/components/Icon.js');
var Text = require('../npm/remax/esm/adapters/alipay/components/Text.js');
require('../npm/remax/esm/adapters/alipay/components/RichText.js');
require('../npm/remax/esm/adapters/alipay/components/Progress.js');
require('../npm/remax/esm/adapters/alipay/components/Button.js');
require('../npm/remax/esm/adapters/alipay/components/CheckboxGroup.js');
require('../npm/remax/esm/adapters/alipay/components/Checkbox.js');
require('../npm/remax/esm/adapters/alipay/components/Form.js');
require('../npm/remax/esm/adapters/alipay/components/Input.js');
require('../npm/remax/esm/adapters/alipay/components/Label.js');
require('../npm/remax/esm/adapters/alipay/components/Picker.js');
require('../npm/remax/esm/adapters/alipay/components/PickerView.js');
require('../npm/remax/esm/adapters/alipay/components/PickerViewColumn.js');
require('../npm/remax/esm/adapters/alipay/components/RadioGroup.js');
require('../npm/remax/esm/adapters/alipay/components/Radio.js');
require('../npm/remax/esm/adapters/alipay/components/Slider.js');
require('../npm/remax/esm/adapters/alipay/components/Switch.js');
require('../npm/remax/esm/adapters/alipay/components/TextArea.js');
require('../npm/remax/esm/adapters/alipay/components/Navigator.js');
require('../npm/remax/esm/adapters/alipay/components/Image.js');
require('../npm/remax/esm/adapters/alipay/components/Map.js');
require('../npm/remax/esm/adapters/alipay/components/Canvas.js');
require('../npm/remax/esm/adapters/alipay/components/WebView.js');
require('../npm/remax/esm/adapters/alipay/components/Lifestyle.js');
require('../npm/remax/esm/adapters/alipay/components/ContactButton.js');
require('../npm/remax/esm/adapters/alipay/components/Video.js');
require('../npm/remax/esm/adapters/alipay/api.js');
var index$2 = require('../npm/remax/esm/adapters/wechat/components/index.js');

var _page = function _page() {
  var _, _obj$a;

  var props = {};
  var TextElement = React.cloneElement(React.createElement(Text.default, null));

  function handleClick() {
    return runtime.default.async(function handleClick$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return runtime.default.awrap(Promise.resolve(1));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  }

  function handleTouchStart() {}

  var obj = {};
  var value = (_ = 0) !== null && _ !== void 0 ? _ : 1;
  return React.createElement(View.default, null, React.createElement(View.default, _rollupPluginBabelHelpers.extends({
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    id: "view",
    "data-foo": "bar"
  }, props), "foo", obj === null || obj === void 0 ? void 0 : (_obj$a = obj.a) === null || _obj$a === void 0 ? void 0 : _obj$a.b, value), React.createElement(index$2.FunctionalPageNavigator, null), React.createElement(UnBindingComponent, null), TextElement);
};

var index = Page(createPageConfig.default(_page));

exports.default = index;
