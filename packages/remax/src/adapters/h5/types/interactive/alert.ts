interface Params {
  // 警告框的标题。
  title?: string;
  // 警告框的内容。
  content?: string;
  // 按钮文字，默认为 “确定”。
  buttonText?: string;
  // 调用成功的回调函数。
  success?: () => {};
  // 调用失败的回调函数。
  fail?: () => {};
  // 调用结束的回调函数（调用成功、失败都会执行）。
  complete?: () => {};
}

/**
 * 警告框，可以配置警告框的标题、内容、按钮文字等。
 *
 * @example
 * alert({
 *   title: '亲',
 *   content: '您本月的账单已出',
 *   buttonText: '我知道了',
 * });
 *
 * @see [支付宝小程序]{@link https://docs.alipay.com/mini/api/ui-feedback}
 */
// eslint-disable-next-line
export function alert(params: Params) {
  return Promise.resolve();
}
