'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../npm/remax/esm/render.js');
var React = require('react');
require('../npm/remax/esm/createAppConfig.js');
require('../npm/remax/esm/createHostComponent.js');
require('../npm/remax/esm/Platform.js');
var createPageConfig = require('../npm/remax/esm/createPageConfig.js');
var createNativeComponent = require('../npm/remax/esm/createNativeComponent.js');
require('../npm/remax/esm/index.js');
var index$2 = require('../npm/remax/npm/remax-wechat/esm/hostComponents/View/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Input/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Textarea/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Video/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Swiper/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/ScrollView/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/SwiperItem/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/MovableView/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/MovableArea/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/CoverView/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/CoverImage/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Icon/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Text/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/RichText/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Progress/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Button/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/CheckboxGroup/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Checkbox/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Form/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Label/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Picker/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/PickerView/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/PickerViewColumn/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/RadioGroup/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Radio/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Slider/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Switch/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Navigator/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Image/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/LivePlayer/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/LivePusher/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Map/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Canvas/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/OpenData/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/OfficialAccount/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Editor/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Audio/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Ad/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/WebView/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/FunctionalPageNavigator/index.js');
require('../npm/remax/npm/remax-wechat/esm/api/index.js');

var CJSComponent = createNativeComponent.default('cjs-0');
var NotInJSXComponent = createNativeComponent.default('not-in-jsx-0');
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
  var text = 'not in jsx' + NotInJSXComponent;
  return React.createElement(index$2.default, null, React.createElement(A, {
    foo: "bar"
  }), React.createElement(B, {
    ref: b
  }), React.createElement(C, null), React.createElement(D, null), React.createElement(E, null), React.createElement(Complex, null), React.createElement(PluginComponent, null), React.createElement(PluginComponent2, null), React.createElement(SlotComponent, null, React.createElement(index$2.default, {
    slot: "inner"
  })), React.createElement(ScopedComponent, null), React.createElement(SrcComponent, null), React.createElement(CJSComponent, null), text);
};

var index = Page(createPageConfig.default(_page));

exports.default = index;
