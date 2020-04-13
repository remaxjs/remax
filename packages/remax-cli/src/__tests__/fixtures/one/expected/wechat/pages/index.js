'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var index$1 = require('../index-chunk.js');
require('react-reconciler');
require('scheduler');
var React = require('react');
var regeneratorRuntime = _interopDefault(require('regenerator-runtime'));

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
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
    value: detail === null || detail === void 0 ? void 0 : detail.value
  };
}
function createCurrentTarget(currentTarget) {
  return {
    id: currentTarget.id,
    offsetLeft: currentTarget.offsetLeft,
    offsetTop: currentTarget.offsetTop,
    dataset: currentTarget.dataset
  };
}
var createTapEvent = function createTapEvent(originalEvent) {
  return {
    type: originalEvent.type,
    stopPropagation: originalEvent.stopPropagation,
    target: createTarget(originalEvent.target, originalEvent.detail),
    currentTarget: createCurrentTarget(originalEvent.currentTarget),
    originalEvent: originalEvent
  };
};
var createTouchEvent = function createTouchEvent(originalEvent) {
  return {
    type: originalEvent.type,
    target: createTarget(originalEvent.target, originalEvent.detail),
    currentTarget: createCurrentTarget(originalEvent.currentTarget),
    touches: originalEvent.touches,
    changedTouches: originalEvent.touches,
    originalEvent: originalEvent
  };
};
var createImageEvent = function createImageEvent(originalEvent) {
  return {
    type: originalEvent.type,
    target: createTarget(originalEvent.target, originalEvent.detail),
    currentTarget: createCurrentTarget(originalEvent.currentTarget),
    originalEvent: originalEvent
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
var createInputEvent = function createInputEvent(originalEvent) {
  return {
    type: originalEvent.type,
    target: createTarget(originalEvent.target, originalEvent.detail),
    currentTarget: createCurrentTarget(originalEvent.currentTarget),
    originalEvent: originalEvent
  };
};
var createFormEvent = function createFormEvent(originalEvent) {
  return {
    type: originalEvent.type,
    target: createTarget(originalEvent.target, originalEvent.detail),
    currentTarget: createCurrentTarget(originalEvent.currentTarget),
    originalEvent: originalEvent
  };
};
function createHostComponent(name) {
  var Component = function Component(props, ref) {
    var inputProps = __assign({}, props);

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

    return React.createElement(name, __assign(__assign({}, inputProps), {
      ref: ref
    }));
  };

  return React.forwardRef(Component);
}

var Button = createHostComponent('button');

var Form = createHostComponent('form');

var Image = createHostComponent('image');

var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign$1 = undefined && undefined.__assign || function () {
  __assign$1 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign$1.apply(this, arguments);
};

var Input =
/** @class */
function (_super) {
  __extends(Input, _super);

  function Input(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      value: '',
      // 支付宝
      controlled: false
    };

    _this.handleInput = function (e) {
      var controlled = _this.state.controlled;

      if (!controlled) {
        _this.setState({
          value: e.target.value
        });
      }

      if (typeof _this.props.onInput === 'function') {
        return _this.props.onInput(e);
      } // 微信
      // 注意，微信要对 input 受控，必须要在 onInput 方法返回值


      return controlled ? _this.props.value : e.target.value;
    };

    var controlled = props.value !== undefined;
    var value = controlled ? props.value : props.defaultValue;
    _this.state = {
      value: value,
      controlled: controlled
    };
    return _this;
  }

  Input.prototype.componentDidUpdate = function () {
    if (this.props.value !== undefined && this.props.value !== this.state.value) {
      this.setState({
        value: this.props.value
      });
    }
  };

  Input.prototype.render = function () {
    var inputProps = __assign$1(__assign$1({}, this.props), {
      onInput: createCallback(this.handleInput, createInputEvent)
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

    return React.createElement('input', __assign$1(__assign$1({}, inputProps), this.state));
  };

  Input.defaultProps = {
    'toutiao-maxlength': 140,
    'toutiao-selection-end': 999,
    'toutiao-selection-start': 999,
    'wechat-maxlength': 140,
    'wechat-selection-end': 999,
    'wechat-selection-start': 999
  };
  return Input;
}(React.Component);

createHostComponent('label');

createHostComponent('radio');

createHostComponent('radio-group');

var Text = createHostComponent('text');

var __extends$1 = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign$2 = undefined && undefined.__assign || function () {
  __assign$2 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign$2.apply(this, arguments);
};

var Textarea =
/** @class */
function (_super) {
  __extends$1(Textarea, _super);

  function Textarea(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      value: '',
      // 支付宝
      controlled: false
    };

    _this.handleInput = function (e) {
      var controlled = _this.state.controlled;

      if (!controlled) {
        _this.setState({
          value: e.target.value
        });
      }

      if (typeof _this.props.onInput === 'function') {
        return _this.props.onInput(e);
      } // 微信
      // 注意，微信要对 input 受控，必须要在 onInput 方法返回值


      return controlled ? _this.props.value : e.target.value;
    };

    var controlled = props.value !== undefined;
    var value = controlled ? props.value : props.defaultValue;
    _this.state = {
      value: value,
      controlled: controlled
    };
    return _this;
  }

  Textarea.prototype.componentDidUpdate = function () {
    if (this.props.value !== undefined && this.props.value !== this.state.value) {
      this.setState({
        value: this.props.value
      });
    }
  };

  Textarea.prototype.render = function () {
    var inputProps = __assign$2(__assign$2({}, this.props), {
      onInput: createCallback(this.handleInput, createInputEvent)
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

    return React.createElement('textarea', __assign$2(__assign$2({}, inputProps), this.state));
  };

  Textarea.defaultProps = {
    'toutiao-maxlength': -1,
    'toutiao-selection-end': 999,
    'toutiao-selection-start': 999,
    'wechat-maxlength': -1,
    'wechat-selection-end': 999,
    'wechat-selection-start': 999,
    'wechat-fixed': false
  };
  return Textarea;
}(React.Component);

var View = createHostComponent('view');

var WebView = createHostComponent('web-view');

var __assign$3 = undefined && undefined.__assign || function () {
  __assign$3 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign$3.apply(this, arguments);
};
function createHostComponent$1(name, component) {
  if (component) {
    return component;
  }

  var Component = function Component(props, ref) {
    var _a = props.children,
        children = _a === void 0 ? [] : _a;
    return React.createElement(name, __assign$3(__assign$3({}, props), {
      ref: ref
    }), children);
  };

  return React.forwardRef(Component);
}

createHostComponent$1('view');

var Input$1 = createHostComponent$1('input');
Input$1.defaultProps = {
  type: 'text',
  maxlength: 140,
  selectionEnd: 999,
  selectionStart: 999
};

var Textarea$1 = createHostComponent$1('textarea');
Textarea$1.defaultProps = {
  maxlength: -1,
  selectionEnd: 999,
  selectionStart: 999,
  fixed: false
};

var __assign$4 = undefined && undefined.__assign || function () {
  __assign$4 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign$4.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var hostComponentName = 'video';

var VideoRender = function VideoRender(props, ref) {
  var children = props.children,
      restProps = __rest(props, ["children"]);

  var videoProps = __assign$4(__assign$4({}, restProps), {
    ref: ref
  });

  return React.createElement(hostComponentName, videoProps, children);
};
/**
 * video 默认宽度 300px、高度 225px，可通过 wxss 设置宽高
 */


var Video = React.forwardRef(VideoRender);
Video.defaultProps = {
  controls: true,
  danmuBtn: false,
  enableDanmu: false,
  autoplay: false,
  loop: false,
  muted: false,
  initialTime: 0,
  pageGesture: false,
  showProgress: true,
  showFullscreenBtn: true,
  showPlayBtn: true,
  showCenterPlayBtn: true,
  enableProgressGesture: true,
  objectFit: 'contain',
  showMuteBtn: false,
  playBtnPosition: 'bottom',
  enablePlayGesture: false,
  autoPauseIfNavigate: true,
  autoPauseIfOpenNative: true,
  vslideGesture: false,
  vslideGestureInFullscreen: true
};
createHostComponent$1(hostComponentName, Video);

var hostComponentName$1 = 'swiper';
var Swiper = createHostComponent$1(hostComponentName$1);
Swiper.defaultProps = {
  indicatorDots: false,
  indicatorColor: 'rgba(0, 0, 0, .3)',
  indicatorActiveColor: '#000000',
  autoplay: false,
  interval: 5000,
  duration: 500,
  circular: false,
  vertical: false,
  previousMargin: '0px',
  nextMargin: '0px',
  displayMultipleItems: 1,
  skipHiddenItemLayout: false,
  easingFunction: 'default'
};

var __assign$5 = undefined && undefined.__assign || function () {
  __assign$5 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign$5.apply(this, arguments);
};

var __rest$1 = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};
var componentName = 'scroll-view';

var ScrollViewRender = function ScrollViewRender(props, ref) {
  var children = props.children,
      scrollTop = props.scrollTop,
      onScroll = props.onScroll,
      restProps = __rest$1(props, ["children", "scrollTop", "onScroll"]);

  var _a = __read(React.useState(scrollTop), 2),
      innerScrollTop = _a[0],
      forceUpdateScrollTop = _a[1];

  var scrollTopRef = React.useRef(innerScrollTop);

  function handleScroll(event) {
    var _a;

    scrollTopRef.current = (_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.scrollTop;

    if (typeof onScroll === 'function') {
      onScroll(event);
    }
  }

  React.useEffect(function () {
    scrollTopRef.current = scrollTop;
    forceUpdateScrollTop(scrollTop);
  }, [scrollTop]);

  var scrollViewProps = __assign$5(__assign$5({}, restProps), {
    onScroll: handleScroll,
    scrollTop: scrollTopRef.current,
    ref: ref
  });

  return React.createElement(componentName, scrollViewProps, children);
};

var ScrollView = React.forwardRef(ScrollViewRender);
ScrollView.defaultProps = {
  upperThreshold: 50,
  lowerThreshold: 50
};
createHostComponent$1(componentName, ScrollView);

createHostComponent$1('swiper-item');

createHostComponent$1('movable-view');

createHostComponent$1('movable-area');

createHostComponent$1('cover-view');

createHostComponent$1('cover-image');

createHostComponent$1('icon');

createHostComponent$1('text');

createHostComponent$1('rich-text');

createHostComponent$1('progress');

createHostComponent$1('button');

createHostComponent$1('checkbox-group');

createHostComponent$1('checkbox');

createHostComponent$1('form');

createHostComponent$1('label');

createHostComponent$1('picker');

var PickerView = createHostComponent$1('picker-view');

createHostComponent$1('picker-view-column');

createHostComponent$1('radio-group');

createHostComponent$1('radio');

var Slider = createHostComponent$1('slider');
Slider.defaultProps = {
  blockSize: 28,
  step: 1,
  max: 100
};

createHostComponent$1('switch');

var Navigator = createHostComponent$1('navigator');
Navigator.defaultProps = {
  openType: 'navigate'
};

createHostComponent$1('image');

createHostComponent$1('live-player');

createHostComponent$1('live-pusher');

createHostComponent$1('map');

createHostComponent$1('canvas');

createHostComponent$1('open-data');

createHostComponent$1('official-account');

createHostComponent$1('editor');

createHostComponent$1('audio');

createHostComponent$1('ad');

createHostComponent$1('web-view');

var UnKnownComponent = createHostComponent$1('functional-page-navigator');

createHostComponent$1('camera');

var __assign$6 = undefined && undefined.__assign || function () {
  __assign$6 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign$6.apply(this, arguments);
};

function promisify(api) {
  return function (arg) {
    if (arg === void 0) {
      arg = {};
    }

    return new Promise(function (resolve, reject) {
      var promisifyArg = arg;
      api(__assign$6(__assign$6({}, promisifyArg), {
        success: function success(res) {
          if (promisifyArg && typeof promisifyArg.success === 'function') {
            promisifyArg.success(res);
          }

          resolve(res);
        },
        fail: function fail(res) {
          if (promisifyArg && typeof promisifyArg.fail === 'function') {
            promisifyArg.fail(res);
          }

          reject(res);
        }
      }));
    });
  };
}

var getAppStub = getApp;
var canIUse = wx.canIUse;
var base64ToArrayBuffer = wx.base64ToArrayBuffer;
var arrayBufferToBase64 = wx.arrayBufferToBase64;
var getSystemInfoSync = wx.getSystemInfoSync;
var getSystemInfo = promisify(wx.getSystemInfo);
var getUpdateManager = wx.getUpdateManager;
var getLaunchOptionsSync = wx.getLaunchOptionsSync;
var onPageNotFound = wx.onPageNotFound;
var onError = wx.onError;
var onAudioInterruptionEnd = wx.onAudioInterruptionEnd;
var onAppShow = wx.onAppShow;
var onAppHide = wx.onAppHide;
var offPageNotFound = wx.offPageNotFound;
var offError = wx.offError;
var offAudioInterruptionEnd = wx.offAudioInterruptionEnd;
var offAudioInterruptionBegin = wx.offAudioInterruptionBegin;
var offAppShow = wx.offAppShow;
var offAppHide = wx.offAppHide;
var setEnableDebug = promisify(wx.setEnableDebug);
var getLogManager = wx.getLogManager;
var switchTab = promisify(wx.switchTab);
var reLaunch = promisify(wx.reLaunch);
var redirectTo = promisify(wx.redirectTo);
var navigateTo = promisify(wx.navigateTo);
var navigateBack = promisify(wx.navigateBack);
var showToast = promisify(wx.showToast);
var showModal = promisify(wx.showModal);
var showLoading = promisify(wx.showLoading);
var showActionSheet = promisify(wx.showActionSheet);
var hideToast = promisify(wx.hideToast);
var hideLoading = promisify(wx.hideLoading);
var showNavigationBarLoading = promisify(wx.showNavigationBarLoading);
var setNavigationBarTitle = promisify(wx.setNavigationBarTitle);
var setNavigationBarColor = promisify(wx.setNavigationBarColor);
var hideNavigationBarLoading = promisify(wx.hideNavigationBarLoading);
var setBackgroundTextStyle = promisify(wx.setBackgroundTextStyle);
var setBackgroundColor = promisify(wx.setBackgroundColor);
var showTabBarRedDot = promisify(wx.showTabBarRedDot);
var showTabBar = promisify(wx.showTabBar);
var setTabBarStyle = promisify(wx.setTabBarStyle);
var setTabBarItem = promisify(wx.setTabBarItem);
var setTabBarBadge = promisify(wx.setTabBarBadge);
var removeTabBarBadge = promisify(wx.removeTabBarBadge);
var hideTabBarRedDot = promisify(wx.hideTabBarRedDot);
var hideTabBar = promisify(wx.hideTabBar);
var loadFontFace = promisify(wx.loadFontFace);
var stopPullDownRefresh = promisify(wx.stopPullDownRefresh);
var startPullDownRefresh = promisify(wx.startPullDownRefresh);
var pageScrollTo = promisify(wx.pageScrollTo);
var createAnimation = wx.createAnimation;
var setTopBarText = promisify(wx.setTopBarText);
var nextTick = wx.nextTick;
var getMenuButtonBoundingClientRect = wx.getMenuButtonBoundingClientRect;
var onWindowResize = wx.onWindowResize;
var offWindowResize = wx.offWindowResize;
var onKeyboardHeightChange = wx.onKeyboardHeightChange;
var getSelectedTextRange = wx.getSelectedTextRange;
var request = promisify(wx.request);
var downloadFile = promisify(wx.downloadFile);
var uploadFile = promisify(wx.uploadFile);
var sendSocketMessage = promisify(wx.sendSocketMessage);
var onSocketOpen = wx.onSocketOpen;
var onSocketMessage = wx.onSocketMessage;
var onSocketError = wx.onSocketError;
var onSocketClose = wx.onSocketClose;
var connectSocket = promisify(wx.connectSocket);
var closeSocket = promisify(wx.closeSocket);
var stopLocalServiceDiscovery = promisify(wx.stopLocalServiceDiscovery);
var startLocalServiceDiscovery = promisify(wx.startLocalServiceDiscovery);
var onLocalServiceResolveFail = wx.onLocalServiceResolveFail;
var onLocalServiceLost = wx.onLocalServiceLost;
var onLocalServiceFound = wx.onLocalServiceFound;
var onLocalServiceDiscoveryStop = wx.onLocalServiceDiscoveryStop;
var offLocalServiceResolveFail = wx.offLocalServiceResolveFail;
var offLocalServiceLost = wx.offLocalServiceLost;
var offLocalServiceFound = wx.offLocalServiceFound;
var offLocalServiceDiscoveryStop = wx.offLocalServiceDiscoveryStop;
var createUDPSocket = wx.createUDPSocket;
var setStorageSync = wx.setStorageSync;
var setStorage = promisify(wx.setStorage);
var removeStorageSync = wx.removeStorageSync;
var removeStorage = promisify(wx.removeStorage);
var getStorageSync = wx.getStorageSync;
var getStorageInfoSync = wx.getStorageInfoSync;
var getStorageInfo = promisify(wx.getStorageInfo);
var getStorage = promisify(wx.getStorage);
var clearStorageSync = wx.clearStorageSync;
var clearStorage = promisify(wx.clearStorage);
var createMapContext = wx.createMapContext;
var saveImageToPhotosAlbum = promisify(wx.saveImageToPhotosAlbum);
var previewImage = promisify(wx.previewImage);
var getImageInfo = promisify(wx.getImageInfo);
var compressImage = promisify(wx.compressImage);
var chooseMessageFile = promisify(wx.chooseMessageFile);
var chooseImage = promisify(wx.chooseImage);
var saveVideoToPhotosAlbum = promisify(wx.saveVideoToPhotosAlbum);
var createVideoContext = wx.createVideoContext;
var chooseVideo = promisify(wx.chooseVideo);
var chooseMedia = promisify(wx.chooseMedia);
var stopVoice = promisify(wx.stopVoice);
var setInnerAudioOption = promisify(wx.setInnerAudioOption);
var playVoice = promisify(wx.playVoice);
var pauseVoice = promisify(wx.pauseVoice);
var getAvailableAudioSources = promisify(wx.getAvailableAudioSources);
var createInnerAudioContext = wx.createInnerAudioContext;
var createAudioContext = wx.createAudioContext;
var stopBackgroundAudio = promisify(wx.stopBackgroundAudio);
var seekBackgroundAudio = promisify(wx.seekBackgroundAudio);
var playBackgroundAudio = promisify(wx.playBackgroundAudio);
var pauseBackgroundAudio = promisify(wx.pauseBackgroundAudio);
var onBackgroundAudioStop = wx.onBackgroundAudioStop;
var onBackgroundAudioPlay = wx.onBackgroundAudioPlay;
var onBackgroundAudioPause = wx.onBackgroundAudioPause;
var getBackgroundAudioPlayerState = promisify(wx.getBackgroundAudioPlayerState);
var getBackgroundAudioManager = wx.getBackgroundAudioManager;
var createLivePusherContext = wx.createLivePusherContext;
var createLivePlayerContext = wx.createLivePlayerContext;
var stopRecord = promisify(wx.stopRecord);
var startRecord = promisify(wx.startRecord);
var getRecorderManager = wx.getRecorderManager;
var createCameraContext = wx.createCameraContext;
var stopLocationUpdate = promisify(wx.stopLocationUpdate);
var startLocationUpdateBackground = promisify(wx.startLocationUpdateBackground);
var startLocationUpdate = promisify(wx.startLocationUpdate);
var openLocation = promisify(wx.openLocation);
var onLocationChange = wx.onLocationChange;
var getLocation = promisify(wx.getLocation);
var chooseLocation = promisify(wx.chooseLocation);
var updateShareMenu = promisify(wx.updateShareMenu);
var showShareMenu = promisify(wx.showShareMenu);
var hideShareMenu = promisify(wx.hideShareMenu);
var getShareInfo = promisify(wx.getShareInfo);
var createOffscreenCanvas = wx.createOffscreenCanvas;
var createCanvasContext = wx.createCanvasContext;
var canvasToTempFilePath = promisify(wx.canvasToTempFilePath);
var canvasPutImageData = promisify(wx.canvasPutImageData);
var canvasGetImageData = promisify(wx.canvasGetImageData);
var saveFile = promisify(wx.saveFile);
var removeSavedFile = promisify(wx.removeSavedFile);
var openDocument = promisify(wx.openDocument);
var getSavedFileList = promisify(wx.getSavedFileList);
var getSavedFileInfo = promisify(wx.getSavedFileInfo);
var getFileSystemManager = wx.getFileSystemManager;
var getFileInfo = promisify(wx.getFileInfo);
var login = promisify(wx.login);
var checkSession = promisify(wx.checkSession);
var navigateToMiniProgram = promisify(wx.navigateToMiniProgram);
var navigateBackMiniProgram = promisify(wx.navigateBackMiniProgram);
var getAccountInfoSync = wx.getAccountInfoSync;
var getUserInfo = promisify(wx.getUserInfo);
var reportMonitor = wx.reportMonitor;
var reportAnalytics = wx.reportAnalytics;
var requestPayment = promisify(wx.requestPayment);
var authorize = promisify(wx.authorize);
var openSetting = promisify(wx.openSetting);
var getSetting = promisify(wx.getSetting);
var chooseAddress = promisify(wx.chooseAddress);
var openCard = promisify(wx.openCard);
var addCard = promisify(wx.addCard);
var chooseInvoiceTitle = promisify(wx.chooseInvoiceTitle);
var chooseInvoice = promisify(wx.chooseInvoice);
var startSoterAuthentication = promisify(wx.startSoterAuthentication);
var checkIsSupportSoterAuthentication = promisify(wx.checkIsSupportSoterAuthentication);
var checkIsSoterEnrolledInDevice = promisify(wx.checkIsSoterEnrolledInDevice);
var getWeRunData = promisify(wx.getWeRunData);
var stopBeaconDiscovery = promisify(wx.stopBeaconDiscovery);
var startBeaconDiscovery = promisify(wx.startBeaconDiscovery);
var onBeaconUpdate = wx.onBeaconUpdate;
var onBeaconServiceChange = wx.onBeaconServiceChange;
var getBeacons = promisify(wx.getBeacons);
var stopWifi = promisify(wx.stopWifi);
var startWifi = promisify(wx.startWifi);
var setWifiList = promisify(wx.setWifiList);
var onWifiConnected = wx.onWifiConnected;
var onGetWifiList = wx.onGetWifiList;
var getWifiList = promisify(wx.getWifiList);
var getConnectedWifi = promisify(wx.getConnectedWifi);
var connectWifi = promisify(wx.connectWifi);
var addPhoneContact = promisify(wx.addPhoneContact);
var writeBLECharacteristicValue = promisify(wx.writeBLECharacteristicValue);
var readBLECharacteristicValue = promisify(wx.readBLECharacteristicValue);
var onBLEConnectionStateChange = wx.onBLEConnectionStateChange;
var onBLECharacteristicValueChange = wx.onBLECharacteristicValueChange;
var notifyBLECharacteristicValueChange = promisify(wx.notifyBLECharacteristicValueChange);
var getBLEDeviceServices = promisify(wx.getBLEDeviceServices);
var getBLEDeviceCharacteristics = promisify(wx.getBLEDeviceCharacteristics);
var createBLEConnection = promisify(wx.createBLEConnection);
var closeBLEConnection = promisify(wx.closeBLEConnection);
var stopBluetoothDevicesDiscovery = promisify(wx.stopBluetoothDevicesDiscovery);
var startBluetoothDevicesDiscovery = promisify(wx.startBluetoothDevicesDiscovery);
var openBluetoothAdapter = wx.openBluetoothAdapter;
var onBluetoothDeviceFound = wx.onBluetoothDeviceFound;
var onBluetoothAdapterStateChange = wx.onBluetoothAdapterStateChange;
var getConnectedBluetoothDevices = promisify(wx.getConnectedBluetoothDevices);
var getBluetoothDevices = promisify(wx.getBluetoothDevices);
var getBluetoothAdapterState = promisify(wx.getBluetoothAdapterState);
var closeBluetoothAdapter = promisify(wx.closeBluetoothAdapter);
var getBatteryInfoSync = wx.getBatteryInfoSync;
var getBatteryInfo = promisify(wx.getBatteryInfo);
var setClipboardData = promisify(wx.setClipboardData);
var getClipboardData = promisify(wx.getClipboardData);
var stopHCE = promisify(wx.stopHCE);
var startHCE = promisify(wx.startHCE);
var sendHCEMessage = promisify(wx.sendHCEMessage);
var onHCEMessage = wx.onHCEMessage;
var getHCEState = promisify(wx.getHCEState);
var onNetworkStatusChange = wx.onNetworkStatusChange;
var getNetworkType = promisify(wx.getNetworkType);
var setScreenBrightness = promisify(wx.setScreenBrightness);
var setKeepScreenOn = promisify(wx.setKeepScreenOn);
var onUserCaptureScreen = wx.onUserCaptureScreen;
var getScreenBrightness = promisify(wx.getScreenBrightness);
var makePhoneCall = promisify(wx.makePhoneCall);
var stopAccelerometer = promisify(wx.stopAccelerometer);
var startAccelerometer = promisify(wx.startAccelerometer);
var onAccelerometerChange = wx.onAccelerometerChange;
var stopCompass = promisify(wx.stopCompass);
var startCompass = promisify(wx.startCompass);
var onCompassChange = wx.onCompassChange;
var stopDeviceMotionListening = promisify(wx.stopDeviceMotionListening);
var startDeviceMotionListening = promisify(wx.startDeviceMotionListening);
var onDeviceMotionChange = wx.onDeviceMotionChange;
var stopGyroscope = promisify(wx.stopGyroscope);
var startGyroscope = promisify(wx.startGyroscope);
var onGyroscopeChange = wx.onGyroscopeChange;
var onMemoryWarning = wx.onMemoryWarning;
var scanCode = promisify(wx.scanCode);
var vibrateShort = promisify(wx.vibrateShort);
var vibrateLong = promisify(wx.vibrateLong);
var createWorker = wx.createWorker;
var getExtConfigSync = wx.getExtConfigSync;
var getExtConfig = promisify(wx.getExtConfig);
var createSelectorQuery = wx.createSelectorQuery;
var createIntersectionObserver = wx.createIntersectionObserver;
var createRewardedVideoAd = wx.createRewardedVideoAd;
var createInterstitialAd = wx.createInterstitialAd;
var cloud = wx.cloud;
var requestSubscribeMessage = promisify(wx.requestSubscribeMessage);
var hideHomeButton = promisify(wx.hideHomeButton);

var View$1 = function View() {};

var C = (function (_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement(View$1, {
    className: "c ".concat(className)
  }, "c");
});

var styles = {"page-index":"index-module_page-index__1ZW9Y"};

var _page = function _page() {
  var _, _obj$a;

  var props = {};
  var TextElement = React.cloneElement( /*#__PURE__*/React.createElement(Text, null));

  function handleClick() {
    return _handleClick.apply(this, arguments);
  }

  function _handleClick() {
    _handleClick = index$1._asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 5;
              return Promise.resolve(1);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleClick.apply(this, arguments);
  }

  function handleTouchStart() {}

  var obj = {};
  var value = (_ = 0) !== null && _ !== void 0 ? _ : 1;
  return /*#__PURE__*/React.createElement(View, {
    className: styles['page-index']
  }, /*#__PURE__*/React.createElement(C, {
    className: "b"
  }), /*#__PURE__*/React.createElement(View, index$1._extends({
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    id: "view",
    "data-foo": "bar"
  }, props), "foo", obj === null || obj === void 0 ? void 0 : (_obj$a = obj.a) === null || _obj$a === void 0 ? void 0 : _obj$a.b, value), /*#__PURE__*/React.createElement(UnKnownComponent, null), /*#__PURE__*/React.createElement(UnBindingComponent, null), TextElement);
};

var index = Page(index$1.createPageConfig(_page));

exports.default = index;
