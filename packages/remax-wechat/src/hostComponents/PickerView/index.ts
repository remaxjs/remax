import * as React from 'react';
import createHostComponent from '../../createHostComponent';
import { BaseProps } from '../../types/component';

const PickerView = createHostComponent<PickerViewProps>('picker-view');

export interface PickerViewProps extends BaseProps {
  /** 数组中的数字依次表示 picker-view 内的 picker-view-column 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。 1.0.0 */
  value?: number[];
  /** 设置选择器中间选中框的样式 1.0.0 */
  indicatorStyle?: React.CSSProperties;
  /** 设置选择器中间选中框的类名 1.1.0 */
  indicatorClassName?: string;
  /** 设置蒙层的样式 1.5.0 */
  maskStyle?: React.CSSProperties;
  /** 设置蒙层的类名 1.5.0 */
  maskClassName?: string;
  /** 滚动选择时触发change事件，event.detail = {value}；value为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始） 1.0.0 */
  onChange?: (event: any) => any;
  /** 当滚动选择开始时候触发事件 2.3.1 */
  onPickStart?: (event: any) => any;
  /** 当滚动选择结束时候触发事件 2.3.1 */
  onPickEnd?: (event: any) => any;
}

export default PickerView;
