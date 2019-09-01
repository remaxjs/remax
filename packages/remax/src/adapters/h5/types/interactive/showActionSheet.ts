type BadgeType = 'none' | 'num' | 'point' | 'text' | 'more';

interface SuccessResult {
  index: number;
}

interface Badge {
  // 需要飘红的选项的索引，从 0 开始。
  index: number;
  // 飘红类型，支持 none（无红点）/ point（纯红点） / num（数字红点）/ text（文案红点）/ more（...）。
  type: BadgeType;
  // 自定义飘红文案：
  text: string;
}

interface Params {
  // 菜单标题。
  title?: string;
  // 菜单按钮文字数组。
  items: string[];
  // 取消按钮文案。默认为‘取消’。注：Android平台此字段无效，不会显示取消按钮。
  cancelButtonText?: string;
  // （iOS特殊处理）指定按钮的索引号，从0开始，使用场景：需要删除或清除数据等类似场景，默认红色。
  destructiveBtnIndex: number;
  // 需飘红选项的数组，数组内部对象字段见下表。
  badges: Badge[];
  // 调用成功的回调函数。
  success?: (res: SuccessResult) => void;
  // 调用失败的回调函数。
  fail?: () => void;
  // 调用结束的回调函数（调用成功、失败都会执行）。
  complete?: () => void;
}

/**
 * 显示操作菜单。
 *
 * @example
 * const result = await showActionSheet({
 *   title: '支付宝-ActionSheet',
 *   items: ['菜单一', '菜单二', '菜单三', '菜单四', '菜单五'],
 *   badges: [
 *     { index: 0, type: 'none' },
 *     { index: 1, type: 'point' },
 *     { index: 2, type: 'num', text: '99' },
 *     { index: 3, type: 'text', text: '推荐' },
 *     { index: 4, type: 'more' },],
 *   cancelButtonText: '取消好了',
 * });
 * const btn = result.index === -1 ? '取消' : '第' + result.index + '个';
 * alert({
 *   title: `你点了${btn}按钮`
 * });
 *
 * @see [支付宝小程序]{@link https://docs.alipay.com/mini/api/hr092g}
 */
// eslint-disable-next-line
export function showActionSheet(params: Params): Promise<SuccessResult> {
  return Promise.resolve({ index: 0 });
}
