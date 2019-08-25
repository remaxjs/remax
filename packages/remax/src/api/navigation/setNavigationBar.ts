interface Params {
  // 导航栏标题。
  title?: string;
  // 图片连接地址，必须是https，请使用 iOS @3x 分辨率标准的高清图片。若设置了 image 则 title 参数失效。
  image?: string;
  // 导航栏背景色，支持十六进制颜色值。
  backgroundColor?: string;
  // 导航栏底部边框颜色，支持十六进制颜色值。若设置了 backgroundColor，则 borderBottomColor  不会生效，默认会和 backgroundColor 颜色一样。
  borderBottomColor?: string;
  // 是否重置导航栏为支付宝默认配色，默认为 false。
  reset?: string;
  // 调用成功的回调函数。
  success?: () => void;
  // 调用失败的回调函数。
  fail?: () => void;
  // 调用结束的回调函数（调用成功、失败都会执行）。
  complete?: () => void;
}

/**
 * 设置导航栏文字及样式。
 *
 * @example
 * setNavigationBar({
 *   title: '你好',
 *   backgroundColor: '#108ee9',
 * });
 *
 * @see [支付宝小程序]{@link https://docs.alipay.com/mini/api/xwq8e6}
 */
// eslint-disable-next-line
export function setNavigationBar(params: Params) {
  return Promise.resolve();
}
