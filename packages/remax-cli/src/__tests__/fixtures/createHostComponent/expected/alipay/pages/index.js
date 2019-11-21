import { createElement, Fragment } from 'react';
import createHostComponent from '../npm/remax/esm/createHostComponent.js';
import createPageConfig from '../npm/remax/esm/createPageConfig.js';
import '../npm/remax/esm/index.js';
import CustomComponent from '../npm/custom-component/index.js';

var FooBar = createHostComponent('foo-bar');

var _page = function _page() {
  return createElement(Fragment, null, createElement(FooBar, {
    foo: "bar",
    className: "class"
  }), createElement(CustomComponent, {
    foo: "bar"
  }));
};

var index = Page(createPageConfig(_page));

export default index;
