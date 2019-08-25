interface Params {
  // prompt 框标题。
  title?: string;
  // prompt框文本，默认“请输入内容”。
  message: string;
  // 输入框内的提示文案。
  placeholder: string;
  // message 对齐方式，可用值为： left 、center 、right。
  align?: 'left' | 'center' | 'right';
  // 确认按钮文字，默认值为“确定”。
  okButtonText?: string;
  // 确认按钮文字，默认值为 “取消”。
  cancelButtonText?: string;
  // 调用成功的回调函数。
  success?: () => void;
  // 调用失败的回调函数。
  fail?: () => void;
  // 调用结束的回调函数（调用成功、失败都会执行）。
  complete?: () => void;
}

/**
 * 弹出一个对话框，让用户在对话框内输入文本。
 *
 * @example
 * const result = await prompt({
 *   title: '标题单行',
 *   message: '说明当前状态、提示用户解决方案，最好不要超过两行。',
 *   placeholder: '给朋友留言',
 *   okButtonText: '确定',
 *   cancelButtonText: '取消',
 * });
 * console.log(result);
 *
 * @see [支付宝小程序]{@link https://docs.alipay.com/mini/api/nzf540}
 */
// eslint-disable-next-line
export function prompt(params: Params) {
  return Promise.resolve();
}
