(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([[8],Array(87).concat([
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hostComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["View"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Textarea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Video"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Swiper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["ScrollView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwiperItem", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["SwiperItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Icon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["RichText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Progress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["CheckboxGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Checkbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Form"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Picker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["PickerView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerViewColumn", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["PickerViewColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["RadioGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Radio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Slider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Switch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Navigator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Canvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["WebView"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(117);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAppStub", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getAppStub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canIUse", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["canIUse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSystemInfoSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSystemInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSystemInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSystemInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUpdateManager", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getUpdateManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLaunchOptionsSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getLaunchOptionsSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exitMiniProgram", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["exitMiniProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchTab", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["switchTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reLaunch", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["reLaunch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["redirectTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBack", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateBack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showToast", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showLoading", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showActionSheet", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showActionSheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideToast", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setNavigationBarTitle", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setNavigationBarTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopPullDownRefresh", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopPullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startPullDownRefresh", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startPullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pageScrollTo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["pageScrollTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAnimation", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "request", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["request"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["downloadFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["uploadFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectSocket", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["connectSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStorageSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStorage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeStorageSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["removeStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeStorage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["removeStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageInfoSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getStorageInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getStorageInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearStorageSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["clearStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearStorage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["clearStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveImageToPhotosAlbum", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["saveImageToPhotosAlbum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "previewImage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["previewImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImageInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getImageInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseImage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveVideoToPhotosAlbum", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["saveVideoToPhotosAlbum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createVideoContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createVideoContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseVideo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseVideo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openLocation", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showShareMenu", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showShareMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideShareMenu", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideShareMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateToVideoView", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateToVideoView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCanvasContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createCanvasContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["saveFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeSavedFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["removeSavedFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openDocument", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSavedFileList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSavedFileList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFileSystemManager", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getFileSystemManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFileInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getFileInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "login", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkSession", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["checkSession"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateToMiniProgram", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateToMiniProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBackMiniProgram", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateBackMiniProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getUserInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reportAnalytics", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["reportAnalytics"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestPayment", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["requestPayment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pay", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["pay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authorize", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["authorize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openSetting", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openSetting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSetting", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSetting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseAddress", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseAddress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setClipboardData", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setClipboardData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClipboardData", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getClipboardData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onNetworkStatusChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onNetworkStatusChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNetworkType", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getNetworkType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makePhoneCall", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["makePhoneCall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopAccelerometer", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopAccelerometer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startAccelerometer", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startAccelerometer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAccelerometerChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onAccelerometerChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopCompass", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopCompass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startCompass", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startCompass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onCompassChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onCompassChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scanCode", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["scanCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrateShort", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["vibrateShort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrateLong", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["vibrateLong"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getExtConfigSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getExtConfigSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getExtConfig", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getExtConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorQuery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createSelectorQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createIntersectionObserver", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createIntersectionObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRewardedVideoAd", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createRewardedVideoAd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConnectedWifi", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getConnectedWifi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setKeepScreenOn", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setKeepScreenOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMenuButtonLayout", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getMenuButtonLayout"]; });




/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _View__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _Textarea__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return _Video__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return _Swiper__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _ScrollView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return _ScrollView__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _SwiperItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwiperItem", function() { return _SwiperItem__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _Icon__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _Text__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _RichText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return _RichText__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Progress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(100);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _Progress__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(101);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _CheckboxGroup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(102);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return _CheckboxGroup__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(103);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _Checkbox__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(104);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _Form__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(105);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _Label__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Picker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(106);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _Picker__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _PickerView__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(107);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerView", function() { return _PickerView__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _PickerViewColumn__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(108);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerViewColumn", function() { return _PickerViewColumn__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _RadioGroup__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(109);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return _RadioGroup__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(110);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _Radio__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(111);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _Slider__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(112);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _Switch__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Navigator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(113);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return _Navigator__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(114);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _Image__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(115);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return _Canvas__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _WebView__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(116);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return _WebView__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* empty/unused harmony star reexport */






















































/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('view'));

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createHostComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](name, __assign(__assign({}, props), {
      ref: ref
    }), children);
  };

  return react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](Component);
}

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('input'));

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('textarea'));

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('video'));

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('swiper'));

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('scroll-view'));

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('swiper-item'));

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('icon'));

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('text'));

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('rich-text'));

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('progress'));

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('button'));

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('checkbox-group'));

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('checkbox'));

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('form'));

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('label'));

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('picker'));

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('picker-view'));

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('picker-view-column'));

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('radio-group'));

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('radio'));

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('slider'));

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('switch'));

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('navigator'));

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);

var Image = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('image');
/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('canvas'));

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('web-view'));

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppStub", function() { return getAppStub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canIUse", function() { return canIUse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSystemInfoSync", function() { return getSystemInfoSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSystemInfo", function() { return getSystemInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUpdateManager", function() { return getUpdateManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLaunchOptionsSync", function() { return getLaunchOptionsSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exitMiniProgram", function() { return exitMiniProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchTab", function() { return switchTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reLaunch", function() { return reLaunch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return redirectTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return navigateTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateBack", function() { return navigateBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showToast", function() { return showToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return showModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showLoading", function() { return showLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showActionSheet", function() { return showActionSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideToast", function() { return hideToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return hideLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNavigationBarTitle", function() { return setNavigationBarTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopPullDownRefresh", function() { return stopPullDownRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startPullDownRefresh", function() { return startPullDownRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageScrollTo", function() { return pageScrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAnimation", function() { return createAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return downloadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return uploadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectSocket", function() { return connectSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStorageSync", function() { return setStorageSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStorage", function() { return setStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeStorageSync", function() { return removeStorageSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeStorage", function() { return removeStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorageSync", function() { return getStorageSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorageInfoSync", function() { return getStorageInfoSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorageInfo", function() { return getStorageInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorage", function() { return getStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStorageSync", function() { return clearStorageSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStorage", function() { return clearStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveImageToPhotosAlbum", function() { return saveImageToPhotosAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previewImage", function() { return previewImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageInfo", function() { return getImageInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseImage", function() { return chooseImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveVideoToPhotosAlbum", function() { return saveVideoToPhotosAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVideoContext", function() { return createVideoContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseVideo", function() { return chooseVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openLocation", function() { return openLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showShareMenu", function() { return showShareMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideShareMenu", function() { return hideShareMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateToVideoView", function() { return navigateToVideoView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCanvasContext", function() { return createCanvasContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveFile", function() { return saveFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeSavedFile", function() { return removeSavedFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openDocument", function() { return openDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedFileList", function() { return getSavedFileList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFileSystemManager", function() { return getFileSystemManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFileInfo", function() { return getFileInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSession", function() { return checkSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateToMiniProgram", function() { return navigateToMiniProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateBackMiniProgram", function() { return navigateBackMiniProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportAnalytics", function() { return reportAnalytics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestPayment", function() { return requestPayment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pay", function() { return pay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authorize", function() { return authorize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSetting", function() { return openSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetting", function() { return getSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseAddress", function() { return chooseAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setClipboardData", function() { return setClipboardData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClipboardData", function() { return getClipboardData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNetworkStatusChange", function() { return onNetworkStatusChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNetworkType", function() { return getNetworkType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePhoneCall", function() { return makePhoneCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopAccelerometer", function() { return stopAccelerometer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startAccelerometer", function() { return startAccelerometer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAccelerometerChange", function() { return onAccelerometerChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopCompass", function() { return stopCompass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startCompass", function() { return startCompass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onCompassChange", function() { return onCompassChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scanCode", function() { return scanCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vibrateShort", function() { return vibrateShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vibrateLong", function() { return vibrateLong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExtConfigSync", function() { return getExtConfigSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExtConfig", function() { return getExtConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorQuery", function() { return createSelectorQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createIntersectionObserver", function() { return createIntersectionObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRewardedVideoAd", function() { return createRewardedVideoAd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConnectedWifi", function() { return getConnectedWifi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setKeepScreenOn", function() { return setKeepScreenOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenuButtonLayout", function() { return getMenuButtonLayout; });
/* harmony import */ var _promisify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(118);

var getAppStub = getApp;
var canIUse = tt.canIUse;
var getSystemInfoSync = tt.getSystemInfoSync;
var getSystemInfo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.getSystemInfo);
var getUpdateManager = tt.getUpdateManager;
var getLaunchOptionsSync = tt.getLaunchOptionsSync;
var exitMiniProgram = tt.exitMiniProgram;
var switchTab = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.switchTab);
var reLaunch = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.reLaunch);
var redirectTo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.redirectTo);
var navigateTo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.navigateTo);
var navigateBack = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.navigateBack);
var showToast = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.showToast);
var showModal = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.showModal);
var showLoading = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.showLoading);
var showActionSheet = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.showActionSheet);
var hideToast = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.hideToast);
var hideLoading = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.hideLoading);
var setNavigationBarTitle = tt.setNavigationBarTitle;
var stopPullDownRefresh = tt.stopPullDownRefresh;
var startPullDownRefresh = tt.startPullDownRefresh;
var pageScrollTo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.pageScrollTo);
var createAnimation = tt.createAnimation;
var request = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.request);
var downloadFile = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.downloadFile);
var uploadFile = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.uploadFile);
var connectSocket = tt.connectSocket;
var setStorageSync = tt.setStorageSync;
var setStorage = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.setStorage);
var removeStorageSync = tt.removeStorageSync;
var removeStorage = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.removeStorage);
var getStorageSync = tt.getStorageSync;
var getStorageInfoSync = tt.getStorageInfoSync;
var getStorageInfo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.getStorageInfo);
var getStorage = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.getStorage);
var clearStorageSync = tt.clearStorageSync;
var clearStorage = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.clearStorage);
var saveImageToPhotosAlbum = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.saveImageToPhotosAlbum);
var previewImage = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.previewImage);
var getImageInfo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.getImageInfo);
var chooseImage = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.chooseImage);
var saveVideoToPhotosAlbum = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.saveVideoToPhotosAlbum);
var createVideoContext = tt.createVideoContext;
var chooseVideo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.chooseVideo);
var openLocation = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.openLocation);
var getLocation = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.getLocation);
var showShareMenu = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.showShareMenu);
var hideShareMenu = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.hideShareMenu);
var navigateToVideoView = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.navigateToVideoView);
var createCanvasContext = tt.createCanvasContext;
var saveFile = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.saveFile);
var removeSavedFile = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.removeSavedFile);
var openDocument = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.openDocument);
var getSavedFileList = tt.getSavedFileList;
var getFileSystemManager = tt.getFileSystemManager;
var getFileInfo = tt.getFileInfo;
var login = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.login);
var checkSession = tt.checkSession;
var navigateToMiniProgram = tt.navigateToMiniProgram;
var navigateBackMiniProgram = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.navigateBackMiniProgram);
var getUserInfo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.getUserInfo);
var reportAnalytics = tt.reportAnalytics;
var requestPayment = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.requestPayment);
var pay = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.pay);
var authorize = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.authorize);
var openSetting = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.openSetting);
var getSetting = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.getSetting);
var chooseAddress = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.chooseAddress);
var setClipboardData = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.setClipboardData);
var getClipboardData = tt.getClipboardData;
var onNetworkStatusChange = tt.onNetworkStatusChange;
var getNetworkType = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.getNetworkType);
var makePhoneCall = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.makePhoneCall);
var stopAccelerometer = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.stopAccelerometer);
var startAccelerometer = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.startAccelerometer);
var onAccelerometerChange = tt.onAccelerometerChange;
var stopCompass = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.stopCompass);
var startCompass = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.startCompass);
var onCompassChange = tt.onCompassChange;
var scanCode = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.scanCode);
var vibrateShort = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.vibrateShort);
var vibrateLong = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.vibrateLong);
var getExtConfigSync = tt.getExtConfigSync;
var getExtConfig = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.getExtConfig);
var createSelectorQuery = tt.createSelectorQuery;
var createIntersectionObserver = tt.createIntersectionObserver;
var createRewardedVideoAd = tt.createRewardedVideoAd;
var getConnectedWifi = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.getConnectedWifi);
var setKeepScreenOn = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(tt.setKeepScreenOn);
var getMenuButtonLayout = tt.getMenuButtonLayout;

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

function promisify(api) {
  return function (arg) {
    if (arg === void 0) {
      arg = {};
    }

    return new Promise(function (resolve, reject) {
      var promisifyArg = arg;
      api(__assign(__assign({}, promisifyArg), {
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

/* harmony default export */ __webpack_exports__["default"] = (promisify);

/***/ })
])]);