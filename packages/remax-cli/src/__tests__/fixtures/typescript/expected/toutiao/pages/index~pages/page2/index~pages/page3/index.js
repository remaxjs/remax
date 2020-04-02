(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([[7],Array(41).concat([
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var remax_alipay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82);
/* harmony import */ var remax_toutiao__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86);





function View() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  switch (remax__WEBPACK_IMPORTED_MODULE_1__["Platform"].current) {
    case 'alipay':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_alipay__WEBPACK_IMPORTED_MODULE_2__["View"], props);

    case 'toutiao':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_toutiao__WEBPACK_IMPORTED_MODULE_4__["View"], props);

    case 'wechat':
    default:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_3__["View"], props);
  }
}

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_alipay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var remax_alipay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(remax_alipay__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in remax_alipay__WEBPACK_IMPORTED_MODULE_0__) if(["render","createAppConfig","createPageConfig","createHostComponent","Platform","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

__export(__webpack_require__(44));

__export(__webpack_require__(80));

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

var View_1 = __webpack_require__(45);

exports.View = View_1["default"];

__export(__webpack_require__(45));

var ScrollView_1 = __webpack_require__(47);

exports.ScrollView = ScrollView_1["default"];

__export(__webpack_require__(47));

var Swiper_1 = __webpack_require__(48);

exports.Swiper = Swiper_1["default"];

__export(__webpack_require__(48));

var SwiperItem_1 = __webpack_require__(49);

exports.SwiperItem = SwiperItem_1["default"];

__export(__webpack_require__(49));

var MovableView_1 = __webpack_require__(50);

exports.MovableView = MovableView_1["default"];

__export(__webpack_require__(50));

var MovableArea_1 = __webpack_require__(51);

exports.MovableArea = MovableArea_1["default"];

__export(__webpack_require__(51));

var CoverView_1 = __webpack_require__(52);

exports.CoverView = CoverView_1["default"];

__export(__webpack_require__(52));

var CoverImage_1 = __webpack_require__(53);

exports.CoverImage = CoverImage_1["default"];

__export(__webpack_require__(53));

var Icon_1 = __webpack_require__(54);

exports.Icon = Icon_1["default"];

__export(__webpack_require__(54));

var Text_1 = __webpack_require__(55);

exports.Text = Text_1["default"];

__export(__webpack_require__(55));

var RichText_1 = __webpack_require__(56);

exports.RichText = RichText_1["default"];

__export(__webpack_require__(56));

var Progress_1 = __webpack_require__(57);

exports.Progress = Progress_1["default"];

__export(__webpack_require__(57));

var Button_1 = __webpack_require__(58);

exports.Button = Button_1["default"];

__export(__webpack_require__(58));

var CheckboxGroup_1 = __webpack_require__(59);

exports.CheckboxGroup = CheckboxGroup_1["default"];

__export(__webpack_require__(59));

var Checkbox_1 = __webpack_require__(60);

exports.Checkbox = Checkbox_1["default"];

__export(__webpack_require__(60));

var Form_1 = __webpack_require__(61);

exports.Form = Form_1["default"];

__export(__webpack_require__(61));

var Input_1 = __webpack_require__(62);

exports.Input = Input_1["default"];

__export(__webpack_require__(62));

var Label_1 = __webpack_require__(63);

exports.Label = Label_1["default"];

__export(__webpack_require__(63));

var Picker_1 = __webpack_require__(64);

exports.Picker = Picker_1["default"];

__export(__webpack_require__(64));

var PickerView_1 = __webpack_require__(65);

exports.PickerView = PickerView_1["default"];

__export(__webpack_require__(65));

var PickerViewColumn_1 = __webpack_require__(66);

exports.PickerViewColumn = PickerViewColumn_1["default"];

__export(__webpack_require__(66));

var RadioGroup_1 = __webpack_require__(67);

exports.RadioGroup = RadioGroup_1["default"];

__export(__webpack_require__(67));

var Radio_1 = __webpack_require__(68);

exports.Radio = Radio_1["default"];

__export(__webpack_require__(68));

var Slider_1 = __webpack_require__(69);

exports.Slider = Slider_1["default"];

__export(__webpack_require__(69));

var Switch_1 = __webpack_require__(70);

exports.Switch = Switch_1["default"];

__export(__webpack_require__(70));

var Textarea_1 = __webpack_require__(71);

exports.Textarea = Textarea_1["default"];

__export(__webpack_require__(71));

var Navigator_1 = __webpack_require__(72);

exports.Navigator = Navigator_1["default"];

__export(__webpack_require__(72));

var Image_1 = __webpack_require__(73);

exports.Image = Image_1["default"];

__export(__webpack_require__(73));

var Map_1 = __webpack_require__(74);

exports.Map = Map_1["default"];

__export(__webpack_require__(74));

var Canvas_1 = __webpack_require__(75);

exports.Canvas = Canvas_1["default"];

__export(__webpack_require__(75));

var WebView_1 = __webpack_require__(76);

exports.WebView = WebView_1["default"];

__export(__webpack_require__(76));

var Lifestyle_1 = __webpack_require__(77);

exports.Lifestyle = Lifestyle_1["default"];

__export(__webpack_require__(77));

var ContactButton_1 = __webpack_require__(78);

exports.ContactButton = ContactButton_1["default"];

__export(__webpack_require__(78));

var Video_1 = __webpack_require__(79);

exports.Video = Video_1["default"];

__export(__webpack_require__(79));

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

var View = createHostComponent_1["default"]('view');
exports["default"] = View;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
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

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(14));

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

exports["default"] = createHostComponent;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

var ScrollView = createHostComponent_1["default"]('scroll-view');
exports["default"] = ScrollView;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

exports["default"] = createHostComponent_1["default"]('swiper');

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

exports["default"] = createHostComponent_1["default"]('swiper-item');

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

var MovableView = createHostComponent_1["default"]('movable-view');
exports["default"] = MovableView;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

var MovableArea = createHostComponent_1["default"]('movable-area');
exports["default"] = MovableArea;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

var CoverView = createHostComponent_1["default"]('cover-view');
exports["default"] = CoverView;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

var CoverImage = createHostComponent_1["default"]('cover-image');
exports["default"] = CoverImage;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

exports["default"] = createHostComponent_1["default"]('icon');

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

var Text = createHostComponent_1["default"]('text');
exports["default"] = Text;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

exports["default"] = createHostComponent_1["default"]('rich-text');

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

exports["default"] = createHostComponent_1["default"]('progress');

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

var Button = createHostComponent_1["default"]('button');
exports["default"] = Button;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

exports["default"] = createHostComponent_1["default"]('checkbox-group');

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

exports["default"] = createHostComponent_1["default"]('checkbox');

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

var Form = createHostComponent_1["default"]('form');
exports["default"] = Form;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

var Input = createHostComponent_1["default"]('input');
exports["default"] = Input;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

exports["default"] = createHostComponent_1["default"]('label');

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

exports["default"] = createHostComponent_1["default"]('picker');

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

var PickerView = createHostComponent_1["default"]('picker-view');
exports["default"] = PickerView;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

exports["default"] = createHostComponent_1["default"]('picker-view-column');

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

exports["default"] = createHostComponent_1["default"]('radio-group');

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

exports["default"] = createHostComponent_1["default"]('radio');

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

exports["default"] = createHostComponent_1["default"]('slider');

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

exports["default"] = createHostComponent_1["default"]('switch');

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

var Textarea = createHostComponent_1["default"]('textarea');
exports["default"] = Textarea;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

exports["default"] = createHostComponent_1["default"]('navigator');

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

var Image = createHostComponent_1["default"]('image');
exports["default"] = Image;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

var Map = createHostComponent_1["default"]('map');
exports["default"] = Map;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

var Canvas = createHostComponent_1["default"]('canvas');
exports["default"] = Canvas;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

exports["default"] = createHostComponent_1["default"]('web-view');

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

exports["default"] = createHostComponent_1["default"]('lifestyle');

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

exports["default"] = createHostComponent_1["default"]('contact-button');

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(46));

exports["default"] = createHostComponent_1["default"]('video');

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var promisify_1 = __importDefault(__webpack_require__(81));

exports.getAppStub = getApp;
exports.addCardAuth = promisify_1["default"](my.addCardAuth);
exports.addPhoneContact = promisify_1["default"](my.addPhoneContact);
exports.alert = promisify_1["default"](my.alert);
exports.canIUse = my.canIUse;
exports.chooseAlipayContact = promisify_1["default"](my.chooseAlipayContact);
exports.chooseCity = promisify_1["default"](my.chooseCity);
exports.chooseContact = promisify_1["default"](my.chooseContact);
exports.chooseImage = promisify_1["default"](my.chooseImage);
exports.chooseLocation = promisify_1["default"](my.chooseLocation);
exports.choosePhoneContact = promisify_1["default"](my.choosePhoneContact);
exports.clearStorage = my.clearStorage;
exports.clearStorageSync = my.clearStorageSync;
exports.closeBluetoothAdapter = promisify_1["default"](my.closeBluetoothAdapter);
exports.closeSocket = promisify_1["default"](my.closeSocket);
exports.compressImage = promisify_1["default"](my.compressImage);
exports.confirm = promisify_1["default"](my.confirm);
exports.connectBLEDevice = promisify_1["default"](my.connectBLEDevice);
exports.connectSocket = promisify_1["default"](my.connectSocket);
exports.createAnimation = my.createAnimation;
exports.createCanvasContext = my.createCanvasContext;
exports.createIntersectionObserver = my.createIntersectionObserver;
exports.createMapContext = my.createMapContext;
exports.createSelectorQuery = my.createSelectorQuery;
exports.createWebViewContext = my.createWebViewContext;
exports.datePicker = promisify_1["default"](my.datePicker);
exports.disconnectBLEDevice = promisify_1["default"](my.disconnectBLEDevice);
exports.downloadFile = promisify_1["default"](my.downloadFile);
exports.getAuthCode = promisify_1["default"](my.getAuthCode);
exports.getAuthUserInfo = promisify_1["default"](my.getAuthUserInfo);
exports.getBatteryInfo = promisify_1["default"](my.getBatteryInfo);
exports.getBatteryInfoSync = my.getBatteryInfoSync;
exports.getBeacons = promisify_1["default"](my.getBeacons);
exports.getBLEDeviceCharacteristics = promisify_1["default"](my.getBLEDeviceCharacteristics);
exports.getBLEDeviceServices = promisify_1["default"](my.getBLEDeviceServices);
exports.getBluetoothAdapterState = promisify_1["default"](my.getBluetoothAdapterState);
exports.getBluetoothDevices = promisify_1["default"](my.getBluetoothDevices);
exports.getClipboard = promisify_1["default"](my.getClipboard);
exports.getConnectedBluetoothDevices = promisify_1["default"](my.getConnectedBluetoothDevices);
exports.getFileInfo = promisify_1["default"](my.getFileInfo);
exports.getImageInfo = promisify_1["default"](my.getImageInfo);
exports.getLocation = promisify_1["default"](my.getLocation);
exports.getNetworkType = promisify_1["default"](my.getNetworkType);
exports.getPhoneNumber = promisify_1["default"](my.getPhoneNumber);
exports.getRunData = promisify_1["default"](my.getRunData);
exports.getRunScene = promisify_1["default"](my.getRunScene);
exports.getSavedFileInfo = promisify_1["default"](my.getSavedFileInfo);
exports.getSavedFileList = promisify_1["default"](my.getSavedFileList);
exports.getScreenBrightness = promisify_1["default"](my.getScreenBrightness);
exports.getServerTime = promisify_1["default"](my.getServerTime);
exports.getSetting = promisify_1["default"](my.getSetting);
exports.getStorage = promisify_1["default"](my.getStorage);
exports.getStorageInfo = promisify_1["default"](my.getStorageInfo);
exports.getStorageInfoSync = my.getStorageInfoSync;
exports.getStorageSync = my.getStorageSync;
exports.getSystemInfo = promisify_1["default"](my.getSystemInfo);
exports.getSystemInfoSync = my.getSystemInfoSync;
exports.getTitleColor = promisify_1["default"](my.getTitleColor);
exports.getUpdateManager = my.getUpdateManager;
exports.hideAddToDesktopMenu = my.hideAddToDesktopMenu;
exports.hideAllAddToDesktopMenu = my.hideAllAddToDesktopMenu;
exports.hideAllFavoriteMenu = my.hideAllFavoriteMenu;
exports.hideBackHome = my.hideBackHome;
exports.hideFavoriteMenu = my.hideFavoriteMenu;
exports.hideKeyboard = my.hideKeyboard;
exports.hideLoading = my.hideLoading;
exports.hideNavigationBarLoading = my.hideNavigationBarLoading;
exports.hideShareMenu = my.hideShareMenu;
exports.hideTabBar = my.hideTabBar;
exports.hideTabBarRedDot = my.hideTabBarRedDot;
exports.hideToast = my.hideToast;
exports.loadFontFace = promisify_1["default"](my.loadFontFace);
exports.makePhoneCall = my.makePhoneCall;
exports.multiLevelSelect = promisify_1["default"](my.multiLevelSelect);
exports.navigateBack = promisify_1["default"](my.navigateBack);
exports.navigateBackMiniProgram = promisify_1["default"](my.navigateBackMiniProgram);
exports.navigateTo = promisify_1["default"](my.navigateTo);
exports.navigateToMiniProgram = promisify_1["default"](my.navigateToMiniProgram);
exports.notifyBLECharacteristicValueChange = promisify_1["default"](my.notifyBLECharacteristicValueChange);
exports.offAccelerometerChange = my.offAccelerometerChange;
exports.offBLECharacteristicValueChange = my.offBLECharacteristicValueChange;
exports.offBLEConnectionStateChanged = my.offBLEConnectionStateChanged;
exports.offBluetoothAdapterStateChange = my.offBluetoothAdapterStateChange;
exports.offBluetoothDeviceFound = my.offBluetoothDeviceFound;
exports.offCompassChange = my.offCompassChange;
exports.offGyroscopeChange = my.offGyroscopeChange;
exports.offMemoryWarning = my.offMemoryWarning;
exports.offNetworkStatusChange = my.offNetworkStatusChange;
exports.offSocketClose = my.offSocketClose;
exports.offSocketError = my.offSocketError;
exports.offSocketMessage = my.offSocketMessage;
exports.offSocketOpen = my.offSocketOpen;
exports.offUserCaptureScreen = my.offUserCaptureScreen;
exports.onAccelerometerChange = my.onAccelerometerChange;
exports.onBeaconServiceChange = my.onBeaconServiceChange;
exports.onBeaconUpdate = my.onBeaconUpdate;
exports.onBLECharacteristicValueChange = my.onBLECharacteristicValueChange;
exports.onBLEConnectionStateChanged = my.onBLEConnectionStateChanged;
exports.onBluetoothAdapterStateChange = my.onBluetoothAdapterStateChange;
exports.onBluetoothDeviceFound = my.onBluetoothDeviceFound;
exports.onCompassChange = my.onCompassChange;
exports.onGyroscopeChange = my.onGyroscopeChange;
exports.onMemoryWarning = my.onMemoryWarning;
exports.onNetworkStatusChange = my.onNetworkStatusChange;
exports.onSocketClose = my.onSocketClose;
exports.onSocketError = my.onSocketError;
exports.onSocketMessage = my.onSocketMessage;
exports.onSocketOpen = my.onSocketOpen;
exports.onUserCaptureScreen = my.onUserCaptureScreen;
exports.openBluetoothAdapter = my.openBluetoothAdapter;
exports.openCardDetail = my.openCardDetail;
exports.openCardList = my.openCardList;
exports.openKBVoucherDetail = my.openKBVoucherDetail;
exports.openLocation = promisify_1["default"](my.openLocation);
exports.openMerchantCardList = my.openMerchantCardList;
exports.openMerchantTicketList = my.openMerchantTicketList;
exports.openMerchantVoucherList = my.openMerchantVoucherList;
exports.openSetting = promisify_1["default"](my.openSetting);
exports.openTicketDetail = my.openTicketDetail;
exports.openTicketList = my.openTicketList;
exports.openVoucherDetail = my.openVoucherDetail;
exports.openVoucherList = my.openVoucherList;
exports.optionsSelect = my.optionsSelect;
exports.pageScrollTo = promisify_1["default"](my.pageScrollTo);
exports.previewImage = promisify_1["default"](my.previewImage);
exports.prompt = promisify_1["default"](my.prompt);
exports.readBLECharacteristicValue = promisify_1["default"](my.readBLECharacteristicValue);
exports.redirectTo = promisify_1["default"](my.redirectTo);
exports.reLaunch = promisify_1["default"](my.reLaunch);
exports.removeSavedFile = promisify_1["default"](my.removeSavedFile);
exports.removeStorage = promisify_1["default"](my.removeStorage);
exports.removeStorageSync = my.removeStorageSync;
exports.removeTabBarBadge = promisify_1["default"](my.removeTabBarBadge);
exports.reportAnalytics = my.reportAnalytics;
exports.request = promisify_1["default"](my.request);
exports.rsa = promisify_1["default"](my.rsa);
exports.saveFile = promisify_1["default"](my.saveFile);
exports.saveImage = promisify_1["default"](my.saveImage);
exports.scan = promisify_1["default"](my.scan);
exports.SDKVersion = my.SDKVersion;
exports.sendSocketMessage = promisify_1["default"](my.sendSocketMessage);
exports.setBackgroundColor = promisify_1["default"](my.setBackgroundColor);
exports.setBackgroundTextStyle = promisify_1["default"](my.setBackgroundTextStyle);
exports.setCanPullDown = my.setCanPullDown;
exports.setClipboard = promisify_1["default"](my.setClipboard);
exports.setKeepScreenOn = promisify_1["default"](my.setKeepScreenOn);
exports.setNavigationBar = promisify_1["default"](my.setNavigationBar);
exports.setOptionMenu = my.setOptionMenu;
exports.setScreenBrightness = promisify_1["default"](my.setScreenBrightness);
exports.setStorage = promisify_1["default"](my.setStorage);
exports.setStorageSync = my.setStorageSync;
exports.setTabBarBadge = promisify_1["default"](my.setTabBarBadge);
exports.setTabBarItem = promisify_1["default"](my.setTabBarItem);
exports.setTabBarStyle = promisify_1["default"](my.setTabBarStyle);
exports.showActionSheet = promisify_1["default"](my.showActionSheet);
exports.showAuthGuide = my.showAuthGuide;
exports.showLoading = promisify_1["default"](my.showLoading);
exports.showNavigationBarLoading = promisify_1["default"](my.showNavigationBarLoading);
exports.showSharePanel = my.showSharePanel;
exports.showTabBar = promisify_1["default"](my.showTabBar);
exports.showTabBarRedDot = promisify_1["default"](my.showTabBarRedDot);
exports.showToast = promisify_1["default"](my.showToast);
exports.startBeaconDiscovery = promisify_1["default"](my.startBeaconDiscovery);
exports.startBluetoothDevicesDiscovery = promisify_1["default"](my.startBluetoothDevicesDiscovery);
exports.startPullDownRefresh = promisify_1["default"](my.startPullDownRefresh);
exports.startZMVerify = my.startZMVerify;
exports.stopBeaconDiscovery = promisify_1["default"](my.stopBeaconDiscovery);
exports.stopBluetoothDevicesDiscovery = promisify_1["default"](my.stopBluetoothDevicesDiscovery);
exports.stopPullDownRefresh = promisify_1["default"](my.stopPullDownRefresh);
exports.switchTab = promisify_1["default"](my.switchTab);
exports.textRiskIdentification = promisify_1["default"](my.textRiskIdentification);
exports.tradePay = promisify_1["default"](my.tradePay);
exports.uploadFile = promisify_1["default"](my.uploadFile);
exports.vibrate = promisify_1["default"](my.vibrate);
exports.vibrateLong = promisify_1["default"](my.vibrateLong);
exports.vibrateShort = promisify_1["default"](my.vibrateShort);
exports.watchShake = my.watchShake;
exports.writeBLECharacteristicValue = promisify_1["default"](my.writeBLECharacteristicValue);
exports.createVideoContext = my.createVideoContext;
exports.getOpenUserInfo = promisify_1["default"](my.getOpenUserInfo);

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
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

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

exports["default"] = promisify;

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
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
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hostComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var _hostComponents__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hostComponents__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hostComponents__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _api__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _api__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_toutiao__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
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
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
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
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Text; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var remax_alipay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82);
/* harmony import */ var remax_toutiao__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86);





function Text() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  switch (remax__WEBPACK_IMPORTED_MODULE_1__["Platform"].current) {
    case 'alipay':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_alipay__WEBPACK_IMPORTED_MODULE_2__["Text"], props);

    case 'toutiao':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_toutiao__WEBPACK_IMPORTED_MODULE_4__["Text"], props);

    case 'wechat':
    default:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_3__["Text"], props);
  }
}

/***/ })
])]);