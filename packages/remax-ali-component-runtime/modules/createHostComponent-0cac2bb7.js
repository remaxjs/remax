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
function promisify(api) {
  return function (arg) {
    if (arg === void 0) {
      arg = {};
    }
    return new Promise(function (resolve, reject) {
      var promisifyArg = arg;
      api(
        __assign(__assign({}, promisifyArg), {
          success: function (res) {
            if (promisifyArg && typeof promisifyArg.success === 'function') {
              promisifyArg.success(res);
            }
            resolve(res);
          },
          fail: function (res) {
            if (promisifyArg && typeof promisifyArg.fail === 'function') {
              promisifyArg.fail(res);
            }
            reject(res);
          },
        })
      );
    });
  };
}

function formatDisplayName(name) {
  return name
    .replace(/-(.)/g, function ($1) {
      return $1.toUpperCase();
    })
    .replace(/-/g, '')
    .replace(/^(.)/, function ($1) {
      return $1.toUpperCase();
    });
}

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
function createHostComponent(name, component) {
  if (component) {
    return component;
  }
  var Component = function (props, ref) {
    var _a = props.children,
      children = _a === void 0 ? [] : _a;
    return react.createElement(name, __assign$1(__assign$1({}, props), { ref: ref }), children);
  };
  {
    Component.displayName = formatDisplayName(name);
  }
  return react.forwardRef(Component);
}

export { createHostComponent as c, formatDisplayName as f, promisify as p };
