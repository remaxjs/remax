interface Parmas {
  // 提示中的文字内容。
  content?: string;
  // 延迟显示，单位 ms，默认 0。如果在此时间之前调用了 my.hideLoading 则不会显示。
  delay?: number;
  // 调用成功的回调函数。
  success?: () => {};
  // 调用失败的回调函数。
  fail?: () => {};
  // 调用结束的回调函数（调用成功、失败都会执行）。
  complete?: () => {};
}

/**
 * 显示加载提示的过渡效果，可与 hideLoading 配合使用。
 *
 * @example
 * showLoading();
 *
 * @see [支付宝小程序]{@link https://docs.alipay.com/mini/api/bm69kb}
 */
// eslint-disable-next-line
export function showLoading(params: Parmas) {
  return Promise.resolve();
}
