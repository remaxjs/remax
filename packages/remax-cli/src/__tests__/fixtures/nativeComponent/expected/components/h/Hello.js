import { createElement } from 'react';
import createNativeComponent from '../npm/remax/esm/createNativeComponent.js';
import '../npm/remax/esm/index.js';

var D = createNativeComponent('d-0');

var Hello = (function () {
  return createElement(D, null);
});

export default Hello;
