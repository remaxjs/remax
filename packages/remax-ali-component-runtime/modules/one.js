import { f as formatDisplayName } from './createHostComponent-0cac2bb7.js';
import { r as react } from './index-c3dc9930.js';

var __assign =
  (undefined && undefined.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
function createTarget(target, detail) {
  return {
    id: target.id,
    offsetLeft: target.offsetLeft,
    offsetTop: target.offsetTop,
    dataset: target.targetDataset || target.dataset,
    value: detail === null || detail === void 0 ? void 0 : detail.value,
  };
}
function createCurrentTarget(currentTarget) {
  return {
    id: currentTarget.id,
    offsetLeft: currentTarget.offsetLeft,
    offsetTop: currentTarget.offsetTop,
    dataset: currentTarget.dataset,
  };
}
var createTapEvent = function (originalEvent) {
  return {
    type: originalEvent.type,
    stopPropagation: originalEvent.stopPropagation,
    target: createTarget(originalEvent.target, originalEvent.detail),
    currentTarget: createCurrentTarget(originalEvent.currentTarget),
    originalEvent: originalEvent,
  };
};
var createTouchEvent = function (originalEvent) {
  return {
    type: originalEvent.type,
    stopPropagation: originalEvent.stopPropagation,
    target: createTarget(originalEvent.target, originalEvent.detail),
    currentTarget: createCurrentTarget(originalEvent.currentTarget),
    touches: originalEvent.touches,
    changedTouches: originalEvent.touches,
    originalEvent: originalEvent,
  };
};
var createImageEvent = function (originalEvent) {
  return {
    type: originalEvent.type,
    target: createTarget(originalEvent.target, originalEvent.detail),
    currentTarget: createCurrentTarget(originalEvent.currentTarget),
    originalEvent: originalEvent,
  };
};
function createCallback(fn, eventCreator) {
  if (typeof fn !== 'function') {
    return undefined;
  }
  return function (originalEvent) {
    return fn(eventCreator(originalEvent));
  };
}
var createInputEvent = function (originalEvent) {
  return {
    type: originalEvent.type,
    target: createTarget(originalEvent.target, originalEvent.detail),
    currentTarget: createCurrentTarget(originalEvent.currentTarget),
    originalEvent: originalEvent,
  };
};
var createFormEvent = function (originalEvent) {
  return {
    type: originalEvent.type,
    target: createTarget(originalEvent.target, originalEvent.detail),
    currentTarget: createCurrentTarget(originalEvent.currentTarget),
    originalEvent: originalEvent,
  };
};
function assignDefaultProps(inputProps, defaultProps) {
  if (defaultProps) {
    Object.keys(defaultProps).forEach(function (key) {
      var _a;
      inputProps[key] = (_a = inputProps[key]) !== null && _a !== void 0 ? _a : defaultProps[key];
    });
  }
}
function createHostComponent(name, defaults) {
  var Component = function (props, ref) {
    var inputProps = __assign({}, props);
    // 默认属性根据平台在这里设置
    if (defaults) {
      if (process.env.REMAX_PLATFORM === 'wechat') {
        assignDefaultProps(inputProps, defaults['wechat']);
      } else if (process.env.REMAX_PLATFORM === 'toutiao') {
        assignDefaultProps(inputProps, defaults['toutiao']);
      } else if (process.env.REMAX_PLATFORM === 'ali') {
        assignDefaultProps(inputProps, defaults['ali']);
      }
    }
    if (props.onLongTap) {
      inputProps.onLongTap = createCallback(inputProps.onLongTap, createTapEvent);
    }
    if (inputProps.onTap) {
      inputProps.onTap = createCallback(inputProps.onTap, createTapEvent);
    }
    if (inputProps.onTouchStart) {
      inputProps.onTouchStart = createCallback(inputProps.onTouchStart, createTouchEvent);
    }
    if (inputProps.onTouchMove) {
      inputProps.onTouchMove = createCallback(inputProps.onTouchMove, createTouchEvent);
    }
    if (inputProps.onTouchEnd) {
      inputProps.onTouchEnd = createCallback(inputProps.onTouchEnd, createTouchEvent);
    }
    if (inputProps.onTouchCancel) {
      inputProps.onTouchCancel = createCallback(inputProps.onTouchCancel, createTouchEvent);
    }
    if (inputProps.onChange) {
      inputProps.onChange = createCallback(inputProps.onChange, createInputEvent);
    }
    if (inputProps.onInput) {
      inputProps.onInput = createCallback(inputProps.onInput, createInputEvent);
    }
    if (inputProps.onConfirm) {
      inputProps.onConfirm = createCallback(inputProps.onConfirm, createInputEvent);
    }
    if (inputProps.onFocus) {
      inputProps.onFocus = createCallback(inputProps.onFocus, createInputEvent);
    }
    if (inputProps.onBlur) {
      inputProps.onBlur = createCallback(inputProps.onBlur, createInputEvent);
    }
    if (inputProps.onSubmit) {
      inputProps.onSubmit = createCallback(inputProps.onSubmit, createFormEvent);
    }
    if (inputProps.onReset) {
      inputProps.onReset = createCallback(inputProps.onReset, createFormEvent);
    }
    if (name === 'image') {
      if (inputProps.onLoad) {
        inputProps.onLoad = createCallback(props.onLoad, createImageEvent);
      }
      if (inputProps.onError) {
        inputProps.onError = createCallback(props.onError, createImageEvent);
      }
    }
    return react.createElement(name, __assign(__assign({}, inputProps), { ref: ref }));
  };
  {
    Component.displayName = formatDisplayName(name);
  }
  return react.forwardRef(Component);
}

var Button = createHostComponent('button', {
  wechat: {
    hoverClassName: 'button-hover',
    hoverStartTime: 20,
    hoverStayTime: 70,
  },
});

var Form = createHostComponent('form', {
  wechat: {
    'wechat-report-submit': false,
    'wechat-report-submit-timeout': 0,
  },
});

var Image = createHostComponent('image', {
  wechat: {
    mode: 'scaleToFill',
    'wechat-webp': false,
    'wechat-lazyLoad': false,
    'wechat-show-menu-by-longpress': false,
  },
});

var __extends =
  (undefined && undefined.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
var __assign$1 =
  (undefined && undefined.__assign) ||
  function () {
    __assign$1 =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign$1.apply(this, arguments);
  };
var Input = /** @class */ (function (_super) {
  __extends(Input, _super);
  function Input(props) {
    var _this = _super.call(this, props) || this;
    _this.state = {
      value: '',
      // 阿里
      controlled: false,
    };
    _this.handleInput = function (e) {
      var controlled = _this.state.controlled;
      if (!controlled) {
        _this.setState({ value: e.target.value });
      }
      if (typeof _this.props.onInput === 'function') {
        return _this.props.onInput(e);
      }
      // 微信
      // 注意，微信要对 input 受控，必须要在 onInput 方法返回值
      return controlled ? _this.props.value : e.target.value;
    };
    var controlled = props.value !== undefined;
    var value = controlled ? props.value : props.defaultValue;
    _this.state = {
      value: value,
      controlled: controlled,
    };
    return _this;
  }
  Input.prototype.componentDidUpdate = function () {
    if (this.props.value !== undefined && this.props.value !== this.state.value) {
      this.setState({ value: this.props.value });
    }
  };
  Input.prototype.render = function () {
    var _a, _b, _c, _d, _e, _f;
    var inputProps = __assign$1(__assign$1({}, this.props), {
      onInput: createCallback(this.handleInput, createInputEvent),
    });
    if (inputProps.onConfirm) {
      inputProps.onConfirm = createCallback(this.props.onConfirm, createInputEvent);
    }
    if (inputProps.onFocus) {
      inputProps.onFocus = createCallback(this.props.onFocus, createInputEvent);
    }
    if (inputProps.onBlur) {
      inputProps.onBlur = createCallback(this.props.onBlur, createInputEvent);
    }
    // 通用属性的默认属性根据平台在这里设置
    if (process.env.REMAX_PLATFORM === 'toutiao') {
      inputProps.maxLength = (_a = inputProps.maxLength) !== null && _a !== void 0 ? _a : 140;
    }
    if (process.env.REMAX_PLATFORM === 'wechat') {
      inputProps.type = (_b = inputProps.type) !== null && _b !== void 0 ? _b : 'text';
      inputProps.password = (_c = inputProps.password) !== null && _c !== void 0 ? _c : false;
      inputProps.disabled = (_d = inputProps.disabled) !== null && _d !== void 0 ? _d : false;
      inputProps.focus = (_e = inputProps.focus) !== null && _e !== void 0 ? _e : false;
      inputProps.maxLength = (_f = inputProps.maxLength) !== null && _f !== void 0 ? _f : 140;
    }
    return react.createElement('input', __assign$1(__assign$1({}, inputProps), this.state));
  };
  // 平台独有的属性默认值写在这
  Input.defaultProps = {
    'toutiao-selection-end': 999,
    'toutiao-selection-start': 999,
    'wechat-placeholder-class': 'input-placeholder',
    'wechat-cursor-spacing': 0,
    'wechat-confirm-type': 'done',
    'wechat-confirm-hold': false,
    'wechat-selection-end': -1,
    'wechat-selection-start': -1,
    'wechat-adjust-position': true,
    'wechat-hold-keyboard': false,
  };
  return Input;
})(react.Component);

var index = createHostComponent('label');

var index$1 = createHostComponent('navigator', {
  wechat: {
    'wechat-target': 'self',
    'wechat-open-type': 'navigate',
    'wechat-delta': 1,
    hoverClassName: 'navigator-hover',
    'wechat-hover-stop-propagation': false,
    hoverStartTime: 50,
    hoverStayTime: 600,
  },
});

var Text = createHostComponent('text', {
  wechat: {
    selectable: false,
    'wechat-decode': false,
  },
});

var __extends$1 =
  (undefined && undefined.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
var __assign$2 =
  (undefined && undefined.__assign) ||
  function () {
    __assign$2 =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign$2.apply(this, arguments);
  };
var Textarea = /** @class */ (function (_super) {
  __extends$1(Textarea, _super);
  function Textarea(props) {
    var _this = _super.call(this, props) || this;
    _this.state = {
      value: '',
      // 阿里
      controlled: false,
    };
    _this.handleInput = function (e) {
      var controlled = _this.state.controlled;
      if (!controlled) {
        _this.setState({ value: e.target.value });
      }
      if (typeof _this.props.onInput === 'function') {
        return _this.props.onInput(e);
      }
      // 微信
      // 注意，微信要对 input 受控，必须要在 onInput 方法返回值
      return controlled ? _this.props.value : e.target.value;
    };
    var controlled = props.value !== undefined;
    var value = controlled ? props.value : props.defaultValue;
    _this.state = {
      value: value,
      controlled: controlled,
    };
    return _this;
  }
  Textarea.prototype.componentDidUpdate = function () {
    if (this.props.value !== undefined && this.props.value !== this.state.value) {
      this.setState({ value: this.props.value });
    }
  };
  Textarea.prototype.render = function () {
    var _a, _b, _c, _d, _e;
    var inputProps = __assign$2(__assign$2({}, this.props), {
      onInput: createCallback(this.handleInput, createInputEvent),
    });
    if (inputProps.onConfirm) {
      inputProps.onConfirm = createCallback(this.props.onConfirm, createInputEvent);
    }
    if (inputProps.onFocus) {
      inputProps.onFocus = createCallback(this.props.onFocus, createInputEvent);
    }
    if (inputProps.onBlur) {
      inputProps.onBlur = createCallback(this.props.onBlur, createInputEvent);
    }
    if (process.env.REMAX_PLATFORM === 'toutiao') {
      inputProps.maxLength = (_a = inputProps.maxLength) !== null && _a !== void 0 ? _a : 140;
    }
    if (process.env.REMAX_PLATFORM === 'wechat') {
      inputProps.maxLength = (_b = inputProps.maxLength) !== null && _b !== void 0 ? _b : 140;
      inputProps.disabled = (_c = inputProps.disabled) !== null && _c !== void 0 ? _c : false;
      inputProps.focus = (_d = inputProps.focus) !== null && _d !== void 0 ? _d : false;
      inputProps.autoHeight = (_e = inputProps.autoHeight) !== null && _e !== void 0 ? _e : false;
    }
    return react.createElement('textarea', __assign$2(__assign$2({}, inputProps), this.state));
  };
  Textarea.defaultProps = {
    'toutiao-selection-end': 999,
    'toutiao-selection-start': 999,
    'wechat-selection-end': -1,
    'wechat-selection-start': -1,
    'wechat-fixed': false,
    'wechat-placeholder-class': 'textarea-placeholder',
    'wechat-cursor-spacing': 0,
    'wechat-cursor': -1,
    'wechat-show-confirm-bar': true,
    'wechat-adjust-position': true,
    'wechat-hold-keyboard': false,
    'wechat-disable-default-padding': false,
  };
  return Textarea;
})(react.Component);

var View = createHostComponent('view', {
  wechat: {
    hoverClassName: 'none',
    'wechat-hover-stop-propagation': false,
    hoverStartTime: 50,
    hoverStayTime: 400,
  },
});

var WebView = createHostComponent('web-view');

export { Button, Form, Image, Input, index as Label, index$1 as Navigator, Text, Textarea, View, WebView };
