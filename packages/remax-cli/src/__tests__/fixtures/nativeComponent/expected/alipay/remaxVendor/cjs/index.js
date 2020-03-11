'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var fmtEvent_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports["default"] = fmtEvent;

  function fmtEvent(props, e) {
    var dataset = {};

    for (var key in props) {
      if (/data-/gi.test(key)) {
        dataset[key.replace(/data-/gi, '')] = props[key];
      }
    }

    return Object.assign({}, e, {
      currentTarget: {
        dataset: dataset
      },
      target: {
        dataset: dataset,
        targetDataset: dataset
      }
    });
  }
});
unwrapExports(fmtEvent_1);

var cjs = createCommonjsModule(function (module) {

  var _fmtEvent = _interopRequireDefault(fmtEvent_1);

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
var index = unwrapExports(cjs);

exports.default = index;
