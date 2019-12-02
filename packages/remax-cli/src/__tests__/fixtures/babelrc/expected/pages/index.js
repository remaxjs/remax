'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../npm/remax/esm/render.js');
var React = require('react');
require('../npm/remax/esm/createAppConfig.js');
require('../npm/remax/esm/Platform.js');
require('../npm/remax/esm/createHostComponent.js');
var createPageConfig = require('../npm/remax/esm/createPageConfig.js');
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

var N;

(function (_N) {
  var V = _N.V = 1;
})(N || (N = {})); // eslint-disable-next-line @typescript-eslint/no-namespace


(function (_N2) {
  var W = _N2.W = V;
})(N || (N = {}));

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
  return React.createElement(View.default, null, timesTwo([1, 2, 3]), N.V, N.W);
};

var index = Page(createPageConfig.default(_page));

exports.default = index;
