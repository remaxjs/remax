import '../npm/remax/esm/render.js';
import { createElement } from 'react';
import '../npm/remax/esm/createAppConfig.js';
import '../npm/remax/esm/Platform.js';
import createPageConfig from '../npm/remax/esm/createPageConfig.js';
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
import '../npm/remax/esm/adapters/alipay/api.js';

var _page = function _page() {
  return createElement(View, null, createElement(A, {
    foo: "bar"
  }), createElement(B, null), createElement(C, null), createElement(D, null), createElement(E, null), createElement(Complex, null), createElement(PluginComponent, null), createElement(PluginComponent2, null), createElement(SlotComponent, null, createElement(View, {
    slot: "inner"
  })));
};

var index = Page(createPageConfig(_page));var A = function(props) {
        return createElement(
            'a-0',
            props,
            props.children
          );
        };var B = function(props) {
        return createElement(
            'b-1',
            props,
            props.children
          );
        };var C = function(props) {
        return createElement(
            'c-2',
            props,
            props.children
          );
        };var D = function(props) {
        return createElement(
            'd-3',
            props,
            props.children
          );
        };var E = function(props) {
        return createElement(
            'e-4',
            props,
            props.children
          );
        };var Complex = function(props) {
        return createElement(
            'complex-5',
            props,
            props.children
          );
        };var PluginComponent = function(props) {
        return createElement(
            'my-plugin-6',
            props,
            props.children
          );
        };var PluginComponent2 = function(props) {
        return createElement(
            'my-plugin-7',
            props,
            props.children
          );
        };var SlotComponent = function(props) {
        return createElement(
            'slot-8',
            props,
            props.children
          );
        };

export default index;
