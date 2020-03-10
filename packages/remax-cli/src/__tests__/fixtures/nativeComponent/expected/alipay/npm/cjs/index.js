'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _commonjsHelpers = require('../../_virtual/_commonjsHelpers.js');
require('./fmtEvent.js');
var fmtEvent$1 = require('../../_virtual/fmtEvent.js_commonjs-proxy.js');

var cjs = _commonjsHelpers.createCommonjsModule(function (module) {

  var _fmtEvent = _interopRequireDefault(fmtEvent$1.default);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  Component({
    data: {},
    props: {
      className: '',
      style: '',
      onClick: function onClick(e) {},
      onLongpress: function onLongpress(e) {},
      onAppear: function onAppear(e) {},
      onDisAppear: function onDisAppear(e) {},
      onTouchStart: function onTouchStart(e) {},
      onTouchMove: function onTouchMove(e) {},
      onTouchEnd: function onTouchEnd(e) {},
      onTouchCancel: function onTouchCancel(e) {},
      animation: null
    },
    didMount: function didMount() {},
    methods: {
      onClick: function onClick(e) {
        var event = (0, _fmtEvent['default'])(this.props, e);
        this.props.onClick(event);
      },
      onLongpress: function onLongpress(e) {
        var event = (0, _fmtEvent['default'])(this.props, e);
        this.props.onLongpress(event);
      },
      onAppear: function onAppear(e) {
        var event = (0, _fmtEvent['default'])(this.props, e);
        this.props.onAppear(event);
      },
      onDisAppear: function onDisAppear(e) {
        var event = (0, _fmtEvent['default'])(this.props, e);
        this.props.onDisAppear(event);
      },
      onTouchStart: function onTouchStart(e) {
        var event = (0, _fmtEvent['default'])(this.props, e);
        this.props.onTouchStart(event);
      },
      onTouchMove: function onTouchMove(e) {
        var event = (0, _fmtEvent['default'])(this.props, e);
        this.props.onTouchMove(event);
      },
      onTouchEnd: function onTouchEnd(e) {
        var event = (0, _fmtEvent['default'])(this.props, e);
        this.props.onTouchEnd(event);
      },
      onTouchCancel: function onTouchCancel(e) {
        var event = (0, _fmtEvent['default'])(this.props, e);
        this.props.onTouchCancel(event);
      }
    }
  });
});
var index = _commonjsHelpers.unwrapExports(cjs);

exports.default = index;
