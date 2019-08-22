interface Params {
  // 页面路径。如果页面不为 tabbar 页面则路径后可以带参数。
  url: string;
  // 调用成功的回调函数。
  success?: () => void;
  // 调用失败的回调函数。
  fail?: () => void;
  // 调用结束的回调函数（调用成功、失败都会执行）。
  complete?: () => void;
}

/**
 * 关闭当前所有页面，跳转到应用内的某个指定页面。
 *
 * @example
 * reLaunch({
 *   url: '/page/index'
 * })
 *
 * @see [支付宝小程序]{@link https://docs.alipay.com/mini/api/hmn54z}
 */
// eslint-disable-next-line
export function reLaunch(params: Params) {
  return Promise.resolve();
}
