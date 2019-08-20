interface Params {
  // 具体指当前 page 实例，某些场景下，需要指明在哪个 page 执行hideLoading。
  page?: any;
}

/**
 * 隐藏加载提示的过渡效果，可与 showLoading 配合使用。
 *
 * @example
 * hideLoading();
 *
 * @see [支付宝小程序]{@link https://docs.alipay.com/mini/api/nzf540}
 */
// eslint-disable-next-line
export function hideLoading(params: Params) {}
