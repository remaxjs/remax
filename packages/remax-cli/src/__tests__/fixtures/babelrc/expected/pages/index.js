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

function timesTwo(arr) {
  var _a = arr;

  var _f = function _f(n) {
    return n * 2;
  };

  var _r = [];

  for (var _i = 0; _i < _a.length; _i++) {
    _r.push(_f(_a[_i]));
  }

  return _r;
}

var _page = function _page() {
  return createElement(View, null, timesTwo([1, 2, 3]));
};

var index = Page(createPageConfig(_page));

export default index;
