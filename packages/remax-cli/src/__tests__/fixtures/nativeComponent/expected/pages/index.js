'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../npm/remax/esm/render.js');
var React = require('react');
require('../npm/remax/esm/createAppConfig.js');
require('../npm/remax/esm/Platform.js');
require('../npm/remax/esm/createHostComponent.js');
var createPageConfig = require('../npm/remax/esm/createPageConfig.js');
var createNativeComponent = require('../npm/remax/esm/createNativeComponent.js');
require('../npm/remax/esm/index.js');
var View = require('../npm/remax/esm/adapters/alipay/components/View.js');
require('../npm/remax/esm/adapters/alipay/components/ScrollView.js');
require('../npm/remax/esm/adapters/alipay/components/Swiper.js');
require('../npm/remax/esm/adapters/alipay/components/SwiperItem.js');
require('../npm/remax/esm/adapters/alipay/components/MovableView.js');
require('../npm/remax/esm/adapters/alipay/components/MovableArea.js');
require('../npm/remax/esm/adapters/alipay/components/CoverView.js');
require('../npm/remax/esm/adapters/alipay/components/CoverImage.js');
require('../npm/remax/esm/adapters/alipay/components/Icon.js');
require('../npm/remax/esm/adapters/alipay/components/Text.js');
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

var SrcComponent = createNativeComponent.default('src-0');
var ScopedComponent = createNativeComponent.default('a-1');
var SlotComponent = createNativeComponent.default('slot-0');
var PluginComponent2 = createNativeComponent.default('my-plugin-1');
var PluginComponent = createNativeComponent.default('my-plugin-0');
var Complex = createNativeComponent.default('complex-0');
var E = createNativeComponent.default('e-0');
var D = createNativeComponent.default('d-0');
var C = createNativeComponent.default('c-0');
var B = createNativeComponent.default('b-0');
var A = createNativeComponent.default('a-0');












var _page = function _page() {
  var b = React.createRef();
  return React.createElement(View.default, null, React.createElement(A, {
    foo: "bar"
  }), React.createElement(B, {
    ref: b
  }), React.createElement(C, null), React.createElement(D, null), React.createElement(E, null), React.createElement(Complex, null), React.createElement(PluginComponent, null), React.createElement(PluginComponent2, null), React.createElement(SlotComponent, null, React.createElement(View.default, {
    slot: "inner"
  })), React.createElement(ScopedComponent, null), React.createElement(SrcComponent, null));
};

var index = Page(createPageConfig.default(_page));

exports.default = index;
