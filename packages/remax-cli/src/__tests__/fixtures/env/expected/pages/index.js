'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('../index.js');
require('react-reconciler');
require('scheduler');
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
function createHostComponent(name) {
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

var ScrollView = createHostComponent('scroll-view');

createHostComponent('swiper');

createHostComponent('swiper-item');

var MovableView = createHostComponent('movable-view');

var MovableArea = createHostComponent('movable-area');

var CoverView = createHostComponent('cover-view');

var CoverImage = createHostComponent('cover-image');

createHostComponent('icon');

var Text = createHostComponent('text');

createHostComponent('rich-text');

createHostComponent('progress');

var Button = createHostComponent('button');

createHostComponent('checkbox-group');

createHostComponent('checkbox');

var Form = createHostComponent('form');

var Input = createHostComponent('input');

createHostComponent('label');

createHostComponent('picker');

var PickerView = createHostComponent('picker-view');

createHostComponent('picker-view-column');

createHostComponent('radio-group');

createHostComponent('radio');

createHostComponent('slider');

createHostComponent('switch');

var Textarea = createHostComponent('textarea');

createHostComponent('navigator');

var Image = createHostComponent('image');

var Map = createHostComponent('map');

var Canvas = createHostComponent('canvas');

createHostComponent('web-view');

createHostComponent('lifestyle');

createHostComponent('contact-button');

createHostComponent('video');

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

function promisify(api) {
  return function (arg) {
    if (arg === void 0) {
      arg = {};
    }

    return new Promise(function (resolve, reject) {
      var promisifyArg = arg;
      api(__assign$1(__assign$1({}, promisifyArg), {
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

var _page = function _page() {

  return React.createElement(View, null, React.createElement(Text, null, "test"), React.createElement(Text, null, "hello"), React.createElement(Text, null, "hello world"));
};

var index = Page(index$1.createPageConfig(_page), true);

exports.default = index;
