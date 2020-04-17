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
function promisify(api) {
  return function(arg) {
    if (arg === void 0) {
      arg = {};
    }
    return new Promise(function(resolve, reject) {
      var promisifyArg = arg;
      api(
        __assign(__assign({}, promisifyArg), {
          success: function(res) {
            if (promisifyArg && typeof promisifyArg.success === 'function') {
              promisifyArg.success(res);
            }
            resolve(res);
          },
          fail: function(res) {
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
export default promisify;
