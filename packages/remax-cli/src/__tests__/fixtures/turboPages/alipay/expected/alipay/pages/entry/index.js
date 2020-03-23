'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('../../index-chunk.js');
require('react-reconciler');
require('scheduler');
var React = require('react');
var index$2 = require('../../index-chunk2.js');

var NativeComponent = index$1.createNativeComponent('native-component-0');
var RenameView = index$2.View;
var Deep = {
  Object: {
    View: index$2.View
  }
};
var DDD = index$1.createHostComponent('ddd');

function ReactComp(_ref) {
  var children = _ref.children;
  return React.createElement(React.Fragment, null, React.createElement(index$2.View, {
    _tid: "30"
  }, React.createElement("stub-block", null), React.createElement(React.Fragment, null, React.createElement("stub-block", null)), React.createElement("block", null, React.createElement(index$2.View, {
    _tid: "31"
  }, "View inside Expression")), React.createElement("block", null, React.Children.map(children, function (child, index) {
    return React.cloneElement(child, {
      id: 'reactComp' + index
    });
  }))));
}

function _Index() {
  var _React$useState = React.useState(1),
      _React$useState2 = index$1._slicedToArray(_React$useState, 1),
      count = _React$useState2[0];

  var props = {
    id: 'spreadId'
  };

  var _React$useState3 = React.useState(true),
      _React$useState4 = index$1._slicedToArray(_React$useState3, 1),
      show = _React$useState4[0];

  var _React$useState5 = React.useState(true),
      _React$useState6 = index$1._slicedToArray(_React$useState5, 1),
      showPlainText = _React$useState6[0];

  var plainText = 'plain-text-leaf';
  return React.createElement(index$2.View, {
    entry: true,
    _tid: "32"
  }, "JSXText entry", React.createElement("block", null, 'expression entry'), React.createElement(React.Fragment, null, React.createElement("stub-block", null), React.createElement("stub-block", null), React.createElement(React.Fragment, null, React.createElement("stub-block", null), React.createElement("stub-block", null))), React.createElement(React.Fragment, null, "Fragment"), React.createElement(React.Fragment, null, "React.Fragment"), React.createElement("block", null, React.createElement(DDD, null)), React.createElement("stub-block", null), React.createElement("block", null, React.createElement(NativeComponent, null)), React.createElement("block", null, React.createElement(ReactComp, null, React.createElement(index$2.View, {
    _tid: "33"
  }, "React Component First Child"), React.createElement("block", null, 'React Component Second Child'))), React.createElement(index$2.View, null, "Count: ", React.createElement("block", null, count)), React.createElement(index$2.View, {
    id: count
  }, "view"), React.createElement("stub-block", null), React.createElement("block", null, React.createElement('view', {
    id: 'view'
  }, [React.createElement(index$2.View, {
    _tid: "34"
  }, "create element children 1"), React.createElement('view', {
    key: '2'
  })])), React.createElement("block", null, [1, 2, 3].map(function (item) {
    return React.createElement(index$2.View, {
      key: item,
      _tid: "35"
    }, "array map: ", React.createElement("block", null, item));
  })), React.createElement(index$2.View, props, "Spread Attributes View"), React.createElement("stub-block", null), React.createElement("block", null, React.createElement(index$2.RemaxWindow, null)), React.createElement("block", null, 'Literal Expression'), React.createElement("block", null, React.createElement(Deep.Object.View, null, "Deep Object View")), React.createElement("block", null, React.createElement(RenameView, null, "Rename View")), React.createElement("block", null, show && React.createElement(index$2.View, {
    _tid: "36"
  }, "Conditional View")), React.createElement(index$2.Text, null, showPlainText && plainText), React.createElement("stub-block", null));
}

var index = Page(index$1.createPageConfig(_Index));

exports.default = index;
