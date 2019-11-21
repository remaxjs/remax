import { createElement, Fragment } from 'react';
import H from '../h/index.js';

var NavBar = function(props) {
  return createElement(
    'a-0',
    props,
    props.children
  );
};
var G = (function () {
  return createElement(Fragment, null, createElement(NavBar, {
    title: "Test title"
  }), createElement(H, null));
});

export default G;
