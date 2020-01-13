'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../npm/remax/esm/render.js');
var React = require('react');
var _rollupPluginBabelHelpers = require('../_virtual/_rollupPluginBabelHelpers.js');
require('../npm/remax/esm/createAppConfig.js');
require('../npm/remax/esm/createHostComponent.js');
require('../npm/remax/esm/Platform.js');
var createPageConfig = require('../npm/remax/esm/createPageConfig.js');
var createNativeComponent = require('../npm/remax/esm/createNativeComponent.js');
require('../npm/remax/esm/index.js');
var index$2 = require('../npm/remax/npm/remax-alipay/esm/hostComponents/View/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/ScrollView/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Swiper/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/SwiperItem/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/MovableView/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/MovableArea/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/CoverView/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/CoverImage/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Icon/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Text/index.js');
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

var A = createNativeComponent.default('a-0');

var _class, _descriptor, _temp;

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

function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

var C = (_class = (_temp = function C() {
  _rollupPluginBabelHelpers.classCallCheck(this, C);

  _rollupPluginBabelHelpers.initializerDefineProperty(this, "p", _descriptor, this);
}, _temp), _descriptor = _rollupPluginBabelHelpers.applyDecoratedDescriptor(_class.prototype, "p", [readonly], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 'p';
  }
}), _class);
var c = new C();
c.p = 'a';

var _page = function _page() {
  return React.createElement(index$2.default, null, timesTwo([1, 2, 3]), N.V, N.W, c.p, React.createElement(A, null));
};

var index = Page(createPageConfig.default(_page));

exports.default = index;
