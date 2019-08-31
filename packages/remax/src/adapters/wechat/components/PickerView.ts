import factory from './factory';
import { CSSProperties } from 'react';

const PickerView = factory<PickerProps>('picker-view');

export interface PickerProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  value?: Array<number>; //  否 数组中的数字依次表示 picker-view 内的 picker-view-column 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。 1.0.0
  indicatorStyle?: CSSProperties; //  否 设置选择器中间选中框的样式 1.0.0
  indicatorClassName?: string; //  否 设置选择器中间选中框的类名 1.1.0
  maskStyle?: CSSProperties; //  否 设置蒙层的样式 1.5.0
  maskClassName?: string; //  否 设置蒙层的类名 1.5.0
  onClick?: (event: any) => void;
  onChange?: (event: any) => void; //  否 滚动选择时触发change事件，event.detail = {value}；value为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始） 1.0.0
  onPickStart?: (event: any) => void; //  否 当滚动选择开始时候触发事件 2.3.1
  onPickEnd?: (event: any) => void; //  否 当滚动选择结束时候触发事件 2.3.1
  animation?: Record<string, any>[];
}

export default PickerView;
