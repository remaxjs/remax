require('./../runtime.js');
require('./../packageA/pages/index.wxss.js');
require('./index.wxss.js');
require('./../app~packageA/pages/index~pages/index.js');
require('./../packageA/pages/index~pages/index.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[6],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

module.exports = react-reconciler;

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports = scheduler;

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

module.exports = react;

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(41);


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57);
/* harmony import */ var _components_C__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(104);
/* harmony import */ var _api_chooseImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(146);
/* harmony import */ var _api_chooseImageMini__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(147);
/* harmony import */ var _api_chooseImageAlipay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(148);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(149);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_9__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }











var _page = function _page() {
  var _, _obj$a;

  var props = {};
  var TextElement = react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"]( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["Text"], null));

  function handleClick() {
    return _handleClick.apply(this, arguments);
  }

  function _handleClick() {
    _handleClick = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Object(_api_chooseImage__WEBPACK_IMPORTED_MODULE_6__["default"])();
              Object(_api_chooseImageMini__WEBPACK_IMPORTED_MODULE_7__["default"])();
              Object(_api_chooseImageAlipay__WEBPACK_IMPORTED_MODULE_8__["default"])();
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_9___default.a['page-index']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_components_C__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "b"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], _extends({
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    id: "view",
    "data-foo": "bar"
  }, props), "foo", obj === null || obj === void 0 ? void 0 : (_obj$a = obj.a) === null || _obj$a === void 0 ? void 0 : _obj$a.b, value), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_4__["FunctionalPageNavigator"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](UnBindingComponent, null), TextElement);
};

/* harmony default export */ __webpack_exports__["default"] = (Page(Object(remax__WEBPACK_IMPORTED_MODULE_1__["createPageConfig"])(_page)));

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = regenerator-runtime;

/***/ }),
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["View"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Textarea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Video"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Swiper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["ScrollView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwiperItem", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["SwiperItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableView", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["MovableView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableArea", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["MovableArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverView", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["CoverView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverImage", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["CoverImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Icon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["RichText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Progress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["CheckboxGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Checkbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Form"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Picker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerView", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["PickerView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerViewColumn", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["PickerViewColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["RadioGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Radio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Slider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Switch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Navigator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivePlayer", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["LivePlayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivePusher", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["LivePusher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Canvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenData", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["OpenData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OfficialAccount", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["OfficialAccount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Editor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Audio", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Audio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ad", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Ad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["WebView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionalPageNavigator", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["FunctionalPageNavigator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Camera"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAppStub", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getAppStub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canIUse", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["canIUse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "base64ToArrayBuffer", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["base64ToArrayBuffer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayBufferToBase64", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["arrayBufferToBase64"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSystemInfoSync", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getSystemInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSystemInfo", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getSystemInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUpdateManager", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getUpdateManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLaunchOptionsSync", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getLaunchOptionsSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onPageNotFound", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onPageNotFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onError", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAudioInterruptionEnd", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onAudioInterruptionEnd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAppShow", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onAppShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAppHide", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onAppHide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offPageNotFound", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offPageNotFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offError", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAudioInterruptionEnd", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offAudioInterruptionEnd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAudioInterruptionBegin", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offAudioInterruptionBegin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAppShow", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offAppShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAppHide", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offAppHide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setEnableDebug", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setEnableDebug"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLogManager", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getLogManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchTab", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["switchTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reLaunch", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["reLaunch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["redirectTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["navigateTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBack", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["navigateBack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showToast", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["showToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["showModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showLoading", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["showLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showActionSheet", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["showActionSheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideToast", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["hideToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["hideLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showNavigationBarLoading", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["showNavigationBarLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setNavigationBarTitle", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setNavigationBarTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setNavigationBarColor", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setNavigationBarColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideNavigationBarLoading", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["hideNavigationBarLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBackgroundTextStyle", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setBackgroundTextStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBackgroundColor", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setBackgroundColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showTabBarRedDot", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["showTabBarRedDot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showTabBar", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["showTabBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarStyle", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setTabBarStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarItem", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setTabBarItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarBadge", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setTabBarBadge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeTabBarBadge", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["removeTabBarBadge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideTabBarRedDot", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["hideTabBarRedDot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideTabBar", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["hideTabBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadFontFace", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["loadFontFace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopPullDownRefresh", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopPullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startPullDownRefresh", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startPullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pageScrollTo", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["pageScrollTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAnimation", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTopBarText", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setTopBarText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["nextTick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMenuButtonBoundingClientRect", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getMenuButtonBoundingClientRect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onWindowResize", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onWindowResize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offWindowResize", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offWindowResize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onKeyboardHeightChange", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onKeyboardHeightChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedTextRange", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getSelectedTextRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "request", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["request"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["downloadFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["uploadFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendSocketMessage", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["sendSocketMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketOpen", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onSocketOpen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketMessage", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onSocketMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketError", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onSocketError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketClose", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onSocketClose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectSocket", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["connectSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeSocket", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["closeSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopLocalServiceDiscovery", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopLocalServiceDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startLocalServiceDiscovery", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startLocalServiceDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceResolveFail", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onLocalServiceResolveFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceLost", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onLocalServiceLost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceFound", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onLocalServiceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceDiscoveryStop", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onLocalServiceDiscoveryStop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceResolveFail", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offLocalServiceResolveFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceLost", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offLocalServiceLost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceFound", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offLocalServiceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceDiscoveryStop", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offLocalServiceDiscoveryStop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createUDPSocket", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createUDPSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStorageSync", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStorage", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeStorageSync", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["removeStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeStorage", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["removeStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageSync", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageInfoSync", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getStorageInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageInfo", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getStorageInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorage", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearStorageSync", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["clearStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearStorage", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["clearStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMapContext", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createMapContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveImageToPhotosAlbum", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["saveImageToPhotosAlbum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "previewImage", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["previewImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImageInfo", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getImageInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compressImage", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["compressImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseMessageFile", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["chooseMessageFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseImage", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["chooseImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveVideoToPhotosAlbum", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["saveVideoToPhotosAlbum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createVideoContext", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createVideoContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseVideo", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["chooseVideo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopVoice", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopVoice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setInnerAudioOption", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setInnerAudioOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "playVoice", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["playVoice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pauseVoice", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["pauseVoice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAvailableAudioSources", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getAvailableAudioSources"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInnerAudioContext", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createInnerAudioContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAudioContext", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createAudioContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopBackgroundAudio", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopBackgroundAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seekBackgroundAudio", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["seekBackgroundAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "playBackgroundAudio", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["playBackgroundAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pauseBackgroundAudio", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["pauseBackgroundAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioStop", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onBackgroundAudioStop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioPlay", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onBackgroundAudioPlay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioPause", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onBackgroundAudioPause"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBackgroundAudioPlayerState", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getBackgroundAudioPlayerState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBackgroundAudioManager", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getBackgroundAudioManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLivePusherContext", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createLivePusherContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLivePlayerContext", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createLivePlayerContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopRecord", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopRecord"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startRecord", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startRecord"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRecorderManager", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getRecorderManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCameraContext", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createCameraContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopLocationUpdate", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopLocationUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startLocationUpdateBackground", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startLocationUpdateBackground"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startLocationUpdate", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startLocationUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openLocation", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["openLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocationChange", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onLocationChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseLocation", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["chooseLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateShareMenu", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["updateShareMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showShareMenu", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["showShareMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideShareMenu", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["hideShareMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShareInfo", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getShareInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createOffscreenCanvas", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createOffscreenCanvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCanvasContext", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createCanvasContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canvasToTempFilePath", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["canvasToTempFilePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canvasPutImageData", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["canvasPutImageData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canvasGetImageData", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["canvasGetImageData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveFile", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["saveFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeSavedFile", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["removeSavedFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openDocument", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["openDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSavedFileList", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getSavedFileList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSavedFileInfo", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getSavedFileInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFileSystemManager", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getFileSystemManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFileInfo", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getFileInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "login", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkSession", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["checkSession"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateToMiniProgram", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["navigateToMiniProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBackMiniProgram", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["navigateBackMiniProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAccountInfoSync", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getAccountInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getUserInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reportMonitor", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["reportMonitor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reportAnalytics", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["reportAnalytics"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestPayment", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["requestPayment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authorize", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["authorize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openSetting", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["openSetting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSetting", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getSetting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseAddress", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["chooseAddress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openCard", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["openCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCard", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["addCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseInvoiceTitle", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["chooseInvoiceTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseInvoice", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["chooseInvoice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startSoterAuthentication", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startSoterAuthentication"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkIsSupportSoterAuthentication", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["checkIsSupportSoterAuthentication"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkIsSoterEnrolledInDevice", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["checkIsSoterEnrolledInDevice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWeRunData", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getWeRunData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopBeaconDiscovery", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopBeaconDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startBeaconDiscovery", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startBeaconDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeaconUpdate", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onBeaconUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeaconServiceChange", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onBeaconServiceChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBeacons", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getBeacons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopWifi", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopWifi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startWifi", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startWifi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setWifiList", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setWifiList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onWifiConnected", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onWifiConnected"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onGetWifiList", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onGetWifiList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWifiList", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getWifiList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConnectedWifi", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getConnectedWifi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectWifi", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["connectWifi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPhoneContact", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["addPhoneContact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "writeBLECharacteristicValue", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["writeBLECharacteristicValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readBLECharacteristicValue", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["readBLECharacteristicValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBLEConnectionStateChange", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onBLEConnectionStateChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBLECharacteristicValueChange", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onBLECharacteristicValueChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notifyBLECharacteristicValueChange", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["notifyBLECharacteristicValueChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceServices", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getBLEDeviceServices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceCharacteristics", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getBLEDeviceCharacteristics"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBLEConnection", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createBLEConnection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeBLEConnection", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["closeBLEConnection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopBluetoothDevicesDiscovery", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopBluetoothDevicesDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startBluetoothDevicesDiscovery", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startBluetoothDevicesDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openBluetoothAdapter", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["openBluetoothAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBluetoothDeviceFound", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onBluetoothDeviceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBluetoothAdapterStateChange", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onBluetoothAdapterStateChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConnectedBluetoothDevices", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getConnectedBluetoothDevices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBluetoothDevices", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getBluetoothDevices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBluetoothAdapterState", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getBluetoothAdapterState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeBluetoothAdapter", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["closeBluetoothAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfoSync", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getBatteryInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfo", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getBatteryInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setClipboardData", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setClipboardData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClipboardData", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getClipboardData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopHCE", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopHCE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startHCE", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startHCE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendHCEMessage", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["sendHCEMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onHCEMessage", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onHCEMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHCEState", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getHCEState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onNetworkStatusChange", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onNetworkStatusChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNetworkType", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getNetworkType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setScreenBrightness", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setScreenBrightness"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setKeepScreenOn", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setKeepScreenOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onUserCaptureScreen", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onUserCaptureScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScreenBrightness", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getScreenBrightness"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makePhoneCall", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["makePhoneCall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopAccelerometer", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopAccelerometer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startAccelerometer", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startAccelerometer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAccelerometerChange", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onAccelerometerChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopCompass", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopCompass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startCompass", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startCompass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onCompassChange", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onCompassChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopDeviceMotionListening", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopDeviceMotionListening"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startDeviceMotionListening", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startDeviceMotionListening"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onDeviceMotionChange", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onDeviceMotionChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopGyroscope", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopGyroscope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startGyroscope", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startGyroscope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onGyroscopeChange", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onGyroscopeChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onMemoryWarning", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onMemoryWarning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scanCode", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["scanCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrateShort", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["vibrateShort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrateLong", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["vibrateLong"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createWorker", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createWorker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getExtConfigSync", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getExtConfigSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getExtConfig", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getExtConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorQuery", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createSelectorQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createIntersectionObserver", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createIntersectionObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRewardedVideoAd", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createRewardedVideoAd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInterstitialAd", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createInterstitialAd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloud", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["cloud"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestSubscribeMessage", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["requestSubscribeMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideHomeButton", function() { return remax_wechat__WEBPACK_IMPORTED_MODULE_0__["hideHomeButton"]; });

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
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hostComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["View"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Textarea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Video"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Swiper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["ScrollView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwiperItem", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["SwiperItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["MovableView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableArea", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["MovableArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["CoverView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverImage", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["CoverImage"]; });

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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivePlayer", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["LivePlayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivePusher", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["LivePusher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Canvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenData", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["OpenData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OfficialAccount", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["OfficialAccount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Editor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Audio", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Audio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ad", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Ad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["WebView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionalPageNavigator", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["FunctionalPageNavigator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Camera"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(102);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAppStub", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getAppStub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canIUse", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["canIUse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "base64ToArrayBuffer", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["base64ToArrayBuffer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayBufferToBase64", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["arrayBufferToBase64"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSystemInfoSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSystemInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSystemInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSystemInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUpdateManager", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getUpdateManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLaunchOptionsSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getLaunchOptionsSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onPageNotFound", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onPageNotFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onError", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAudioInterruptionEnd", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onAudioInterruptionEnd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAppShow", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onAppShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAppHide", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onAppHide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offPageNotFound", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offPageNotFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offError", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAudioInterruptionEnd", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offAudioInterruptionEnd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAudioInterruptionBegin", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offAudioInterruptionBegin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAppShow", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offAppShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAppHide", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offAppHide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setEnableDebug", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setEnableDebug"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLogManager", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getLogManager"]; });

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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showNavigationBarLoading", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showNavigationBarLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setNavigationBarTitle", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setNavigationBarTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setNavigationBarColor", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setNavigationBarColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideNavigationBarLoading", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideNavigationBarLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBackgroundTextStyle", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setBackgroundTextStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBackgroundColor", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setBackgroundColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showTabBarRedDot", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showTabBarRedDot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showTabBar", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showTabBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarStyle", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setTabBarStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarItem", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setTabBarItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarBadge", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setTabBarBadge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeTabBarBadge", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["removeTabBarBadge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideTabBarRedDot", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideTabBarRedDot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideTabBar", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideTabBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadFontFace", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["loadFontFace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopPullDownRefresh", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopPullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startPullDownRefresh", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startPullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pageScrollTo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["pageScrollTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAnimation", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTopBarText", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setTopBarText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["nextTick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMenuButtonBoundingClientRect", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getMenuButtonBoundingClientRect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onWindowResize", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onWindowResize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offWindowResize", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offWindowResize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onKeyboardHeightChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onKeyboardHeightChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedTextRange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSelectedTextRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "request", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["request"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["downloadFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["uploadFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendSocketMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["sendSocketMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketOpen", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onSocketOpen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onSocketMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketError", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onSocketError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketClose", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onSocketClose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectSocket", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["connectSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeSocket", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["closeSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopLocalServiceDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopLocalServiceDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startLocalServiceDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startLocalServiceDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceResolveFail", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onLocalServiceResolveFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceLost", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onLocalServiceLost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceFound", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onLocalServiceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceDiscoveryStop", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onLocalServiceDiscoveryStop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceResolveFail", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offLocalServiceResolveFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceLost", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offLocalServiceLost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceFound", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offLocalServiceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceDiscoveryStop", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offLocalServiceDiscoveryStop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createUDPSocket", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createUDPSocket"]; });

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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMapContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createMapContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveImageToPhotosAlbum", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["saveImageToPhotosAlbum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "previewImage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["previewImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImageInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getImageInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compressImage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["compressImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseMessageFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseMessageFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseImage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveVideoToPhotosAlbum", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["saveVideoToPhotosAlbum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createVideoContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createVideoContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseVideo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseVideo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopVoice", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopVoice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setInnerAudioOption", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setInnerAudioOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "playVoice", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["playVoice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pauseVoice", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["pauseVoice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAvailableAudioSources", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getAvailableAudioSources"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInnerAudioContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createInnerAudioContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAudioContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createAudioContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopBackgroundAudio", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopBackgroundAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seekBackgroundAudio", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["seekBackgroundAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "playBackgroundAudio", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["playBackgroundAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pauseBackgroundAudio", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["pauseBackgroundAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioStop", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBackgroundAudioStop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioPlay", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBackgroundAudioPlay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioPause", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBackgroundAudioPause"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBackgroundAudioPlayerState", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBackgroundAudioPlayerState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBackgroundAudioManager", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBackgroundAudioManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLivePusherContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createLivePusherContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLivePlayerContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createLivePlayerContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopRecord", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopRecord"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startRecord", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startRecord"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRecorderManager", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getRecorderManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCameraContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createCameraContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopLocationUpdate", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopLocationUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startLocationUpdateBackground", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startLocationUpdateBackground"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startLocationUpdate", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startLocationUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openLocation", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocationChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onLocationChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseLocation", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateShareMenu", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["updateShareMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showShareMenu", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showShareMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideShareMenu", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideShareMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShareInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getShareInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createOffscreenCanvas", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createOffscreenCanvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCanvasContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createCanvasContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canvasToTempFilePath", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["canvasToTempFilePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canvasPutImageData", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["canvasPutImageData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canvasGetImageData", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["canvasGetImageData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["saveFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeSavedFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["removeSavedFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openDocument", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSavedFileList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSavedFileList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSavedFileInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSavedFileInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFileSystemManager", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getFileSystemManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFileInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getFileInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "login", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkSession", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["checkSession"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateToMiniProgram", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateToMiniProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBackMiniProgram", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateBackMiniProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAccountInfoSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getAccountInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getUserInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reportMonitor", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["reportMonitor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reportAnalytics", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["reportAnalytics"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestPayment", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["requestPayment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authorize", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["authorize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openSetting", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openSetting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSetting", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSetting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseAddress", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseAddress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openCard", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCard", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["addCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseInvoiceTitle", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseInvoiceTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseInvoice", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseInvoice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startSoterAuthentication", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startSoterAuthentication"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkIsSupportSoterAuthentication", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["checkIsSupportSoterAuthentication"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkIsSoterEnrolledInDevice", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["checkIsSoterEnrolledInDevice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWeRunData", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getWeRunData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopBeaconDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopBeaconDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startBeaconDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startBeaconDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeaconUpdate", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBeaconUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeaconServiceChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBeaconServiceChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBeacons", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBeacons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopWifi", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopWifi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startWifi", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startWifi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setWifiList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setWifiList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onWifiConnected", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onWifiConnected"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onGetWifiList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onGetWifiList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWifiList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getWifiList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConnectedWifi", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getConnectedWifi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectWifi", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["connectWifi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPhoneContact", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["addPhoneContact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "writeBLECharacteristicValue", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["writeBLECharacteristicValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readBLECharacteristicValue", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["readBLECharacteristicValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBLEConnectionStateChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBLEConnectionStateChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBLECharacteristicValueChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBLECharacteristicValueChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notifyBLECharacteristicValueChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["notifyBLECharacteristicValueChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceServices", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBLEDeviceServices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceCharacteristics", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBLEDeviceCharacteristics"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBLEConnection", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createBLEConnection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeBLEConnection", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["closeBLEConnection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopBluetoothDevicesDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopBluetoothDevicesDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startBluetoothDevicesDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startBluetoothDevicesDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openBluetoothAdapter", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openBluetoothAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBluetoothDeviceFound", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBluetoothDeviceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBluetoothAdapterStateChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBluetoothAdapterStateChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConnectedBluetoothDevices", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getConnectedBluetoothDevices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBluetoothDevices", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBluetoothDevices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBluetoothAdapterState", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBluetoothAdapterState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeBluetoothAdapter", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["closeBluetoothAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfoSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBatteryInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBatteryInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setClipboardData", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setClipboardData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClipboardData", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getClipboardData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopHCE", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopHCE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startHCE", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startHCE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendHCEMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["sendHCEMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onHCEMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onHCEMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHCEState", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getHCEState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onNetworkStatusChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onNetworkStatusChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNetworkType", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getNetworkType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setScreenBrightness", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setScreenBrightness"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setKeepScreenOn", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setKeepScreenOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onUserCaptureScreen", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onUserCaptureScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScreenBrightness", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getScreenBrightness"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makePhoneCall", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["makePhoneCall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopAccelerometer", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopAccelerometer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startAccelerometer", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startAccelerometer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAccelerometerChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onAccelerometerChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopCompass", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopCompass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startCompass", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startCompass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onCompassChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onCompassChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopDeviceMotionListening", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopDeviceMotionListening"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startDeviceMotionListening", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startDeviceMotionListening"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onDeviceMotionChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onDeviceMotionChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopGyroscope", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopGyroscope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startGyroscope", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startGyroscope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onGyroscopeChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onGyroscopeChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onMemoryWarning", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onMemoryWarning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scanCode", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["scanCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrateShort", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["vibrateShort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrateLong", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["vibrateLong"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createWorker", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createWorker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getExtConfigSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getExtConfigSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getExtConfig", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getExtConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorQuery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createSelectorQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createIntersectionObserver", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createIntersectionObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRewardedVideoAd", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createRewardedVideoAd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInterstitialAd", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createInterstitialAd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloud", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["cloud"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestSubscribeMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["requestSubscribeMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideHomeButton", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideHomeButton"]; });




/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _View__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _Textarea__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return _Video__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return _Swiper__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _ScrollView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return _ScrollView__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _SwiperItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwiperItem", function() { return _SwiperItem__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _MovableView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableView", function() { return _MovableView__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _MovableArea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableArea", function() { return _MovableArea__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _CoverView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(70);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverView", function() { return _CoverView__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _CoverImage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverImage", function() { return _CoverImage__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _Icon__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _Text__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _RichText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(74);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return _RichText__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Progress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(75);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _Progress__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(76);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _CheckboxGroup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(77);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return _CheckboxGroup__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(78);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _Checkbox__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(79);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _Form__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(80);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _Label__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Picker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(81);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _Picker__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _PickerView__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(82);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerView", function() { return _PickerView__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _PickerViewColumn__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(83);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerViewColumn", function() { return _PickerViewColumn__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _RadioGroup__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(84);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return _RadioGroup__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(85);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _Radio__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(86);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _Slider__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(87);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _Switch__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Navigator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(88);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return _Navigator__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(89);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _Image__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _LivePlayer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(90);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivePlayer", function() { return _LivePlayer__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _LivePusher__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(91);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivePusher", function() { return _LivePusher__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(92);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return _Map__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(93);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return _Canvas__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _OpenData__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(94);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenData", function() { return _OpenData__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _OfficialAccount__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(95);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OfficialAccount", function() { return _OfficialAccount__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(96);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return _Editor__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Audio__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(97);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Audio", function() { return _Audio__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Ad__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(98);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ad", function() { return _Ad__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _WebView__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(99);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return _WebView__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _FunctionalPageNavigator__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(100);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionalPageNavigator", function() { return _FunctionalPageNavigator__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(101);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _Camera__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* empty/unused harmony star reexport */


















































































/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('view'));

/***/ }),
/* 61 */
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


function createHostComponent(name, component) {
  if (component) {
    return component;
  }

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
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

var Input = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('input');
Input.defaultProps = {
  type: 'text',
  maxlength: 140,
  selectionEnd: 999,
  selectionStart: 999
};
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

var Textarea = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('textarea');
Textarea.defaultProps = {
  maxlength: -1,
  selectionEnd: 999,
  selectionStart: 999,
  fixed: false
};
/* harmony default export */ __webpack_exports__["default"] = (Textarea);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
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

  var videoProps = __assign(__assign({}, restProps), {
    ref: ref
  });

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](hostComponentName, videoProps, children);
};
/**
 * video 默认宽度 300px、高度 225px，可通过 wxss 设置宽高
 */


var Video = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](VideoRender);
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
/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_1__["default"])(hostComponentName, Video));

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

var hostComponentName = 'swiper';
var Swiper = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])(hostComponentName);
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
/* harmony default export */ __webpack_exports__["default"] = (Swiper);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
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
      restProps = __rest(props, ["children", "scrollTop", "onScroll"]);

  var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](scrollTop), 2),
      innerScrollTop = _a[0],
      forceUpdateScrollTop = _a[1];

  var scrollTopRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](innerScrollTop);

  function handleScroll(event) {
    var _a;

    scrollTopRef.current = (_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.scrollTop;

    if (typeof onScroll === 'function') {
      onScroll(event);
    }
  }

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    scrollTopRef.current = scrollTop;
    forceUpdateScrollTop(scrollTop);
  }, [scrollTop]);

  var scrollViewProps = __assign(__assign({}, restProps), {
    onScroll: handleScroll,
    scrollTop: scrollTopRef.current,
    ref: ref
  });

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](componentName, scrollViewProps, children);
};

var ScrollView = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](ScrollViewRender);
ScrollView.defaultProps = {
  upperThreshold: 50,
  lowerThreshold: 50
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_1__["default"])(componentName, ScrollView));

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('swiper-item'));

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('movable-view'));

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('movable-area'));

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('cover-view'));

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('cover-image'));

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('icon'));

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('text'));

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('rich-text'));

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('progress'));

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('button'));

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('checkbox-group'));

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('checkbox'));

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('form'));

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('label'));

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('picker'));

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

var PickerView = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('picker-view');
/* harmony default export */ __webpack_exports__["default"] = (PickerView);

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('picker-view-column'));

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('radio-group'));

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('radio'));

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

var Slider = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('slider');
Slider.defaultProps = {
  blockSize: 28,
  step: 1,
  max: 100
};
/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('switch'));

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

var Navigator = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('navigator');
Navigator.defaultProps = {
  openType: 'navigate'
};
/* harmony default export */ __webpack_exports__["default"] = (Navigator);

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('image'));

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('live-player'));

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('live-pusher'));

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('map'));

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('canvas'));

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('open-data'));

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('official-account'));

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('editor'));

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
 // 微信已不再维护

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('audio'));

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('ad'));

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('web-view'));

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('functional-page-navigator'));

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('camera'));

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppStub", function() { return getAppStub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canIUse", function() { return canIUse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64ToArrayBuffer", function() { return base64ToArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayBufferToBase64", function() { return arrayBufferToBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSystemInfoSync", function() { return getSystemInfoSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSystemInfo", function() { return getSystemInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUpdateManager", function() { return getUpdateManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLaunchOptionsSync", function() { return getLaunchOptionsSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onPageNotFound", function() { return onPageNotFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onError", function() { return onError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAudioInterruptionEnd", function() { return onAudioInterruptionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAppShow", function() { return onAppShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAppHide", function() { return onAppHide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offPageNotFound", function() { return offPageNotFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offError", function() { return offError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offAudioInterruptionEnd", function() { return offAudioInterruptionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offAudioInterruptionBegin", function() { return offAudioInterruptionBegin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offAppShow", function() { return offAppShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offAppHide", function() { return offAppHide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEnableDebug", function() { return setEnableDebug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLogManager", function() { return getLogManager; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showNavigationBarLoading", function() { return showNavigationBarLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNavigationBarTitle", function() { return setNavigationBarTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNavigationBarColor", function() { return setNavigationBarColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideNavigationBarLoading", function() { return hideNavigationBarLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBackgroundTextStyle", function() { return setBackgroundTextStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBackgroundColor", function() { return setBackgroundColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTabBarRedDot", function() { return showTabBarRedDot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTabBar", function() { return showTabBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTabBarStyle", function() { return setTabBarStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTabBarItem", function() { return setTabBarItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTabBarBadge", function() { return setTabBarBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTabBarBadge", function() { return removeTabBarBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideTabBarRedDot", function() { return hideTabBarRedDot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideTabBar", function() { return hideTabBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFontFace", function() { return loadFontFace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopPullDownRefresh", function() { return stopPullDownRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startPullDownRefresh", function() { return startPullDownRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageScrollTo", function() { return pageScrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAnimation", function() { return createAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTopBarText", function() { return setTopBarText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return nextTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenuButtonBoundingClientRect", function() { return getMenuButtonBoundingClientRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onWindowResize", function() { return onWindowResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offWindowResize", function() { return offWindowResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onKeyboardHeightChange", function() { return onKeyboardHeightChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedTextRange", function() { return getSelectedTextRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return downloadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return uploadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendSocketMessage", function() { return sendSocketMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSocketOpen", function() { return onSocketOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSocketMessage", function() { return onSocketMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSocketError", function() { return onSocketError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSocketClose", function() { return onSocketClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectSocket", function() { return connectSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeSocket", function() { return closeSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopLocalServiceDiscovery", function() { return stopLocalServiceDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startLocalServiceDiscovery", function() { return startLocalServiceDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceResolveFail", function() { return onLocalServiceResolveFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceLost", function() { return onLocalServiceLost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceFound", function() { return onLocalServiceFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceDiscoveryStop", function() { return onLocalServiceDiscoveryStop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceResolveFail", function() { return offLocalServiceResolveFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceLost", function() { return offLocalServiceLost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceFound", function() { return offLocalServiceFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceDiscoveryStop", function() { return offLocalServiceDiscoveryStop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUDPSocket", function() { return createUDPSocket; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMapContext", function() { return createMapContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveImageToPhotosAlbum", function() { return saveImageToPhotosAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previewImage", function() { return previewImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageInfo", function() { return getImageInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compressImage", function() { return compressImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseMessageFile", function() { return chooseMessageFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseImage", function() { return chooseImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveVideoToPhotosAlbum", function() { return saveVideoToPhotosAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVideoContext", function() { return createVideoContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseVideo", function() { return chooseVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopVoice", function() { return stopVoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInnerAudioOption", function() { return setInnerAudioOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playVoice", function() { return playVoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pauseVoice", function() { return pauseVoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAvailableAudioSources", function() { return getAvailableAudioSources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInnerAudioContext", function() { return createInnerAudioContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAudioContext", function() { return createAudioContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopBackgroundAudio", function() { return stopBackgroundAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seekBackgroundAudio", function() { return seekBackgroundAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playBackgroundAudio", function() { return playBackgroundAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pauseBackgroundAudio", function() { return pauseBackgroundAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioStop", function() { return onBackgroundAudioStop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioPlay", function() { return onBackgroundAudioPlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioPause", function() { return onBackgroundAudioPause; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBackgroundAudioPlayerState", function() { return getBackgroundAudioPlayerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBackgroundAudioManager", function() { return getBackgroundAudioManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLivePusherContext", function() { return createLivePusherContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLivePlayerContext", function() { return createLivePlayerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopRecord", function() { return stopRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startRecord", function() { return startRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecorderManager", function() { return getRecorderManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCameraContext", function() { return createCameraContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopLocationUpdate", function() { return stopLocationUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startLocationUpdateBackground", function() { return startLocationUpdateBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startLocationUpdate", function() { return startLocationUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openLocation", function() { return openLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLocationChange", function() { return onLocationChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseLocation", function() { return chooseLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateShareMenu", function() { return updateShareMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showShareMenu", function() { return showShareMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideShareMenu", function() { return hideShareMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShareInfo", function() { return getShareInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOffscreenCanvas", function() { return createOffscreenCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCanvasContext", function() { return createCanvasContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasToTempFilePath", function() { return canvasToTempFilePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasPutImageData", function() { return canvasPutImageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasGetImageData", function() { return canvasGetImageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveFile", function() { return saveFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeSavedFile", function() { return removeSavedFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openDocument", function() { return openDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedFileList", function() { return getSavedFileList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedFileInfo", function() { return getSavedFileInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFileSystemManager", function() { return getFileSystemManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFileInfo", function() { return getFileInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSession", function() { return checkSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateToMiniProgram", function() { return navigateToMiniProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateBackMiniProgram", function() { return navigateBackMiniProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccountInfoSync", function() { return getAccountInfoSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportMonitor", function() { return reportMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportAnalytics", function() { return reportAnalytics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestPayment", function() { return requestPayment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authorize", function() { return authorize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSetting", function() { return openSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetting", function() { return getSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseAddress", function() { return chooseAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCard", function() { return openCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCard", function() { return addCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseInvoiceTitle", function() { return chooseInvoiceTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseInvoice", function() { return chooseInvoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startSoterAuthentication", function() { return startSoterAuthentication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIsSupportSoterAuthentication", function() { return checkIsSupportSoterAuthentication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIsSoterEnrolledInDevice", function() { return checkIsSoterEnrolledInDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeRunData", function() { return getWeRunData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopBeaconDiscovery", function() { return stopBeaconDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startBeaconDiscovery", function() { return startBeaconDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBeaconUpdate", function() { return onBeaconUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBeaconServiceChange", function() { return onBeaconServiceChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBeacons", function() { return getBeacons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopWifi", function() { return stopWifi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startWifi", function() { return startWifi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWifiList", function() { return setWifiList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onWifiConnected", function() { return onWifiConnected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onGetWifiList", function() { return onGetWifiList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWifiList", function() { return getWifiList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConnectedWifi", function() { return getConnectedWifi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectWifi", function() { return connectWifi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPhoneContact", function() { return addPhoneContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeBLECharacteristicValue", function() { return writeBLECharacteristicValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readBLECharacteristicValue", function() { return readBLECharacteristicValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBLEConnectionStateChange", function() { return onBLEConnectionStateChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBLECharacteristicValueChange", function() { return onBLECharacteristicValueChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyBLECharacteristicValueChange", function() { return notifyBLECharacteristicValueChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceServices", function() { return getBLEDeviceServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceCharacteristics", function() { return getBLEDeviceCharacteristics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBLEConnection", function() { return createBLEConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeBLEConnection", function() { return closeBLEConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopBluetoothDevicesDiscovery", function() { return stopBluetoothDevicesDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startBluetoothDevicesDiscovery", function() { return startBluetoothDevicesDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openBluetoothAdapter", function() { return openBluetoothAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBluetoothDeviceFound", function() { return onBluetoothDeviceFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBluetoothAdapterStateChange", function() { return onBluetoothAdapterStateChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConnectedBluetoothDevices", function() { return getConnectedBluetoothDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBluetoothDevices", function() { return getBluetoothDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBluetoothAdapterState", function() { return getBluetoothAdapterState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeBluetoothAdapter", function() { return closeBluetoothAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfoSync", function() { return getBatteryInfoSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfo", function() { return getBatteryInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setClipboardData", function() { return setClipboardData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClipboardData", function() { return getClipboardData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopHCE", function() { return stopHCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startHCE", function() { return startHCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendHCEMessage", function() { return sendHCEMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onHCEMessage", function() { return onHCEMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHCEState", function() { return getHCEState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNetworkStatusChange", function() { return onNetworkStatusChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNetworkType", function() { return getNetworkType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setScreenBrightness", function() { return setScreenBrightness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setKeepScreenOn", function() { return setKeepScreenOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onUserCaptureScreen", function() { return onUserCaptureScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScreenBrightness", function() { return getScreenBrightness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePhoneCall", function() { return makePhoneCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopAccelerometer", function() { return stopAccelerometer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startAccelerometer", function() { return startAccelerometer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAccelerometerChange", function() { return onAccelerometerChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopCompass", function() { return stopCompass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startCompass", function() { return startCompass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onCompassChange", function() { return onCompassChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopDeviceMotionListening", function() { return stopDeviceMotionListening; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startDeviceMotionListening", function() { return startDeviceMotionListening; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDeviceMotionChange", function() { return onDeviceMotionChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopGyroscope", function() { return stopGyroscope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startGyroscope", function() { return startGyroscope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onGyroscopeChange", function() { return onGyroscopeChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMemoryWarning", function() { return onMemoryWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scanCode", function() { return scanCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vibrateShort", function() { return vibrateShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vibrateLong", function() { return vibrateLong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWorker", function() { return createWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExtConfigSync", function() { return getExtConfigSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExtConfig", function() { return getExtConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorQuery", function() { return createSelectorQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createIntersectionObserver", function() { return createIntersectionObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRewardedVideoAd", function() { return createRewardedVideoAd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInterstitialAd", function() { return createInterstitialAd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloud", function() { return cloud; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestSubscribeMessage", function() { return requestSubscribeMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideHomeButton", function() { return hideHomeButton; });
/* harmony import */ var _promisify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);

var getAppStub = getApp;
var canIUse = wx.canIUse;
var base64ToArrayBuffer = wx.base64ToArrayBuffer;
var arrayBufferToBase64 = wx.arrayBufferToBase64;
var getSystemInfoSync = wx.getSystemInfoSync;
var getSystemInfo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.getSystemInfo);
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
var setEnableDebug = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.setEnableDebug);
var getLogManager = wx.getLogManager;
var switchTab = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.switchTab);
var reLaunch = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.reLaunch);
var redirectTo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.redirectTo);
var navigateTo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.navigateTo);
var navigateBack = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.navigateBack);
var showToast = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.showToast);
var showModal = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.showModal);
var showLoading = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.showLoading);
var showActionSheet = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.showActionSheet);
var hideToast = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.hideToast);
var hideLoading = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.hideLoading);
var showNavigationBarLoading = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.showNavigationBarLoading);
var setNavigationBarTitle = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.setNavigationBarTitle);
var setNavigationBarColor = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.setNavigationBarColor);
var hideNavigationBarLoading = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.hideNavigationBarLoading);
var setBackgroundTextStyle = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.setBackgroundTextStyle);
var setBackgroundColor = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.setBackgroundColor);
var showTabBarRedDot = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.showTabBarRedDot);
var showTabBar = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.showTabBar);
var setTabBarStyle = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.setTabBarStyle);
var setTabBarItem = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.setTabBarItem);
var setTabBarBadge = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.setTabBarBadge);
var removeTabBarBadge = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.removeTabBarBadge);
var hideTabBarRedDot = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.hideTabBarRedDot);
var hideTabBar = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.hideTabBar);
var loadFontFace = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.loadFontFace);
var stopPullDownRefresh = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.stopPullDownRefresh);
var startPullDownRefresh = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.startPullDownRefresh);
var pageScrollTo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.pageScrollTo);
var createAnimation = wx.createAnimation;
var setTopBarText = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.setTopBarText);
var nextTick = wx.nextTick;
var getMenuButtonBoundingClientRect = wx.getMenuButtonBoundingClientRect;
var onWindowResize = wx.onWindowResize;
var offWindowResize = wx.offWindowResize;
var onKeyboardHeightChange = wx.onKeyboardHeightChange;
var getSelectedTextRange = wx.getSelectedTextRange;
var request = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.request);
var downloadFile = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.downloadFile);
var uploadFile = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.uploadFile);
var sendSocketMessage = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.sendSocketMessage);
var onSocketOpen = wx.onSocketOpen;
var onSocketMessage = wx.onSocketMessage;
var onSocketError = wx.onSocketError;
var onSocketClose = wx.onSocketClose;
var connectSocket = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.connectSocket);
var closeSocket = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.closeSocket);
var stopLocalServiceDiscovery = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.stopLocalServiceDiscovery);
var startLocalServiceDiscovery = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.startLocalServiceDiscovery);
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
var setStorage = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.setStorage);
var removeStorageSync = wx.removeStorageSync;
var removeStorage = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.removeStorage);
var getStorageSync = wx.getStorageSync;
var getStorageInfoSync = wx.getStorageInfoSync;
var getStorageInfo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.getStorageInfo);
var getStorage = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.getStorage);
var clearStorageSync = wx.clearStorageSync;
var clearStorage = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.clearStorage);
var createMapContext = wx.createMapContext;
var saveImageToPhotosAlbum = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.saveImageToPhotosAlbum);
var previewImage = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.previewImage);
var getImageInfo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.getImageInfo);
var compressImage = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.compressImage);
var chooseMessageFile = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.chooseMessageFile);
var chooseImage = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.chooseImage);
var saveVideoToPhotosAlbum = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.saveVideoToPhotosAlbum);
var createVideoContext = wx.createVideoContext;
var chooseVideo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.chooseVideo);
var stopVoice = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.stopVoice);
var setInnerAudioOption = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.setInnerAudioOption);
var playVoice = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.playVoice);
var pauseVoice = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.pauseVoice);
var getAvailableAudioSources = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.getAvailableAudioSources);
var createInnerAudioContext = wx.createInnerAudioContext;
var createAudioContext = wx.createAudioContext;
var stopBackgroundAudio = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.stopBackgroundAudio);
var seekBackgroundAudio = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.seekBackgroundAudio);
var playBackgroundAudio = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.playBackgroundAudio);
var pauseBackgroundAudio = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.pauseBackgroundAudio);
var onBackgroundAudioStop = wx.onBackgroundAudioStop;
var onBackgroundAudioPlay = wx.onBackgroundAudioPlay;
var onBackgroundAudioPause = wx.onBackgroundAudioPause;
var getBackgroundAudioPlayerState = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.getBackgroundAudioPlayerState);
var getBackgroundAudioManager = wx.getBackgroundAudioManager;
var createLivePusherContext = wx.createLivePusherContext;
var createLivePlayerContext = wx.createLivePlayerContext;
var stopRecord = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.stopRecord);
var startRecord = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.startRecord);
var getRecorderManager = wx.getRecorderManager;
var createCameraContext = wx.createCameraContext;
var stopLocationUpdate = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.stopLocationUpdate);
var startLocationUpdateBackground = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.startLocationUpdateBackground);
var startLocationUpdate = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.startLocationUpdate);
var openLocation = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.openLocation);
var onLocationChange = wx.onLocationChange;
var getLocation = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.getLocation);
var chooseLocation = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.chooseLocation);
var updateShareMenu = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.updateShareMenu);
var showShareMenu = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.showShareMenu);
var hideShareMenu = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.hideShareMenu);
var getShareInfo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.getShareInfo);
var createOffscreenCanvas = wx.createOffscreenCanvas;
var createCanvasContext = wx.createCanvasContext;
var canvasToTempFilePath = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.canvasToTempFilePath);
var canvasPutImageData = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.canvasPutImageData);
var canvasGetImageData = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.canvasGetImageData);
var saveFile = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.saveFile);
var removeSavedFile = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.removeSavedFile);
var openDocument = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.openDocument);
var getSavedFileList = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.getSavedFileList);
var getSavedFileInfo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.getSavedFileInfo);
var getFileSystemManager = wx.getFileSystemManager;
var getFileInfo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.getFileInfo);
var login = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.login);
var checkSession = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.checkSession);
var navigateToMiniProgram = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.navigateToMiniProgram);
var navigateBackMiniProgram = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.navigateBackMiniProgram);
var getAccountInfoSync = wx.getAccountInfoSync;
var getUserInfo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.getUserInfo);
var reportMonitor = wx.reportMonitor;
var reportAnalytics = wx.reportAnalytics;
var requestPayment = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.requestPayment);
var authorize = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.authorize);
var openSetting = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.openSetting);
var getSetting = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.getSetting);
var chooseAddress = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.chooseAddress);
var openCard = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.openCard);
var addCard = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.addCard);
var chooseInvoiceTitle = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.chooseInvoiceTitle);
var chooseInvoice = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.chooseInvoice);
var startSoterAuthentication = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.startSoterAuthentication);
var checkIsSupportSoterAuthentication = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.checkIsSupportSoterAuthentication);
var checkIsSoterEnrolledInDevice = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.checkIsSoterEnrolledInDevice);
var getWeRunData = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.getWeRunData);
var stopBeaconDiscovery = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.stopBeaconDiscovery);
var startBeaconDiscovery = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.startBeaconDiscovery);
var onBeaconUpdate = wx.onBeaconUpdate;
var onBeaconServiceChange = wx.onBeaconServiceChange;
var getBeacons = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.getBeacons);
var stopWifi = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.stopWifi);
var startWifi = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.startWifi);
var setWifiList = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.setWifiList);
var onWifiConnected = wx.onWifiConnected;
var onGetWifiList = wx.onGetWifiList;
var getWifiList = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.getWifiList);
var getConnectedWifi = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.getConnectedWifi);
var connectWifi = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.connectWifi);
var addPhoneContact = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.addPhoneContact);
var writeBLECharacteristicValue = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.writeBLECharacteristicValue);
var readBLECharacteristicValue = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.readBLECharacteristicValue);
var onBLEConnectionStateChange = wx.onBLEConnectionStateChange;
var onBLECharacteristicValueChange = wx.onBLECharacteristicValueChange;
var notifyBLECharacteristicValueChange = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.notifyBLECharacteristicValueChange);
var getBLEDeviceServices = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.getBLEDeviceServices);
var getBLEDeviceCharacteristics = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.getBLEDeviceCharacteristics);
var createBLEConnection = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.createBLEConnection);
var closeBLEConnection = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.closeBLEConnection);
var stopBluetoothDevicesDiscovery = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.stopBluetoothDevicesDiscovery);
var startBluetoothDevicesDiscovery = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.startBluetoothDevicesDiscovery);
var openBluetoothAdapter = wx.openBluetoothAdapter;
var onBluetoothDeviceFound = wx.onBluetoothDeviceFound;
var onBluetoothAdapterStateChange = wx.onBluetoothAdapterStateChange;
var getConnectedBluetoothDevices = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.getConnectedBluetoothDevices);
var getBluetoothDevices = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.getBluetoothDevices);
var getBluetoothAdapterState = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.getBluetoothAdapterState);
var closeBluetoothAdapter = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.closeBluetoothAdapter);
var getBatteryInfoSync = wx.getBatteryInfoSync;
var getBatteryInfo = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.getBatteryInfo);
var setClipboardData = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.setClipboardData);
var getClipboardData = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.getClipboardData);
var stopHCE = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.stopHCE);
var startHCE = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.startHCE);
var sendHCEMessage = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.sendHCEMessage);
var onHCEMessage = wx.onHCEMessage;
var getHCEState = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.getHCEState);
var onNetworkStatusChange = wx.onNetworkStatusChange;
var getNetworkType = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.getNetworkType);
var setScreenBrightness = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.setScreenBrightness);
var setKeepScreenOn = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.setKeepScreenOn);
var onUserCaptureScreen = wx.onUserCaptureScreen;
var getScreenBrightness = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.getScreenBrightness);
var makePhoneCall = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.makePhoneCall);
var stopAccelerometer = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.stopAccelerometer);
var startAccelerometer = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.startAccelerometer);
var onAccelerometerChange = wx.onAccelerometerChange;
var stopCompass = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.stopCompass);
var startCompass = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.startCompass);
var onCompassChange = wx.onCompassChange;
var stopDeviceMotionListening = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.stopDeviceMotionListening);
var startDeviceMotionListening = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.startDeviceMotionListening);
var onDeviceMotionChange = wx.onDeviceMotionChange;
var stopGyroscope = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.stopGyroscope);
var startGyroscope = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.startGyroscope);
var onGyroscopeChange = wx.onGyroscopeChange;
var onMemoryWarning = wx.onMemoryWarning;
var scanCode = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.scanCode);
var vibrateShort = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.vibrateShort);
var vibrateLong = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.vibrateLong);
var createWorker = wx.createWorker;
var getExtConfigSync = wx.getExtConfigSync;
var getExtConfig = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.getExtConfig);
var createSelectorQuery = wx.createSelectorQuery;
var createIntersectionObserver = wx.createIntersectionObserver;
var createRewardedVideoAd = wx.createRewardedVideoAd;
var createInterstitialAd = wx.createInterstitialAd;
var cloud = wx.cloud;
var requestSubscribeMessage = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.requestSubscribeMessage);
var hideHomeButton = Object(_promisify__WEBPACK_IMPORTED_MODULE_0__["default"])(wx.hideHomeButton);

/***/ }),
/* 103 */
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

/***/ }),
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {// ignore
});

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {// ignore
});

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {// ignore
});

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"page-index":"_1ZW9Y8KCrSK23n2M-ZMy7g"};

/***/ })
],[[40,0,3,2,5,8]]]);