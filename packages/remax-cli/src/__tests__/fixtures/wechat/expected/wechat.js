'use strict';

require('./index.js');
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
function createHostComponent(name, component) {
  if (component) {
    return component;
  }

  var Component = function Component(props, ref) {
    var _a = props.children,
        children = _a === void 0 ? [] : _a;
    return React.createElement(name, __assign(__assign({}, props), {
      ref: ref
    }), children);
  };

  return React.forwardRef(Component);
}

var View = createHostComponent('view');

var Input = createHostComponent('input');
Input.defaultProps = {
  type: 'text',
  maxlength: 140,
  selectionEnd: 999,
  selectionStart: 999
};

var Textarea = createHostComponent('textarea');
Textarea.defaultProps = {
  maxlength: -1,
  selectionEnd: 999,
  selectionStart: 999,
  fixed: false
};

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

  var videoProps = __assign$1(__assign$1({}, restProps), {
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
createHostComponent(hostComponentName, Video);

var hostComponentName$1 = 'swiper';
var Swiper = createHostComponent(hostComponentName$1);
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

  var scrollViewProps = __assign$2(__assign$2({}, restProps), {
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
var ScrollView$1 = createHostComponent(componentName, ScrollView);

var SwiperItem = createHostComponent('swiper-item');

createHostComponent('movable-view');

createHostComponent('movable-area');

createHostComponent('cover-view');

createHostComponent('cover-image');

createHostComponent('icon');

var Text = createHostComponent('text');

createHostComponent('rich-text');

createHostComponent('progress');

createHostComponent('button');

createHostComponent('checkbox-group');

createHostComponent('checkbox');

createHostComponent('form');

createHostComponent('label');

createHostComponent('picker');

var PickerView = createHostComponent('picker-view');

createHostComponent('picker-view-column');

createHostComponent('radio-group');

createHostComponent('radio');

var Slider = createHostComponent('slider');
Slider.defaultProps = {
  blockSize: 28,
  step: 1,
  max: 100
};

createHostComponent('switch');

var Navigator = createHostComponent('navigator');
Navigator.defaultProps = {
  openType: 'navigate'
};

createHostComponent('image');

createHostComponent('live-player');

createHostComponent('live-pusher');

createHostComponent('map');

createHostComponent('canvas');

createHostComponent('open-data');

createHostComponent('official-account');

createHostComponent('editor');

createHostComponent('audio');

createHostComponent('ad');

createHostComponent('web-view');

createHostComponent('functional-page-navigator');

createHostComponent('camera');

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

function promisify(api) {
  return function (arg) {
    if (arg === void 0) {
      arg = {};
    }

    return new Promise(function (resolve, reject) {
      var promisifyArg = arg;
      api(__assign$3(__assign$3({}, promisifyArg), {
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

exports.Input = Input;
exports.ScrollView = ScrollView$1;
exports.Swiper = Swiper;
exports.SwiperItem = SwiperItem;
exports.Text = Text;
exports.View = View;
