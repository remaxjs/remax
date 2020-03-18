'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('../index-chunk.js');
require('react-reconciler');
require('scheduler');
var React = require('react');
var index$2 = require('../index-chunk2.js');

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
    _tid: "8"
  }, React.createElement("stub-block", null), React.createElement(React.Fragment, null, React.createElement("stub-block", null)), React.createElement("block", null, React.createElement(index$2.View, {
    _tid: "9"
  }, "View inside Expression")), React.createElement("block", null, React.Children.map(children, function (child, index) {
    return React.cloneElement(child, {
      id: 'reactComp' + index
    });
  }))));
}

function _ref2() {
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
  return React.createElement(React.Fragment, null, React.createElement("block", {
    _tid: "10"
  }, 'expression entry'), React.createElement(React.Fragment, null, React.createElement(index$2.Text, {
    _tid: "11"
  }, "Fragment Text 1"), React.createElement(index$2.Text, {
    _tid: "12"
  }, "Fragment Text 2"), React.createElement(React.Fragment, null, React.createElement(index$2.Text, {
    _tid: "13"
  }, "Fragment Text 3"), React.createElement(index$2.Text, {
    _tid: "14"
  }, "Fragment Text 4"))), React.createElement(React.Fragment, null, "Fragment"), React.createElement(React.Fragment, null, "React.Fragment"), React.createElement("block", {
    _tid: "15"
  }, React.createElement(DDD, null)), React.createElement(index$2.Text, {
    _tid: "16"
  }, "Remax.Text"), React.createElement("block", {
    _tid: "17"
  }, React.createElement(NativeComponent, null)), React.createElement("block", {
    _tid: "18"
  }, React.createElement(ReactComp, null, React.createElement(index$2.View, {
    _tid: "33"
  }, "React Component First Child"), React.createElement("block", null, 'React Component Second Child'))), React.createElement(index$2.View, {
    _tid: "19"
  }, "Count: ", React.createElement("block", null, count)), React.createElement(index$2.View, {
    id: count,
    _tid: "20"
  }, "view"), React.createElement(index$2.View, {
    _tid: "21"
  }, "custom view"), React.createElement("block", {
    _tid: "22"
  }, React.createElement('view', {
    id: 'view'
  }, [React.createElement(index$2.View, {
    _tid: "34"
  }, "create element children 1"), React.createElement('view', {
    key: '2'
  })])), React.createElement("block", {
    _tid: "23"
  }, [1, 2, 3].map(function (item) {
    return React.createElement(index$2.View, {
      key: item,
      _tid: "35"
    }, "array map: ", React.createElement("block", null, item));
  })), React.createElement(index$2.View, index$1._extends({}, props, {
    _tid: "24"
  }), "Spread Attributes View"), React.createElement(index$2.Text, {
    _tid: "25"
  }, "long long long long long long long long long long long long text long long long long long long long long long long long long text"), React.createElement("block", {
    _tid: "26"
  }, React.createElement(index$2.RemaxWindow, null)), React.createElement("block", {
    _tid: "27"
  }, 'Literal Expression'), React.createElement("block", {
    _tid: "28"
  }, React.createElement(Deep.Object.View, null, "Deep Object View")), React.createElement("block", {
    _tid: "29"
  }, React.createElement(RenameView, null, "Rename View")), React.createElement("block", {
    _tid: "30"
  }, show && React.createElement(index$2.View, {
    _tid: "36"
  }, "Conditional View")), React.createElement(index$2.Text, {
    _tid: "31"
  }, showPlainText && plainText), React.createElement(index$2.View, {
    _tid: "32"
  }));
}

var index = Page(index$1.createPageConfig(_ref2));

exports.default = index;
