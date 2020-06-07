/* eslint-disable prefer-rest-params */
/* istanbul ignore next */
if (typeof Function.prototype.call === 'undefined') {
  Function.prototype.call = function (context: any) {
    context = context || window;
    context.fn = this;
    const args = [...arguments].slice(1);
    const result = context.fn(...args);
    delete context.fn;
    return result;
  };
}

/* istanbul ignore next */
if (typeof Function.prototype.apply === 'undefined') {
  Function.prototype.apply = function (context) {
    context = context || window;
    context.fn = this;
    let result;

    if (arguments[1]) {
      result = context.fn(...arguments[1]);
    } else {
      result = context.fn();
    }

    delete context.fn;
    return result;
  };
}
