interface SuccessResult {
  confirm: boolean;
}

interface Params {
  // confirm 框的标题。
  title?: string;
  // confirm 框的内容。
  content?: string;
  // 确认按钮文字，默认为“确定”。
  confirmButtonText?: string;
  // 取消按钮文字，默认为“取消”。
  cancelButtonText?: string;
  // 调用成功的回调函数。
  success?: (res: SuccessResult) => void;
  // 调用失败的回调函数。
  fail?: () => void;
  // 调用结束的回调函数（调用成功、失败都会执行）。
  complete?: () => void;
}

/**
 * 用于提示的确认框，可以配置确认框标题、内容、确认或取消按钮的文字等。
 *
 * @example
 * const result = await confirm({
 *   title: '温馨提示',
 *   content: '您是否想查询快递单号：1234567890',
 *   confirmButtonText: '马上查询',
 *   cancelButtonText: '暂不需要',
 * });
 * console.log(result);
 *
 * @see [支付宝小程序]{@link https://docs.alipay.com/mini/api/lt3uqc}
 */
// eslint-disable-next-line
export function confirm(params: Params): Promise<SuccessResult> {
  return Promise.resolve({ confirm: true });
}
