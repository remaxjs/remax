import '../npm/remax/esm/render.js';
import { createRef, createElement } from 'react';
import '../npm/remax/esm/createAppConfig.js';
import '../npm/remax/esm/Platform.js';
import '../npm/remax/esm/createHostComponent.js';
import createPageConfig from '../npm/remax/esm/createPageConfig.js';
import createNativeComponent from '../npm/remax/esm/createNativeComponent.js';
import '../npm/remax/esm/index.js';
import View from '../npm/remax/esm/adapters/alipay/components/View.js';
import '../npm/remax/esm/adapters/alipay/components/ScrollView.js';
import '../npm/remax/esm/adapters/alipay/components/Swiper.js';
import '../npm/remax/esm/adapters/alipay/components/SwiperItem.js';
import '../npm/remax/esm/adapters/alipay/components/MovableView.js';
import '../npm/remax/esm/adapters/alipay/components/MovableArea.js';
import '../npm/remax/esm/adapters/alipay/components/CoverView.js';
import '../npm/remax/esm/adapters/alipay/components/CoverImage.js';
import '../npm/remax/esm/adapters/alipay/components/Icon.js';
import '../npm/remax/esm/adapters/alipay/components/Text.js';
import '../npm/remax/esm/adapters/alipay/components/RichText.js';
import '../npm/remax/esm/adapters/alipay/components/Progress.js';
import '../npm/remax/esm/adapters/alipay/components/Button.js';
import '../npm/remax/esm/adapters/alipay/components/CheckboxGroup.js';
import '../npm/remax/esm/adapters/alipay/components/Checkbox.js';
import '../npm/remax/esm/adapters/alipay/components/Form.js';
import '../npm/remax/esm/adapters/alipay/components/Input.js';
import '../npm/remax/esm/adapters/alipay/components/Label.js';
import '../npm/remax/esm/adapters/alipay/components/Picker.js';
import '../npm/remax/esm/adapters/alipay/components/PickerView.js';
import '../npm/remax/esm/adapters/alipay/components/PickerViewColumn.js';
import '../npm/remax/esm/adapters/alipay/components/RadioGroup.js';
import '../npm/remax/esm/adapters/alipay/components/Radio.js';
import '../npm/remax/esm/adapters/alipay/components/Slider.js';
import '../npm/remax/esm/adapters/alipay/components/Switch.js';
import '../npm/remax/esm/adapters/alipay/components/TextArea.js';
import '../npm/remax/esm/adapters/alipay/components/Navigator.js';
import '../npm/remax/esm/adapters/alipay/components/Image.js';
import '../npm/remax/esm/adapters/alipay/components/Map.js';
import '../npm/remax/esm/adapters/alipay/components/Canvas.js';
import '../npm/remax/esm/adapters/alipay/components/WebView.js';
import '../npm/remax/esm/adapters/alipay/components/Lifestyle.js';
import '../npm/remax/esm/adapters/alipay/components/ContactButton.js';
import '../npm/remax/esm/adapters/alipay/components/Video.js';
import '../npm/remax/esm/adapters/alipay/api.js';

var SrcComponent = createNativeComponent('src-0');
var ScopedComponent = createNativeComponent('a-1');
var SlotComponent = createNativeComponent('slot-0');
var PluginComponent2 = createNativeComponent('my-plugin-1');
var PluginComponent = createNativeComponent('my-plugin-0');
var Complex = createNativeComponent('complex-0');
var E = createNativeComponent('e-0');
var D = createNativeComponent('d-0');
var C = createNativeComponent('c-0');
var B = createNativeComponent('b-0');
var A = createNativeComponent('a-0');












var _page = function _page() {
  var b = createRef();
  return createElement(View, null, createElement(A, {
    foo: "bar"
  }), createElement(B, {
    ref: b
  }), createElement(C, null), createElement(D, null), createElement(E, null), createElement(Complex, null), createElement(PluginComponent, null), createElement(PluginComponent2, null), createElement(SlotComponent, null, createElement(View, {
    slot: "inner"
  })), createElement(ScopedComponent, null), createElement(SrcComponent, null));
};

var index = Page(createPageConfig(_page));

export default index;
