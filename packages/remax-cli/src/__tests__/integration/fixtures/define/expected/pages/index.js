require('./../runtime.js');
(my["webpackJsonp"] = my["webpackJsonp"] || []).push([[2],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

module.exports = "@remax/runtime";

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "react";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_ali__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var remax_ali__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remax_ali__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_5__);







var _page = function _page() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_ali__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "foo"
  }, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_page, "pages/index")));

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "remax/ali";

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "button": {
    "alias": {
      "id": "id",
      "className": "class",
      "size": "size",
      "type": "type",
      "plain": "plain",
      "disabled": "disabled",
      "loading": "loading",
      "hoverClass": "hover-class",
      "hoverClassName": "hover-class",
      "hoverStartTime": "hover-start-time",
      "hoverStayTime": "hover-stay-time",
      "hoverStopPropagation": "hover-stop-propagation",
      "formType": "form-type",
      "openType": "open-type",
      "scope": "scope",
      "onClick": "onTap",
      "onTap": "onTap",
      "appParameter": "app-parameter",
      "publicId": "public-id"
    }
  },
  "canvas": {
    "alias": {
      "id": "id",
      "style": "style",
      "className": "class",
      "width": "width",
      "height": "height",
      "disableScroll": "disable-scroll",
      "onClick": "onTap",
      "onTap": "onTap",
      "onTouchStart": "onTouchStart",
      "onTouchMove": "onTouchMove",
      "onTouchEnd": "onTouchEnd",
      "onTouchCancel": "onTouchCancel",
      "onLongTap": "onLongTap",
      "onLongClick": "onLongTap"
    }
  },
  "checkbox-group": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "name": "name",
      "onChange": "onChange"
    }
  },
  "checkbox": {
    "alias": {
      "className": "class",
      "style": "style",
      "id": "id",
      "value": "value",
      "checked": "checked",
      "disabled": "disabled",
      "onChange": "onChange",
      "color": "color"
    }
  },
  "contact-button": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "tntInstId": "tnt-inst-id",
      "scene": "scene",
      "size": "size",
      "color": "color",
      "icon": "icon",
      "alipayCardNo": "alipay-card-no"
    }
  },
  "cover-image": {
    "alias": {
      "id": "id",
      "className": "class",
      "src": "src",
      "style": "style",
      "onClick": "onTap",
      "onTap": "onTap"
    }
  },
  "cover-view": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "onTap": "onTap",
      "onClick": "onTap"
    }
  },
  "form": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "reportSubmit": "report-submit",
      "onSubmit": "onSubmit",
      "onReset": "onReset"
    }
  },
  "icon": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "type": "type",
      "size": "size",
      "color": "color"
    }
  },
  "image": {
    "alias": {
      "id": "id",
      "src": "src",
      "mode": "mode",
      "className": "class",
      "style": "style",
      "lazyLoad": "lazy-load",
      "onLoad": "onLoad",
      "onError": "onError",
      "onTap": "onTap",
      "onTouchStart": "onTouchStart",
      "onTouchMove": "onTouchMove",
      "onTouchEnd": "onTouchEnd",
      "onTouchCancel": "onTouchCancel",
      "onClick": "onTap"
    }
  },
  "input": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "value": "value",
      "name": "name",
      "type": "type",
      "password": "password",
      "placeholder": "placeholder",
      "placeholderStyle": "placeholder-style",
      "placeholderClass": "placeholder-class",
      "placeholderClassName": "placeholder-class",
      "disabled": "disabled",
      "maxlength": "maxlength",
      "focus": "focus",
      "confirmType": "confirm-type",
      "confirmHold": "confirm-hold",
      "cursor": "cursor",
      "selectionStart": "selection-start",
      "selectionEnd": "selection-end",
      "randomNumber": "randomNumber",
      "controlled": "controlled",
      "enableNative": "enableNative",
      "onInput": "onInput",
      "onConfirm": "onConfirm",
      "onFocus": "onFocus",
      "onBlur": "onBlur"
    }
  },
  "label": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "for": "for"
    }
  },
  "lifestyle": {
    "alias": {
      "publicId": "public-id",
      "onFollow": "onFollow"
    }
  },
  "map": {
    "alias": {
      "id": "id",
      "style": "style",
      "className": "class",
      "latitude": "latitude",
      "longitude": "longitude",
      "scale": "scale",
      "markers": "markers",
      "polyline": "polyline",
      "circles": "circles",
      "controls": "controls",
      "polygon": "polygon",
      "showLocation": "show-location",
      "includePoints": "include-points",
      "includePadding": "include-padding",
      "groundOverlays": "ground-overlays",
      "tileOverlay": "tile-overlay",
      "setting": "setting",
      "onMarkerTap": "onMarkerTap",
      "onMarkerClick": "onMarkerTap",
      "onCalloutTap": "onCalloutTap",
      "onCalloutClick": "onCalloutTap",
      "onControlTap": "onControlTap",
      "onControlClick": "onControlTap",
      "onRegionChange": "onRegionChange",
      "onTap": "onTap",
      "onClick": "onTap"
    }
  },
  "movable-area": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "width": "width",
      "height": "height"
    }
  },
  "movable-view": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "direction": "direction",
      "width": "width",
      "height": "height",
      "x": "x",
      "y": "y",
      "disabled": "disabled",
      "onTouchStart": "onTouchStart",
      "onTouchMove": "onTouchMove",
      "onTouchEnd": "onTouchEnd",
      "onTouchCancel": "onTouchCancel",
      "onChange": "onChange",
      "onChangeEnd": "onChangeEnd"
    }
  },
  "navigator": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "openType": "open-type",
      "hoverClass": "hover-class",
      "hoverClassName": "hover-class",
      "hoverStartTime": "hover-start-time",
      "hoverStayTime": "hover-stay-time",
      "url": "url"
    }
  },
  "picker-view-column": {
    "alias": {}
  },
  "picker-view": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "value": "value",
      "indicatorStyle": "indicator-style",
      "indicatorClass": "indicator-class",
      "indicatorClassName": "indicator-class",
      "maskStyle": "mask-style",
      "maskClass": "mask-class",
      "maskClassName": "mask-class",
      "onChange": "onChange"
    }
  },
  "picker": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "range": "range",
      "rangeKey": "range-key",
      "value": "value",
      "onChange": "onChange",
      "disabled": "disabled"
    }
  },
  "progress": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "percent": "percent",
      "showInfo": "show-info",
      "strokeWidth": "stroke-width",
      "activeColor": "active-color",
      "backgroundColor": "background-color",
      "active": "active"
    }
  },
  "radio-group": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "onChange": "onChange",
      "name": "name"
    }
  },
  "radio": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "value": "value",
      "checked": "checked",
      "disabled": "disabled",
      "color": "color"
    }
  },
  "rich-text": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "nodes": "nodes",
      "onTap": "onTap",
      "onClick": "onTap",
      "onTouchStart": "onTouchStart",
      "onTouchMove": "onTouchMove",
      "onTouchEnd": "onTouchEnd",
      "onTouchCancel": "onTouchCancel",
      "onLongTap": "onLongTap",
      "onLongClick": "onLongTap"
    }
  },
  "scroll-view": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "scrollX": "scroll-x",
      "scrollY": "scroll-y",
      "upperThreshold": "upper-threshold",
      "lowerThreshold": "lower-threshold",
      "scrollTop": "scroll-top",
      "scrollLeft": "scroll-left",
      "scrollIntoView": "scroll-into-view",
      "scrollWithAnimation": "scroll-with-animation",
      "scrollAnimationDuration": "scroll-animation-duration",
      "enableBackToTop": "enable-back-to-top",
      "trapScroll": "trap-scroll",
      "onScrollToUpper": "onScrollToUpper",
      "onScrollToLower": "onScrollToLower",
      "onScroll": "onScroll",
      "onTouchStart": "onTouchStart",
      "onTouchMove": "onTouchMove",
      "onTouchEnd": "onTouchEnd",
      "onTouchCancel": "onTouchCancel"
    }
  },
  "slider": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "name": "name",
      "min": "min",
      "max": "max",
      "step": "step",
      "disabled": "disabled",
      "value": "value",
      "showValue": "show-value",
      "activeColor": "active-color",
      "backgroundColor": "background-color",
      "trackSize": "track-size",
      "handleSize": "handle-size",
      "handleColor": "handle-color",
      "onChange": "onChange",
      "onChanging": "onChanging"
    }
  },
  "swiper-item": {
    "alias": {
      "key": "key"
    }
  },
  "swiper": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "indicatorDots": "indicator-dots",
      "indicatorColor": "indicator-color",
      "indicatorActiveColor": "indicator-active-color",
      "activeClass": "active-class",
      "activeClassName": "active-class",
      "changingClass": "changing-class",
      "changingClassName": "changing-class",
      "autoplay": "autoplay",
      "current": "current",
      "duration": "duration",
      "interval": "interval",
      "circular": "circular",
      "vertical": "vertical",
      "previousMargin": "previous-margin",
      "nextMargin": "next-margin",
      "acceleration": "acceleration",
      "disableProgrammaticAnimation": "disable-programmatic-animation",
      "onChange": "onChange",
      "onTransition": "onTransition",
      "onAnimationEnd": "onAnimationEnd",
      "disableTouch": "disable-touch"
    }
  },
  "switch": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "name": "name",
      "checked": "checked",
      "disabled": "disabled",
      "color": "color",
      "onChange": "onChange",
      "controlled": "controlled"
    }
  },
  "text": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "selectable": "selectable",
      "space": "space",
      "decode": "decode",
      "numberOfLines": "number-of-lines",
      "onClick": "onTap",
      "onTap": "onTap"
    }
  },
  "textarea": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "name": "name",
      "value": "value",
      "placeholder": "placeholder",
      "placeholderStyle": "placeholder-style",
      "placeholderClass": "placeholder-class",
      "placeholderClassName": "placeholder-class",
      "disabled": "disabled",
      "maxlength": "maxlength",
      "focus": "focus",
      "autoHeight": "auto-height",
      "showCount": "show-count",
      "controlled": "controlled",
      "onInput": "onInput",
      "onFocus": "onFocus",
      "onBlur": "onBlur",
      "onConfirm": "onConfirm"
    }
  },
  "view": {
    "alias": {
      "id": "id",
      "disableScroll": "disable-scroll",
      "hoverClass": "hover-class",
      "hoverClassName": "hover-class",
      "hoverStartTime": "hover-start-time",
      "hoverStayTime": "hover-stay-time",
      "hidden": "hidden",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "hoverStopPropagation": "hover-stop-propagation",
      "onClick": "onTap",
      "onTap": "onTap",
      "onTouchStart": "onTouchStart",
      "onTouchMove": "onTouchMove",
      "onTouchEnd": "onTouchEnd",
      "onTouchCancel": "onTouchCancel",
      "onLongTap": "onLongTap",
      "onLongClick": "onLongTap",
      "onTransitionEnd": "onTransitionEnd",
      "onAnimationIteration": "onAnimationIteration",
      "onAnimationStart": "onAnimationStart",
      "onAnimationEnd": "onAnimationEnd",
      "onAppear": "onAppear",
      "onDisappear": "onDisappear",
      "onFirstAppear": "onFirstAppear"
    }
  },
  "web-view": {
    "alias": {
      "id": "id",
      "src": "src",
      "onMessage": "onMessage"
    }
  },
  "video": {
    "alias": {
      "className": "class",
      "src": "src",
      "id": "id",
      "poster": "poster",
      "objectFit": "objectFit",
      "initialTime": "initial-time",
      "duration": "duration",
      "controls": "controls",
      "autoplay": "autoplay",
      "direction": "direction",
      "loop": "loop",
      "muted": "muted",
      "showFullscreenBtn": "show-fullscreen-btn",
      "showPlayBtn": "show-play-btn",
      "showCenterPlayBtn": "show-center-play-btn",
      "showMuteBtn": "show-mute-btn",
      "enableProgressGesture": "enableProgressGesture",
      "mobilenetHintType": "mobilenetHintType",
      "onPlay": "onPlay",
      "onPause": "onPause",
      "onEnded": "onEnded",
      "onTimeUpdate": "onTimeUpdate",
      "onLoading": "onLoading",
      "onError": "onError",
      "onFullScreenChange": "onFullScreenChange",
      "onTap": "onTap",
      "onClick": "onTap",
      "onUserAction": "onUserAction"
    }
  }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v3", function() { return v3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v5", function() { return v5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v6", function() { return v6; });
var v3 = __REMAX_ENTRY_INFO__;
var v5 = [];
var v6 = {
  "pages/index": []
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
],[[4,0]]]);