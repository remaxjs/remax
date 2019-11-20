import { createElement, Fragment } from 'react';
import createNativeComponent from '../npm/remax/esm/createNativeComponent.js';
import '../npm/remax/esm/index.js';
import Hello from './Hello.js';

var C = createNativeComponent('c-0');
var H = (function () {
  return createElement(Fragment, null, createElement(C, null), createElement(Hello, null));
});

export default H;
