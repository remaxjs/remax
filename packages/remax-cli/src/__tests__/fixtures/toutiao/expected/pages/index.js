'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('../_virtual/_rollupPluginBabelHelpers.js');
require('../npm/remax/esm/render.js');
var React = require('react');
var React__default = _interopDefault(React);
require('../npm/remax/esm/createAppConfig.js');
require('../npm/remax/esm/Platform.js');
var createPageConfig = require('../npm/remax/esm/createPageConfig.js');
require('../npm/remax/esm/index.js');
var View = require('../npm/remax/esm/adapters/toutiao/components/View.js');
require('../npm/remax/esm/adapters/toutiao/components/Input.js');
require('../npm/remax/esm/adapters/toutiao/components/Textarea.js');
require('../npm/remax/esm/adapters/toutiao/components/Video.js');
require('../npm/remax/esm/adapters/toutiao/components/Swiper.js');
require('../npm/remax/esm/adapters/toutiao/components/ScrollView.js');
require('../npm/remax/esm/adapters/toutiao/components/SwiperItem.js');
require('../npm/remax/esm/adapters/toutiao/components/Icon.js');
var Text = require('../npm/remax/esm/adapters/toutiao/components/Text.js');
require('../npm/remax/esm/adapters/toutiao/components/RichText.js');
require('../npm/remax/esm/adapters/toutiao/components/Progress.js');
require('../npm/remax/esm/adapters/toutiao/components/Button.js');
require('../npm/remax/esm/adapters/toutiao/components/CheckboxGroup.js');
require('../npm/remax/esm/adapters/toutiao/components/Checkbox.js');
require('../npm/remax/esm/adapters/toutiao/components/Form.js');
require('../npm/remax/esm/adapters/toutiao/components/Label.js');
require('../npm/remax/esm/adapters/toutiao/components/Picker.js');
require('../npm/remax/esm/adapters/toutiao/components/PickerView.js');
require('../npm/remax/esm/adapters/toutiao/components/PickerViewColumn.js');
require('../npm/remax/esm/adapters/toutiao/components/RadioGroup.js');
require('../npm/remax/esm/adapters/toutiao/components/Radio.js');
require('../npm/remax/esm/adapters/toutiao/components/Slider.js');
require('../npm/remax/esm/adapters/toutiao/components/Switch.js');
require('../npm/remax/esm/adapters/toutiao/components/Navigator.js');
require('../npm/remax/esm/adapters/toutiao/components/Image.js');
require('../npm/remax/esm/adapters/toutiao/components/Canvas.js');
require('../npm/remax/esm/adapters/toutiao/components/WebView.js');
require('../npm/remax/esm/adapters/toutiao/api.js');

var _page = function _page() {
  var props = {};
  var TextElement = React.cloneElement(React.createElement(Text.default, null));

  function handleClick() {}

  function handleTouchStart() {}

  return React.createElement(View.default, null, React.createElement(View.default, _rollupPluginBabelHelpers.extends({
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    id: "view",
    "data-foo": "bar"
  }, props), "foo"), TextElement);
};

var index = Page(createPageConfig.default(_page));

exports.default = index;
