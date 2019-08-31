interface Params {
  // 接口调用成功的回调函数。
  success?: () => void;
  // 接口调用失败的回调函数。
  fail?: () => void;
  // 接口调用结束的回调函数（调用成功、失败都会执行）。
  complete?: () => void;
}

/**
 * 隐藏弱提示。
 *
 * @example
 * hideToast();
 *
 * @see [支付宝小程序]{@link https://docs.alipay.com/mini/api/iygd4e}
 */
// eslint-disable-next-line
export function hideToast(params: Params) {
  return Promise.resolve();
}
