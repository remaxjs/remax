import factory from './factory';
import { CSSProperties } from 'react';

const Picker = factory<PickerProps>('picker');

export interface PickerProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  mode?: string; // selector 否 选择器类型 1.0.0
  disabled?: boolean; // false 否 是否禁用 1.0.0
  onClick?: (event: any) => any;
  onCancel?: (event: any) => any; //  否 取消选择时触发 1.9.90
  animation?: Record<string, any>[];
}

export default Picker;
