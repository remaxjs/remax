var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
import * as React from 'react';
export default function createHostComponent(name) {
  var Component = function(props, ref) {
    var _a = props.children,
      children = _a === void 0 ? [] : _a;
    return React.createElement(name, __assign(__assign({}, props), { ref: ref }), children);
  };
  return React.forwardRef(Component);
}
