import '../npm/remax/esm/render.js';
import { createElement } from 'react';
import '../npm/remax/esm/createAppConfig.js';
import Platform from '../npm/remax/esm/Platform.js';
import '../npm/remax/esm/createPageConfig.js';
import '../npm/remax/esm/index.js';
import '../npm/remax/esm/adapters/alipay/components/View.js';
import '../npm/remax/esm/adapters/alipay/components/ScrollView.js';
import '../npm/remax/esm/adapters/alipay/components/Swiper.js';
import '../npm/remax/esm/adapters/alipay/components/SwiperItem.js';
import '../npm/remax/esm/adapters/alipay/components/MovableView.js';
import '../npm/remax/esm/adapters/alipay/components/MovableArea.js';
import '../npm/remax/esm/adapters/alipay/components/CoverView.js';
import '../npm/remax/esm/adapters/alipay/components/CoverImage.js';
import '../npm/remax/esm/adapters/alipay/components/Icon.js';
import AlipayText from '../npm/remax/esm/adapters/alipay/components/Text.js';
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
import { Text as Text$2 } from '../npm/remax/esm/adapters/wechat/components/index.js';
import { Text as Text$1 } from '../npm/remax/esm/adapters/toutiao/components/index.js';

function Text() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  switch (Platform.current) {
    case 'alipay':
      return createElement(AlipayText, props);

    case 'wechat':
      return createElement(Text$2, props);

    case 'toutiao':
      return createElement(Text$1, props);
  }
}

export default Text;
