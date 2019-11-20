import { createElement, Fragment } from 'react';
import createNativeComponent from '../npm/remax/esm/createNativeComponent.js';
import '../npm/remax/esm/index.js';
import H from '../h/index.js';

var NavBar = createNativeComponent('a-0');
var G = (function () {
  return createElement(Fragment, null, createElement(NavBar, {
    title: "Test title"
  }), createElement(H, null));
});

export default G;
