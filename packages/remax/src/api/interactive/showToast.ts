interface Params {
  // 文字内容
  content?: string;
  // toast 类型，展示相应图标，默认 none，支持 success / fail / exception / none。其中 exception 类型必须传文字信息。
  type?: 'success' | 'fail' | 'exception' | 'none';
  image?: string;
  // 显示时长，单位为 ms，默认 2000。
  duration?: number;
  // 调用成功的回调函数。
  success?: () => {};
  // 调用失败的回调函数。
  fail?: () => {};
  // 调用结束的回调函数（调用成功、失败都会执行）。
  complete?: () => {};
}

/**
 * 显示一个弱提示，在到达设定的显示时间后，自动消失。
 *
 * @example
 * showToast({ content: '操作成功', type: 'success' });
 *
 * @see [支付宝小程序]{@link https://docs.alipay.com/mini/api/fhur8f}
 */
// eslint-disable-next-line
export function showToast(params: Params) {
  return Promise.resolve();
}
