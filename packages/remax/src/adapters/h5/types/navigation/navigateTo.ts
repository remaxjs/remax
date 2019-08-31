interface Params {
  url: string;
  success?: () => void;
  fail?: () => void;
  complete?: () => void;
}

/**
 * 从当前页面，跳转到应用内的某个指定页面。
 *
 * @example
 * navigateTo({
 *   url: 'new_page?count=100'
 * })
 *
 * @see [支付宝小程序]{@link https://docs.alipay.com/mini/api/zwi8gx}
 */
// eslint-disable-next-line
export function navigateTo(params: Params) {
  return Promise.resolve();
}
