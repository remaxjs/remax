import { createElement, Fragment } from 'react';
import createHostComponent from '../npm/remax/esm/createHostComponent.js';
import createPageConfig from '../npm/remax/esm/createPageConfig.js';
import '../npm/remax/esm/index.js';

var _page = function _page() {
  var FooBar = createHostComponent('foo-bar');
  return createElement(Fragment, null, createElement(FooBar, {
    foo: "bar",
    className: "class"
  }));
};

var index = Page(createPageConfig(_page));

export default index;
