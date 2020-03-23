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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(index$2.View, {
    _tid: "1"
  }, /*#__PURE__*/React.createElement("stub-block", null), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("stub-block", null)), /*#__PURE__*/React.createElement("block", null, /*#__PURE__*/React.createElement(index$2.View, {
    _tid: "2"
  }, "View inside Expression")), /*#__PURE__*/React.createElement("block", null, React.Children.map(children, function (child, index) {
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("block", {
    _tid: "3"
  }, 'expression entry'), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(index$2.Text, {
    _tid: "4"
  }, "Fragment Text 1"), /*#__PURE__*/React.createElement(index$2.Text, {
    _tid: "5"
  }, "Fragment Text 2"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(index$2.Text, {
    _tid: "6"
  }, "Fragment Text 3"), /*#__PURE__*/React.createElement(index$2.Text, {
    _tid: "7"
  }, "Fragment Text 4"))), /*#__PURE__*/React.createElement(React.Fragment, null, "Fragment"), /*#__PURE__*/React.createElement(React.Fragment, null, "React.Fragment"), /*#__PURE__*/React.createElement("block", {
    _tid: "8"
  }, /*#__PURE__*/React.createElement(DDD, null)), /*#__PURE__*/React.createElement(index$2.Text, {
    _tid: "9"
  }, "Remax.Text"), /*#__PURE__*/React.createElement("block", {
    _tid: "10"
  }, /*#__PURE__*/React.createElement(NativeComponent, null)), /*#__PURE__*/React.createElement("block", {
    _tid: "11"
  }, /*#__PURE__*/React.createElement(ReactComp, null, /*#__PURE__*/React.createElement(index$2.View, {
    _tid: "26"
  }, "React Component First Child"), /*#__PURE__*/React.createElement("block", null, 'React Component Second Child'))), /*#__PURE__*/React.createElement(index$2.View, {
    _tid: "12"
  }, "Count: ", /*#__PURE__*/React.createElement("block", null, count)), /*#__PURE__*/React.createElement(index$2.View, {
    id: count,
    _tid: "13"
  }, "view"), /*#__PURE__*/React.createElement(index$2.View, {
    _tid: "14"
  }, "custom view"), /*#__PURE__*/React.createElement("block", {
    _tid: "15"
  }, React.createElement('view', {
    id: 'view'
  }, [/*#__PURE__*/React.createElement(index$2.View, {
    _tid: "27"
  }, "create element children 1"), React.createElement('view', {
    key: '2'
  })])), /*#__PURE__*/React.createElement("block", {
    _tid: "16"
  }, [1, 2, 3].map(function (item) {
    return /*#__PURE__*/React.createElement(index$2.View, {
      key: item,
      _tid: "28"
    }, "array map: ", /*#__PURE__*/React.createElement("block", null, item));
  })), /*#__PURE__*/React.createElement(index$2.View, index$1._extends({}, props, {
    _tid: "17"
  }), "Spread Attributes View"), /*#__PURE__*/React.createElement(index$2.Text, {
    _tid: "18"
  }, "long long long long long long long long long long long long text long long long long long long long long long long long long text"), /*#__PURE__*/React.createElement("block", {
    _tid: "19"
  }, /*#__PURE__*/React.createElement(index$2.RemaxWindow, null)), /*#__PURE__*/React.createElement("block", {
    _tid: "20"
  }, 'Literal Expression'), /*#__PURE__*/React.createElement("block", {
    _tid: "21"
  }, /*#__PURE__*/React.createElement(Deep.Object.View, null, "Deep Object View")), /*#__PURE__*/React.createElement("block", {
    _tid: "22"
  }, /*#__PURE__*/React.createElement(RenameView, null, "Rename View")), /*#__PURE__*/React.createElement("block", {
    _tid: "23"
  }, show && /*#__PURE__*/React.createElement(index$2.View, {
    _tid: "29"
  }, "Conditional View")), /*#__PURE__*/React.createElement(index$2.Text, {
    _tid: "24"
  }, showPlainText && plainText), /*#__PURE__*/React.createElement(index$2.View, {
    _tid: "25"
  }));
}

var index = Page(index$1.createPageConfig(_Index));

exports.default = index;
