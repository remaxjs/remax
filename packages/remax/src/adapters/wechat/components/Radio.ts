import factory from './factory';
import { CSSProperties } from 'react';

const Radio = factory<RadioProps>('radio');

export interface RadioProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  value?: string; //  否 radio 标识。当该radio 选中时，radio-group 的 change 事件会携带radio的value 1.0.0
  checked?: boolean; // false 否 当前是否选中 1.0.0
  disabled: boolean; // false 否 是否禁用 1.0.0
  color?: string; // #09BB07 否 radio的颜色，同css的color 1.0.0
  onClick?: (event: any) => void;
  animation?: Record<string, any>[];
}

export default Radio;
