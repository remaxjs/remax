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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(index$2.View, null, /*#__PURE__*/React.createElement(index$2.Text, null, "react component"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(index$2.Text, null, "Text inside Fragment")), /*#__PURE__*/React.createElement(index$2.View, null, "View inside Expression"), React.Children.map(children, function (child, index) {
    return React.cloneElement(child, {
      id: 'reactComp' + index
    });
  })));
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, 'expression entry', /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(index$2.Text, null, "Fragment Text 1"), /*#__PURE__*/React.createElement(index$2.Text, null, "Fragment Text 2"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(index$2.Text, null, "Fragment Text 3"), /*#__PURE__*/React.createElement(index$2.Text, null, "Fragment Text 4"))), /*#__PURE__*/React.createElement(React.Fragment, null, "Fragment"), /*#__PURE__*/React.createElement(React.Fragment, null, "React.Fragment"), /*#__PURE__*/React.createElement(DDD, null), /*#__PURE__*/React.createElement(index$2.Text, null, "Remax.Text"), /*#__PURE__*/React.createElement(NativeComponent, null), /*#__PURE__*/React.createElement(ReactComp, null, /*#__PURE__*/React.createElement(index$2.View, null, "React Component First Child")), /*#__PURE__*/React.createElement(index$2.View, {
    className: "className"
  }, "Count: ", count), /*#__PURE__*/React.createElement(index$2.View, {
    id: count,
    className: 'class'
  }, "view"), /*#__PURE__*/React.createElement(index$2.View, null, "custom view"), React.createElement('view', {
    id: 'view'
  }, [/*#__PURE__*/React.createElement(index$2.View, {
    key: "1"
  }, "create element children 1"), React.createElement('view', {
    key: '2'
  })]), [1, 2, 3].map(function (item) {
    return /*#__PURE__*/React.createElement(index$2.View, {
      key: item
    }, "array map: ", item);
  }), /*#__PURE__*/React.createElement(index$2.View, props, "Spread Attributes View"), /*#__PURE__*/React.createElement(index$2.Text, null, "long long long long long long long long long long long long text long long long long long long long long long long long long text"), /*#__PURE__*/React.createElement(index$2.RemaxWindow, null), 'Literal Expression', /*#__PURE__*/React.createElement(Deep.Object.View, null, "Deep Object View"), /*#__PURE__*/React.createElement(RenameView, null, "Rename View"), show && /*#__PURE__*/React.createElement(index$2.View, null, "Conditional View"), /*#__PURE__*/React.createElement(index$2.Text, {
    leaf: true
  }, showPlainText && plainText), /*#__PURE__*/React.createElement(index$2.View, {
    "ns:attr": "1"
  }));
}

var turboPageDisabled = Page(index$1.createPageConfig(_Index));

exports.default = turboPageDisabled;
