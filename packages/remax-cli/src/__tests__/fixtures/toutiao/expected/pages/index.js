require('./../runtime.js');
require('./../vendors~pages/index.js');
require('./../app~packageA/pages/index~pages/index.js');
(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([[4],{

/***/ 14:
/***/ (function(module, exports) {

module.exports = react;

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(40);


/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = react-reconciler;

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_toutiao__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var _page = function _page() {
  var props = {};
  var TextElement = react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"]( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_toutiao__WEBPACK_IMPORTED_MODULE_3__["Text"], null));

  function handleClick() {
    return _handleClick.apply(this, arguments);
  }

  function _handleClick() {
    _handleClick = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.resolve();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleClick.apply(this, arguments);
  }

  function handleTouchStart() {}

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_toutiao__WEBPACK_IMPORTED_MODULE_3__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_toutiao__WEBPACK_IMPORTED_MODULE_3__["View"], _extends({
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    id: "view",
    "data-foo": "bar"
  }, props), "foo"), TextElement, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_4__["FunctionalPageNavigator"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](UnBindingComponent, null));
};

/* harmony default export */ __webpack_exports__["default"] = (Page(Object(remax__WEBPACK_IMPORTED_MODULE_1__["createPageConfig"])(_page)));

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

module.exports = regenerator-runtime;

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_toutiao__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["View"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["Textarea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["Video"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["Swiper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["ScrollView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwiperItem", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["SwiperItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["Icon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["RichText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["Progress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["CheckboxGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["Checkbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["Form"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["Label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["Picker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerView", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["PickerView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerViewColumn", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["PickerViewColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["RadioGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["Radio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["Slider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["Switch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["Navigator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["Canvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["WebView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAppStub", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["getAppStub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canIUse", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["canIUse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSystemInfoSync", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["getSystemInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSystemInfo", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["getSystemInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUpdateManager", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["getUpdateManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLaunchOptionsSync", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["getLaunchOptionsSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exitMiniProgram", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["exitMiniProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchTab", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["switchTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reLaunch", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["reLaunch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["redirectTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["navigateTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBack", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["navigateBack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showToast", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["showToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["showModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showLoading", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["showLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showActionSheet", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["showActionSheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideToast", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["hideToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["hideLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setNavigationBarTitle", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["setNavigationBarTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopPullDownRefresh", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["stopPullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startPullDownRefresh", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["startPullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pageScrollTo", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["pageScrollTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAnimation", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["createAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "request", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["request"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["downloadFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["uploadFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectSocket", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["connectSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStorageSync", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["setStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStorage", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["setStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeStorageSync", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["removeStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeStorage", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["removeStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageSync", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["getStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageInfoSync", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["getStorageInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageInfo", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["getStorageInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorage", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["getStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearStorageSync", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["clearStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearStorage", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["clearStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveImageToPhotosAlbum", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["saveImageToPhotosAlbum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "previewImage", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["previewImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImageInfo", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["getImageInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseImage", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["chooseImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveVideoToPhotosAlbum", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["saveVideoToPhotosAlbum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createVideoContext", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["createVideoContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseVideo", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["chooseVideo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openLocation", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["openLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["getLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showShareMenu", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["showShareMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideShareMenu", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["hideShareMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateToVideoView", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["navigateToVideoView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCanvasContext", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["createCanvasContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveFile", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["saveFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeSavedFile", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["removeSavedFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openDocument", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["openDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSavedFileList", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["getSavedFileList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFileSystemManager", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["getFileSystemManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFileInfo", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["getFileInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "login", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkSession", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["checkSession"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateToMiniProgram", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["navigateToMiniProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBackMiniProgram", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["navigateBackMiniProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["getUserInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reportAnalytics", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["reportAnalytics"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestPayment", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["requestPayment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pay", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["pay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authorize", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["authorize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openSetting", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["openSetting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSetting", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["getSetting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseAddress", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["chooseAddress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setClipboardData", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["setClipboardData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClipboardData", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["getClipboardData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onNetworkStatusChange", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["onNetworkStatusChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNetworkType", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["getNetworkType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makePhoneCall", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["makePhoneCall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopAccelerometer", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["stopAccelerometer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startAccelerometer", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["startAccelerometer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAccelerometerChange", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["onAccelerometerChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopCompass", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["stopCompass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startCompass", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["startCompass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onCompassChange", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["onCompassChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scanCode", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["scanCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrateShort", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["vibrateShort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrateLong", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["vibrateLong"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getExtConfigSync", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["getExtConfigSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getExtConfig", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["getExtConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorQuery", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["createSelectorQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createIntersectionObserver", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["createIntersectionObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRewardedVideoAd", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["createRewardedVideoAd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConnectedWifi", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["getConnectedWifi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setKeepScreenOn", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["setKeepScreenOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMenuButtonLayout", function() { return remax_toutiao__WEBPACK_IMPORTED_MODULE_0__["getMenuButtonLayout"]; });

/* harmony import */ var _esm_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _esm_render__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _esm_createAppConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAppConfig", function() { return _esm_createAppConfig__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _esm_createPageConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPageConfig", function() { return _esm_createPageConfig__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _esm_createHostComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHostComponent", function() { return _esm_createHostComponent__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _esm_Platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return _esm_Platform__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _esm_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageInstance", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["usePageInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_useNativeEffect", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["unstable_useNativeEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useShow", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReady", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useReady"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHide", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useHide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePullDownRefresh", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["usePullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReachBottom", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useReachBottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageScroll", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["usePageScroll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useShareAppMessage", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useShareAppMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTitleClick", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useTitleClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOptionMenuClick", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useOptionMenuClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePopMenuClick", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["usePopMenuClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePullIntercept", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["usePullIntercept"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageEvent", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["usePageEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppEvent", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useAppEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppShow", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useAppShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppLaunch", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useAppLaunch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppError", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useAppError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppHide", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useAppHide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppPageNotFound", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useAppPageNotFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppShareAppMessage", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useAppShareAppMessage"]; });









/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = scheduler;

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in remax_wechat__WEBPACK_IMPORTED_MODULE_0__) if(["render","createAppConfig","createPageConfig","createHostComponent","Platform","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _esm_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _esm_render__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _esm_createAppConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAppConfig", function() { return _esm_createAppConfig__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _esm_createPageConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPageConfig", function() { return _esm_createPageConfig__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _esm_createHostComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHostComponent", function() { return _esm_createHostComponent__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _esm_Platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return _esm_Platform__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _esm_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageInstance", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["usePageInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_useNativeEffect", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["unstable_useNativeEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useShow", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReady", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useReady"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHide", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useHide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePullDownRefresh", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["usePullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReachBottom", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useReachBottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageScroll", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["usePageScroll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useShareAppMessage", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useShareAppMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTitleClick", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useTitleClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOptionMenuClick", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useOptionMenuClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePopMenuClick", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["usePopMenuClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePullIntercept", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["usePullIntercept"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageEvent", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["usePageEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppEvent", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useAppEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppShow", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useAppShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppLaunch", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useAppLaunch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppError", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useAppError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppHide", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useAppHide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppPageNotFound", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useAppPageNotFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppShareAppMessage", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useAppShareAppMessage"]; });









/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hostComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _hostComponents__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hostComponents__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hostComponents__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _api__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _api__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ 77:
/***/ (function(module, exports) {

module.exports = {};

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

module.exports = {};

/***/ })

},[[39,0,6,3]]]);