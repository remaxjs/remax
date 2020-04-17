'use strict';

require('./index-chunk.js');
var React = require('react');

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
    'toutiao-selection-end': 999,
    'toutiao-selection-start': 999,
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
function createHostComponent$1(name) {
  var Component = function Component(props, ref) {
    var _a = props.children,
        children = _a === void 0 ? [] : _a;
    return React.createElement(name, __assign$3(__assign$3({}, props), {
      ref: ref
    }), children);
  };

  return React.forwardRef(Component);
}

var View$1 = createHostComponent$1('view');

var ScrollView = createHostComponent$1('scroll-view');

createHostComponent$1('swiper');

createHostComponent$1('swiper-item');

var MovableView = createHostComponent$1('movable-view');

var MovableArea = createHostComponent$1('movable-area');

var CoverView = createHostComponent$1('cover-view');

var CoverImage = createHostComponent$1('cover-image');

createHostComponent$1('icon');

var Text$1 = createHostComponent$1('text');

createHostComponent$1('rich-text');

createHostComponent$1('progress');

var Button$1 = createHostComponent$1('button');

createHostComponent$1('checkbox-group');

createHostComponent$1('checkbox');

var Form$1 = createHostComponent$1('form');

var Input$1 = createHostComponent$1('input');

createHostComponent$1('label');

createHostComponent$1('picker');

var PickerView = createHostComponent$1('picker-view');

createHostComponent$1('picker-view-column');

createHostComponent$1('radio-group');

createHostComponent$1('radio');

createHostComponent$1('slider');

createHostComponent$1('switch');

var Textarea$1 = createHostComponent$1('textarea');

createHostComponent$1('navigator');

var Image$1 = createHostComponent$1('image');

var Map = createHostComponent$1('map');

var Canvas = createHostComponent$1('canvas');

createHostComponent$1('web-view');

createHostComponent$1('lifestyle');

createHostComponent$1('contact-button');

createHostComponent$1('video');

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

function promisify(api) {
  return function (arg) {
    if (arg === void 0) {
      arg = {};
    }

    return new Promise(function (resolve, reject) {
      var promisifyArg = arg;
      api(__assign$4(__assign$4({}, promisifyArg), {
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
var addCardAuth = promisify(my.addCardAuth);
var addPhoneContact = promisify(my.addPhoneContact);
var alert = promisify(my.alert);
var canIUse = my.canIUse;
var chooseAlipayContact = promisify(my.chooseAlipayContact);
var chooseCity = promisify(my.chooseCity);
var chooseContact = promisify(my.chooseContact);
var chooseImage = promisify(my.chooseImage);
var chooseLocation = promisify(my.chooseLocation);
var choosePhoneContact = promisify(my.choosePhoneContact);
var clearStorage = my.clearStorage;
var clearStorageSync = my.clearStorageSync;
var closeBluetoothAdapter = promisify(my.closeBluetoothAdapter);
var closeSocket = promisify(my.closeSocket);
var compressImage = promisify(my.compressImage);
var confirm = promisify(my.confirm);
var connectBLEDevice = promisify(my.connectBLEDevice);
var connectSocket = promisify(my.connectSocket);
var createAnimation = my.createAnimation;
var createCanvasContext = my.createCanvasContext;
var createIntersectionObserver = my.createIntersectionObserver;
var createMapContext = my.createMapContext;
var createSelectorQuery = my.createSelectorQuery;
var createWebViewContext = my.createWebViewContext;
var datePicker = promisify(my.datePicker);
var disconnectBLEDevice = promisify(my.disconnectBLEDevice);
var downloadFile = promisify(my.downloadFile);
var getAuthCode = promisify(my.getAuthCode);
var getAuthUserInfo = promisify(my.getAuthUserInfo);
var getBatteryInfo = promisify(my.getBatteryInfo);
var getBatteryInfoSync = my.getBatteryInfoSync;
var getBeacons = promisify(my.getBeacons);
var getBLEDeviceCharacteristics = promisify(my.getBLEDeviceCharacteristics);
var getBLEDeviceServices = promisify(my.getBLEDeviceServices);
var getBluetoothAdapterState = promisify(my.getBluetoothAdapterState);
var getBluetoothDevices = promisify(my.getBluetoothDevices);
var getClipboard = promisify(my.getClipboard);
var getConnectedBluetoothDevices = promisify(my.getConnectedBluetoothDevices);
var getFileInfo = promisify(my.getFileInfo);
var getImageInfo = promisify(my.getImageInfo);
var getLocation = promisify(my.getLocation);
var getNetworkType = promisify(my.getNetworkType);
var getPhoneNumber = promisify(my.getPhoneNumber);
var getRunData = promisify(my.getRunData);
var getRunScene = promisify(my.getRunScene);
var getSavedFileInfo = promisify(my.getSavedFileInfo);
var getSavedFileList = promisify(my.getSavedFileList);
var getScreenBrightness = promisify(my.getScreenBrightness);
var getServerTime = promisify(my.getServerTime);
var getSetting = promisify(my.getSetting);
var getStorage = promisify(my.getStorage);
var getStorageInfo = promisify(my.getStorageInfo);
var getStorageInfoSync = my.getStorageInfoSync;
var getStorageSync = my.getStorageSync;
var getSystemInfo = promisify(my.getSystemInfo);
var getSystemInfoSync = my.getSystemInfoSync;
var getTitleColor = promisify(my.getTitleColor);
var getUpdateManager = my.getUpdateManager;
var hideAddToDesktopMenu = my.hideAddToDesktopMenu;
var hideAllAddToDesktopMenu = my.hideAllAddToDesktopMenu;
var hideAllFavoriteMenu = my.hideAllFavoriteMenu;
var hideBackHome = my.hideBackHome;
var hideFavoriteMenu = my.hideFavoriteMenu;
var hideKeyboard = my.hideKeyboard;
var hideLoading = my.hideLoading;
var hideNavigationBarLoading = my.hideNavigationBarLoading;
var hideShareMenu = my.hideShareMenu;
var hideTabBar = my.hideTabBar;
var hideTabBarRedDot = my.hideTabBarRedDot;
var hideToast = my.hideToast;
var loadFontFace = promisify(my.loadFontFace);
var makePhoneCall = my.makePhoneCall;
var multiLevelSelect = promisify(my.multiLevelSelect);
var navigateBack = promisify(my.navigateBack);
var navigateBackMiniProgram = promisify(my.navigateBackMiniProgram);
var navigateTo = promisify(my.navigateTo);
var navigateToMiniProgram = promisify(my.navigateToMiniProgram);
var notifyBLECharacteristicValueChange = promisify(my.notifyBLECharacteristicValueChange);
var offAccelerometerChange = my.offAccelerometerChange;
var offBLECharacteristicValueChange = my.offBLECharacteristicValueChange;
var offBLEConnectionStateChanged = my.offBLEConnectionStateChanged;
var offBluetoothAdapterStateChange = my.offBluetoothAdapterStateChange;
var offBluetoothDeviceFound = my.offBluetoothDeviceFound;
var offCompassChange = my.offCompassChange;
var offGyroscopeChange = my.offGyroscopeChange;
var offMemoryWarning = my.offMemoryWarning;
var offNetworkStatusChange = my.offNetworkStatusChange;
var offSocketClose = my.offSocketClose;
var offSocketError = my.offSocketError;
var offSocketMessage = my.offSocketMessage;
var offSocketOpen = my.offSocketOpen;
var offUserCaptureScreen = my.offUserCaptureScreen;
var onAccelerometerChange = my.onAccelerometerChange;
var onBeaconServiceChange = my.onBeaconServiceChange;
var onBeaconUpdate = my.onBeaconUpdate;
var onBLECharacteristicValueChange = my.onBLECharacteristicValueChange;
var onBLEConnectionStateChanged = my.onBLEConnectionStateChanged;
var onBluetoothAdapterStateChange = my.onBluetoothAdapterStateChange;
var onBluetoothDeviceFound = my.onBluetoothDeviceFound;
var onCompassChange = my.onCompassChange;
var onGyroscopeChange = my.onGyroscopeChange;
var onMemoryWarning = my.onMemoryWarning;
var onNetworkStatusChange = my.onNetworkStatusChange;
var onSocketClose = my.onSocketClose;
var onSocketError = my.onSocketError;
var onSocketMessage = my.onSocketMessage;
var onSocketOpen = my.onSocketOpen;
var onUserCaptureScreen = my.onUserCaptureScreen;
var openBluetoothAdapter = my.openBluetoothAdapter;
var openCardDetail = my.openCardDetail;
var openCardList = my.openCardList;
var openKBVoucherDetail = my.openKBVoucherDetail;
var openLocation = promisify(my.openLocation);
var openMerchantCardList = my.openMerchantCardList;
var openMerchantTicketList = my.openMerchantTicketList;
var openMerchantVoucherList = my.openMerchantVoucherList;
var openSetting = promisify(my.openSetting);
var openTicketDetail = my.openTicketDetail;
var openTicketList = my.openTicketList;
var openVoucherDetail = my.openVoucherDetail;
var openVoucherList = my.openVoucherList;
var optionsSelect = my.optionsSelect;
var pageScrollTo = promisify(my.pageScrollTo);
var previewImage = promisify(my.previewImage);
var prompt = promisify(my.prompt);
var readBLECharacteristicValue = promisify(my.readBLECharacteristicValue);
var redirectTo = promisify(my.redirectTo);
var reLaunch = promisify(my.reLaunch);
var removeSavedFile = promisify(my.removeSavedFile);
var removeStorage = promisify(my.removeStorage);
var removeStorageSync = my.removeStorageSync;
var removeTabBarBadge = promisify(my.removeTabBarBadge);
var reportAnalytics = my.reportAnalytics;
var request = promisify(my.request);
var rsa = promisify(my.rsa);
var saveFile = promisify(my.saveFile);
var saveImage = promisify(my.saveImage);
var scan = promisify(my.scan);
var SDKVersion = my.SDKVersion;
var sendSocketMessage = promisify(my.sendSocketMessage);
var setBackgroundColor = promisify(my.setBackgroundColor);
var setBackgroundTextStyle = promisify(my.setBackgroundTextStyle);
var setCanPullDown = my.setCanPullDown;
var setClipboard = promisify(my.setClipboard);
var setKeepScreenOn = promisify(my.setKeepScreenOn);
var setNavigationBar = promisify(my.setNavigationBar);
var setOptionMenu = my.setOptionMenu;
var setScreenBrightness = promisify(my.setScreenBrightness);
var setStorage = promisify(my.setStorage);
var setStorageSync = my.setStorageSync;
var setTabBarBadge = promisify(my.setTabBarBadge);
var setTabBarItem = promisify(my.setTabBarItem);
var setTabBarStyle = promisify(my.setTabBarStyle);
var showActionSheet = promisify(my.showActionSheet);
var showAuthGuide = my.showAuthGuide;
var showLoading = promisify(my.showLoading);
var showNavigationBarLoading = promisify(my.showNavigationBarLoading);
var showSharePanel = my.showSharePanel;
var showTabBar = promisify(my.showTabBar);
var showTabBarRedDot = promisify(my.showTabBarRedDot);
var showToast = promisify(my.showToast);
var startBeaconDiscovery = promisify(my.startBeaconDiscovery);
var startBluetoothDevicesDiscovery = promisify(my.startBluetoothDevicesDiscovery);
var startPullDownRefresh = promisify(my.startPullDownRefresh);
var startZMVerify = my.startZMVerify;
var stopBeaconDiscovery = promisify(my.stopBeaconDiscovery);
var stopBluetoothDevicesDiscovery = promisify(my.stopBluetoothDevicesDiscovery);
var stopPullDownRefresh = promisify(my.stopPullDownRefresh);
var switchTab = promisify(my.switchTab);
var textRiskIdentification = promisify(my.textRiskIdentification);
var tradePay = promisify(my.tradePay);
var uploadFile = promisify(my.uploadFile);
var vibrate = promisify(my.vibrate);
var vibrateLong = promisify(my.vibrateLong);
var vibrateShort = promisify(my.vibrateShort);
var watchShake = my.watchShake;
var writeBLECharacteristicValue = promisify(my.writeBLECharacteristicValue);
var createVideoContext = my.createVideoContext;
var getOpenUserInfo = promisify(my.getOpenUserInfo);

var C = (function (_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement(View$1, {
    className: "c ".concat(className)
  }, "c");
});

exports.C = C;
exports.Text = Text;
exports.View = View;
exports.chooseImage = chooseImage;
