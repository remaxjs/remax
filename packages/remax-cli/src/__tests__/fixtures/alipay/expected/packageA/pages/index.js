import { extends as _extends } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { cloneElement, createElement } from 'react';
import createPageConfig from '../npm/remax/esm/createPageConfig.js';
import '../npm/remax/esm/index.js';
import { Text, View } from '../npm/remax/esm/adapters/wechat/components/index.js';

var _page = function _page() {
  var props = {};
  var TextElement = cloneElement(createElement(Text, null));

  function handleClick() {}

  function handleTouchStart() {}

  return createElement(View, null, createElement(View, _extends({
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    id: "view",
    "data-foo": "bar"
  }, props), "foo"), TextElement);
};

var index = Page(createPageConfig(_page));

export default index;
