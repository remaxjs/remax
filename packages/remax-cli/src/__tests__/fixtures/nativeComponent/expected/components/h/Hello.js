import { createElement } from 'react';

var D = function(props) {
  return createElement(
    'd-0',
    props,
    props.children
  );
};

var Hello = (function () {
  return createElement(D, null);
});

export default Hello;
