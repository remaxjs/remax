interface Params {
  url: string;
  success?: () => void;
  fail?: () => void;
  complete?: () => void;
}

/**
 * 关闭当前页面，跳转到应用内的某个指定页面。
 *
 * @example
 * redirectTo({
 *   url: 'new_page?count=100'
 * })
 *
 * @see [支付宝小程序]{@link https://docs.alipay.com/mini/api/fh18ky}
 */
// eslint-disable-next-line
export function redirectTo(params: Params) {
  return Promise.resolve();
}
