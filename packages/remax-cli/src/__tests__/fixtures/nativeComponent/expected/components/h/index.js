import { createElement, Fragment } from 'react';
import Hello from './Hello.js';

var C = function(props) {
  return createElement(
    'c-0',
    props,
    props.children
  );
};
var H = (function () {
  return createElement(Fragment, null, createElement(C, null), createElement(Hello, null));
});

export default H;
