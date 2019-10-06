import factory from './factory';
import { CSSProperties } from 'react';

const CheckboxGroup = factory<CheckboxGroupProps>('checkbox-group');

export interface CheckboxGroupProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: CSSProperties;
  /** checkbox标识，选中时触发checkbox-group的 change 事件，并携带 checkbox 的 value 1.0.0  */
  value?: string;
  /** (default: false) 是否禁用 1.0.0  */
  disabled?: boolean;
  /** (default: false) 当前是否选中，可用来设置默认选中 1.0.0  */
  checked?: boolean;
  /** (default: #09BB07) checkbox的颜色，同css的color 1.0.0  */
  color?: string;
  animation?: Array<Record<string, any>>;
  onClick?: (event: any) => any;
}

export default CheckboxGroup;
