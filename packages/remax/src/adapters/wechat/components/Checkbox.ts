import factory from './factory';
import { CSSProperties } from 'react';

const Checkbox = factory<CheckboxProps>('checkbox');

export interface CheckboxProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: CSSProperties;
  value?: string; //  否 checkbox标识，选中时触发checkbox-group的 change 事件，并携带 checkbox 的 value 1.0.0
  disabled?: boolean; // false 否 是否禁用 1.0.0
  checked?: boolean; // false 否 当前是否选中，可用来设置默认选中 1.0.0
  color?: string; // #09BB07 否 checkbox的颜色，同css的color 1.0.0
  animation?: Array<Record<string, any>>;
  onClick?: (event: any) => any;
}

export default Checkbox;
