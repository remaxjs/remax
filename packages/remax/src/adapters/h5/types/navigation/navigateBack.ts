interface Params {
  // 返回的页面数，如果 delta 大于现有打开的页面数，则返回到首页。
  delta: number;
}

/**
 * 关闭当前页面，返回上一级或多级页面。
 *
 * @example
 * navigateBack({
 *   delta: 2
 * })
 *
 * @see [支付宝小程序]{@link https://docs.alipay.com/mini/api/kc5zbx}
 */
// eslint-disable-next-line
export function navigateBack(params: Params) {}
